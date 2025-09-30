import Head from "next/head";
import { timeline } from "../data/portfolioData";
import { useState } from "react";

export default function Career() {
  const [openBlocks, setOpenBlocks] = useState({});

  const toggleBlock = (id) => {
    setOpenBlocks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      <Head>
        <title>Parcours - Perrine Quennehen</title>
        <meta
          name="description"
          content="Parcours professionnel et formation de Perrine Quennehen"
        />
      </Head>

      <div className="content-section">
        <div className="content-container">
          <h2>Mon Parcours</h2>
          <p>
            De la linguistique au Machine Learning, mon parcours combine expertise
            multilingue et compétences techniques avancées en NLP et IA.
          </p>

          <div className="timeline">
            <h3 className="timeline-section-title">Expériences Professionnelles</h3>
            {timeline
              .filter((item) => item.cat === "exp")
              .map((item) => (
                <div
                  key={item.id}
                  className={`timeline-block ${openBlocks[item.id] ? "open" : ""}`}
                >
                  <div
                    className="timeline-dot"
                    onClick={() => toggleBlock(item.id)}
                  />
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h4
                      className="timeline-title"
                      onClick={() => toggleBlock(item.id)}
                    >
                      <span className="title-text">
                        {item.title}
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`Logo ${item.title}`}
                            className="timeline-logo"
                          />
                        )}
                      </span>
                      <span className="arrow"></span>
                    </h4>
                    <p>
                      <strong>{item.desc}</strong>
                    </p>
                    <div className="timeline-hidden-details">
                      {item.details}
                      {item.tags && item.tags.length > 0 && (
                        <p style={{ marginTop: "15px" }}>
                          <strong>Technologies :</strong>{" "}
                          {item.tags.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

            <h3 className="timeline-section-title" style={{ marginTop: "3rem" }}>
              Formation
            </h3>
            {timeline
              .filter((item) => item.cat === "form")
              .map((item) => (
                <div
                  key={item.id}
                  className={`timeline-block ${openBlocks[item.id] ? "open" : ""}`}
                >
                  <div
                    className="timeline-dot"
                    onClick={() => toggleBlock(item.id)}
                  />
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h4
                      className="timeline-title"
                      onClick={() => toggleBlock(item.id)}
                    >
                      <span className="title-text">
                        {item.title}
                        {item.logo && (
                          <img
                            src={item.logo}
                            alt={`Logo ${item.title}`}
                            className="timeline-logo"
                          />
                        )}
                      </span>
                      <span className="arrow"></span>
                    </h4>
                    <p>
                      <strong>{item.desc}</strong>
                    </p>
                    <div className="timeline-hidden-details">
                      {item.details}
                      {item.tags && item.tags.length > 0 && (
                        <p style={{ marginTop: "15px" }}>
                          <strong>Compétences acquises :</strong>{" "}
                          {item.tags.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}