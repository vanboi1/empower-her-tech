import React from "react";
import { translations } from "./Translations";
import "./App.css";

// Import des images
import service1 from "./assets/services1.jpg";
import service2 from "./assets/services2.jpg";
import service3 from "./assets/services3.jpg";
import service4 from "./assets/services4.jpg";

const App = () => {
  const lang = "fr"; // exemple : tu peux changer selon la langue

  return (
    <div className="App">
      <header>
        <h1>{translations[lang].titrePrincipal}</h1>
        <p>{translations[lang].sousTitre}</p>
      </header>

      <section>
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
      </section>
    </div>
  );
};

export default App;
