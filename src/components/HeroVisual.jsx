import { motion } from 'framer-motion'
import { Terminal, GitBranch, Cpu, CheckCircle2, Rocket, Bot } from 'lucide-react'

/**
 * Stylised glassmorphic composite: an AI-assisted code editor with an
 * agent flow panel and a deployment status card floating alongside.
 */
export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* Glow behind */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-grad-brand opacity-30 blur-3xl" />

      {/* Main editor window */}
      <div className="glass-strong overflow-hidden rounded-2xl shadow-glow-lg">
        {/* Window bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <div className="ml-3 flex items-center gap-2 text-xs text-slate-400">
            <Terminal className="h-3.5 w-3.5" /> claude-code — build.tsx
          </div>
        </div>

        {/* Code body */}
        <div className="grid grid-cols-[auto_1fr] gap-3 p-4 font-mono text-[11px] leading-relaxed sm:text-xs">
          <div className="select-none space-y-1.5 text-right text-slate-600">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
          <div className="space-y-1.5">
            <Line delay={0.2}>
              <span className="text-purple-400">import</span> <span className="text-slate-300">&#123; Agent &#125;</span>{' '}
              <span className="text-purple-400">from</span> <span className="text-emerald-300">'evonuera/ai'</span>
            </Line>
            <Line delay={0.35}>
              <span className="text-purple-400">const</span> <span className="text-blue-300">app</span>{' '}
              <span className="text-slate-400">=</span> <span className="text-purple-400">new</span>{' '}
              <span className="text-yellow-300">Agent</span><span className="text-slate-400">(&#123;</span>
            </Line>
            <Line delay={0.5}>
              <span className="ml-4 text-blue-300">model</span>
              <span className="text-slate-400">:</span> <span className="text-emerald-300">'claude-opus'</span>
              <span className="text-slate-400">,</span>
            </Line>
            <Line delay={0.65}>
              <span className="ml-4 text-blue-300">tools</span>
              <span className="text-slate-400">:</span> <span className="text-slate-300">[deploy, search]</span>
              <span className="text-slate-400">,</span>
            </Line>
            <Line delay={0.8}>
              <span className="text-slate-400">&#125;)</span>
            </Line>
            <Line delay={0.95}>
              <span className="text-blue-300">app</span><span className="text-slate-400">.</span>
              <span className="text-yellow-300">ship</span><span className="text-slate-400">()</span>
              <span className="ml-2 inline-block h-3.5 w-1.5 animate-pulse bg-brand-purple align-middle" />
            </Line>
            <Line delay={1.1}>
              <span className="text-emerald-400">✓ build passed · deploying…</span>
            </Line>
          </div>
        </div>

        {/* Agent flow strip */}
        <div className="flex items-center gap-2 border-t border-white/10 bg-white/[0.02] px-4 py-3 text-[10px] sm:text-xs">
          <FlowNode icon={Bot} label="Agent" />
          <Connector />
          <FlowNode icon={Cpu} label="Reason" />
          <Connector />
          <FlowNode icon={GitBranch} label="Build" />
          <Connector />
          <FlowNode icon={Rocket} label="Deploy" active />
        </div>
      </div>

      {/* Floating deploy card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute -bottom-6 -right-4 w-52 rounded-2xl glass-strong p-4 shadow-card sm:-right-8"
      >
        <div className="animate-float-slow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-slate-300">Deployment</span>
            <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Live
            </span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            <div>
              <p className="text-sm font-semibold text-white">Shipped in 42s</p>
              <p className="text-[10px] text-slate-400">app.evonuera.com</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-grad-brand"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1.4, ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating metric chip */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.15, duration: 0.6 }}
        className="absolute -left-4 top-10 hidden rounded-2xl glass-strong px-4 py-3 shadow-card sm:block"
      >
        <div className="animate-float">
          <p className="text-[10px] uppercase tracking-wider text-slate-400">AI Agents</p>
          <p className="font-display text-xl font-bold text-white">Automated</p>
        </div>
      </motion.div>
    </div>
  )
}

function Line({ children, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      {children}
    </motion.div>
  )
}

function FlowNode({ icon: Icon, label, active }) {
  return (
    <div
      className={`flex flex-1 flex-col items-center gap-1 rounded-lg border px-1 py-1.5 ${
        active
          ? 'border-brand-purple/50 bg-brand-purple/10 text-white'
          : 'border-white/10 bg-white/[0.02] text-slate-400'
      }`}
    >
      <Icon className={`h-3.5 w-3.5 ${active ? 'text-brand-purple' : ''}`} />
      <span className="font-medium">{label}</span>
    </div>
  )
}

function Connector() {
  return <div className="h-px w-3 shrink-0 bg-gradient-to-r from-white/30 to-white/10" />
}
