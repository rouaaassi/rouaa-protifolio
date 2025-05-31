"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"

export default function ScrollingImageAdvanced() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Smooth spring animations
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [1.5, 1, 0.6, 0.3]), {
    stiffness: 100,
    damping: 30,
  })

  const y = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 150, 300, 500]), {
    stiffness: 100,
    damping: 30,
  })

  // Changed to positive values to move from right to left
  const x = useSpring(useTransform(scrollYProgress, [0, 0.3, 0.6, 1], [0, 50, 150, 250]), {
    stiffness: 100,
    damping: 30,
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 0.5, 0.1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -20]) // Changed rotation direction
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [50, 25, 15])

  // Background blur effect
  const backdropBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 5, 10])

  return (
    <div ref={containerRef} className="h-[250vh] relative">
      <motion.div
        className="fixed top-1/2 right-1/4 z-30 pointer-events-none" // Changed from left-1/2 to right-1/4
        style={{
          scale,
          y,
          x,
          opacity,
          rotate,
          translateX: "25%", // Changed from -50% to 25%
          translateY: "-50%",
        }}
      >
        <motion.div
          className="relative overflow-hidden shadow-2xl"
          style={{
            borderRadius,
            backdropFilter: `blur(${backdropBlur}px)`,
          }}
        >
          {/* Animated background glow */}
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-purple-500/30 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Main profile image */}
          <motion.img
            src="/placeholder.svg?height=500&width=500"
            alt="Roua Assi - Profile"
            className="relative z-10 w-96 h-96 object-cover"
            style={{ borderRadius }}
            animate={{
              filter: [
                "brightness(1.1) contrast(1.1) saturate(1.2)",
                "brightness(1.3) contrast(1.2) saturate(1.4)",
                "brightness(1.1) contrast(1.1) saturate(1.2)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Multiple glowing borders */}
          <motion.div
            className="absolute inset-0 border-2"
            style={{ borderRadius }}
            animate={{
              borderColor: ["rgba(168, 85, 247, 0.8)", "rgba(236, 72, 153, 0.8)", "rgba(168, 85, 247, 0.8)"],
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.5)",
                "0 0 40px rgba(236, 72, 153, 0.5)",
                "0 0 20px rgba(168, 85, 247, 0.5)",
              ],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Floating particles around image */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#a855f7" : "#ec4899",
                  top: `${15 + i * 6}%`,
                  left: `${10 + i * 7}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.sin(i) * 20, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Sparkle effects */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  top: `${20 + i * 15}%`,
                  right: `${10 + i * 10}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Dynamic text that changes with scroll */}
        <motion.div
          className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2, 0.4], [1, 0.8, 0]),
            scale: useTransform(scrollYProgress, [0, 0.4], [1, 0.8]),
          }}
        >
          <motion.p
            className="text-2xl font-bold mb-2"
            animate={{
              color: ["#a855f7", "#ec4899", "#a855f7"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Roua Assi
          </motion.p>
          <motion.p
            className="text-purple-400 font-semibold"
            animate={{
              color: ["#a855f7", "#ec4899", "#a855f7"],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Creative Developer
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
