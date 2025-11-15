import React from "react";
import CountUp from "react-countup";
import "./App.css";

// Images services
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";

const App = () => {
  return (
    <div className="App">
      {/* HERO */}
      <header className="hero">
        <h1 className="hero-title">
          Protéger • Autonomiser • Transformer des vies
        </h1>
        <p className="hero-subtitle">
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations en ligne et à recevoir une assistance confidentielle et sécurisée
        </p>
        <div className="impact-counter">
          <span className="counter">
            <CountUp end={1247} duration={3} separator=" " />
          </span>
          <span className="counter-label">femmes formées</span>
        </div>
      </header>

      {/* SERVICES */}
      <section className="services">
        <h2>Services / Programmes</h2>
        <div className="service-list">
          <div className="service">
            <img src={service1} alt="Sensibilisation & Prévention" />
            <h3>Sensibilisation & Prévention</h3>
            <p>Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits</p>
          </div>
          <div className="service">
            <img src={service2} alt="Formations en ligne" />
            <h3>Formations en ligne</h3>
            <p>Cours sur la sécurité numérique, la santé mentale, les droits des femmes et l’entrepreneuriat féminin</p>
          </div>
          <div className="service">
            <img src={service3} alt="Recyclage des déchets ménagers" />
            <h3>Recyclage des déchets ménagers</h3>
            <p>Aider les jeunes femmes à recycler les déchets ménagers et créer des opportunités durables</p>
          </div>
          <div className="service">
            <img src={service4} alt="Assistance & orientation" />
            <h3>Assistance & orientation</h3>
            <p>Signalement anonyme, soutien psychologique, aide juridique et orientation vers des ONG partenaires</p>
          </div>
        </div>
      </section>

      {/* REJOIGNEZ-NOUS */}
      <section className="join">
        <h2>Rejoignez EmpowerHer Tech</h2>
        <div className="join-buttons">
          <a href="#contact" className="btn">Contactez-nous</a>
          <a href="#about" className="btn">À propos de nous</a>
          <a href="#join" className="btn">Rejoignez-nous</a>
          <a href="#donate" className="btn btn-donate">Faire un don</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; 2025 EmpowerHer Tech | Tous droits réservés</p>
      </footer>
    </div>
  );
};

export default App;
