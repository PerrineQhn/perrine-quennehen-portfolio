import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12 md:py-16">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
                PQ
              </div>
              <span className="text-xl font-bold">Perrine Quennehen</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              Ingénieure Machine Learning & Data Scientist NLP passionnée par l'innovation et les technologies d'IA.
            </p>
            <div className="inline-flex items-center px-4 py-2 bg-green-600/20 text-green-400 rounded-lg text-sm font-medium">
              🚀 Disponible pour un CDI - Décembre 2025
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-white transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                À Propos
              </Link>
              <Link href="/projects" className="block text-gray-400 hover:text-white transition-colors">
                Projets
              </Link>
              <Link href="/experience" className="block text-gray-400 hover:text-white transition-colors">
                Expérience
              </Link>
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:perrine.quennehen@gmail.com"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <FiMail size={18} />
                <span className="text-sm">perrine.quennehen@gmail.com</span>
              </a>
              <a
                href="tel:+33665619838"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <FiPhone size={18} />
                <span className="text-sm">06.65.61.98.38</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400">
                <FiMapPin size={18} />
                <span className="text-sm">Pantin, 93500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/PerrineQhn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/perrine-quennehen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:perrine.quennehen@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-lg transition-all"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {currentYear} Perrine Quennehen. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}