"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export default function MovingProfileImage() {
  const [show, setShow] = useState(false)
  const [progress, setProgress] = useState(0)
  const [coords, setCoords] = useState({ start: { top: 0, left: 0 }, end: { top: 0, left: 0 } })

  // حساب الإحداثيات بدقة عند التحميل
  useEffect(() => {
    function updateCoords() {
      const heroImg = document.getElementById("hero-profile-image")
      const aboutImg = document.getElementById("about-image-destination")
      if (heroImg && aboutImg) {
        const heroRect = heroImg.getBoundingClientRect()
        const aboutRect = aboutImg.getBoundingClientRect()
        setCoords({
          start: {
            top: heroRect.top + heroRect.height / 2 - 64 + window.scrollY,
            left: heroRect.left + heroRect.width / 2 - 64 + window.scrollX,
          },
          end: {
            top: aboutRect.top + aboutRect.height / 2 - 64 + window.scrollY,
            left: aboutRect.left + aboutRect.width / 2 - 64 + window.scrollX,
          },
        })
      }
    }
    updateCoords()
    window.addEventListener("resize", updateCoords)
    window.addEventListener("scroll", updateCoords)
    return () => {
      window.removeEventListener("resize", updateCoords)
      window.removeEventListener("scroll", updateCoords)
    }
  }, [])

  // متى تظهر الصورة المتحركة
  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY
      if (scroll > 50 && scroll < 350) setShow(true)
      else setShow(false)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // نسبة الحركة
  useEffect(() => {
    const onScroll = () => {
      const scroll = window.scrollY
      if (scroll > 50 && scroll < 350) {
        setProgress(Math.min(1, Math.max(0, (scroll - 50) / 200)))
      } else {
        setProgress(0)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const top = coords.start.top + (coords.end.top - coords.start.top) * progress
  const left = coords.start.left + (coords.end.left - coords.start.left) * progress

  if (!show) return null

  return (
    <motion.img
      src="/book.png"
      alt="Roua Assi - Profile"
      style={{
        position: "fixed",
        top,
        left,
        width: 128,
        height: 128,
        borderRadius: "50%",
        border: "4px solid #a855f7",
        zIndex: 1000,
        boxShadow: "0 0 32px #a855f7aa",
        pointerEvents: "none"
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    />
  )
}
