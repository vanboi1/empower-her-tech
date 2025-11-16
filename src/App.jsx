import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import "./App.css";

// Images des services
const serviceImages = [
  "/services1.jpg",
  "/services2.jpg",
  "/services3.jpg",
  "/services4.jpg",
  "/services5.jpg",
  "/services6.jpg",
  "/services7.jpg"
];

// Services
const services = [
  { titre: "Sensibilisation & Prévention", desc: "Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits." },
  { titre: "Formations en ligne", desc: "Cours sur la sécurité numérique, la santé mentale, les droits des femmes et l’entrepreneuriat féminin." },
  { titre: "Recyclage des déchets ménagers", desc: "Aider les jeunes femmes à recycler les déchets ménagers et créer des opportunités durables." },
  { titre: "Assistance & orientation", desc: "Signalement anonyme, soutien psychologique, aide juridique et orientation vers des ONG partenaires." },
  { titre: "Santé sexuelle", desc: "Accès à l’éducation sur la santé sexuelle et reproductive des jeunes femmes." },
  { titre: "Éducation & Protection environnementale", desc: "Programmes éducatifs et sensibilisation à la protection de l’environnement." },
  { titre: "Adaptabilité climatique", desc: "Formation et sensibilisation pour s’adapter aux changements climatiques et créer des solutions locales." }
];

const App = () => {

  // Variants généraux pour les animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="App">

      {/* === Hero === */}
      <header className="hero">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeInUp}>Protéger</motion.h1>
          <motion.h1 variants={fadeInUp}>Autonomiser</motion.h1>
          <motion.h1 variants={fadeInUp}>Transformer des vies</motion.h1>
          <motion.p variants={fadeInUp} transition={{ delay: 0.3 }}>
            EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations en ligne et à recevoir une assistance confidentielle et sécurisée.
          </motion.p>
          <motion.div className="counter" variants={fadeInUp} transition={{ delay: 0.6 }}>
            <CountUp end={13} duration={2.5} /> femmes formées
          </motion.div>
        </motion.div>
      </header>

      {/* === Services === */}
      <section className="services">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Services / Programmes
        </motion.h2>
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service"
              variants={fadeInUp}
              whileHover={{ scale: 1.07, y: -5 }}
            >
              <img src={serviceImages[index]} alt={service.titre} />
              <h3>{service.titre}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === Join Us === */}
      <section className="join-us">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Rejoignez EmpowerHer Tech
        </motion.h2>
        <motion.div className="buttons" initial="hidden" whileInView="visible" variants={staggerContainer} transition={{ delay: 0.2 }}>
          {["Contactez-nous","À propos de nous","Rejoignez-nous","Faire un don"].map((btn, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {btn}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* === Contact === */}
      <section className="contact">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          Où nous trouver
        </motion.h2>
        <motion.div className="contact-info" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.p variants={fadeInUp}><strong>Siège principal :</strong> Avenue de l’Indépendance, Bujumbura, Burundi</motion.p>
          <motion.p variants={fadeInUp}><strong>Autres bureaux :</strong> Gitega, Ngozi</motion.p>
          <motion.p variants={fadeInUp}><strong>Téléphone :</strong> +257 22 123 456 | +257 79 987 654</motion.p>
          <motion.p variants={fadeInUp}><strong>Email général :</strong> contact@empowerher-tech.bi</motion.p>
          <motion.p variants={fadeInUp}><strong>Email support :</strong> support@empowerher-tech.bi</motion.p>
          <motion.p variants={fadeInUp}><strong>Email formations :</strong> formations@empowerher-tech.bi</motion.p>
        </motion.div>
      </section>

    </div>
  );
};

export default App;
