import { useEffect, useRef, useState } from 'react'
import { BookOpen, Code2, Cloud, Brain, Layout, Cpu } from 'lucide-react'

const items = [
  {
    icon: Code2,
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10 border-indigo-500/25',
    title: 'Data Structures & Algorithms',
    desc: 'Building stronger problem-solving fundamentals with consistent DSA practice.',
    status: 'Active',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  },
  {
    icon: Layout,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/25',
    title: 'Java Spring Boot',
    desc: 'Deepening backend development skills with Spring Boot REST APIs and project structure.',
    status: 'Active',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
  },
  {
    icon: Cloud,
    color: 'text-sky-400',
    bg: 'bg-sky-500/10 border-sky-500/25',
    title: 'AWS Cloud',
    desc: 'Hands-on AWS during ongoing cloud internship — EC2, S3, IAM, and deployments.',
    status: 'Ongoing Internship',
    statusColor: 'text-sky-400 bg-sky-500/10 border-sky-500/25',
  },
  {
    icon: Cpu,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/25',
    title: 'System Design Fundamentals',
    desc: 'Learning scalable system design patterns and architectural thinking.',
    status: 'In Progress',
    statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
  },
  {
    icon: Brain,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/25',
    title: 'AI Application Development',
    desc: 'Exploring LLM integration, Gemini API, and building AI-powered tools.',
    status: 'Active',
    statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
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

export default function CurrentlyLearning() {
  const [sectionRef, visible] = useIntersection()

  return (
    <section id="learning" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-600/4 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Growth</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Currently <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm leading-relaxed">
            Areas I'm actively exploring and improving — because learning never stops.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ icon: Icon, color, bg, title, desc, status, statusColor }, i) => (
            <div
              key={title}
              className={`glass rounded-2xl p-6 border ${bg.split(' ')[1]} hover:border-white/18 hover:-translate-y-1 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 90}ms` }}
            >
              {/* Icon + status */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl ${bg} border flex items-center justify-center`}>
                  <Icon size={18} className={color} />
                </div>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${statusColor}`}>
                  {status}
                </span>
              </div>
              <h3 className="text-white font-semibold text-sm mb-2">{title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/8 text-slate-500 text-xs">
            <BookOpen size={12} className="text-indigo-400" />
            <span>Consistent daily learning — building towards becoming a strong software engineer</span>
          </div>
        </div>

      </div>
    </section>
  )
}
