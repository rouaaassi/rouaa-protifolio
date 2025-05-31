import { ExternalLink, Github } from "lucide-react"
import { FadeInUp, StaggerContainer, StaggerItem, ScaleIn } from "./ScrollAnimations"

export default function Projects() {
  const projects = [
    {
      title: "Express Management Platform",
      description:
        "Express Syria is a modern import and export platform designed to help individuals and businesses easily manage shipments, track orders, and connect with reliable transport services. The website offers a user-friendly interface to place orders, view delivery status, manage  drivers, and generate detailed reports — all in one place.",
      image: "/express.png",
      technologies: ["React", "Node.js", "Express", "Redux", "Tailwind", "Material UI"],
      liveUrl: "https://import-and-export.vercel.app/",
      githubUrl: "https://github.com/rouaaassi/import-and-export",
    },
    {
      title: "MovieFlix Website , your fav is here",
      description:
        "An interactive platform that allows you to explore and view detailed information about any movie with ease.Search for your favorite movies, discover new releases, and browse by genre or rating.Each movie comes with trailers, cast details, reviews, and more in one convenient place. this platform makes movie discovery fun and simple.",
      image: "/movie.png",
      technologies: ["React.js", "TypeScript", "MongoDB", "Tailwind CSS", "Movie API"],
      liveUrl: "https://movie-project-git-main-roua-alassis-projects.vercel.app",
      githubUrl: "https://github.com/rouaaassi/MovieProject",
    },
    {
      title: "Problem Solver",
      description:
        "A modern website that helps you solve programming problems with ease.It offers a wide range of coding challenges for all levels, from beginner to advanced.You can practice and learn new concepts.Perfect for students, developers, and anyone looking to improve their coding skills.",
      image: "/problem.png",
      technologies: ["React", "TypeScript", "Chart.js", "Bootstrap","firebase","cloudinary"],
      liveUrl: "https://problem-sigma.vercel.app",
      githubUrl: "https://github.com/rouaaassi/problem",
    },
    {
      title: "TransLive Video Streams",
      description:
        "TransLive is an online platform that translates videos into any language you choose. Just upload a video, select your target language, and TransLive will automatically generate subtitles or voice translations, making your content accessible to a global audience.",
      image: "/trans.png",
      technologies: ["Next.js", "TypeScript", "Open AI API", "Chart.js", "Tailwind"],
      liveUrl: "https://v0-build-website-mocha.vercel.app/",
      githubUrl: "https://github.com/rouaaassi/trans-live-main",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInUp>
            <h2 className="text-4xl font-bold text-center text-pink-400 mb-12">Featured Projects</h2>
          </FadeInUp>

          <StaggerContainer staggerDelay={0.3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <StaggerItem key={index}>
                  <ScaleIn delay={index * 0.2}>
                    <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-purple-700 hover:border-pink-500 hover:transform hover:scale-105">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-68 object-container"
                      />

                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                          {project.title === "Express Management Platform" && (
                            <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full
                              animate-pulse hover:scale-110 transition-all duration-300
                              shadow-[0_0_15px_rgba(22,163,74,0.5)] hover:shadow-[0_0_20px_rgba(22,163,74,0.7)]
                              cursor-pointer">
                              Active
                            </span>
                          )}
                        </div>

                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-purple-900 text-purple-300 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex space-x-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors duration-200"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors duration-200"
                          >
                            <Github size={16} />
                            Code
                          </a>
                        </div>
                      </div>
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
