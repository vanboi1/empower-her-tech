import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./App.css";

// Import des images depuis public
const servicesImages = [
  "/services1.jpg",
  "/services2.jpg",
  "/services3.jpg",
  "/services4.jpg",
  "/services5.jpg",
  "/services6.jpg"
];

const servicesTitles = [
  "Sensibilisation & Prévention",
  "Formations en ligne",
  "Recyclage des déchets ménagers",
  "Assistance & orientation",
  "Santé sexuelle",
  "Éducation & Protection environnementale / Adaptabilité climatique"
];

const servicesDesc = [
  "Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits.",
  "Cours sur la sécurité numérique, la santé mentale, les droits des femmes et l’entrepreneuriat féminin.",
  "Aider les jeunes femmes à recycler les déchets ménagers et créer des opportunités durables.",
  "Signalement anonyme, soutien psychologique, aide juridique et orientation vers des ONG partenaires.",
  "Sensibilisation et formations sur la santé sexuelle et reproductive des jeunes femmes.",
  "Éducation des jeunes femmes et protection de l’environnement avec focus sur l’adaptabilité climatique."
];

const App = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Protéger • Autonomiser • Transformer des vies
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}>
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations en ligne et à recevoir une assistance confidentielle et sécurisée.
        </motion.p>
        <motion.div className="counter" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
          <span>
            <CountUp end={13} duration={2.5} /> femmes formées
          </span>
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="services">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          Services / Programmes
        </motion.h2>

        <div className="services-grid">
          {servicesImages.map((img, index) => (
            <motion.div
              key={index}
              className="service"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <img src={img} alt={servicesTitles[index]} />
              <h3>{servicesTitles[index]}</h3>
              <p>{servicesDesc[index]}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="join-us">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          Rejoignez EmpowerHer Tech
        </motion.h2>
        <motion.div className="buttons" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.2 }}>
          <button>Contactez-nous</button>
          <button>À propos de nous</button>
          <button>Rejoignez-nous</button>
          <button>Faire un don</button>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="contact-us">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          Nous contacter
        </motion.h2>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Siège</h3>
            <p>Avenue de l’Indépendance, Bujumbura, Burundi</p>
          </div>

          <div className="contact-item">
            <h3>Bureaux</h3>
            <p>Bujumbura, Ntahangwa, zone Kamenge, Mirango II</p>
          </div>

          <div className="contact-item">
            <h3>Téléphone</h3>
            <p>+257 68 309 248 | +257 61 737 979</p>
          </div>

          <div className="contact-item">
            <h3>Email Général</h3>
            <p>contact@empowerher-tech.bi</p>
          </div>

          <div className="contact-item">
            <h3>Email Support</h3>
            <p>support@empowerher-tech.bi</p>
          </div>

          <div className="contact-item">
            <h3>Email Formations</h3>
            <p>formations@empowerher-tech.bi</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
