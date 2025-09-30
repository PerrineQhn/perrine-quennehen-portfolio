export const projects = [
  {
    id: 1,
    title: 'Survey Topic Analysis',
    category: 'NLP',
    description: 'Analyse NLP d\'enquêtes clients dans le secteur de la construction. Extraction de thèmes et visualisation interactive des verbatims.',
    longDescription: 'Traitement et analyse de réponses ouvertes d\'enquêtes de satisfaction clients chez Bouygues Construction. Structuration par thèmes avec TF-IDF, détection d\'outliers par ACP, et génération de rapports interactifs permettant une analyse efficace des retours clients.',
    technologies: ['Python', 'Pandas', 'spaCy', 'scikit-learn', 'TF-IDF', 'PCA', 'Plotly'],
    year: 2024,
    type: 'Professionnel',
    github: 'https://github.com/PerrineQhn/survey-topic-analysis',
    results: [
      '+40% d\'efficacité d\'analyse',
      'Extraction automatique de mots-clés',
      'Rapports interactifs avec verbatims'
    ],
    image: '/images/projects/survey-analysis.png',
    featured: true
  },
  {
    id: 2,
    title: 'Model T9 to Sinogram',
    category: 'NLP',
    description: 'Système T9 prédictif pour la saisie de caractères chinois, inspiré du clavier Sogou.',
    longDescription: 'Développement d\'un système prédictif T9 pour le chinois. À partir d\'un corpus de textes, génération des séquences pinyin et T9 correspondantes pour entraîner un modèle de prédiction de caractères chinois via saisie numérique.',
    technologies: ['Python', 'NLP', 'Machine Learning', 'Chinese NLP'],
    year: 2025,
    type: 'Académique',
    github: 'https://github.com/PerrineQhn/Model_T9_to_Sinogram',
    image: '/images/projects/t9-sinogram.png',
    featured: true
  },
  {
    id: 3,
    title: 'ChatBot FastAPI',
    category: 'NLP',
    description: 'API de chatbot conversationnel développée avec FastAPI pour interactions en temps réel.',
    longDescription: 'Backend de chatbot avec FastAPI permettant des conversations en langage naturel. Intégration de techniques NLP pour la compréhension contextuelle et la génération de réponses.',
    technologies: ['Python', 'FastAPI', 'NLP', 'REST API'],
    year: 2025,
    type: 'Personnel',
    github: 'https://github.com/PerrineQhn/ChatBot_FastApi',
    image: '/images/projects/chatbot.png',
    featured: true
  },
  {
    id: 4,
    title: 'Chinese OCR',
    category: 'Deep Learning',
    description: 'Système OCR pour la reconnaissance de caractères chinois dans des documents.',
    longDescription: 'Implémentation d\'un système de reconnaissance optique de caractères spécialisé pour le chinois. Utilisation de techniques de deep learning pour la détection et reconnaissance de sinogrammes.',
    technologies: ['Python', 'Computer Vision', 'Deep Learning', 'Chinese NLP'],
    year: 2024,
    type: 'Académique',
    github: 'https://github.com/PerrineQhn/Chinese_OCR',
    image: '/images/projects/chinese-ocr.png',
    featured: false
  },
  {
    id: 5,
    title: 'MTdV Translator',
    category: 'NLP',
    description: 'Traducteur automatique développé dans le cadre du cours de Traduction Automatique et Assistée.',
    longDescription: 'Système de traduction automatique implémentant des modèles de traduction neuronale. Projet universitaire explorant différentes approches de machine translation.',
    technologies: ['Python', 'Machine Translation', 'NLP'],
    year: 2025,
    type: 'Académique',
    github: 'https://github.com/PerrineQhn/MTdVTranslator',
    image: '/images/projects/translator.png',
    featured: false
  },
  {
    id: 6,
    title: 'Chinese-French Dictionary',
    category: 'Web',
    description: 'Application dictionnaire bilingue chinois-français avec interface de recherche avancée.',
    longDescription: 'Dictionnaire bidirectionnel chinois-français développé en C#. Fonctionnalités de recherche avec support du pinyin et affichage des définitions, exemples et usages.',
    technologies: ['C#', '.NET', 'Desktop App'],
    year: 2025,
    type: 'Personnel',
    github: 'https://github.com/PerrineQhn/Chinese-French_Dictionary',
    image: '/images/projects/dictionary.png',
    featured: false
  },
  {
    id: 7,
    title: 'Voice Synthesizer',
    category: 'NLP',
    description: 'Synthétiseur vocal basé sur le traitement du signal et la phonétique. Projet M1 TAL.',
    longDescription: 'Projet de synthèse vocale développé pour le cours de Phonétique. Génération de parole artificielle à partir de texte avec manipulation de paramètres prosodiques.',
    technologies: ['Python', 'Speech Processing', 'Signal Processing'],
    year: 2024,
    type: 'Académique',
    github: 'https://github.com/PerrineQhn/voice_synthesizer',
    image: '/images/projects/voice-synth.png',
    featured: false
  },
  {
    id: 8,
    title: 'OpenNMT Translation',
    category: 'NLP',
    description: 'Traduction automatique neuronale avec OpenNMT. Projet du cours de Traduction Automatique.',
    longDescription: 'Mise en œuvre de modèles de traduction neuronale avec le framework OpenNMT. Entraînement et évaluation de systèmes de traduction automatique.',
    technologies: ['Python', 'OpenNMT', 'Neural Machine Translation'],
    year: 2024,
    type: 'Académique',
    github: 'https://github.com/PerrineQhn/OpenNMT',
    image: '/images/projects/opennmt.png',
    featured: false
  }
]

// Fonctions utilitaires pour filtrer les projets
export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects
  return projects.filter(project => project.category === category)
}

export const getProjectsByYear = (year) => {
  return projects.filter(project => project.year === year)
}

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

export const getProjectsByType = (type) => {
  if (type === 'all') return projects
  return projects.filter(project => project.type === type)
}