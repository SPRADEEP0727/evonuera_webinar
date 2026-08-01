import { motion } from 'framer-motion'
import {
  BrainCircuit,
  MonitorPlay,
  CloudUpload,
  Workflow,
  Boxes,
  Bot,
  Map,
} from 'lucide-react'
import Reveal, { SectionHeader } from './Reveal.jsx'
import LightSection from './LightSection.jsx'
import { useReserve } from './ReserveContext.jsx'

const topics = [
  {
    icon: BrainCircuit,
    title: 'How AI is Transforming Software',
    desc: 'Understand the shift reshaping how modern software is designed, built and shipped.',
  },
  {
    icon: MonitorPlay,
    title: 'Build a Website with Claude Code',
    desc: 'Watch a real, live demonstration of building a working website using Claude Code.',
  },
  {
    icon: CloudUpload,
    title: 'Deploy Your Website for FREE',
    desc: 'Take your project from localhost to a live URL — at zero cost.',
  },
  {
    icon: Workflow,
    title: 'AI Product Development Workflow',
    desc: 'The end-to-end workflow to go from idea to a shipped AI product.',
  },
  {
    icon: Boxes,
    title: 'Introduction to AI Systems',
    desc: 'Learn how real AI systems are architected beyond single prompts.',
  },
  {
    icon: Bot,
    title: 'AI Agents & Automation',
    desc: 'Build agents that reason, use tools and automate real workflows.',
  },
  {
    icon: Map,
    title: 'Roadmap to Becoming an AI Builder',
    desc: 'A clear, actionable path to grow from learner to AI product builder.',
  },
]

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}
const cardV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Curriculum() {
  const { open: openReserve } = useReserve()
  return (
    <LightSection id="curriculum" className="px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          theme="light"
          eyebrow="What You'll Learn"
          title="A practical playbook to build & ship AI products"
          subtitle="Every session is hands-on and outcome-driven — no fluff, just what actually moves you forward."
        />

        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3"
        >
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              variants={cardV}
              className={`card-light group p-6 ${
                i === topics.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-grad-brand shadow-glow transition-transform duration-300 group-hover:scale-110">
                <t.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-slate-900">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{t.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.1} className="mt-12 text-center">
          <button onClick={openReserve} className="btn-primary">
            Reserve My Seat — ₹49
          </button>
        </Reveal>
      </div>
    </LightSection>
  )
}
