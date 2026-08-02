import { motion } from 'framer-motion'
import { Cpu, Workflow, Bot, Boxes, Users, Star, ShieldCheck } from 'lucide-react'
import Reveal from './Reveal.jsx'

const expertise = [
  { icon: Cpu, label: 'AI Systems' },
  { icon: Workflow, label: 'AI Automation' },
  { icon: Bot, label: 'Agentic AI' },
  { icon: Boxes, label: 'Product Development' },
]

const trust = [
  { icon: Users, value: '150+', label: 'Learners guided' },
  { icon: Star, value: '4.9/5', label: 'Average rating' },
  { icon: ShieldCheck, value: '10+ yrs', label: 'Engineering experience' },
]

export default function Trainer() {
  return (
    <section id="trainer" className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Photo */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 -z-10 scale-105 rounded-[2rem] bg-grad-brand opacity-30 blur-3xl" />
            <div className="glass-strong overflow-hidden rounded-3xl p-2 shadow-glow-lg">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-ink-800 to-ink-850">
                {/* Instructor photo */}
                <picture>
                  <source srcSet="/images/my_img.webp" type="image/webp" />
                  <img
                    src="/images/my_img.png"
                    alt="Pradeep Subramanian - Founder of Evonuera"
                    width={1177}
                    height={1336}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                </picture>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal>
              <span className="section-eyebrow">About the Trainer</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Pradeep Subramanian
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300">
                <span className="gradient-text font-semibold">Founder of Evonuera</span>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-xl leading-relaxed text-slate-400">
                Pradeep builds AI systems and agentic products for a living - and teaches engineers,
                students and founders how to do the same. In this masterclass he shares the exact
                workflow he uses to take ideas from concept to a live, shipped product.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-7">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Expertise</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {expertise.map((e) => (
                    <span
                      key={e.label}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200"
                    >
                      <e.icon className="h-4 w-4 text-brand-purple" />
                      {e.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Trust stats */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
              className="mt-8 grid grid-cols-3 gap-3"
            >
              {trust.map((t) => (
                <motion.div
                  key={t.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                  className="glass rounded-2xl p-4 text-center"
                >
                  <t.icon className="mx-auto h-5 w-5 text-brand-coral" />
                  <p className="mt-2 font-display text-xl font-bold text-white">{t.value}</p>
                  <p className="mt-0.5 text-[11px] leading-tight text-slate-400">{t.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
