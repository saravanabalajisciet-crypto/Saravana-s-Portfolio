import { useEffect, useRef, useState } from 'react'
import { Trophy, Zap, Star, Award, Target, Briefcase } from 'lucide-react'
import certImg from '../assets/photos/certificate.jpg'

const stats = [
  { icon: Award,    value: '2nd',   label: 'MLH Gemini Hack', color: 'text-yellow-400' },
  { icon: Target,   value: 'Top 8', label: 'AlgoMentor AI',   color: 'text-orange-400' },
  { icon: Briefcase,value: '3',     label: 'Internships',     color: 'text-indigo-400' },
]

const achievements = [
  {
    icon: Trophy,
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    border: 'border-yellow-500/25',
    badge: '🥈 2nd Place Winner',
    badgeStyle: 'bg-yellow-500/15 text-yellow-300 border-yellow-500/30',
    title: 'MLH Gemini Hack Day 2026',
    subtitle: 'MLH Official · Google Gemini × Trishula Community · April 2026',
    description: 'Secured 2nd Place at MLH Gemini Hack Day 2026 by building VisualForge AI — an AI-powered CS learning simulator powered by Google Gemini that transforms complex concepts into interactive visual explanations.',
    highlight: true,
    hasCert: true,
  },
  {
    icon: Zap,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/25',
    badge: 'Active Participant',
    badgeStyle: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
    title: 'Hackathon Participation',
    subtitle: 'Multiple Events · 2024–2026',
    description: 'Actively participates in hackathons, rapidly building prototypes and collaborating with teams under time constraints. Placed Top 8 out of 40 teams at a 5-hour hackathon with AlgoMentor AI.',
    highlight: false,
    hasCert: false,
  },
  {
    icon: Briefcase,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/25',
    badge: '2 Completed + 1 Ongoing',
    badgeStyle: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
    title: '3 Industry Internships',
    subtitle: '2 Completed · 1 Ongoing · Web Dev & Cloud',
    description: 'Completed internships in Web Development and Cloud Computing, gaining practical industry exposure across frontend development, backend integration, and AWS cloud technologies.',
    highlight: false,
    hasCert: false,
  },
  {
    icon: Star,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/25',
    badge: 'Participant',
    badgeStyle: 'bg-purple-500/15 text-purple-300 border-purple-500/30',
    title: 'Prompt Wars',
    subtitle: 'AI Prompt Engineering Competition',
    description: 'Participated in AI Prompt Engineering competitions exploring problem-solving, creativity, and effective use of generative AI tools.',
    highlight: false,
    hasCert: false,
  },
]

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

export default function Achievements() {
  const [sectionRef, visible] = useIntersection()
  const [certErr, setCertErr] = useState(false)

  return (
    <section id="achievements" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-yellow-600/4 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Recognition</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Highlights from hackathons and competitive coding events.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-3 gap-4 max-w-xl mx-auto mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map(({ icon: Icon, value, label, color }) => (
            <div key={label} className="glass rounded-2xl p-4 sm:p-5 border border-white/8 text-center">
              <Icon size={17} className={`${color} mx-auto mb-2`} />
              <div className={`text-xl sm:text-2xl font-bold ${color}`}>{value}</div>
              <div className="text-xs text-slate-600 mt-0.5">{label}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {achievements.map(({ icon: Icon, color, bg, border, badge, badgeStyle, title, subtitle, description, highlight, hasCert }, i) => (
            <div
              key={title}
              className={`relative glass rounded-2xl border ${border} overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300 ${
                highlight ? 'ring-1 ring-yellow-500/20 shadow-lg shadow-yellow-500/8' : ''
              } ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 120}ms` }}
            >
              {/* Winner flag */}
              {highlight && (
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-2 py-0.5 rounded-full bg-yellow-500 text-yellow-900 text-xs font-bold">
                    ★ 2nd PLACE
                  </span>
                </div>
              )}

              {/* Certificate image */}
              {hasCert && !certErr && (
                <div className="w-full h-40 overflow-hidden border-b border-yellow-500/15 flex-shrink-0">
                  <img
                    src={certImg}
                    alt="MLH Gemini Hack Day Certificate"
                    className="w-full h-full object-cover object-top"
                    onError={() => setCertErr(true)}
                  />
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center mb-4`}>
                  <Icon size={19} className={color} />
                </div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badgeStyle} mb-3 w-fit`}>
                  {badge}
                </span>
                <h3 className="text-white font-bold text-base mb-1">{title}</h3>
                <p className="text-slate-600 text-xs mb-3">{subtitle}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
