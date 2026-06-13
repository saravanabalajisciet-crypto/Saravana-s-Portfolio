import { useEffect, useRef, useState } from 'react'
import { GitBranch, Link, Mail, Send, MapPin, MessageSquare, CheckCircle2, AlertCircle } from 'lucide-react'

const contactLinks = [
  {
    icon: Link,
    label: 'LinkedIn',
    value: 'saravana-balaji-s-129a82350',
    href: 'https://www.linkedin.com/in/saravana-balaji-s-129a82350',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/25',
  },
  {
    icon: GitBranch,
    label: 'GitHub',
    value: 'saravanabalajisciet-crypto',
    href: 'https://github.com/saravanabalajisciet-crypto',
    color: 'text-slate-300',
    bg: 'bg-white/5',
    border: 'border-white/10',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'balajisaravana88@gmail.com',
    href: 'mailto:balajisaravana88@gmail.com',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/25',
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

export default function Contact() {
  const [sectionRef, visible] = useIntersection()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-purple-600/5 blur-3xl pointer-events-none" />

      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Let's connect</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-14 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mx-auto mb-5" />
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            Open to internships, software engineering opportunities, hackathons, and collaborations. If you think I'd be a good fit — let's talk.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Left sidebar */}
          <div className={`lg:col-span-2 flex flex-col gap-4 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            {/* Available */}
            <div className="glass rounded-2xl p-5 border border-emerald-500/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-emerald-400 font-semibold text-sm">Available for opportunities</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Open to internships, part-time roles, and collaborative projects.
              </p>
            </div>

            {/* Location */}
            <div className="glass rounded-2xl p-4 border border-white/8 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center flex-shrink-0">
                <MapPin size={15} className="text-slate-500" />
              </div>
              <div>
                <p className="text-slate-600 text-xs">Location</p>
                <p className="text-slate-300 text-sm font-medium">Tamil Nadu, India</p>
              </div>
            </div>

            {/* Contact links */}
            {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-3 glass rounded-2xl p-4 border ${border} hover:border-white/18 hover:-translate-y-0.5 transition-all duration-200 group`}
              >
                <div className={`w-9 h-9 rounded-lg ${bg} border ${border} flex items-center justify-center flex-shrink-0`}>
                  <Icon size={15} className={color} />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-600 text-xs">{label}</p>
                  <p className={`text-sm font-medium ${color} truncate group-hover:underline`}>{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className={`lg:col-span-3 glass rounded-2xl p-6 sm:p-8 border border-white/8 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare size={16} className="text-indigo-400" />
              <h3 className="text-white font-semibold text-sm">Send a Message</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5" htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/4 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 mb-1.5" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/4 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5" htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} required
                  placeholder="Internship / Collaboration / Other"
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/4 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1.5" htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} required
                  placeholder="Tell me about the opportunity or project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/4 transition-colors resize-none"
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm">
                  <CheckCircle2 size={15} />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/25 text-red-400 text-sm">
                  <AlertCircle size={15} />
                  Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" disabled={status === 'sending'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/20 hover:-translate-y-0.5"
              >
                {status === 'sending'
                  ? <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  : <Send size={15} />
                }
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
