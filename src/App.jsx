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
import { ThemeProvider, useTheme } from './context/ThemeContext'

function AppInner() {
  const { theme } = useTheme()
  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        theme === 'dark'
          ? 'bg-[#0a0a0f] text-slate-200'
          : 'bg-[#f4f4f8] text-slate-800'
      }`}
    >
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

function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  )
}

export default App
