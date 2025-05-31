"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ProfileImageTransition() {
  const containerRef = useRef(null)

  // Use a shorter scroll range for faster transition
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "center start"],
  })

  // Initial position (hidden)
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.3], [50, 0, 0, -50])

  return (
    <div ref={containerRef} className="h-[50vh]">
      {" "}
      {/* Very short container for quick transition */}
      <motion.div
        className="fixed top-1/2 right-1/4 z-10 transform -translate-y-1/2 translate-x-1/2 pointer-events-none"
        style={{ opacity, scale, y }}
      >
        <div className="relative">
          {/* Glowing background */}
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-lg"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Profile image */}
          <motion.img
            src="/placeholder.svg?height=300&width=300"
            alt="Roua Assi - Profile"
            className="relative z-10 w-64 h-64 object-cover rounded-full"
            animate={{
              borderColor: ["rgba(168, 85, 247, 0.6)", "rgba(236, 72, 153, 0.6)", "rgba(168, 85, 247, 0.6)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            style={{
              border: "2px solid rgba(168, 85, 247, 0.6)",
            }}
          />
        </div>
      </motion.div>
    </div>
  )
}
