"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function ScrollingImageInBox() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform values for smooth movement from hero to about section
  // Reduced the range to make the animation faster
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.4], [1.2, 0.9, 0.8]), {
    stiffness: 100,
    damping: 30,
  })

  const y = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 100, 200]), {
    stiffness: 100,
    damping: 30,
  })

  const x = useSpring(useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 50, 100]), {
    stiffness: 100,
    damping: 30,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.4], [0, 0.8, 0])
  const borderRadius = useTransform(scrollYProgress, [0, 0.3], [50, 20])

  return (
    <div ref={containerRef} className="h-[100vh] relative">
      {" "}
      {/* Reduced from 200vh to 100vh */}
      <motion.div
        className="fixed top-1/2 left-1/2 z-10" // Reduced z-index from 30 to 10
        style={{
          scale,
          y,
          x,
          opacity,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div className="relative overflow-hidden shadow-xl" style={{ borderRadius }}>
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
            className="relative z-10 w-64 h-64 object-cover"
            style={{ borderRadius }}
          />

          {/* Glowing border */}
          <motion.div
            className="absolute inset-0 border-2"
            style={{ borderRadius }}
            animate={{
              borderColor: ["rgba(168, 85, 247, 0.6)", "rgba(236, 72, 153, 0.6)", "rgba(168, 85, 247, 0.6)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
