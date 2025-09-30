import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Perrine Quennehen - Ingénieure ML & Data Scientist NLP</title>
        <meta
          name="description"
          content="Portfolio de Perrine Quennehen, spécialisée en NLP et Machine Learning"
        />
      </Head>

      <div className={styles.heroContainer}>
        <div className={styles.heroGrid}>
          {/* Colonne de gauche */}
          <div className={styles.leftColumn}>
            <h1 className={styles.heroTitle}>Perrine Quennehen</h1>
            <div className={styles.animatedLine}></div>
            <p className={styles.heroSubtitle}>
              Ingénieure Machine Learning | Data Scientist NLP
            </p>
            <p className={styles.heroTagline}>
              Passionnée par l'IA et le traitement du langage naturel, je développe 
              des solutions innovantes en NLP et Machine Learning avec une expertise 
              unique en traitement multilingue.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/projects" className="cta-button primary">
                Découvrir mes projets
              </Link>
              <Link href="/career" className="cta-button secondary">
                Consulter mon parcours
              </Link>
            </div>
          </div>

          {/* Colonne de droite */}
          <div className={styles.rightColumn}>
            <div className={styles.infoCardsContainer}>
              {/* Carte Dernière Expérience */}
              <Link href="/career" className={styles.cardLink}>
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitleWrapper}>
                      <h3>Dernière Expérience</h3>
                      <div className={styles.arrowIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                    <p>
                      Ingénieure ML chez <strong>Bouygues Construction</strong>
                    </p>
                  </div>
                </div>
              </Link>

              {/* Carte Objectif */}
              <div className={`${styles.infoCard} ${styles.highlightCard}`}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h3>Objectif</h3>
                  <p>
                    En recherche active d'un <strong>CDI en IA / Data Science</strong> pour 
                    Décembre 2025.
                  </p>
                </div>
              </div>

              {/* Carte Compétences Clés */}
              <Link href="/skills" className={styles.cardLink}>
                <div className={styles.infoCard}>
                  <div className={styles.iconWrapper}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div className={styles.cardContent}>
                    <div className={styles.cardTitleWrapper}>
                      <h3>Expertise</h3>
                      <div className={styles.arrowIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </div>
                    </div>
                    <p>
                      <strong>NLP • Transformers • Fine-tuning • LLMs</strong>
                    </p>
                  </div>
                </div>
              </Link>

              {/* Carte Atout */}
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <h3>Atout Différenciant</h3>
                  <p>
                    Trilingue <strong>FR / EN / CN (B2)</strong> - Expertise rare en NLP multilingue
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}