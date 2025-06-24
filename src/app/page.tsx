import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import LanguageToggle from '@/components/LanguageToggle'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <LanguageToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
