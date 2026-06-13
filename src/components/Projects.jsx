import { useEffect, useRef, useState } from 'react'
import {
  GitBranch, ExternalLink, Play, Trophy, Brain, BarChart3,
  Layout, Lightbulb, Sparkles, Code2, Search, Eye,
  MessageSquare, Globe, Users, Database,
} from 'lucide-react'

// ── Data ──────────────────────────────────────────────────────

const visualForge = {
  title: 'VisualForge AI',
  tagline: 'AI-Powered CS Learning Simulator',
  badge: { label: '🏆 2nd Place · 53 Submissions · MLH GEMINI.EXE 2026', style: 'text-yellow-400 bg-yellow-500/10 border-yellow-500/30' },
  description: 'An AI-powered Computer Science learning simulator that transforms complex concepts into interactive visual explanations. Built for the MLH GEMINI.EXE Hackathon using Google Gemini API. Covers DSA, DBMS, TOC, and SQL with live animations and a custom in-browser SQL engine.',
  features: [
    { icon: Brain,     label: 'Gemini AI Core',    desc: 'Generates step-by-step visualization from any CS concept' },
    { icon: Code2,     label: 'Live SQL Engine',   desc: 'In-browser SQL parser — runs entirely client-side' },
    { icon: Eye,       label: 'DSA Playground',    desc: 'Natural language to BST, DFA, Graph animations' },
    { icon: Lightbulb, label: 'Understanding Meter', desc: 'Tracks engagement depth based on interactions' },
  ],
  tech: ['HTML/CSS/JS', 'Node.js', 'Google Gemini API', 'SVG Animations', 'Vercel'],
  accent: { text: 'text-indigo-400', border: 'border-indigo-500/20', from: 'from-indigo-500/10' },
  links: [
    { label: 'GitHub',      icon: GitBranch,   href: 'https://github.com/saravanabalajisciet-crypto/VisualForge-AI', style: 'hover:text-white hover:border-white/30' },
    { label: 'Live Demo',   icon: ExternalLink, href: 'https://visual-forge-ai.vercel.app',                          style: 'hover:text-emerald-400 hover:border-emerald-500/40' },
    { label: 'YouTube Demo',icon: Play,         href: 'https://youtu.be/LGwA7BKsUY8?si=9DPr6FqloWOfejQU',           style: 'hover:text-red-400 hover:border-red-500/40' },
  ],
}

const algoMentor = {
  title: 'AlgoMentor AI',
  tagline: 'Real-Time Algorithm Learning Platform',
  badge: { label: '🥇 Top 8 / 40 Teams · 5hr Hackathon', style: 'text-orange-400 bg-orange-500/10 border-orange-500/30' },
  description: 'A real-time algorithm learning platform built in 5 hours. Analyses code as users type, automatically detects algorithms like Binary Search, identifies concept gaps with AI explanations, and visualises step-by-step execution without any button clicks.',
  features: [
    { icon: Search,        label: 'Auto Detection',   desc: 'Detects Binary Search, Bubble Sort, BFS instantly' },
    { icon: Eye,           label: 'Live Visualization',desc: 'Step-by-step execution with zero clicks' },
    { icon: Brain,         label: 'Concept Gap AI',   desc: 'Highlights mistakes with plain-English explanations' },
    { icon: MessageSquare, label: 'Interview Trainer', desc: 'Practice mode with personalized recommendations' },
  ],
  tech: ['Python', 'Streamlit', 'AI/ML', 'Data Visualization', 'Git'],
  accent: { text: 'text-orange-400', border: 'border-orange-500/20', from: 'from-orange-500/10' },
  links: [
    { label: 'GitHub', icon: GitBranch, href: 'https://github.com/saravanabalajisciet-crypto/AlgoMentor-AI', style: 'hover:text-white hover:border-white/30' },
  ],
}

const smallCards = [
  {
    title: 'Multilingual Mandi',
    subtitle: 'AI for Bharat Challenge',
    desc: 'AI-powered platform helping Indian vendors negotiate fair prices in 6 regional languages with a confidence scoring system.',
    tech: ['Node.js', 'Express', 'AI/ML'],
    icon: <Globe size={20} className="text-emerald-400" />,
    iconBg: 'bg-emerald-500/10 border-emerald-500/20',
    border: 'border-emerald-500/20',
    accent: 'text-emerald-400',
    badge: '🇮🇳 AI for Bharat',
    badgeStyle: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    github: 'https://github.com/saravanabalajisciet-crypto/Multilingual-mandi',
  },
  {
    title: 'Customer Segmentation',
    subtitle: 'ML from Scratch · Kaggle Dataset',
    desc: 'K-Means clustering implemented from scratch using only NumPy and Pandas — no sklearn — for mall customer segmentation.',
    tech: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
    icon: <Users size={20} className="text-purple-400" />,
    iconBg: 'bg-purple-500/10 border-purple-500/20',
    border: 'border-purple-500/20',
    accent: 'text-purple-400',
    badge: '⭐ Data Analytics',
    badgeStyle: 'bg-purple-500/10 text-purple-400 border-purple-500/25',
    github: 'https://github.com/saravanabalajisciet-crypto/Customer-Segmentation-Analysis',
  },
  {
    title: 'Aadhaar Enrolment Analysis',
    subtitle: 'UIDAI Open Data · Governance',
    desc: 'State-wise analysis of Aadhaar enrolment vs demographic and biometric update trends using UIDAI open data.',
    tech: ['Python', 'Pandas', 'Matplotlib'],
    icon: <Database size={20} className="text-cyan-400" />,
    iconBg: 'bg-cyan-500/10 border-cyan-500/20',
    border: 'border-cyan-500/20',
    accent: 'text-cyan-400',
    badge: '📊 Gov Data',
    badgeStyle: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    github: 'https://github.com/saravanabalajisciet-crypto/Aadhar-Analysis',
  },
]

