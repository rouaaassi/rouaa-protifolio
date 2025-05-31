import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ScrollProgress } from "./components/ScrollAnimations"
import { FloatingShapes } from "./components/FloatingElements"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Roua Assi - Front-End Developer",
  description:
    "Portfolio of Roua Assi, a skilled front-end web developer specializing in React, Next.js, and modern web technologies.",
  keywords: "front-end developer, React, Next.js, TypeScript, web development, portfolio",
  authors: [{ name: "Roua Assi" }],
  openGraph: {
    title: "Roua Assi - Front-End Developer",
    description: "Portfolio of Roua Assi, a skilled front-end web developer",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-white`}>
        <Toaster />
        <ScrollProgress />
        <FloatingShapes />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
