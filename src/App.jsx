import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Navbar from "./Navbar";
import "./App.css";

const serviceImages = [
  "/services1.jpg",
  "/services2.jpg",
  "/services3.jpg",
  "/services4.jpg",
  "/services5.jpg",
  "/services6.jpg",
  "/services7.jpg"
];

const services = [
  { titre: "Sensibilisation & Prévention", desc: "Articles, vidéos et conseils pratiques pour se protéger et comprendre ses droits." },
  { titre: "Formations en ligne", desc: "Cours sur la sécurité numérique, santé mentale et entrepreneuriat féminin." },
  { titre: "Recyclage des déchets ménagers", desc: "Aider à recycler et créer des opportunités durables." },
  { titre: "Assistance & orientation", desc: "Signalement anonyme, soutien psychologique, aide juridique et orientation vers ONG." },
  { titre: "Santé sexuelle", desc: "Éducation sur la santé sexuelle et reproductive des jeunes femmes." },
  { titre: "Éducation & Protection environnementale", desc: "Sensibilisation à la protection de l’environnement." },
  { titre: "Adaptabilité climatique", desc: "Formation pour s’adapter aux changements climatiques et solutions locales." }
];

// Animation visible et plus forte
const fadeIn = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const App = () => {
  return (
    <div className="App">
      <Navbar />

      {/* Hero */}
      <header className="hero" id="hero">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Protéger, Autonomiser, Transformer des vies
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          EmpowerHer Tech aide les jeunes femmes au Burundi à se protéger, se former et accéder à une assistance sécurisée.
        </motion.p>

        <motion.div
          className="counter"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <span><CountUp end={13} duration={2.5} /> femmes formées</span>
        </motion.div>
      </header>

      {/* Services */}
      <section className="services" id="services">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          Services / Programmes
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <img src={serviceImages[index]} alt={service.titre} />
              <h3>{service.titre}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projet Charbon */}
      <section className="project" id="project">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          Projet Charbon Écologique
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          Nous transformons les coques de coco en charbon écologique durable pour réduire la déforestation et créer des revenus pour les communautés.
        </motion.p>

        <motion.div
          className="video-container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/TON_LIEN_VIDEO"
            title="Projet Charbon"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </motion.div>
      </section>

      {/* Rejoignez-nous */}
      <section className="join-us" id="join-us">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          Rejoignez EmpowerHer Tech
        </motion.h2>

        <motion.div
          className="buttons"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <button onClick={() => alert("Formulaire Don")}>Faire un don</button>
          <button onClick={() => alert("Formulaire Inscription")}>S’inscrire aux formations</button>
          <button onClick={() => document.getElementById('project').scrollIntoView({ behavior: 'smooth' })}>Découvrir le projet</button>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contactez-nous</button>
        </motion.div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
        >
          Où nous trouver
        </motion.h2>

        <motion.div
          className="contact-info"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p><strong>Siège :</strong> Commune Ntahangwa, Zone Kamenge, Quartier Mirango II</p>
          <p><strong>Téléphone :</strong> +257 61737979 | +257 68309248</p>
          <p><strong>Email :</strong> contact@empowerher-tech.bi</p>
        </motion.div>
      </section>
    </div>
  );
};

export default App;
