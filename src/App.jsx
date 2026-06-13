import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Internships from './components/Internships'
import Projects from './components/Projects'
import Journey from './components/Journey'
import CurrentlyLearning from './components/CurrentlyLearning'
import GitHubStats from './components/GitHubStats'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0a0a0f] text-slate-200 min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Internships />
        <Projects />
        <Journey />
        <CurrentlyLearning />
        <GitHubStats />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
