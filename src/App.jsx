import React from "react";
import { translations } from "./Translations";
import "./App.css";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const App = () => {
  const lang = "fr"; // changer selon la langue si besoin

  // Animation de base pour les sections
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="App">
      {/* === Header / Hero === */}
      <header className="hero">
        <img src="/hero1.jpg" alt="Hero" className="hero-img" />
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          {translations[lang].titrePrincipal}
        </motion.h1>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          {translations[lang].sousTitre}
        </motion.p>
        <motion.div
          className="counter"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <span>
            <CountUp end={1247} duration={2.5} separator=" " /> femmes formées
          </span>
        </motion.div>
      </header>

      {/* === Services === */}
      <section className="services">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          {translations[lang].services}
        </motion.h2>

        <div className="services-container">
          {[
            {
              img: "/services1.jpg",
              titre: translations[lang].services1Titre,
              desc: translations[lang].services1Desc,
            },
            {
              img: "/services2.jpg",
              titre: translations[lang].services2Titre,
              desc: translations[lang].services2Desc,
            },
            {
              img: "/services3.jpg",
              titre: translations[lang].services3Titre,
              desc: translations[lang].services3Desc,
            },
            {
              img: "/services4.jpg",
              titre: translations[lang].services4Titre,
              desc: translations[lang].services4Desc,
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="service"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <img src={service.img} alt={service.titre} />
              <h3>{service.titre}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Join Us Section === */}
      <section className="join-us">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          Rejoignez EmpowerHer Tech
        </motion.h2>
        <motion.div
          className="buttons"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <button>Contactez-nous</button>
          <button>À propos de nous</button>
          <button>Rejoignez-nous</button>
          <button>Faire un don</button>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
