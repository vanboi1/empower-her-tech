import React from "react";
import { translations } from "./Translations";
import "./App.css";

// Import des images
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";

// Framer Motion et CountUp
import { motion } from "framer-motion";
import CountUp from "react-countup";

const App = () => {
  const lang = "fr"; // exemple : tu peux changer selon la langue

  // Animations de base
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="App">
      <header className="hero">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          {translations[lang].titrePrincipal}
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}>
          {translations[lang].sousTitre}
        </motion.p>
        <motion.div className="counter" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
          <span>
            <CountUp end={1247} duration={2.5} separator=" " /> femmes formées
          </span>
        </motion.div>
      </header>

      <section className="services">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          {translations[lang].services}
        </motion.h2>

        {[service1, service2, service3, service4].map((img, index) => (
          <motion.div
            key={index}
            className="service"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: index * 0.2 }}
          >
            <img src={img} alt={translations[lang][`services${index + 1}Titre`]} />
            <h3>{translations[lang][`services${index + 1}Titre`]}</h3>
            <p>{translations[lang][`services${index + 1}Desc`]}</p>
          </motion.div>
        ))}
      </section>

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
    </div>
  );
};

export default App;
