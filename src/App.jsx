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
  const lang = "fr"; // changer selon la langue

  // Variants pour les animations
  const container = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="App">
      {/* Header */}
      <motion.header
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>{translations[lang].titrePrincipal}</h1>
        <p>{translations[lang].sousTitre}</p>
      </motion.header>

      {/* Services */}
      <motion.section
        className="services"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h2>{translations[lang].services}</h2>

        <motion.div className="service" variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={service1} alt={translations[lang].services1Titre} />
          <h3>{translations[lang].services1Titre}</h3>
          <p>{translations[lang].services1Desc}</p>
        </motion.div>

        <motion.div className="service" variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={service2} alt={translations[lang].services2Titre} />
          <h3>{translations[lang].services2Titre}</h3>
          <p>{translations[lang].services2Desc}</p>
        </motion.div>

        <motion.div className="service" variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={service3} alt={translations[lang].services3Titre} />
          <h3>{translations[lang].services3Titre}</h3>
          <p>{translations[lang].services3Desc}</p>
        </motion.div>

        <motion.div className="service" variants={item} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <img src={service4} alt={translations[lang].services4Titre} />
          <h3>{translations[lang].services4Titre}</h3>
          <p>{translations[lang].services4Desc}</p>
        </motion.div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="cta"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2>Rejoignez EmpowerHer Tech</h2>
        <div className="cta-buttons">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Contactez-nous</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>À propos de nous</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Rejoignez-nous</motion.button>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>Faire un don</motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default App;
