import Head from "next/head";

export default function Skills() {
  const skills = {
    nlp: [
        "Transformers (BERT, XLM-RoBERTa)",
        "SpaCy, NLTK, SPPAS",
        "Named Entity Recognition (NER)",
        "Génération de texte",
        "Embeddings & recherche sémantique",
    ],
    ml: [
        "PyTorch, TensorFlow, Scikit-learn",
        "Fine-tuning de modèles",
        "Continued Pretraining",
        "Contrastive Learning",
        "Optimisation (Optuna)",
        "MLflow (suivi d'expérimentations)",
    ],
    dev: [
        "Python (intermédiaire)", // Bon d'être honnête
        "Git, Bash",
        "FastAPI, Flask",
        "Docker",
        "C#, C++ (notions)",
    ],
    dataProcessing: [ // Nouveau nom plus clair
        "Pandas, NumPy",
        "PySpark",
        "Traitement audio (Praat, WebRTC-VAD, Whisper)",
        "Feature engineering (TF-IDF, PCA)",
        "Visualisation (Plotly, dashboards interactifs)",
    ],
    infrastructure: [
        "Databricks",
        "OpenSearch",
    ],
    };

  return (
    <>
      <Head>
        <title>Compétences - Perrine Quennehen</title>
        <meta
          name="description"
          content="Compétences techniques en NLP, Machine Learning et développement"
        />
      </Head>

      <div className="content-section">
        <div className="content-container">
          <h2>Compétences Techniques</h2>
          <p className="skills-intro">
            Expertise en NLP, Machine Learning et développement d'applications d'IA,
            avec une spécialisation en traitement multilingue.
          </p>

          <div className="skills-layout-grid">
            {/* NLP */}
            <div className="skills-section" id="domaines">
              <h3>Natural Language Processing (NLP)</h3>
              <div className="skills-group core-group">
                <ul className="skills-list-detailed">
                  {skills.nlp.map((skill, idx) => (
                    <li key={idx}>
                      <div className="skill-link">
                        <strong>{skill}</strong>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ML & DL */}
            <div className="skills-section">
              <h3>Machine Learning & Deep Learning</h3>
              <ul className="skills-list-detailed">
                {skills.ml.map((skill, idx) => (
                  <li key={idx}>
                    <div className="skill-link">
                      <strong>{skill}</strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Développement */}
            <div className="skills-section">
              <h3>Développement</h3>
              <ul className="skills-list-inline">
                {skills.dev.map((skill, idx) => (
                  <li key={idx}>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cloud */}
            <div className="skills-section" id="langages-outils">
              <h3>Cloud & Infrastructure</h3>
              <ul className="skills-list-inline">
                {skills.cloud.map((skill, idx) => (
                  <li key={idx}>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <h4>Traitement de Données</h4>
              <ul className="skills-list-inline">
                {skills.data.map((skill, idx) => (
                  <li key={idx}>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>

              <h4>Visualisation</h4>
              <ul className="skills-list-inline">
                {skills.viz.map((skill, idx) => (
                  <li key={idx}>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soft Skills */}
            <div className="skills-section" id="soft-skills">
              <h3>Compétences Transversales</h3>
              <ul className="soft-skills-list">
                <li>
                  <strong>Autonomie</strong>
                  <p>
                    Capacité à mener des projets de bout en bout, de la conception
                    à la mise en production.
                  </p>
                </li>
                <li>
                  <strong>Adaptabilité</strong>
                  <p>
                    Flexibilité face aux nouvelles technologies et aux
                    environnements de travail variés.
                  </p>
                </li>
                <li>
                  <strong>Rigueur</strong>
                  <p>
                    Attention aux détails dans le développement et la validation
                    des modèles.
                  </p>
                </li>
                <li>
                  <strong>Travail d'équipe</strong>
                  <p>
                    Collaboration efficace avec des équipes techniques et métier.
                  </p>
                </li>
              </ul>
            </div>

            {/* Langues */}
            <div className="skills-section" id="certifications">
              <h3>Langues</h3>
              <ul className="soft-skills-list">
                <li>
                  <strong>Français</strong>
                  <p>Langue maternelle</p>
                </li>
                <li>
                  <strong>Anglais</strong>
                  <p>Niveau C1 - Professionnel</p>
                </li>
                <li>
                  <strong>Chinois</strong>
                  <p>Niveau B2 - Intermédiaire avancé</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}