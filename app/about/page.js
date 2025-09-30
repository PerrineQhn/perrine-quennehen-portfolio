'use client'
import { motion } from 'framer-motion'
import { education } from '@/data/experiences'

export default function About() {
  return (
    <div className="section-padding">
      <div className="container-custom max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">À Propos de Moi</h1>
          <p className="text-xl text-gray-600">
            Passionnée par l'IA et le traitement du langage naturel
          </p>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Mon Parcours</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Bonjour ! Je suis <strong>Perrine Quennehen</strong>, ingénieure Machine Learning et Data Scientist spécialisée en 
              <strong> NLP (Natural Language Processing)</strong>. Passionnée par les technologies d'IA, particulièrement les 
              <strong> LLMs, Deep Learning et les Agents</strong>, je transforme des données textuelles complexes en solutions concrètes et innovantes.
            </p>
            <p>
              Mon parcours unique mêle <strong>expertise linguistique</strong> (formation en chinois à l'INALCO avec mention Bien) 
              et <strong>compétences techniques avancées</strong> en Machine Learning. Cette double casquette me permet d'aborder 
              les projets NLP avec une compréhension approfondie du langage, un atout rare dans le domaine.
            </p>
            <p>
              Chez <strong>Bouygues Construction</strong>, j'ai développé et fine-tuné un modèle XLM-RoBERTa pour la recherche sémantique 
              dans le BTP, améliorant la précision de <strong>+25%</strong> et réduisant le temps d'entraînement de <strong>30%</strong>. 
              J'ai également mené des analyses NLP sur des enquêtes clients, augmentant l'efficacité d'analyse de <strong>40%</strong> grâce 
              à des visualisations interactives.
            </p>
            <p>
              Auparavant, au <strong>Laboratoire MoDyCo (CNRS)</strong>, j'ai travaillé sur des projets de linguistique computationnelle, 
              notamment l'augmentation du corpus Naija Syncor et la conception d'un lexique prosodique.
            </p>
          </div>
        </motion.div>

        {/* What I Do */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Ce que je fais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold mb-2">🤖 Fine-tuning & LLMs</h3>
              <p className="text-gray-600">
                Adaptation de modèles transformers (BERT, RoBERTa) pour des tâches spécifiques avec optimisation des performances
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold mb-2">🔍 Semantic Search</h3>
              <p className="text-gray-600">
                Développement de systèmes de recherche sémantique avec embeddings et similarity matching
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold mb-2">📊 Data Analysis</h3>
              <p className="text-gray-600">
                Analyse de données textuelles, extraction de insights et visualisations interactives
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4">
              <h3 className="text-xl font-semibold mb-2">🌏 NLP Multilingue</h3>
              <p className="text-gray-600">
                Traitement du langage en français, anglais et chinois avec expertise culturelle
              </p>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="card mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Formation</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.school}</p>
                <p className="text-gray-600">{edu.location} • {edu.period}</p>
                {edu.mention && (
                  <span className="inline-block mt-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {edu.mention}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card"
        >
          <h2 className="text-3xl font-bold mb-6">Langues</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🇫🇷</div>
              <p className="font-semibold">Français</p>
              <p className="text-gray-600">Natif</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇬🇧</div>
              <p className="font-semibold">Anglais</p>
              <p className="text-gray-600">C1</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">🇨🇳</div>
              <p className="font-semibold">Chinois</p>
              <p className="text-gray-600">B2</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}