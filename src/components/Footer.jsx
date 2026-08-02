import { Mail, Twitter, Linkedin, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-950/80 px-4 pb-28 pt-14 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-bold text-white">
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
              Evonuera
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Helping engineers, students and founders build AI products - not just prompts. Learn to
              ship real, AI-powered software.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-400 transition-colors hover:border-brand-purple/40 hover:text-white"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            <FooterCol
              title="Masterclass"
              links={[
                { label: "What You'll Learn", href: '#curriculum' },
                { label: 'Live Demo', href: '#live-demo' },
                { label: 'Trainer', href: '#trainer' },
                { label: 'Register', href: '#register' },
              ]}
            />
            <FooterCol
              title="Company"
              links={[
                { label: 'About', href: '#trainer' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Contact', href: 'mailto:hello@evonuera.com' },
              ]}
            />
            <FooterCol
              title="Legal"
              links={[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms', href: '#' },
                { label: 'Contact', href: 'mailto:hello@evonuera.com' },
              ]}
            />
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Evonuera. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built for AI builders <span className="text-brand-purple">◆</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

function FooterCol({ title, links }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-slate-400 transition-colors hover:text-white">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
