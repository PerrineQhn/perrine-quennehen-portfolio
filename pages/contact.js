import Head from "next/head";
import ContactForm from "../components/ContactForm";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Perrine Quennehen</title>
        <meta
          name="description"
          content="Contactez Perrine Quennehen pour des opportunités professionnelles"
        />
      </Head>

      <div className="content-section">
        <div className="content-container">
          <h2>Me Contacter</h2>
          <p className="contact-intro">
            Disponible pour un CDI à partir de décembre 2025. N'hésitez pas à me
            contacter pour discuter d'opportunités professionnelles ou de projets
            en NLP et Machine Learning.
          </p>

          <div className="contact-grid">
            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon">
                <FiMail size={50} className="svg-icon" />
              </div>
              <h3>Email</h3>
              <p>Pour toute demande professionnelle</p>
              <div className="email-container">
                <a
                  href="mailto:perrine.quennehen@gmail.com"
                  className="email-link"
                >
                  perrine.quennehen@gmail.com
                </a>
              </div>
            </div>

            {/* Téléphone */}
            <div className="contact-card">
              <div className="contact-icon">
                <FiPhone size={50} className="svg-icon" />
              </div>
              <h3>Téléphone</h3>
              <p>Disponible pour un échange</p>
              <a href="tel:+33665619838" className="contact-link">
                06.65.61.98.38
              </a>
            </div>

            {/* LinkedIn */}
            <div className="contact-card">
              <div className="contact-icon">
                <FiLinkedin size={50} className="svg-icon" />
              </div>
              <h3>LinkedIn</h3>
              <p>Mon profil professionnel</p>
              <a
                href="https://www.linkedin.com/in/perrine-quennehen"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Voir mon profil
              </a>
            </div>

            {/* GitHub */}
            <div className="contact-card">
              <div className="contact-icon">
                <FiGithub size={50} className="svg-icon" />
              </div>
              <h3>GitHub</h3>
              <p>Mes projets open source</p>
              <a
                href="https://github.com/PerrineQhn"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Voir mes projets
              </a>
            </div>
          </div>

          {/* Localisation */}
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <FiMapPin size={30} style={{ marginBottom: "0.5rem" }} />
            <p>
              <strong>Localisation :</strong> Pantin, 93500
            </p>
          </div>

          {/* Formulaire de contact */}
          <ContactForm />
        </div>
      </div>
    </>
  );
}