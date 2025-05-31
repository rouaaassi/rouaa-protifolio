"use client"

import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import MovingProfileImage from "./components/MovingProfileImage"

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative">
      <Hero />
      <MovingProfileImage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
