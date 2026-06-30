import LanguageProvider from './contexts/LanguageContext'
import { useScrollReveal } from './hooks/useScrollReveal'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

function Portfolio() {
  const scrollRef = useScrollReveal()

  return (
    <div ref={scrollRef} className="min-h-screen bg-surface">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <ScrollToTop />

    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
    </LanguageProvider>
  )
}

export default App