import { motion } from 'framer-motion'

/**
 * Fixed, full-viewport ambient background:
 * - deep gradient base
 * - faint grid with radial fade
 * - floating blurred gradient orbs (AI-inspired)
 * - drifting particle dots
 */
export default function Background() {
  const particles = Array.from({ length: 22 })

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* Radial spotlight top */}
      <div
        className="absolute -top-1/3 left-1/2 h-[900px] w-[900px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(140,82,255,0.30), rgba(255,87,87,0.10) 42%, transparent 70%)',
        }}
      />

      {/* Faint grid */}
      <div
        className="absolute inset-0 bg-grid-faint [background-size:56px_56px]"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, #000 40%, transparent 100%)',
        }}
      />

      {/* Floating orbs */}
      <motion.div
        className="absolute -left-32 top-24 h-[420px] w-[420px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(140,82,255,0.5), transparent 70%)' }}
        animate={{ y: [0, -40, 0], x: [0, 20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-10%] top-[38%] h-[500px] w-[500px] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(255,87,87,0.34), transparent 70%)' }}
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-[20%] top-[70%] h-[360px] w-[360px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(140,82,255,0.32), transparent 70%)' }}
        animate={{ y: [0, -30, 0], x: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Drifting particles */}
      {particles.map((_, i) => {
        const left = (i * 47) % 100
        const top = (i * 71) % 100
        const size = 1.5 + (i % 4)
        const dur = 8 + (i % 7)
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white/40"
            style={{ left: `${left}%`, top: `${top}%`, width: size, height: size }}
            animate={{ y: [0, -26, 0], opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
          />
        )
      })}

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-950 to-transparent" />
    </div>
  )
}
