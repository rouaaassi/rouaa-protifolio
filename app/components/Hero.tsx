"use client"

import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react"
import Hero3D from "./Hero3D"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY
      if (scroll > 50 && scroll < 350) {
        setProgress(Math.min(1, Math.max(0, (scroll - 50) / 200)))
      } else if (scroll <= 50) {
        setProgress(0)
      } else {
        setProgress(1)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-pink-900 pt-20 relative overflow-hidden"
    >
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/963969161507"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          {/* Glowing effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg animate-pulse"></div>
          
          {/* Button */}
          <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300">
            <MessageCircle size={24} />
            <span className="font-semibold">Ask Roua'</span>
          </div>
        </div>
      </motion.a>

      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Hero3D />
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 text-center relative z-20">
        <motion.div
          className="max-w-6xl mx-auto bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          {/* Hero content with image */}
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Text content - takes 2 columns */}
            <div className="md:col-span-2 text-left">
              <motion.h1
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                Hello, I'm{" "}
                <motion.span
                  className="text-pink-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.6 }}
                >
                  Roua Assi
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-gray-300 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Front-End Web Developer passionate about creating beautiful, responsive, and user-friendly web
                applications using modern technologies.{" "}
                <span className="text-purple-400">Watch my photo journey as you scroll down!</span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
              >
                <motion.a
                  href="mailto:assirouaa25@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Send email to assirouaa25@gmail.com"
                >
                  <Mail size={20} />
                  Get In Touch
                </motion.a>
                <motion.a
                  href="/roua-cv.pdf"
                  download="Roua_Assi_CV.pdf"
                  className="border-2 border-pink-400 text-pink-400 px-6 py-3 rounded-lg hover:bg-pink-400 hover:text-black transition-colors duration-200 flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
              </motion.div>

              <motion.div
                className="flex space-x-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <motion.a
                  href="https://github.com/rouaaassi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                >
                  <Github size={32} />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/roua-assi-a43ba12b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                >
                  <Linkedin size={32} />
                </motion.a>
              </motion.div>
            </div>

            {/* Profile Image - takes 1 column */}
            <div className="md:col-span-1">
              <motion.div
                id="hero-profile-image"
                className="relative mx-auto w-80 h-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                {/* Glowing background */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* Profile image */}
                <motion.img
                  src="/book.png"
                  alt="Roua Assi - Profile"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-purple-500/50"
                  style={{ opacity: 1 - progress }}
                  animate={{
                    borderColor: ["rgba(168, 85, 247, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(168, 85, 247, 0.5)"],
                  }}
                  transition={{ duration: 0.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                />

                {/* Floating particles around image */}
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: i % 2 === 0 ? "#a855f7" : "#ec4899",
                        top: `${15 + i * 10}%`,
                        left: `${10 + i * 8}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 1, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2 + i * 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: i * 0.8,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
