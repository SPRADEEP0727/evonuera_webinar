const items = [
  'AI Product Development',
  'Claude Code',
  'AI Agents',
  'Automation',
  'Deployment',
  'AI Systems',
  'Agentic AI',
  'Ship Real Products',
]

export default function Marquee() {
  const loop = [...items, ...items]
  return (
    <section className="relative mt-16 border-y border-white/5 bg-white/[0.015] py-6 sm:mt-24">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
          {loop.map((it, i) => (
            <span key={i} className="flex items-center gap-3 text-sm font-medium text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-grad-brand" />
              {it}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
