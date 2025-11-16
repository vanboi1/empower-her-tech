import React from "react";
import Navbar from "./Navbar";
import "./App.css";

// Import des images depuis public (Vite: /nom_fichier.jpg)
const serviceImages = [
  "/services1.jpg",
  "/services2.jpg",
  "/services3.jpg",
  "/services4.jpg",
  "/services5.jpg",
  "/services6.jpg",
  "/services7.jpg"
];

import { motion } from "framer-motion";
import CountUp from "react-countup";

const App = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    { titre: "Sensibilisation & Prévention", desc: "Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits." },
    { titre: "Formations en ligne", desc: "Cours sur la sécurité numérique, la santé mentale, les droits des femmes et l’entrepreneuriat féminin." },
    { titre: "Recyclage des déchets ménagers", desc: "Aider les jeunes femmes à recycler les déchets ménagers et créer des opportunités durables." },
    { titre: "Assistance & orientation", desc: "Signalement anonyme, soutien psychologique, aide juridique et orientation vers des ONG partenaires." },
    { titre: "Santé sexuelle", desc: "Accès à l’éducation sur la santé sexuelle et reproductive des jeunes femmes." },
    { titre: "Éducation & Protection environnementale", desc: "Programmes éducatifs et sensibilisation à la protection de l’environnement." },
    { titre: "Adaptabilité climatique", desc: "Formation et sensibilisation pour s’adapter aux changements climatiques et créer des solutions locales." },
  ];

  return (
    <div className="App">
      <Navbar />

      {/* === Hero === */}
      <header id="hero" className="hero">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Protéger Autonomiser Transformer des vies
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}>
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations et recevoir une assistance confidentielle.
        </motion.p>
        <motion.div className="counter" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
          <span>
            <CountUp end={13} duration={2.5} /> femmes formées
          </span>
        </motion.div>
      </header>

      {/* === Services === */}
      <section id="services" className="services">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>Services / Programmes</motion.h2>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            <img src={serviceImages[index]} alt={service.titre} />
            <h3>{service.titre}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
      </section>

      {/* === Join Us === */}
      <section id="join-us" className="join-us">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>Rejoignez EmpowerHer Tech</motion.h2>
        <motion.div className="buttons" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
          <button>Contactez-nous</button>
          <button>À propos de nous</button>
          <button>Rejoignez-nous</button>
          <button>Faire un don</button>
        </motion.div>
      </section>

      {/* === Contact === */}
      <section id="contact" className="contact">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>Où nous trouver</motion.h2>
        <motion.div className="contact-info" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
          <p><strong>Siège principal :</strong> Avenue de l’Indépendance, Bujumbura, Burundi</p>
          <p><strong>Autres bureaux :</strong> Gitega, Ngozi</p>
          <p><strong>Téléphone :</strong> +257 22 123 456 | +257 79 987 654</p>
          <p><strong>Email général :</strong> contact@empowerher-tech.bi</p>
          <p><strong>Email support :</strong> support@empowerher-tech.bi</p>
          <p><strong>Email formations :</strong> formations@empowerher-tech.bi</p>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
