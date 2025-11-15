import React from "react";
import { translations } from "./Translations";
import "./App.css";

// Import des images
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";

const App = () => {
  const lang = "fr"; // exemple : changer selon la langue

  return (
    <div className="App">
      {/* HERO */}
      <header className="hero">
        <h1 className="hero-title">Protéger • Autonomiser • Transformer des vies</h1>
        <p className="hero-subtitle">
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations en ligne et à recevoir une assistance confidentielle et sécurisée
        </p>
      </header>

      {/* SERVICES */}
      <section className="services">
        <h2>{translations[lang].services}</h2>
        <div className="service-list">
          {[service1, service2, service3, service4].map((img, index) => (
            <div className="service" key={index}>
              <img src={img} alt={translations[lang][`services${index + 1}Titre`]} />
              <h3>{translations[lang][`services${index + 1}Titre`]}</h3>
              <p>{translations[lang][`services${index + 1}Desc`]}</p>
            </div>
          ))}
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
