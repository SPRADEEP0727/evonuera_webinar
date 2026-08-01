/**
 * Opaque light "band" that covers the fixed dark background, with subtle
 * brand-tinted decor so light sections still feel part of the same system.
 */
export default function LightSection({ id, className = '', children }) {
  return (
    <section id={id} className={`section-light relative z-10 overflow-hidden ${className}`}>
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-24 -top-10 h-80 w-80 rounded-full bg-brand-coral/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-purple/10 blur-3xl" />
      </div>
      <div className="relative">{children}</div>
    </section>
  )
}
