'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'

export default function Hero() {
  const roles = ['NLP Engineer', 'Machine Learning', 'Deep Learning', 'LLMs Expert']

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50 min-h-[90vh] flex items-center">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-semibold mb-2">👋 Bonjour, je suis</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Perrine Quennehen
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Ingénieure Machine Learning | Data Scientist NLP
            </h2>
            
            {/* Animated Roles */}
            <div className="flex flex-wrap gap-3 mb-8">
              {roles.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                  className="bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                >
                  {role}
                </motion.span>
              ))}
            </div>

            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Passionnée par l'IA et le traitement du langage naturel, je développe des solutions innovantes 
              en NLP et Machine Learning. Experte en fine-tuning de transformers et analyse de données multilingues.
            </p>

            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full mb-8"
            >
              🚀 Disponible pour un CDI - Décembre 2025
            </motion.div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="/projects" className="btn-primary">
                Voir mes projets
              </Link>
              <Link href="/contact" className="btn-secondary">
                Me Contacter
              </Link>
              <a 
                href="/cv/CV_Perrine_Quennehen.pdf" 
                download
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload />
                Télécharger CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="https://github.com/PerrineQhn" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FiGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/perrine-quennehen" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FiLinkedin />
              </a>
              <a 
                href="mailto:perrine.quennehen@gmail.com"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FiMail />
              </a>
            </div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Placeholder - À remplacer par ta photo */}
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-9xl">
                PQ
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
              >
                🤖 AI/ML
              </motion.div>
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg"
              >
                🌏 FR/EN/CN
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}