// ── Helpers ───────────────────────────────────────────────────

function useIntersection(threshold = 0.1) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, visible]
}

function FeaturedCard({ project, visible, delay }) {
  const { title, tagline, badge, description, features, tech, accent, links } = project
  return (
    <div
      className={`glass rounded-3xl border ${accent.border} overflow-hidden mb-8 hover:-translate-y-0.5 transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Bar */}
      <div className={`bg-gradient-to-r ${accent.from} to-transparent border-b border-white/5 px-6 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <Sparkles size={13} className={accent.text} />
          <span className={`${accent.text} text-sm font-semibold`}>Featured Project</span>
        </div>
        <span className={`text-xs font-bold border px-2.5 py-1 rounded-full ${badge.style}`}>{badge.label}</span>
      </div>

      <div className="p-6 sm:p-8 lg:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-1">{title}</h3>
            <p className={`${accent.text} text-sm font-semibold mb-4`}>{tagline}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-2 mb-7">
              {tech.map(t => (
                <span key={t} className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 ${accent.text} text-xs`}>{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2.5">
              {links.map(({ label, icon: Icon, href, style }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl glass border border-white/10 text-slate-400 text-sm transition-all duration-200 ${style} hover:-translate-y-0.5`}
                >
                  <Icon size={14} />{label}
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {features.map(({ icon: Icon, label, desc }) => (
              <div key={label} className={`glass rounded-xl p-4 border border-white/5 hover:${accent.border} transition-colors`}>
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center mb-2.5">
                  <Icon size={15} className={accent.text} />
                </div>
                <p className="text-white text-xs font-semibold mb-1">{label}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SmallCard({ project, visible, delay }) {
  const { title, subtitle, desc, tech, icon, iconBg, border, accent, badge, badgeStyle, github } = project
  return (
    <div
      className={`glass rounded-2xl border ${border} hover:border-white/18 hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className={`w-10 h-10 rounded-xl ${iconBg} border flex items-center justify-center`}>{icon}</div>
          <span className={`text-xs font-semibold border px-2.5 py-1 rounded-full ${badgeStyle}`}>{badge}</span>
        </div>
        <h4 className="text-white font-bold text-base mb-0.5">{title}</h4>
        <p className={`${accent} text-xs font-medium mb-3`}>{subtitle}</p>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tech.map(t => <span key={t} className="px-2.5 py-1 rounded-md bg-white/5 text-slate-500 text-xs">{t}</span>)}
        </div>
        <a href={github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-slate-500 text-xs hover:text-white transition-colors group"
        >
          <GitBranch size={12} className="group-hover:text-white" />
          View on GitHub ↗
        </a>
      </div>
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────

export default function Projects() {
  const [sectionRef, visible] = useIntersection()

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-72 h-72 rounded-full bg-orange-600/4 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">What I've built</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Two hackathon AI projects, an India-focused AI challenge entry,
            and data analytics work — all built and open sourced.
          </p>
        </div>

        {/* Hackathon label */}
        <div className={`flex items-center gap-3 mb-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2">
            <Trophy size={14} className="text-yellow-400" />
            <span className="text-slate-400 font-semibold text-sm">Hackathon Projects</span>
          </div>
          <div className="flex-1 h-px bg-white/5" />
          <span className="text-slate-700 text-xs">2026</span>
        </div>

        <FeaturedCard project={visualForge} visible={visible} delay={150} />
        <FeaturedCard project={algoMentor}  visible={visible} delay={300} />

        {/* Other label */}
        <div className={`flex items-center gap-3 mb-7 mt-2 transition-all duration-700 delay-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-2">
            <Code2 size={14} className="text-indigo-400" />
            <span className="text-slate-400 font-semibold text-sm">Other Projects</span>
          </div>
          <div className="flex-1 h-px bg-white/5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {smallCards.map((p, i) => (
            <SmallCard key={p.title} project={p} visible={visible} delay={500 + i * 100} />
          ))}
        </div>

        {/* CTAs */}
        <div className={`mt-10 text-center flex items-center justify-center gap-3 flex-wrap transition-all duration-700 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a href="https://github.com/saravanabalajisciet-crypto" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-white/10 text-slate-400 text-sm hover:text-white hover:border-white/25 transition-all duration-200"
          >
            <GitBranch size={14} />
            GitHub Profile ↗
          </a>
          <a href="https://www.linkedin.com/in/saravana-balaji-s-129a82350" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl glass border border-indigo-500/30 text-indigo-400 text-sm hover:bg-indigo-500/8 transition-all duration-200"
          >
            <ExternalLink size={14} />
            LinkedIn ↗
          </a>
        </div>

      </div>
    </section>
  )
}
