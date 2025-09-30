'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi'

export default function Hero() {
  const skills = ['NLP', 'Machine Learning', 'Deep Learning', 'LLMs', 'Transformers']

  return (
    <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container-custom py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
              👋 Bonjour, je suis
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Perrine Quennehen
            </h1>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl text-gray-700 font-semibold mb-6">
              Ingénieure ML & Data Scientist NLP
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-xl">
              Passionnée par l'IA et le traitement du langage naturel, je développe des solutions innovantes en NLP et Machine Learning. 
              Experte en fine-tuning de transformers et analyse multilingue.
            </p>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Availability Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-lg text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              Disponible pour un CDI - Décembre 2025
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all hover:shadow-lg"
              >
                Voir mes projets
                <FiArrowRight className="ml-2" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-all"
              >
                Me contacter
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600 font-medium">Me suivre :</span>
              <a
                href="https://github.com/PerrineQhn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/perrine-quennehen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:perrine.quennehen@gmail.com"
                className="w-10 h-10 flex items-center justify-center bg-white border border-gray-200 hover:border-blue-600 hover:text-blue-600 rounded-lg transition-all"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Main Circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                <div className="text-center">
                  <div className="text-7xl font-bold mb-2">PQ</div>
                  <div className="text-sm opacity-90">ML Engineer</div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-2xl">🤖</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">AI/ML</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-2xl">🌏</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">FR/EN/CN</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -right-8 bg-white px-4 py-3 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="text-2xl">🚀</div>
                <div className="text-xs font-semibold text-gray-700 mt-1">NLP</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}