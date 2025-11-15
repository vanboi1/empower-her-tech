import React, { useState } from "react";
import { translations } from "./Translations";
import "./App.css";

// Import d'images (mettre les fichiers correspondants dans src/assets)
import services1Img from "./assets/services1.jpg";
import services2Img from "./assets/services2.jpg";
import services3Img from "./assets/services3.jpg";
import services4Img from "./assets/services4.jpg";

function App() {
  const [lang, setLang] = useState("fr"); // langue par défaut

  const t = translations[lang];

  return (
    <div>
      <header>
        <h1>{t.titrePrincipal}</h1>
        <p>{t.sousTitre}</p>
        <div>
          <button onClick={() => setLang("fr")}>FR</button>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("sw")}>SW</button>
          <button onClick={() => setLang("rn")}>RN</button>
        </div>
        <div>
          <button>{t.boutonAide}</button>
          <button>{t.boutonFormations}</button>
          <button>{t.boutonPartenaire}</button>
        </div>
      </header>

      <section className="services-container">
        <div className="service-card">
          <img src={services1Img} alt={t.services1Titre} />
          <h3>{t.services1Titre}</h3>
          <p>{t.services1Desc}</p>
        </div>

        <div className="service-card">
          <img src={services2Img} alt={t.services2Titre} />
          <h3>{t.services2Titre}</h3>
          <p>{t.services2Desc}</p>
        </div>

        <div className="service-card">
          <img src={services3Img} alt={t.services3Titre} />
          <h3>{t.services3Titre}</h3>
          <p>{t.services3Desc}</p>
        </div>

        <div className="service-card">
          <img src={services4Img} alt={t.services4Titre} />
          <h3>{t.services4Titre}</h3>
          <p>{t.services4Desc}</p>
        </div>
      </section>

      <footer>
        <p>{t.contact}</p>
        <p>{t.contactInfos.join(" | ")}</p>
      </footer>
    </div>
  );
}

export default App;
