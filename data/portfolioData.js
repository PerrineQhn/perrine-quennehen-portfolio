import Link from "next/link";

export const projets = [
    {
    id: "finetuning-semantic-search",
    type: "exp", 
    yearInfo: "2025",
    titre: "Fine-tuning de Modèles & Recherche Sémantique - Bouygues Construction",
    techno: "BERT, XLM-RoBERTa, FAISS, Python",
    desc: "Développement d'un système de recherche sémantique utilisant des modèles transformers fine-tunés pour améliorer la précision de la recherche dans des corpus multilingues.",
    extra: "Fine-tuning de modèles BERT/XLM-RoBERTa sur des données spécifiques au domaine. Implémentation d'un système de recherche par similarité vectorielle avec FAISS. Optimisation des hyperparamètres pour améliorer les performances.",
    tags: [
      "BERT",
      "XLM-RoBERTa",
      "Fine-tuning",
      "FAISS",
      "Recherche sémantique",
      "Embeddings",
      "PyTorch",
      "Python"
    ],
    // Pas de lien si pas de repo
  },
  {
    id: "sentiment-analysis-stage",
    type: "exp",
    yearInfo: "2025", // Période du stage
    titre: "Analyse des Sentiments - Bouygues Construction",
    techno: "Transformers, CamemBERT, Python, NLP",
    desc: "Développement d'un système d'analyse des sentiments pour traiter automatiquement les retours clients et documents internes dans le secteur de la construction.",
    extra: "Fine-tuning de CamemBERT pour l'analyse de sentiment en français. Traitement de données textuelles du domaine de la construction. Classification multi-classes avec métriques de performance détaillées. Intégration dans un pipeline de production.",
    tags: [
      "Analyse des sentiments",
      "CamemBERT",
      "Transformers",
      "Classification",
      "NLP",
      "Python",
      "Fine-tuning",
      "Production"
    ],
  },
  {
    id: "Survey-Topic-Analysis",
    type: "perso",
    titre: "Survey Topic Analysis",
    techno: "Python, Pandas, spaCy, scikit-learn, TF-IDF, PCA, Plotly",
    yearInfo: "2024",
    desc: "Analyse NLP d'enquêtes clients dans le secteur de la construction. Extraction de thèmes et visualisation interactive des verbatims.",
    extra: "Projet développé chez Bouygues Construction pour analyser les réponses ouvertes d'enquêtes de satisfaction clients. Structuration par thèmes avec TF-IDF, détection d'outliers par ACP, et génération de rapports interactifs permettant une analyse efficace des retours clients.",
    lien: "https://github.com/PerrineQhn/survey-topic-analysis",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "Pandas", "spaCy", "scikit-learn", "NLP", "Data Science", "Plotly"],
  },
  {
    id: "Model-T9-to-Sinogram",
    type: "acad",
    titre: "Model T9 to Sinogram",
    techno: "Python, NLP, Machine Learning",
    yearInfo: "2025",
    desc: "Système T9 prédictif pour la saisie de caractères chinois, inspiré du clavier Sogou.",
    extra: "Développement d'un système prédictif T9 pour le chinois. À partir d'un corpus de textes, génération des séquences pinyin et T9 correspondantes pour entraîner un modèle de prédiction de caractères chinois via saisie numérique.",
    lien: "https://github.com/PerrineQhn/Model_T9_to_Sinogram",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "NLP", "Machine Learning", "Chinese NLP"],
  },
  {
    id: "ChatBot-FastAPI",
    type: "perso",
    titre: "ChatBot FastAPI",
    techno: "Python, FastAPI, NLP",
    yearInfo: "2025",
    desc: "API de chatbot conversationnel développée avec FastAPI pour interactions en temps réel.",
    extra: "Backend de chatbot avec FastAPI permettant des conversations en langage naturel. Intégration de techniques NLP pour la compréhension contextuelle et la génération de réponses.",
    lien: "https://github.com/PerrineQhn/ChatBot_FastApi",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "FastAPI", "NLP", "API Development"],
  },
  {
    id: "Chinese-OCR",
    type: "acad",
    titre: "Chinese OCR",
    techno: "Python, Computer Vision, Deep Learning",
    yearInfo: "2024",
    desc: "Système OCR pour la reconnaissance de caractères chinois dans des documents.",
    extra: "Implémentation d'un système de reconnaissance optique de caractères spécialisé pour le chinois. Utilisation de techniques de deep learning pour la détection et reconnaissance de sinogrammes.",
    lien: "https://github.com/PerrineQhn/Chinese_OCR",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "Computer Vision", "Deep Learning", "Chinese NLP"],
  },
  {
    id: "MTdVTranslator",
    type: "acad",
    titre: "MTdV Translator",
    techno: "Python, Machine Translation, NLP",
    yearInfo: "2025",
    desc: "Traducteur automatique développé dans le cadre du cours de Traduction Automatique et Assistée.",
    extra: "Système de traduction automatique implémentant des modèles de traduction neuronale. Projet universitaire explorant différentes approches de machine translation.",
    lien: "https://github.com/PerrineQhn/MTdVTranslator",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "Machine Translation", "NLP"],
  },
  {
    id: 6,
    type: "perso",
    titre: "Chinese-French Dictionary",
    techno: "C#, .NET",
    yearInfo: "2025",
    desc: "Application dictionnaire bilingue chinois-français avec interface de recherche avancée.",
    extra: "Dictionnaire bidirectionnel chinois-français développé en C#. Fonctionnalités de recherche avec support du pinyin et affichage des définitions, exemples et usages.",
    lien: "https://github.com/PerrineQhn/Chinese-French_Dictionary",
    lienLabel: "Voir sur GitHub",
    tags: ["C#", ".NET", "Desktop App"],
  },
  {
    id: "Voice-Synthesizer",
    type: "acad",
    titre: "Voice Synthesizer",
    techno: "Python, Speech Processing",
    yearInfo: "2024",
    desc: "Synthétiseur vocal basé sur le traitement du signal et la phonétique. Projet M1 TAL.",
    extra: "Projet de synthèse vocale développé pour le cours de Phonétique. Génération de parole artificielle à partir de texte avec manipulation de paramètres prosodiques.",
    lien: "https://github.com/PerrineQhn/voice_synthesizer",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "Speech Processing", "Signal Processing"],
  },
  {
    id: "opennmt-translation",
    type: "acad",
    titre: "OpenNMT Translation",
    techno: "Python, OpenNMT, Neural Machine Translation",
    yearInfo: "2024",
    desc: "Traduction automatique neuronale avec OpenNMT. Projet du cours de Traduction Automatique.",
    extra: "Mise en œuvre de modèles de traduction neuronale avec le framework OpenNMT. Entraînement et évaluation de systèmes de traduction automatique.",
    lien: "https://github.com/PerrineQhn/OpenNMT",
    lienLabel: "Voir sur GitHub",
    tags: ["Python", "OpenNMT", "Neural Machine Translation"],
  },
  
];

