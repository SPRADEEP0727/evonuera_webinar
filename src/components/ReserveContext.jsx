import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ReserveFlow from './ReserveFlow.jsx'

const ReserveContext = createContext({ open: () => {}, close: () => {}, isOpen: false })

export const useReserve = () => useContext(ReserveContext)

export function ReserveProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [startStep, setStartStep] = useState(0) // 0 details · 2 community (after payment)
  const open = useCallback(() => {
    setStartStep(0)
    setIsOpen(true)
  }, [])
  const close = useCallback(() => setIsOpen(false), [])

  // On return from a SUCCESSFUL Razorpay payment, open the modal straight to
  // the WhatsApp community step. Razorpay is configured to redirect back to
  // `<site>/?paid=1`; we also accept Razorpay's own success params. The
  // WhatsApp link is never shown unless one of these is present.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const paid =
      params.get('paid') === '1' ||
      params.get('razorpay_payment_link_status') === 'paid' ||
      !!params.get('razorpay_payment_id')
    if (!paid) return

    setStartStep(2)
    setIsOpen(true)

    // Clean the payment params out of the URL so a refresh doesn't re-trigger.
    const url = new URL(window.location.href)
    ;['paid', 'razorpay_payment_id', 'razorpay_payment_link_id', 'razorpay_payment_link_reference_id', 'razorpay_payment_link_status', 'razorpay_signature'].forEach(
      (k) => url.searchParams.delete(k)
    )
    window.history.replaceState({}, '', url.pathname + url.search + url.hash)
  }, [])

  // Esc to close + lock body scroll while open
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && close()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [isOpen, close])

  return (
    <ReserveContext.Provider value={{ open, close, isOpen }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
              onClick={close}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Reserve your seat"
              initial={{ opacity: 0, scale: 0.95, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
            >
              <button
                onClick={close}
                aria-label="Close"
                className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-slate-100 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-800"
              >
                <X className="h-4.5 w-4.5" />
              </button>

              <div className="max-h-[88vh] overflow-y-auto p-6 sm:p-8">
                {/* Brand header */}
                <div className="mb-6 flex items-center gap-2.5">
                  <picture>
                    <source srcSet="/images/logo.webp" type="image/webp" />
                    <img
                      src="/images/logo_icon.png"
                      alt="Evonuera logo"
                      width={36}
                      height={36}
                      className="h-9 w-9 rounded-xl shadow-glow"
                    />
                  </picture>
                  <span className="font-display text-lg font-bold text-slate-900">Evonuera</span>
                </div>

                <ReserveFlow key={startStep} initialStep={startStep} />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ReserveContext.Provider>
  )
}
