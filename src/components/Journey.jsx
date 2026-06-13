import { useEffect, useRef, useState } from 'react'
import { Mic, Globe, MessageSquare, Zap, Code2, Trophy, Rocket } from 'lucide-react'

const milestones = [
  {
    icon: Mic,
    color: 'text-slate-300',
    iconBg: 'bg-slate-500/15 border-slate-500/30',
    dot: 'bg-slate-500',
    ring: 'ring-slate-500/25',
    label: 'First Step',
    labelColor: 'text-slate-500',
    title: "Engineer's Day Presentation",
    desc: 'First experience presenting technical concepts in front of an audience. Small moment, but it built the habit of communicating ideas clearly.',
    lesson: 'Lesson: Confidence starts with just showing up.',
    tag: null,
  },
  {
    icon: Globe,
    color: 'text-emerald-400',
    iconBg: 'bg-emerald-500/15 border-emerald-500/30',
    dot: 'bg-emerald-500',
    ring: 'ring-emerald-500/25',
    label: 'First Build',
    labelColor: 'text-emerald-400',
    title: 'AI for Bharat Challenge',
    desc: 'Built Multilingual Mandi and got shortlisted in a national AI challenge. First time shipping something with a real-world problem statement.',
    lesson: 'Lesson: Build for real problems, not just demos.',
    tag: { text: 'Shortlisted', style: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25' },
  },
  {
    icon: MessageSquare,
    color: 'text-purple-400',
    iconBg: 'bg-purple-500/15 border-purple-500/30',
    dot: 'bg-purple-500',
    ring: 'ring-purple-500/25',
    label: 'Exploring AI',
    labelColor: 'text-purple-400',
    title: 'Prompt Train Party',
    desc: 'Placed 14th and explored AI prompt engineering. Learned how to work with generative AI through creative problem-solving.',
    lesson: 'Lesson: Knowing how to guide AI is a real skill.',
    tag: { text: '14th Place', style: 'bg-purple-500/15 text-purple-400 border-purple-500/25' },
  },
  {
    icon: Zap,
    color: 'text-yellow-400',
    iconBg: 'bg-yellow-500/15 border-yellow-500/30',
    dot: 'bg-yellow-500',
    ring: 'ring-yellow-500/25',
    label: 'Under Pressure',
    labelColor: 'text-yellow-400',
    title: 'First 18-Hour Hackathon',
    desc: 'Worked under real hackathon pressure and scored 43/50. First time building something end-to-end in a time-constrained environment.',
    lesson: 'Lesson: Pressure reveals how well you actually know your tools.',
    tag: { text: '43 / 50', style: 'bg-yellow-500/15 text-yellow-400 border-yellow-500/25' },
  },
  {
    icon: Code2,
    color: 'text-orange-400',
    iconBg: 'bg-orange-500/15 border-orange-500/30',
    dot: 'bg-orange-500',
    ring: 'ring-orange-500/25',
    label: 'Building & Placing',
    labelColor: 'text-orange-400',
    title: 'AlgoMentor AI — Top 8 / 40 Teams',
    desc: 'Built a real-time algorithm learning platform in 5 hours. First time finishing in a competitive position at a hackathon.',
    lesson: 'Lesson: Focused scope wins over ambitious but unfinished.',
    tag: { text: 'Top 8 / 40 Teams', style: 'bg-orange-500/15 text-orange-400 border-orange-500/25' },
  },
  {
    icon: Trophy,
    color: 'text-yellow-300',
    iconBg: 'bg-yellow-500/20 border-yellow-400/40',
    dot: 'bg-yellow-400',
    ring: 'ring-yellow-400/35',
    label: 'MLH 2026',
    labelColor: 'text-yellow-400',
    title: 'Gemini.EXE — MLH Hack Day 2026',
    desc: 'Built VisualForge AI and secured 2nd Place among 53 submissions. Brought together AI, frontend, visualizations, and rapid prototyping under time pressure.',
    lesson: 'Lesson: Consistent building eventually compounds into results.',
    tag: { text: '🏆 2nd Place · 53 Submissions', style: 'bg-yellow-500/15 text-yellow-300 border-yellow-400/35 font-semibold' },
    highlight: true,
  },
  {
    icon: Rocket,
    color: 'text-indigo-300',
    iconBg: 'bg-indigo-500/15 border-indigo-500/30',
    dot: 'bg-indigo-400',
    ring: 'ring-indigo-400/25',
    label: 'Next Goal',
    labelColor: 'text-indigo-400',
    title: 'What Comes Next',
    desc: 'Strengthening DSA, AWS, and system design. Contributing to open source. Building more real software and creating opportunities through consistent work.',
    lesson: '',
    tag: null,
    isNext: true,
  },
]

// Per-card intersection observer
function useMilestoneVisible() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

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

function MilestoneItem({ m, index }) {
  const [ref, visible] = useMilestoneVisible()
  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* ── Desktop: alternating ── */}
      <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 items-center">
        {/* Left slot */}
        <div className={isEven ? 'flex justify-end' : ''}>
          {isEven && <Card m={m} side="right" />}
        </div>

        {/* Center dot */}
        <div className="flex flex-col items-center">
          <div className={`w-4 h-4 rounded-full ${m.dot} ring-4 ${m.ring} z-10 flex-shrink-0 ${m.highlight ? 'w-5 h-5' : ''} ${m.isNext ? 'node-pulse' : ''}`} />
        </div>

        {/* Right slot */}
        <div>
          {!isEven && <Card m={m} side="left" />}
        </div>
      </div>

      {/* ── Mobile: left-aligned ── */}
      <div className="flex md:hidden items-start gap-4">
        <div className="flex flex-col items-center flex-shrink-0 mt-1.5">
          <div className={`w-3.5 h-3.5 rounded-full ${m.dot} ring-4 ${m.ring} z-10 flex-shrink-0`} />
        </div>
        <Card m={m} side="left" mobile />
      </div>
    </div>
  )
}

