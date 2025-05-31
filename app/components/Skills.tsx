import { Code, Database, Palette, Server } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from "./ScrollAnimations"

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js","Swiper.js (for interactive sliders)"],
    },
    {
      icon: <Palette size={32} />,
      title: "Styling & Design",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "CSS Grid", "Flexbox"],
    },
    {
      icon: <Server size={32} />,
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "NestJS", "RESTful APIs", "GraphQL"],
    },
    {
      icon: <Database size={32} />,
      title: "Database & Tools",
      skills: ["SQL", "MongoDB", "Git", "npm/yarn", "Webpack", "Vite"],
    },
    {
      icon: <Code size={32} />,
      title: "State Management",
      skills: ["Redux", "Zustand", "React Query"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Skills & Technologies</h2>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {skillCategories.map((category, index) => (
                <StaggerItem key={index}>
                  <ScaleIn delay={index * 0.1}>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-700 hover:border-pink-500 hover:transform hover:scale-105">
                      <div className="text-purple-500 mb-4">{category.icon}</div>
                      <h3 className="text-xl font-semibold text-pink-400 mb-4">{category.title}</h3>
                      <ul className="space-y-2">
                        {category.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-gray-300">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScaleIn>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
