import React from "react";
import { FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import './About.css';

const aboutData = [
  {
    icon: <FaLightbulb />,
    title: "Notre Mission",
    text: "Inspirer et autonomiser les jeunes femmes grâce à la tech.",
    color: "#f5a623"
  },
  {
    icon: <FaUsers />,
    title: "Notre Vision",
    text: "Créer un monde où chaque jeune femme peut réaliser son potentiel.",
    color: "#4a90e2"
  },
  {
    icon: <FaHeart />,
    title: "Nos Valeurs",
    text: "Passion, innovation, inclusion et durabilité.",
    color: "#e94e77"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  return (
    <section className="about">
      <h2>À propos de nous</h2>
      <div className="about-cards">
        {aboutData.map((item, index) => (
          <motion.div
            className="card"
            key={index}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: index * 0.2, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="icon"
              style={{ color: item.color }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              {item.icon}
            </motion.div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
