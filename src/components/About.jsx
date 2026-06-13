import { useEffect, useRef, useState } from 'react'
import galleryPhoto1 from '../assets/photos/photo1.jpg'
import galleryPhoto2 from '../assets/photos/photo2.jpg'
import galleryPhoto3 from '../assets/photos/certificate.jpg'

const galleryPhotos = [
  { src: galleryPhoto1, alt: 'Saravana at hackathon – Coimbatore' },
  { src: galleryPhoto2, alt: 'Late-night coding session' },
  { src: galleryPhoto3, alt: 'MLH Gemini Hack Day certificate' },
]

const highlights = [
  {
    emoji: '💻',
    color: 'border-indigo-500/25 bg-indigo-500/5',
    label: 'Full Stack Development',
    desc: 'React on the frontend, Java Spring Boot on the backend. Building complete web applications end to end.',
  },
  {
    emoji: '☁️',
    color: 'border-cyan-500/25 bg-cyan-500/5',
    label: 'Cloud Computing',
    desc: 'Hands-on with AWS through internship at NUX Software Solution — EC2, S3, IAM, and cloud deployments.',
  },
  {
    emoji: '🤖',
    color: 'border-purple-500/25 bg-purple-500/5',
    label: 'AI & Data Analytics',
    desc: 'Built VisualForge AI and AlgoMentor AI using Google Gemini. Exploring data analytics with Python and ML.',
  },
  {
    emoji: '🏆',
    color: 'border-yellow-500/25 bg-yellow-500/5',
    label: 'Hackathons',
    desc: 'MLH 2nd Place with VisualForge AI. Top 8/40 with AlgoMentor AI. Rapid prototyping and team collaboration.',
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

export default function About() {
  const [sectionRef, visible] = useIntersection()
  const loopPhotos = [...galleryPhotos, ...galleryPhotos]

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Background</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto" />
        </div>

        {/* Bio */}
        <div className={`max-w-3xl mx-auto mb-14 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass rounded-2xl p-8 border border-white/8 space-y-4">
            <p className="text-slate-300 text-base leading-relaxed">
              I'm <span className="text-white font-semibold">Saravana Balaji S</span>, a Computer Science Engineering student from Coimbatore, Tamil Nadu. I got into programming because I wanted to build things — and that curiosity is still what drives me.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I started with small projects, then gradually moved into hackathons where I had to build real working software under time pressure. Winning 2nd place at the MLH Gemini Hack Day 2026 wasn't planned — it happened because I kept showing up, building, and learning from each attempt.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I've completed two web development internships and currently doing a cloud computing internship — each one taught me something different about how real software is built and maintained. I don't know everything yet, but I pick things up fast and I don't stop until I understand them.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              Right now I'm working on getting stronger in Data Structures &amp; Algorithms, Spring Boot, and AWS — while continuing to build projects that solve actual problems.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I'm looking for opportunities where I can contribute, learn from experienced engineers, and keep growing as a developer.
            </p>
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {highlights.map(({ emoji, color, label, desc }, i) => (
            <div
              key={label}
              className={`rounded-2xl p-5 border ${color} hover:-translate-y-1 transition-all duration-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              <div className="text-2xl mb-3">{emoji}</div>
              <h3 className="text-white font-semibold text-sm mb-1.5">{label}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Photo gallery */}
        <div className={`transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-center text-slate-600 text-xs uppercase tracking-widest mb-5">My Journey in Photos</p>
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-4 animate-scroll-gallery"
              style={{ width: `${loopPhotos.length * 276}px` }}
            >
              {loopPhotos.map((p, i) => (
                <div key={i} className="w-64 h-44 flex-shrink-0 rounded-xl overflow-hidden border border-white/8">
                  <img src={p.src} alt={p.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
