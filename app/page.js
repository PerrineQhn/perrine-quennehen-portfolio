'use client'
import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import SkillsSection from '@/components/SkillsSection'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Section Highlights */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-center mb-4">
              Pourquoi me choisir ?
            </h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Ingénieure ML passionnée par le NLP avec une expertise unique en traitement multilingue
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-2">Résultats Concrets</h3>
                <p className="text-gray-600">
                  +25% de précision sur la recherche sémantique, -30% de temps d'entraînement
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🌏</div>
                <h3 className="text-xl font-semibold mb-2">Expertise Multilingue</h3>
                <p className="text-gray-600">
                  Français, Anglais (C1), Chinois (B2) - Atout rare en NLP
                </p>
              </div>

              <div className="card text-center">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-2">NLP Avancé</h3>
                <p className="text-gray-600">
                  Fine-tuning, Transformers, LLMs, Semantic Search
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SkillsSection />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Discutons de votre projet</h2>
          <p className="text-xl mb-8 opacity-90">
            Disponible pour un CDI à partir de décembre 2025
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Me Contacter
          </Link>
        </div>
      </section>
    </div>
  )
}