import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const services = [
  {
    title: "Sensibilisation & Prévention",
    description: "Articles éducatifs, vidéos et conseils pratiques pour se protéger et comprendre ses droits",
    image: "/assets/service1.png",
  },
  {
    title: "Formations en ligne",
    description: "Cours sur la sécurité numérique, santé mentale et entrepreneuriat féminin",
    image: "/assets/service2.png",
  },
  {
    title: "Recyclage des déchets ménagers",
    description: "Aider les jeunes femmes à recycler les déchets et créer des opportunités durables",
    image: "/assets/service3.png",
  },
  {
    title: "Assistance & orientation",
    description: "Signalement anonyme, soutien psychologique, aide juridique et orientation vers ONG",
    image: "/assets/service4.png",
  },
];

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", lineHeight: 1.6 }}>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{
          textAlign: "center",
          padding: "100px 20px",
          background: "linear-gradient(to right, #ff9a9e, #fad0c4)",
          color: "#333",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Protéger • Autonomiser • Transformer des vies
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "600px", margin: "0 auto" }}>
          EmpowerHer Tech aide les jeunes femmes au Burundi à se protéger contre les violences basées sur le genre, à accéder à des formations et à recevoir une assistance confidentielle et sécurisée
        </p>
        <div style={{ fontSize: "2rem", marginTop: "40px", fontWeight: "bold" }}>
          <CountUp start={0} end={1247} duration={3} /> femmes formées
        </div>
      </motion.section>

      {/* Services Section */}
      <section style={{ padding: "50px 20px", backgroundColor: "#f5f5f5" }}>
        <h2 style={{ textAlign: "center", marginBottom: "50px" }}>Services / Programmes</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              style={{
                backgroundColor: "#fff",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "10px" }}
              />
              <h3 style={{ margin: "15px 0" }}>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px 20px",
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <p>© 2025 EmpowerHer Tech | Tous droits réservés</p>
      </footer>
    </div>
  );
}

export default App;
