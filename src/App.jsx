import React from "react";
import { translations } from "./Translations";
import "./App.css";
import { motion } from "framer-motion";

// Import des images
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";

const App = () => {
  const lang = "fr"; // exemple : tu peux changer selon la langue

  // Animation pour sections
  const sectionAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  // Animation pour boutons
  const buttonAnimation = {
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.95 },
  };

  return (
    <div className="App">
      {/* Header */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.8 }}
      >
        <h1>{translations[lang].titrePrincipal}</h1>
        <p>{translations[lang].sousTitre}</p>
      </motion.header>

      {/* Services */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>{translations[lang].services}</h2>

        <div className="service">
          <img src={service1} alt={translations[lang].services1Titre} />
          <h3>{translations[lang].services1Titre}</h3>
          <p>{translations[lang].services1Desc}</p>
        </div>

        <div className="service">
          <img src={service2} alt={translations[lang].services2Titre} />
          <h3>{translations[lang].services2Titre}</h3>
          <p>{translations[lang].services2Desc}</p>
        </div>

        <div className="service">
          <img src={service3} alt={translations[lang].services3Titre} />
          <h3>{translations[lang].services3Titre}</h3>
          <p>{translations[lang].services3Desc}</p>
        </div>

        <div className="service">
          <img src={service4} alt={translations[lang].services4Titre} />
          <h3>{translations[lang].services4Titre}</h3>
          <p>{translations[lang].services4Desc}</p>
        </div>
      </motion.section>

      {/* Rejoignez / Contact / Don */}
      <motion.section
        className="rejoignez"
        initial="hidden"
        animate="visible"
        variants={sectionAnimation}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Rejoignez EmpowerHer Tech</h2>
        <div className="buttons">
          <motion.button {...buttonAnimation}>Contactez-nous</motion.button>
          <motion.button {...buttonAnimation}>À propos de nous</motion.button>
          <motion.button {...buttonAnimation}>Rejoignez-nous</motion.button>
          <motion.button {...buttonAnimation}>Faire un don</motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default App;
