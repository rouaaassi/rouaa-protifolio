import { FadeInUp, SlideInLeft, SlideInRight, ParallaxContainer } from "./ScrollAnimations"
import { useEffect, useState } from "react"

export default function About() {
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
    <section id="about" className="py-20 bg-gray-900 relative">
      <ParallaxContainer offset={30}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <FadeInUp>
              <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">About Me</h2>
            </FadeInUp>

            {/* Single box containing both image and content */}
            <FadeInUp delay={0.2}>
              <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-700 shadow-2xl">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* Text content on the left - takes 2 columns */}
                  <div className="md:col-span-2 space-y-6">
                    <SlideInLeft>
                      <div>
                        <h3 className="text-3xl font-bold text-pink-400 mb-4">Roua Assi</h3>
                        <p className="text-xl text-purple-400 mb-6">Front-End Web Developer</p>

                        <div className="space-y-4">
                          <p className="text-lg text-gray-300 leading-relaxed">
                            I'm a passionate front-end web developer with expertise in modern web technologies. I love
                            creating intuitive and engaging user experiences that solve real-world problems.
                          </p>

                          <p className="text-lg text-gray-300 leading-relaxed">
                            With a strong foundation in HTML, CSS, and JavaScript, I've expanded my skills to include
                            TypeScript, React, Next.js, and various backend technologies.
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                          <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-600/30">
                            <h4 className="font-semibold text-purple-400 mb-2">Frontend Focus</h4>
                            <p className="text-gray-400 text-sm">React, Next.js, TypeScript</p>
                          </div>
                          <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-600/30">
                            <h4 className="font-semibold text-purple-400 mb-2">Backend Knowledge</h4>
                            <p className="text-gray-400 text-sm">Node.js, Express, NestJS</p>
                          </div>
                          <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-600/30">
                            <h4 className="font-semibold text-purple-400 mb-2">Styling</h4>
                            <p className="text-gray-400 text-sm">Tailwind CSS, Bootstrap, SASS</p>
                          </div>
                          <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-600/30">
                            <h4 className="font-semibold text-purple-400 mb-2">Databases</h4>
                            <p className="text-gray-400 text-sm">SQL, MongoDB</p>
                          </div>
                          <div className="bg-gray-900/50 p-4 rounded-lg border border-purple-600/30">
                            <h4 className="font-semibold text-purple-400 mb-2">Testing</h4>
                            <p className="text-gray-400 text-sm">Jest, React testing library </p>
                          </div>
                        </div>
                      </div>
                    </SlideInLeft>
                  </div>

                  {/* Image destination on the right - takes 1 column */}
                  <div className="md:col-span-1">
                    <SlideInRight>
                      <div className="relative">
                        {/* This is where the moving image will land */}
                        <div
                          id="about-image-destination"
                          className="w-full aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-full border-2 border-dashed border-purple-500/40 flex items-center justify-center relative overflow-hidden"
                        >
                          {/* Background pattern */}
                          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full"></div>
                          {/* صورة البروفايل */}
                          <img
                            src="/book.png"
                            alt="Roua Assi - Profile"
                            className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-purple-500/50 m-0"
                            style={{ opacity: progress }}
                          />
                          {/* Decorative elements */}
                          <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                          <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-1000"></div>
                        </div>
                      </div>
                    </SlideInRight>
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </ParallaxContainer>
    </section>
  )
}
