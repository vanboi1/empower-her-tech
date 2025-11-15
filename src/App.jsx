import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { translations } from "./Translations";
import "./App.css";

// Images des services (déplace-les dans public/)
import service1 from "./../public/services1.jpg";
import service2 from "./../public/services2.jpg";
import service3 from "./../public/services3.jpg";
import service4 from "./../public/services4.jpg";
import service5 from "./../public/services5.jpg";
import service6 from "./../public/services6.jpg";
import service7 from "./../public/services7.jpg";

const App = () => {
  const lang = "fr";

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const services = [
    { img: service1, titre: "Sensibilisation & Prévention", desc: "Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits" },
    { img: service2, titre: "Formations en ligne", desc: "Cours sur la sécurité numérique, la santé mentale, les droits des femmes et l’entrepreneuriat féminin" },
    { img: service3, titre: "Recyclage des déchets ménagers", desc: "Aider les jeunes femmes à recycler les déchets ménagers et créer des opportunités durables" },
    { img: service4, titre: "Assistance & orientation", desc: "Signalement anonyme, soutien psychologique, aide juridique et orientation vers des ONG partenaires" },
    { img: service5, titre: "Santé sexuelle", desc: "Conseils et formations pour la santé sexuelle et reproductive des jeunes femmes" },
    { img: service6, titre: "Éducation & Protection environnementale", desc: "Sensibilisation à l’éducation et à la protection de l’environnement" },
    { img: service7, titre: "Adaptabilité climatique", desc: "Former les jeunes femmes à s’adapter aux changements climatiques" },
  ];

  return (
    <div className="App">
      {/* Hero Section */}
      <header className="hero">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Protéger • Autonomiser • Transformer des vies
        </motion.h1>
        <motion.p initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}>
          EmpowerHer Tech est une plateforme digitale qui aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations en ligne et à recevoir une assistance confidentielle et sécurisée
        </motion.p>
        <motion.div className="counter" initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.6 }}>
          <CountUp end={13} duration={2.5} separator=" " suffix=" femmes formées" />
        </motion.div>
      </header>

      {/* Services Section */}
      <section className="services">
        <motion.h2 initial="hidden" animate="visible" variants={fadeIn}>
          Services / Programmes
        </motion.h2>

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
            <img src={service.img} alt={service.titre} />
            <h3>{service.titre}</h3>
            <p>{service.desc}</p>
          </motion.div>
        ))}
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
    </div>
  );
};

export default App;
