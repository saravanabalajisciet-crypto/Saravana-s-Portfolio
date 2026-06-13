import { GitBranch, Link, Mail, Code2, Heart, ArrowUp } from 'lucide-react'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey',  href: '#journey' },
  { label: 'Learning', href: '#learning' },
  { label: 'Resume',   href: '#resume' },
  { label: 'Contact',  href: '#contact' },
]

const socials = [
  { icon: GitBranch, href: 'https://github.com/saravanabalajisciet-crypto',          label: 'GitHub' },
  { icon: Link,      href: 'https://www.linkedin.com/in/saravana-balaji-s-129a82350', label: 'LinkedIn' },
  { icon: Mail,      href: 'mailto:balajisaravana88@gmail.com',                         label: 'Email' },
]

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
  const scrollTo = href => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-[#07070c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand */}
          <div>
            <a href="#hero" onClick={e => { e.preventDefault(); scrollTop() }}
              className="flex items-center gap-2 mb-3 group w-fit"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Code2 size={15} className="text-white" />
              </div>
              <span className="font-bold text-white text-base">
                Saravana Balaji S<span className="text-indigo-400">.</span>
              </span>
            </a>
            <p className="text-slate-600 text-xs leading-relaxed mb-4 max-w-xs">
              Software Engineering Student | Building with AI, Cloud &amp; Full Stack Development
            </p>
            <p className="text-slate-600 text-xs leading-relaxed max-w-xs">
              Interested in full stack development, cloud computing, and AI applications.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-2 rounded-lg glass border border-white/8 text-slate-600 hover:text-white hover:border-indigo-500/35 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Navigation</p>
            <ul className="space-y-2">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}
                    onClick={e => { e.preventDefault(); scrollTo(href) }}
                    className="text-slate-600 text-sm hover:text-indigo-400 transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Open To Work */}
          <div>
            <p className="text-white text-sm font-semibold mb-4">Open To Work</p>
            <div className="space-y-2.5 mb-5">
              {['Internships', 'Freelance projects', 'Full-time roles'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-slate-500 text-sm">{item}</span>
                </div>
              ))}
            </div>
            <a href="#contact"
              onClick={e => { e.preventDefault(); scrollTo('#contact') }}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transition-all duration-200"
            >
              <Mail size={13} />
              Let's Talk
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-slate-700 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Saravana Balaji S. Made with
            <Heart size={11} className="text-red-500 fill-red-500" />
            in India.
          </p>
          <button onClick={scrollTop}
            className="flex items-center gap-1.5 text-slate-700 hover:text-white text-xs transition-colors group"
          >
            Back to top
            <ArrowUp size={12} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  )
}