export const timeline = [
  {
    id: 1,
    cat: "exp",
    date: "Mai 2025 – Nov 2025",
    title: "Ingénieure Machine Learning - Data Scientist NLP",
    logo: "/LogoBouygues.png",
    url: "https://www.bouygues-construction.com/",
    desc: "Stage de fin d'études au LabTP de Bouygues Construction, centré sur le fine-tuning de modèles transformers pour la recherche sémantique dans le BTP.",
    details: (
      <>
        <h4>Fine-tuning de XLM-RoBERTa pour la recherche sémantique BTP</h4>
        <ul>
          <li>Pipeline de continued pretraining (MLM + contrastive learning) sur ~1M de paragraphes avec Databricks, MLflow et Optuna</li>
          <li>Prétraitement avancé (filtrage, masquage de mots-clés, gel de couches, nouveaux tokens)</li>
          <li>Création d'un dataset équilibré selon les domaines BTP</li>
          <li><strong>+25% de précision</strong> sur la recherche sémantique</li>
          <li><strong>-30% de temps d'entraînement</strong> grâce à l'optimisation des hyperparamètres</li>
        </ul>

        <h4>Analyse NLP d'enquêtes clients</h4>
        <ul>
          <li>Traitement et analyse de réponses ouvertes d'enquêtes de satisfaction</li>
          <li>Structuration par thèmes, extraction de mots-clés (TF-IDF), détection d'outliers par ACP</li>
          <li>Visualisation interactive avec intégration de verbatims</li>
          <li><strong>+40% d'efficacité d'analyse</strong></li>
        </ul>
      </>
    ),
    tags: ["Python", "NLP", "PyTorch", "Transformers", "MLflow", "Databricks"],
  },
  {
    id: 2,
    cat: "exp",
    date: "Mai 2023 – Août 2024",
    title: "Ingénieure NLP",
    logo: "/LogoCNRS.png",
    url: "https://www.cnrs.fr/",
    desc: "Stage au Laboratoire MoDyCo (CNRS) sur l'augmentation de corpus linguistiques et l'automatisation de l'annotation.",
    details: (
      <>
        <ul>
          <li>Augmentation du corpus Naija Syncor par deux, avec alignement automatique des silences et tokens transcrits</li>
          <li>Automatisation de l'annotation de fichiers TextGrid pour optimiser l'alignement audio-transcription</li>
          <li>Conception d'un lexique prosodique pour le Naija avec catégorisation linguistique via des arbres de décisions</li>
        </ul>
      </>
    ),
    tags: ["Python", "NLP", "Whisper", "SPPAS", "Praat"],
  },
  {
    id: 3,
    cat: "form",
    date: "2023 – 2025",
    title: "Master NLP - Ingénierie Multilingue",
    logo: "/LogoINALCO.png",
    url: "https://www.inalco.fr/",
    desc: "Master spécialisé en NLP et ingénierie multilingue à l'INALCO, Sorbonne Nouvelle, Paris Nanterre.",
    details: (
      <>
        <p>Formation approfondie en traitement automatique du langage naturel avec une approche multilingue.</p>
        <ul>
          <li>NLP avancé : BERT, Transformers, LLMs, NER, génération de texte</li>
          <li>Machine Learning & Deep Learning : PyTorch, TensorFlow, fine-tuning</li>
          <li>Développement : Python, FastAPI, Docker</li>
          <li>Data Processing : Pandas, NumPy, TF-IDF, PCA</li>
        </ul>
      </>
    ),
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
  },
  {
    id: 4,
    cat: "form",
    date: "2020 – 2023",
    title: "LLCER Chinois - Spécialité NLP - Mention Bien",
    logo: "/LogoINALCO.png",
    url: "https://www.inalco.fr/",
    desc: "Licence LLCER Chinois avec spécialisation en Natural Language Processing à l'INALCO.",
    details: (
      <>
        <p>Formation combinant expertise linguistique en chinois et compétences techniques en NLP.</p>
        <ul>
          <li>Maîtrise du chinois (niveau B2)</li>
          <li>Introduction au NLP et traitement automatique des langues</li>
          <li>Programmation Python pour le traitement linguistique</li>
        </ul>
      </>
    ),
    tags: ["Chinois", "NLP", "Python", "Linguistique"],
  },
];