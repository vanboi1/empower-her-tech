import React from "react";
import CountUp from "react-countup";
import "./App.css";

function App() {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero-section">
        <img
          src="/assets/hero-image.png"
          alt="Jeunes femmes EmpowerHer Tech"
          className="hero-image"
        />
        <h1 className="hero-title">
          Protéger • Autonomiser • Transformer des vies
        </h1>
        <p className="hero-subtitle">
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes
          au Burundi à se protéger contre les violences basées sur le genre, à
          accéder à des formations en ligne et à recevoir une assistance
          confidentielle et sécurisée
        </p>

        <div className="impact-counter">
          <span className="counter">
            <CountUp end={12} duration={3} separator=" " />
          </span>
          <span className="counter-label">femmes formées</span>
        </div>

        <nav className="hero-links">
          <a href="#contact">Contactez-nous</a>
          <a href="#about">À propos de nous</a>
          <a href="#join">Rejoignez-nous</a>
          <a href="#donate">Faire un don</a>
        </nav>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <h2>Services / Programmes</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Sensibilisation & Prévention</h3>
            <p>
              Articles éducatifs, vidéos et conseils pratiques pour se protéger
              et comprendre ses droits
            </p>
          </div>
          <div className="service-card">
            <h3>Formations en ligne</h3>
            <p>
              Cours sur la sécurité numérique, la santé mentale, les droits des
              femmes et l’entrepreneuriat féminin
            </p>
          </div>
          <div className="service-card">
            <h3>Recyclage des déchets ménagers</h3>
            <p>
              Aider les jeunes femmes à recycler les déchets ménagers et créer
              des opportunités durables
            </p>
          </div>
          <div className="service-card">
            <h3>Assistance & orientation</h3>
            <p>
              Signalement anonyme, soutien psychologique, aide juridique et
              orientation vers des ONG partenaires
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <nav className="footer-links">
          <a href="#contact">Contactez-nous</a>
          <a href="#about">À propos de nous</a>
          <a href="#join">Rejoignez-nous</a>
          <a href="#donate">Faire un don</a>
        </nav>
        <p>© 2025 EmpowerHer Tech | Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