function Card({ m, side, mobile }) {
  return (
    <div
      className={`glass rounded-2xl p-5 border ${m.highlight ? 'border-yellow-500/25 shadow-lg shadow-yellow-500/8' : m.isNext ? 'border-indigo-500/25 shadow-lg shadow-indigo-500/8' : 'border-white/8'} hover:-translate-y-0.5 transition-all duration-300 ${mobile ? 'flex-1' : 'max-w-xs w-full'}`}
    >
      <div className={`flex items-center gap-2.5 mb-3 ${side === 'right' && !mobile ? 'justify-end' : ''}`}>
        <div className={`w-8 h-8 rounded-lg ${m.iconBg} border flex items-center justify-center flex-shrink-0`}>
          <m.icon size={15} className={m.color} />
        </div>
        <span className={`text-xs font-semibold uppercase tracking-wide ${m.labelColor}`}>{m.label}</span>
      </div>
      <h3 className={`text-white font-bold text-sm leading-snug mb-2 ${side === 'right' && !mobile ? 'text-right' : ''}`}>
        {m.title}
      </h3>
      <p className={`text-slate-500 text-xs leading-relaxed mb-2 ${side === 'right' && !mobile ? 'text-right' : ''}`}>
        {m.desc}
      </p>
      {m.lesson && (
        <p className={`text-indigo-400/70 text-xs italic mb-3 ${side === 'right' && !mobile ? 'text-right' : ''}`}>
          {m.lesson}
        </p>
      )}
      {m.tag && (
        <div className={side === 'right' && !mobile ? 'flex justify-end' : ''}>
          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs border ${m.tag.style}`}>
            {m.tag.text}
          </span>
        </div>
      )}
    </div>
  )
}

export default function Journey() {
  const [headerRef, headerVisible] = useIntersection(0.2)
  const [endRef, endVisible] = useIntersection(0.5)

  return (
    <section id="journey" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-indigo-600/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-purple-600/4 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Growth</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            The Journey <span className="gradient-text">So Far</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-lg mx-auto text-sm leading-relaxed">
            From a first presentation to an MLH podium — one step at a time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 top-2 bottom-16 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/8 to-transparent" />
          {/* Mobile left line */}
          <div className="md:hidden absolute left-[6px] top-2 bottom-16 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

          <div className="space-y-8 md:space-y-10">
            {milestones.map((m, i) => (
              <MilestoneItem key={m.title} m={m} index={i} />
            ))}
          </div>
        </div>

        {/* End quote */}
        <div
          ref={endRef}
          className={`mt-14 text-center transition-all duration-700 ${endVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-indigo-500/40" />
              <div className="w-2 h-2 rounded-full bg-indigo-500/60" />
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-indigo-500/40" />
            </div>
            <p className="text-slate-400 text-base sm:text-lg font-medium italic">
              "Still Building. Still Learning. Still Competing."
            </p>
            <p className="text-slate-600 text-xs">— The journey continues</p>
          </div>
        </div>

      </div>
    </section>
  )
}
