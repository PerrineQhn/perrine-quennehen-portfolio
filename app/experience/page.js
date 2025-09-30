'use client'
import { motion } from 'framer-motion'
import ExperienceTimeline from '@/components/ExperienceTimeline'

export default function Experience() {
  return (
    <div className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Mon Expérience</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la recherche académique en linguistique computationnelle aux applications 
            industrielles de NLP et Machine Learning
          </p>
        </motion.div>

        {/* Timeline */}
        <ExperienceTimeline />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="card max-w-2xl mx-auto bg-gradient-to-r from-primary to-secondary text-white">
            <h2 className="text-3xl font-bold mb-4">Intéressé par mon profil ?</h2>
            <p className="text-lg mb-6 opacity-90">
              Je recherche un CDI en tant qu'ingénieure ML ou data scientist NLP à partir de décembre 2025
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Me Contacter
              </a>
              <a 
                href="/cv/CV_Perrine_Quennehen.pdf" 
                download
                className="btn-secondary border-white text-white hover:bg-white hover:text-primary"
              >
                Télécharger mon CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}