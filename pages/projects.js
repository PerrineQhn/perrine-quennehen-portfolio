import Head from "next/head";
import { projets } from "../data/portfolioData";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeYear, setActiveYear] = useState("all");
  const [openCards, setOpenCards] = useState({});

  const toggleCard = (id) => {
    setOpenCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filtrage des projets
  const filteredProjects = projets.filter((projet) => {
    const matchesType = activeFilter === "all" || projet.type === activeFilter;
    const matchesYear =
      activeYear === "all" || projet.yearInfo?.includes(activeYear);
    return matchesType && matchesYear;
  });

  // Extraction des années uniques
  const years = ["all", ...new Set(projets.map((p) => p.yearInfo).filter(Boolean))];

  return (
    <>
      <Head>
        <title>Projets - Perrine Quennehen</title>
        <meta
          name="description"
          content="Projets NLP, Machine Learning et développement de Perrine Quennehen"
        />
      </Head>

      <div className="content-section">
        <div className="content-container">
          <h2>Mes Projets</h2>
          <p style={{ textAlign: "center", marginBottom: "2rem" }}>
            Découvrez mes projets en NLP, Machine Learning et développement.
            De la recherche académique aux applications professionnelles.
          </p>

          {/* Filtres par type */}
          <div className="projects-filter">
            <button
              className={activeFilter === "all" ? "active-filter" : ""}
              onClick={() => setActiveFilter("all")}
            >
              Tous
            </button>
            <button
              className={activeFilter === "exp" ? "active-filter" : ""}
              onClick={() => setActiveFilter("exp")}
            >
              Professionnel
            </button>
            <button
              className={activeFilter === "acad" ? "active-filter" : ""}
              onClick={() => setActiveFilter("acad")}
            >
              Académique
            </button>
            <button
              className={activeFilter === "perso" ? "active-filter" : ""}
              onClick={() => setActiveFilter("perso")}
            >
              Personnel
            </button>
          </div>

          {/* Filtres par année */}
          <div className="year-filter">
            {years.map((year) => (
              <button
                key={year}
                className={activeYear === year ? "active-filter" : ""}
                onClick={() => setActiveYear(year)}
              >
                {year === "all" ? "Toutes les années" : year}
              </button>
            ))}
          </div>

          {/* Grille de projets */}
          <div className="projects-grid">
            {filteredProjects.map((projet) => (
              <div
                key={projet.id}
                className={`interactive-card ${openCards[projet.id] ? "open" : ""}`}
                onClick={() => toggleCard(projet.id)}
              >
                <div className="card-summary">
                  <div className="summary-content">
                    <div className="card-header-line">
                      <span className={`project-type-badge ${projet.type}`}>
                        {projet.type === "exp"
                          ? "Professionnel"
                          : projet.type === "acad"
                          ? "Académique"
                          : "Personnel"}
                      </span>
                      {projet.yearInfo && (
                        <span className="card-year-info">{projet.yearInfo}</span>
                      )}
                    </div>
                    <h3>{projet.titre}</h3>
                    <p className="card-tech">{projet.techno}</p>
                  </div>
                  <div className="toggle-icon">+</div>
                </div>

                <div className="card-details">
                  <p>{projet.desc}</p>
                  {projet.extra && <p>{projet.extra}</p>}
                  {projet.tags && projet.tags.length > 0 && (
                    <p>
                      <strong>Technologies :</strong> {projet.tags.join(", ")}
                    </p>
                  )}
                  {projet.lien && (
                    <p>
                      <a
                        href={projet.lien}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-detail-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {projet.lienLabel || "Voir le projet"}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <p className="no-projects-found">
              Aucun projet trouvé pour ces filtres.
            </p>
          )}
        </div>
      </div>
    </>
  );
}