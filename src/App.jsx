import React from "react";
import CountUp from "react-countup";

function Hero() {
  return (
    <section className="hero-section">
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

      <nav className="hero-links">
        <a href="#contact">Contactez-nous</a>
        <a href="#about">À propos de nous</a>
        <a href="#join">Rejoignez-nous</a>
        <a href="#donate">Faire un don</a>
      </nav>
    </section>
  );
}

export default Hero;
