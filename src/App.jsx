import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { translations } from "./Translations";
import "./App.css";

// Images
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";

const App = () => {
  const lang = "fr";

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Protéger. Autonomiser. Transformer des vies.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes
          au Burundi à se protéger contre les violences basées sur le genre, à
          accéder à des formations en ligne et à recevoir une assistance
          confidentielle et sécurisée.
        </motion.p>

        {/* Compteur d'impact */}
        <motion.div
          className="impact-counter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h2>
            <CountUp end={1247} duration={2} /> femmes formées
          </h2>
        </motion.div>

        {/* Bouton Urgence flottant */}
        <motion.a
          href="https://wa.me/123456789"
          className="btn-urgence"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Urgence
        </motion.a>
      </header>

      {/* Services Section */}
      <section className="services">
        <h2>{translations[lang].services}</h2>
        <div className="service-grid">
          {[service1, service2, service3, service4].map((img, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <img src={img} alt={translations[lang][`services${idx + 1}Titre`]} />
              <h3>{translations[lang][`services${idx + 1}Titre`]}</h3>
              <p>{translations[lang][`services${idx + 1}Desc`]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Rejoignez Section */}
      <section className="rejoignez">
        <h2>Rejoignez EmpowerHer Tech</h2>
        <motion.div
          className="rejoignez-buttons"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.a
            href="#contact"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactez-nous
          </motion.a>
          <motion.a
            href="#about"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            À propos de nous
          </motion.a>
          <motion.a
            href="#join"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Rejoignez-nous
          </motion.a>
          <motion.a
            href="#donate"
            className="btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Faire un don
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
