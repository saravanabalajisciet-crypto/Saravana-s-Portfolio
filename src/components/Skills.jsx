import { useEffect, useRef, useState } from 'react'
import { Monitor, Server, Database, BarChart3, Wrench, Cloud } from 'lucide-react'

const categories = [
  {
    icon: Monitor,
    label: 'Frontend',
    color: 'text-indigo-400',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/8',
    tagBg: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-300',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
  {
    icon: Server,
    label: 'Backend',
    color: 'text-purple-400',
    border: 'border-purple-500/25',
    bg: 'bg-purple-500/8',
    tagBg: 'bg-purple-500/10 border-purple-500/20 text-purple-300',
    skills: ['Java', 'Spring Boot', 'Python', 'REST APIs'],
  },
  {
    icon: Database,
    label: 'Database',
    color: 'text-cyan-400',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/8',
    tagBg: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    icon: BarChart3,
    label: 'Data Analytics',
    color: 'text-emerald-400',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/8',
    tagBg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300',
    skills: ['Pandas', 'Matplotlib', 'Power BI', 'Databricks'],
  },
  {
    icon: Cloud,
    label: 'Cloud',
    color: 'text-sky-400',
    border: 'border-sky-500/25',
    bg: 'bg-sky-500/8',
    tagBg: 'bg-sky-500/10 border-sky-500/20 text-sky-300',
    skills: ['AWS', 'EC2', 'S3', 'IAM'],
  },
  {
    icon: Wrench,
    label: 'Tools & Platforms',
    color: 'text-amber-400',
    border: 'border-amber-500/25',
    bg: 'bg-amber-500/8',
    tagBg: 'bg-amber-500/10 border-amber-500/20 text-amber-300',
    skills: ['Git', 'GitHub', 'Vercel', 'VS Code'],
  },
]

const allBadges = [
  'HTML','CSS','JavaScript','React',
  'Java','Spring Boot','Python','REST APIs',
  'MySQL','MongoDB',
  'Pandas','Matplotlib','Power BI','Databricks',
  'AWS','EC2','S3','IAM',
  'Git','GitHub','Vercel','VS Code',
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

export default function Skills() {
  const [sectionRef, visible] = useIntersection()

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Technologies</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="gradient-text">Stack</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Technologies I've worked with across full stack development, data analytics, and cloud.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {categories.map(({ icon: Icon, label, color, border, bg, tagBg, skills }, ci) => (
            <div
              key={label}
              className={`glass rounded-2xl p-6 border ${border} hover:border-white/20 hover:-translate-y-1 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + ci * 100}ms` }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                  <Icon size={18} className={color} />
                </div>
                <h3 className="text-white font-semibold text-sm">{label}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span
                    key={skill}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium ${tagBg} transition-all duration-200 hover:-translate-y-0.5 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Full badge cloud */}
        <div className={`text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-700 text-xs uppercase tracking-widest mb-5">Full Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {allBadges.map(b => (
              <span key={b}
                className="px-3.5 py-1.5 rounded-full glass border border-white/8 text-slate-400 text-xs hover:border-indigo-500/35 hover:text-white transition-all duration-200 cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
