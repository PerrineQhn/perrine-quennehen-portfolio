'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/about' },
    { name: 'Projets', path: '/projects' },
    { name: 'Expérience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          PQ
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <a 
          href="/cv/CV_Perrine_Quennehen.pdf" 
          download
          className="hidden md:block btn-primary"
        >
          Télécharger CV
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t"
        >
          <ul className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-700 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <a 
                href="/cv/CV_Perrine_Quennehen.pdf" 
                download
                className="btn-primary block text-center"
              >
                Télécharger CV
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  )
}