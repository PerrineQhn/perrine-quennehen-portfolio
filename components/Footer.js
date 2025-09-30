import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Perrine Quennehen</h3>
            <p className="text-gray-400">
              Ingénieure ML & Data Scientist NLP passionnée par l'innovation et les LLMs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">À Propos</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Projets</Link></li>
              <li><Link href="/experience" className="text-gray-400 hover:text-white transition-colors">Expérience</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-bold mb-4">Me Suivre</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/PerrineQhn" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/perrine-quennehen" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:perrine.quennehen@gmail.com"
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                <FiMail />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {currentYear} Perrine Quennehen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}