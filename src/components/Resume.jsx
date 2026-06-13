import { useEffect, useRef, useState } from 'react'
import { Download, Trophy, Briefcase, Code2, GraduationCap, Award, CheckCircle2, FileText } from 'lucide-react'

const highlights = [
  { icon: Trophy,        color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20',   text: 'MLH Gemini Hack Day 2026 — 2nd Place' },
  { icon: Code2,         color: 'text-orange-400', bg: 'bg-orange-500/10 border-orange-500/20',   text: 'Top 8 / 40 Teams — AlgoMentor AI' },
  { icon: Briefcase,     color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20',   text: '2 Industry Internships (Cognifyz & Future Interns)' },
  { icon: Code2,         color: 'text-purple-400', bg: 'bg-purple-500/10 border-purple-500/20',   text: 'Full Stack — React, Flask, Node.js' },
  { icon: GraduationCap, color: 'text-cyan-400',   bg: 'bg-cyan-500/10 border-cyan-500/20',       text: 'B.E CSE — CGPA 8.26 · CIET, Coimbatore' },
  { icon: Award,         color: 'text-emerald-400',bg: 'bg-emerald-500/10 border-emerald-500/20', text: '7 Certifications — NPTEL, Google Cloud' },
]

const certifications = [
  'NPTEL – Strength & Conditioning (Elite + Gold)',
  'NPTEL – Basics of Python (Elite)',
  'NPTEL – Blockchain and Its Applications',
  'Digital Transformation with Google Cloud',
  'Google Cloud Certified Prompt Engineering Guide',
  'HTML5 with JavaScript & CSS3',
  'Software Testing for Beginners',
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

export default function Resume() {
  const [sectionRef, visible] = useIntersection()

  return (
    <section id="resume" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-purple-600/4 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-indigo-600/4 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">CV</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-md mx-auto text-sm">
            B.E Computer Science Engineering student with hands-on project and internship experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left: Resume preview card */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="glass rounded-2xl border border-white/8 overflow-hidden">

              {/* Header strip */}
              <div className="bg-gradient-to-r from-indigo-500/12 to-purple-500/8 border-b border-white/5 px-6 py-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-base">SB</span>
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg leading-tight">Saravana Balaji S</p>
                    <p className="text-indigo-300 text-xs font-medium">Aspiring Full Stack Developer & Data Analyst</p>
                    <p className="text-slate-500 text-xs mt-0.5">Coimbatore, Tamil Nadu · balajisaravana88@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <GraduationCap size={13} className="text-cyan-400" />
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Education</span>
                  </div>
                  <div className="pl-5">
                    <p className="text-slate-300 text-sm font-medium">B.E Computer Science and Engineering</p>
                    <p className="text-slate-500 text-xs">Coimbatore Institute of Engineering and Technology · CGPA: 8.26</p>
                    <p className="text-slate-600 text-xs">2024 – Present</p>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Code2 size={13} className="text-purple-400" />
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Skills</span>
                  </div>
                  <div className="pl-5 space-y-1.5">
                    {[
                      { label: 'Programming', val: 'Java, Python, JavaScript, SQL' },
                      { label: 'Frontend',    val: 'HTML5, CSS3, React' },
                      { label: 'Backend',     val: 'Spring Boot, REST APIs, Node.js' },
                      { label: 'Cloud',       val: 'AWS EC2, S3, IAM' },
                      { label: 'Tools',       val: 'Git, GitHub, VS Code, Vercel' },
                    ].map(({ label, val }) => (
                      <div key={label} className="flex gap-2 text-xs">
                        <span className="text-slate-500 font-medium w-28 flex-shrink-0">{label}:</span>
                        <span className="text-slate-400">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Briefcase size={13} className="text-indigo-400" />
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Experience</span>
                  </div>
                  <div className="pl-5 space-y-2">
                    {[
                      { role: 'Web Developer Intern',        company: 'Future Interns',        desc: 'Frontend-focused — HTML, CSS, JS, responsive UI' },
                      { role: 'Frontend Developer Intern',   company: 'Cognifyz Technologies', desc: 'Responsive interfaces using HTML, CSS, JavaScript' },
                    ].map(({ role, company, desc }) => (
                      <div key={company}>
                        <p className="text-slate-300 text-xs font-semibold">{role} — <span className="text-indigo-400">{company}</span></p>
                        <p className="text-slate-600 text-xs">{desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Projects */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <FileText size={13} className="text-emerald-400" />
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Projects</span>
                  </div>
                  <div className="pl-5 space-y-1.5">
                    {[
                      'VisualForge AI — Google Gemini · DSA/DBMS/TOC Visualizer',
                      'AlgoMentor AI — Real-time algorithm learning · Top 8/40',
                      'Multilingual Mandi — Node.js · AI negotiation platform',
                      'Customer Segmentation — K-Means ML · Python/Pandas',
                      'BMW Sales Dashboard — Power BI · KPIs & filters',
                      'SQL Capstone Project — MySQL · Node.js · CRUD',
                    ].map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={11} className="text-emerald-400/60 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-500 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <Trophy size={13} className="text-yellow-400" />
                    <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider">Achievements</span>
                  </div>
                  <div className="pl-5 space-y-1.5">
                    {[
                      '2nd Place — Gemini Hack Day · TrishulX & MLH',
                      'Top 8 Finalist among 40 teams — national hackathon',
                    ].map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={11} className="text-yellow-400/60 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-500 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Fade out bottom */}
              <div className="h-10 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
            </div>
          </div>

          {/* Right: highlights + certifications + download */}
          <div className={`lg:col-span-2 flex flex-col gap-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>

            {/* Quick highlights */}
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Quick Highlights</p>
              <div className="space-y-2.5">
                {highlights.map(({ icon: Icon, color, bg, text }) => (
                  <div key={text} className={`flex items-center gap-3 rounded-xl p-3 border ${bg}`}>
                    <div className={`w-7 h-7 rounded-lg ${bg} border flex items-center justify-center flex-shrink-0`}>
                      <Icon size={13} className={color} />
                    </div>
                    <span className="text-slate-400 text-xs leading-snug">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">Certifications</p>
              <div className="glass rounded-xl border border-white/8 p-4 space-y-2">
                {certifications.map(cert => (
                  <div key={cert} className="flex items-start gap-2">
                    <Award size={11} className="text-indigo-400/70 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-500 text-xs leading-snug">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Download button */}
            <a
              href="/resume.pdf"
              download="Saravana_Balaji_Resume.pdf"
              className="flex items-center justify-center gap-2.5 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:from-indigo-600 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
