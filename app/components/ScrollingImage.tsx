"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function ScrollingImage() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Transform values based on scroll progress
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 0.8, 0.4])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, 200, 400])
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, -100, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 1, 0.8, 0.3])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15])
  const borderRadius = useTransform(scrollYProgress, [0, 0.5, 1], [50, 30, 20])

  return (
    <div ref={containerRef} className="h-[200vh] relative">
      <motion.div
        className="fixed top-1/2 left-1/2 z-20 pointer-events-none"
        style={{
          scale,
          y,
          x,
          opacity,
          rotate,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div className="relative overflow-hidden shadow-2xl" style={{ borderRadius }}>
          {/* Main profile image */}
          <motion.img
            src="/placeholder.svg?height=400&width=400"
            alt="Roua Assi - Profile"
            className="w-80 h-80 object-cover"
            initial={{ filter: "brightness(1.1) contrast(1.1)" }}
            animate={{
              filter: [
                "brightness(1.1) contrast(1.1)",
                "brightness(1.2) contrast(1.2)",
                "brightness(1.1) contrast(1.1)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Glowing border effect */}
          <motion.div
            className="absolute inset-0 border-4 border-purple-500/50"
            style={{ borderRadius }}
            animate={{
              borderColor: ["rgba(168, 85, 247, 0.5)", "rgba(236, 72, 153, 0.5)", "rgba(168, 85, 247, 0.5)"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          {/* Floating particles around image */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-pink-400 rounded-full"
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${10 + i * 8}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 1, 0.3],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Text that appears with the image */}
        <motion.div
          className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0]) }}
        >
          <motion.p
            className="text-purple-400 font-semibold text-lg"
            animate={{
              color: ["#a855f7", "#ec4899", "#a855f7"],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            Front-End Developer
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  )
}
