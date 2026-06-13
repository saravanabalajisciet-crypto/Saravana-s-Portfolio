import { useEffect, useRef, useState } from 'react'
import { GitBranch, ExternalLink, Star, GitFork, Code2 } from 'lucide-react'

const repos = [
  { name: 'VisualForge-AI',              lang: 'JavaScript', stars: 0, desc: 'AI-powered CS learning simulator — MLH 2nd Place' },
  { name: 'AlgoMentor-AI',               lang: 'Python',     stars: 0, desc: 'Real-time algorithm learning platform — Top 8/40' },
  { name: 'Multilingual-mandi',          lang: 'JavaScript', stars: 0, desc: 'AI negotiation platform for Indian vendors' },
  { name: 'Customer-Segmentation-Analysis', lang: 'Python',  stars: 1, desc: 'K-Means clustering from scratch with NumPy' },
  { name: 'Aadhar-Analysis',             lang: 'Python',     stars: 1, desc: 'State-wise Aadhaar enrolment analytics' },
]

const langColors = {
  JavaScript: 'bg-yellow-400',
  Python:     'bg-blue-400',
  TypeScript: 'bg-blue-500',
  HTML:       'bg-orange-400',
  CSS:        'bg-purple-400',
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

export default function GitHubStats() {
  const [sectionRef, visible] = useIntersection()

  return (
    <section id="github" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-indigo-600/4 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Open Source</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            All projects are open source and available on GitHub.
          </p>
        </div>

        {/* Stats row */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: '5+',  label: 'Repositories',        icon: GitBranch, color: 'text-indigo-400' },
            { value: '📂',  label: 'Open Source Projects', icon: Star,      color: 'text-yellow-400' },
            { value: 'JS',  label: 'Top Language 1',       icon: Code2,     color: 'text-yellow-300' },
            { value: 'Py',  label: 'Top Language 2',       icon: Code2,     color: 'text-blue-400'   },
          ].map(({ value, label, icon: Icon, color }) => (
            <div key={label} className="glass rounded-2xl p-5 border border-white/8 text-center hover:-translate-y-0.5 transition-all duration-200">
              <Icon size={18} className={`${color} mx-auto mb-2`} />
              <div className={`text-2xl font-bold ${color}`}>{value}</div>
              <div className="text-slate-600 text-xs mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Top Languages */}
        <div className={`glass rounded-2xl p-6 border border-white/8 mb-8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-400 text-sm font-semibold mb-4">Top Languages</p>
          <div className="flex items-center gap-0 h-3 rounded-full overflow-hidden mb-4">
            <div className="bg-yellow-400 h-full" style={{ width: '55%' }} title="JavaScript 55%" />
            <div className="bg-blue-400 h-full"   style={{ width: '38%' }} title="Python 38%" />
            <div className="bg-orange-400 h-full" style={{ width: '7%' }}  title="HTML 7%" />
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: 'JavaScript', pct: '55%', color: 'bg-yellow-400' },
              { lang: 'Python',     pct: '38%', color: 'bg-blue-400' },
              { lang: 'HTML/CSS',   pct: '7%',  color: 'bg-orange-400' },
            ].map(({ lang, pct, color }) => (
              <div key={lang} className="flex items-center gap-2">
                <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                <span className="text-slate-400 text-xs">{lang}</span>
                <span className="text-slate-600 text-xs">{pct}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent repos */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-slate-500 text-xs uppercase tracking-widest mb-4">Recent Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {repos.map((r, i) => (
              <a
                key={r.name}
                href={`https://github.com/saravanabalajisciet-crypto/${r.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass rounded-xl p-4 border border-white/8 hover:border-indigo-500/30 hover:-translate-y-0.5 transition-all duration-200 group ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${400 + i * 60}ms` }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <GitBranch size={13} className="text-slate-500 group-hover:text-indigo-400 transition-colors" />
                    <span className="text-white text-xs font-semibold truncate group-hover:text-indigo-300 transition-colors">
                      {r.name}
                    </span>
                  </div>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed mb-3">{r.desc}</p>
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${langColors[r.lang] || 'bg-slate-500'}`} />
                  <span className="text-slate-600 text-xs">{r.lang}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center transition-all duration-700 delay-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/saravanabalajisciet-crypto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/12 text-slate-300 text-sm font-medium hover:text-white hover:border-white/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <GitBranch size={15} />
            View GitHub Profile ↗
          </a>
        </div>

      </div>
    </section>
  )
}
