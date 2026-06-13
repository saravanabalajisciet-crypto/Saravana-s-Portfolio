import { useEffect, useRef, useState } from 'react'
import { ArrowDown, GitBranch, Link, Mail, Sparkles, Terminal, Download } from 'lucide-react'

const roles = [
  'Full Stack Developer',
  'Cloud Computing Enthusiast',
  'AI & Data Analytics Explorer',
  'Hackathon Participant',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    if (!isDeleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65)
    } else if (!isDeleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 30)
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, isDeleting, roleIndex])

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* Orbs */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-600/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-purple-600/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-600/3 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">

        {/* Role badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-indigo-500/25 text-sm text-indigo-300 mb-7 animate-fade-in-up">
          <Sparkles size={13} className="text-indigo-400" />
          <span>Computer Science Engineering Student</span>
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-3 animate-fade-in-up delay-100 leading-tight">
          <span className="text-white">Saravana</span>{' '}
          <span className="gradient-text">Balaji S</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-slate-400 text-sm sm:text-base font-medium mb-5 animate-fade-in-up delay-100 tracking-wide">
          Computer Science Engineering Student &nbsp;·&nbsp; Full Stack Developer &nbsp;·&nbsp; AI &amp; Cloud Enthusiast
        </p>

        {/* Achievement tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-7 animate-fade-in-up delay-200">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-300 text-xs font-medium">
            🏆 MLH Gemini Hack Day 2026 — 2nd Place
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/25 text-orange-300 text-xs font-medium">
            🥇 Top 8 Hackathon Finalist
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-300 text-xs font-medium">
            💼 3 Industry Internships
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-medium">
            ☁️ AWS & Cloud Learner
          </span>
        </div>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 mb-6 min-h-[2.5rem] animate-fade-in-up delay-200">
          <Terminal size={16} className="text-slate-600 flex-shrink-0" />
          <p className="text-base sm:text-lg font-medium text-slate-400">
            <span className="text-slate-300">{displayed}</span>
            <span className="inline-block w-0.5 h-5 bg-indigo-400 ml-0.5 animate-pulse align-middle" />
          </p>
        </div>

        {/* Intro */}
        <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300">
          Passionate about building practical software solutions, exploring cloud technologies,
          and creating AI-powered applications that solve real-world problems.
        </p>

        {/* 3 CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12 animate-fade-in-up delay-400">
          <button
            onClick={() => scrollTo('projects')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-white/5 border border-white/12 text-slate-300 font-semibold text-sm hover:bg-white/10 hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <Download size={15} />
            Download Resume
          </a>
          <button
            onClick={() => scrollTo('contact')}
            className="w-full sm:w-auto px-7 py-3 rounded-xl glass border border-indigo-500/30 text-indigo-300 font-semibold text-sm hover:bg-indigo-500/10 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            Contact Me
          </button>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-3 mb-14 animate-fade-in-up delay-500">
          {[
            { icon: GitBranch, href: 'https://github.com/saravanabalajisciet-crypto', label: 'GitHub' },
            { icon: Link,      href: 'https://www.linkedin.com/in/saravana-balaji-s-129a82350', label: 'LinkedIn' },
            { icon: Mail,      href: 'mailto:balajisaravana88@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              className="p-2.5 rounded-lg glass border border-white/8 text-slate-500 hover:text-white hover:border-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-center gap-10 pt-8 border-t border-white/5 animate-fade-in-up delay-600">
          {[
            { value: '3+',  label: 'Internships' },
            { value: '5+',  label: 'Projects' },
            { value: 'MLH', label: '2026 Winner' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-slate-600 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => scrollTo('about')} aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-700 hover:text-slate-400 transition-colors animate-bounce"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={14} />
      </button>
    </section>
  )
}
