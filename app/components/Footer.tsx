import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-pink-400">Roua Assi</h3>
              <p className="text-gray-400 leading-relaxed">
                Front-End Web Developer passionate about creating beautiful and functional web experiences.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-purple-400">Connect With Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/rouaaassi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/roua-assi-a43ba12b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:assirouaa25@gmail.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} Roua Assi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
