import { useEffect, useRef, useState } from 'react'
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const internships = [
  {
    company: 'Cognifyz Technologies',
    role: 'Web Development Intern',
    duration: 'Nov 2024 – Dec 2024 · 2 months',
    location: 'Remote',
    color: 'text-indigo-400',
    border: 'border-indigo-500/25',
    bg: 'bg-indigo-500/10',
    dot: 'bg-indigo-400',
    completedLabel: 'Completed 2024',
    description: 'Completed a web development internship focused on building responsive web applications using React and integrating backend APIs following industry workflow practices.',
    learnings: [
      'Built responsive web applications',
      'Worked with React.js for UI development',
      'REST API integration',
      'Git workflow and code reviews',
    ],
  },
  {
    company: 'Future Interns',
    role: 'Web Developer Intern',
    duration: 'Oct 2024 – Nov 2024 · 1 month',
    location: 'Remote',
    color: 'text-purple-400',
    border: 'border-purple-500/25',
    bg: 'bg-purple-500/10',
    dot: 'bg-purple-400',
    completedLabel: 'Completed 2024',
    description: 'Frontend-focused internship building responsive interfaces and reusable UI components, with an emphasis on performance and cross-device compatibility.',
    learnings: [
      'Frontend development with HTML/CSS/JS',
      'Responsive design practices',
      'Component-based UI architecture',
      'Performance optimization',
    ],
  },
  {
    company: 'NUX Software Solution',
    role: 'Cloud Computing Intern',
    duration: 'Jun 2025 – Aug 2025 · 3 months',
    location: 'Coimbatore, Tamil Nadu',
    color: 'text-cyan-400',
    border: 'border-cyan-500/25',
    bg: 'bg-cyan-500/10',
    completedLabel: 'Completed 2025',
    description: 'Practical cloud computing exposure at a Coimbatore-based software firm — provisioning and managing AWS services, deploying applications, and learning cloud architecture fundamentals.',
    learnings: [
      'AWS EC2 and S3 configuration',
      'IAM roles and policies',
      'Cloud application deployment',
      'Cloud architecture fundamentals',
    ],
  },
  {
    company: 'Bold Business Analytics',
    role: 'Data Analytics Intern',
    duration: '2025 · Completed',
    location: 'Remote',
    color: 'text-emerald-400',
    border: 'border-emerald-500/25',
    bg: 'bg-emerald-500/10',
    completedLabel: 'Completed 2025',
    description: 'Data analytics internship focused on SQL-based analysis, Power BI dashboard development, and deriving actionable business insights from raw datasets.',
    learnings: [
      'Completed SQL Capstone Project',
      'Built interactive Power BI dashboards',
      'Performed data cleaning and business analysis',
      'Generated insights using SQL and Power BI',
    ],
    skills: ['SQL', 'Power BI', 'Data Analysis'],
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

export default function Internships() {
  const [sectionRef, visible] = useIntersection()

  return (
    <section id="internships" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-80 h-80 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Internships</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Industry Experience in Web Development, Cloud Computing, and Data Analytics
          </p>
        </div>

        {/* Cards — 2 columns on large screens for 4 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {internships.map(({ company, role, duration, location, color, border, bg, completedLabel, description, learnings, skills }, i) => (
            <div
              key={company}
              className={`glass rounded-2xl p-6 border ${border} hover:-translate-y-1 hover:border-white/18 transition-all duration-300 flex flex-col ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + i * 130}ms` }}
            >
              {/* Top */}
              <div className="flex items-start justify-between mb-5">
                <div className={`w-11 h-11 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                  <Briefcase size={19} className={color} />
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/4 border border-white/8">
                  <CheckCircle2 size={12} className="text-slate-400" />
                  <span className="text-slate-400 text-xs">✓ {completedLabel}</span>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-0.5">{company}</h3>
              <p className={`${color} text-sm font-medium mb-2`}>{role}</p>
              <div className="flex items-center gap-1.5 text-slate-600 text-xs mb-1">
                <Calendar size={11} />
                <span>{duration}</span>
              </div>
              <p className="text-slate-600 text-xs mb-4">📍 {location}</p>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>

              <div className="mt-auto">
                <p className="text-slate-600 text-xs uppercase tracking-wider mb-2.5">Key Work</p>
                <ul className="space-y-1.5 mb-4">
                  {learnings.map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 size={13} className={`${color} mt-0.5 flex-shrink-0`} />
                      <span className="text-slate-400 text-xs">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags (only shown if defined) */}
                {skills && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {skills.map(skill => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1 rounded-lg border ${border} ${bg} ${color} text-xs font-medium`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-600 text-sm">
            4 Completed Internships ·{' '}
            <a href="https://www.linkedin.com/in/saravana-balaji-s-129a82350" target="_blank" rel="noopener noreferrer"
              className="text-indigo-400 hover:underline">
              View on LinkedIn ↗
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
