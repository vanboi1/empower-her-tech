import React, { useState } from "react";
import { translations } from "./Translations";
import "./App.css";

// Images
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";
import recyclageImg from "./assets/recyclage.jpg";

// Framer Motion & CountUp
import { motion } from "framer-motion";
import CountUp from "react-countup";

const App = () => {
  const lang = "fr";

  // État du formulaire anonyme
  const [formData, setFormData] = useState({
    description: "",
    type: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulation d'envoi anonyme (dans la vraie vie : API chiffrée)
    console.log("Signalement anonyme :", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ description: "", type: "" });
    }, 3000);
  };

  // Animations
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <div className="App">
      {/* === HERO === */}
      <header className="hero">
        <motion.h1 variants={fadeIn} initial="hidden" animate="visible">
          {translations[lang].titrePrincipal}
        </motion.h1>
        <motion.p variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.3 }}>
          {translations[lang].sousTitre}
        </motion.p>
        <motion.div className="counter" variants={fadeIn} initial="hidden" animate="visible" transition={{ delay: 0.6 }}>
          <CountUp end={1247} duration={2.5} separator=" " /> femmes formées
        </motion.div>
      </header>

      {/* === SERVICES === */}
      <section className="services">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {translations[lang].services}
        </motion.h2>

        <motion.div className="services-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {[service1, service2, service3, service4].map((img, index) => (
            <motion.div key={index} className="service" variants={fadeIn}>
              <img src={img} alt={translations[lang][`services${index + 1}Titre`]} />
              <h3>{translations[lang][`services${index + 1}Titre`]}</h3>
              <p>{translations[lang][`services${index + 1}Desc`]}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === FORMATIONS === */}
      <section className="formations">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          Formations en ligne
        </motion.h2>
        <motion.div className="cours-list" variants={stagger} initial="hidden" whileInView="visible">
          {[
            { titre: "Sécurité numérique", duree: "2h", niveau: "Débutant" },
            { titre: "Santé mentale & bien-être", duree: "3h", niveau: "Tous niveaux" },
            { titre: "Droits des femmes au Burundi", duree: "1h30", niveau: "Débutant" },
            { titre: "Entrepreneuriat féminin", duree: "5h", niveau: "Intermédiaire" },
          ].map((cours, i) => (
            <motion.div key={i} className="cours-card" variants={fadeIn}>
              <div className="cours-info">
                <h4>{cours.titre}</h4>
                <p>{cours.duree} • {cours.niveau}</p>
              </div>
              <button className="btn-start">Commencer →</button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* === RECYCLAGE === */}
      <section className="recyclage">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible">
          Recyclage des déchets ménagers
        </motion.h2>
        <motion.div className="challenge" variants={fadeIn} initial="hidden" whileInView="visible">
          <img src={recyclageImg} alt="Recyclage" className="challenge-img" />
          <div className="challenge-content">
            <h3>Recycl’Her Challenge – Novembre 2025</h3>
            <ul>
              <li>Recyclez 10 objets ménagers</li>
              <li>Créez un objet utile (sac, décoration...)</li>
              <li>Envoyez une photo via WhatsApp</li>
              <li>Gagnez un kit de démarrage !</li>
            </ul>
            <a href="https://wa.me/25779123456" className="btn-whatsapp">
              Participer via WhatsApp
            </a>
          </div>
        </motion.div>
      </section>

      {/* === ASSISTANCE === */}
      <section className="assistance">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible">
          Assistance & Orientation
        </motion.h2>
        <motion.p variants={fadeIn} initial="hidden" whileInView="visible">
          Signalez une violence de façon 100% anonyme. Nous vous aidons en 24h.
        </motion.p>

        <motion.form
          className="form-anonyme"
          onSubmit={handleSubmit}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          <textarea
            name="description"
            placeholder="Décrivez ce qui s'est passé (anonyme)"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <select name="type" value={formData.type} onChange={handleChange} required>
            <option value="" disabled>
              Type de violence
            </option>
            <option>Physique</option>
            <option>Psychologique</option>
            <option>Sexuelle</option>
            <option>En ligne</option>
            <option>Autre</option>
          </select>
          <button type="submit" disabled={submitted}>
            {submitted ? "Envoyé ✓" : "Envoyer anonymement"}
          </button>
          <p className="confidentialite">
            Vos données sont chiffrées et supprimées après traitement.
          </p>
        </motion.form>
      </section>

      {/* === JOIN US === */}
      <section className="join-us">
        <motion.h2 variants={fadeIn} initial="hidden" whileInView="visible">
          Rejoignez EmpowerHer Tech
        </motion.h2>
        <motion.div className="buttons" variants={stagger} initial="hidden" whileInView="visible">
          <button>Contactez-nous</button>
          <button>À propos de nous</button>
          <button>Rejoignez-nous</button>
          <button>Faire un don</button>
        </motion.div>
      </section>

      {/* === FOOTER === */}
      <footer>
        <p>© 2025 EmpowerHer Tech Burundi • Protéger. Autonomiser. Transformer.</p>
      </footer>
    </div>
  );
};

export default App;
