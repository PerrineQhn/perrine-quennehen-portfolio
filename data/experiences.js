export const experiences = [
  {
    id: 1,
    title: 'Ingénieure Machine Learning - Data Scientist NLP',
    company: 'Bouygues Construction',
    location: 'Guyancourt (78)',
    period: 'Mai 2025 - Nov 2025',
    type: 'Stage',
    description: 'Stage de fin d\'études au LabTP',
    achievements: [
      {
        title: 'Fine-tuning de XLM-RoBERTa pour la recherche sémantique BTP',
        description: 'Pipeline de continued pretraining (MLM + contrastive learning) sur ~1M de paragraphes avec Databricks, MLflow et Optuna',
        results: [
          '+25% de précision sur la recherche sémantique',
          '-30% de temps d\'entraînement grâce à l\'optimisation des hyperparamètres'
        ],
        technologies: ['Python', 'PySpark', 'Databricks', 'OpenSearch', 'Plotly', 'MLflow', 'Transformers', 'Docker']
      },
      {
        title: 'Analyse NLP d\'enquêtes clients',
        description: 'Traitement et analyse de réponses ouvertes d\'enquêtes de satisfaction dans le secteur de la construction',
        results: [
          '+40% d\'efficacité d\'analyse grâce à la visualisation interactive',
          'Structuration par thèmes et extraction de mots-clés (TF-IDF)',
          'Détection d\'outliers par ACP'
        ],
        technologies: ['Python', 'Pandas', 'spaCy', 'Numpy', 'scikit-learn', 'Plotly']
      }
    ],
    skills: ['Autonomie', 'Capacité d\'adaptation', 'Rigueur', 'Travail d\'équipe']
  },
  {
    id: 2,
    title: 'Ingénieure NLP',
    company: 'Laboratoire MoDyCo (CNRS)',
    location: 'Nanterre (92)',
    period: 'Mai 2023 - Août 2024',
    type: 'Stage',
    description: 'Recherche en linguistique computationnelle',
    achievements: [
      {
        title: 'Augmentation du corpus Naija Syncor',
        description: 'Doublement du corpus avec alignement automatique des silences et tokens transcrits',
        results: [
          'Amélioration de la couverture des données linguistiques',
          'Automatisation de l\'annotation de fichiers TextGrid'
        ],
        technologies: ['Python', 'SPPAS', 'Whisper', 'Praat', 'NLP']
      },
      {
        title: 'Conception d\'un lexique prosodique pour le Naija',
        description: 'Catégorisation linguistique via des arbres de décisions',
        results: [
          'Structuration des données pour analyses avancées'
        ],
        technologies: ['Python', 'Decision Trees', 'Linguistic Analysis']
      }
    ],
    skills: ['Autonomie', 'Méthodologie', 'Proactivité']
  }
]

export const education = [
  {
    degree: 'Master NLP - Ingénierie Multilingue',
    school: 'INALCO, Sorbonne Nouvelle, Paris Nanterre',
    location: 'Paris, Nanterre',
    period: 'Sep 2023 - Déc 2025',
    status: 'En cours'
  },
  {
    degree: 'LLCER Chinois - Spécialité NLP',
    school: 'INALCO',
    location: 'Paris',
    period: 'Sep 2020 - Juin 2023',
    mention: 'Mention Bien',
    status: 'Obtenu'
  }
]