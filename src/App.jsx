import React from "react";
import { useTranslation } from "react-i18next";
import './i18n';

// Import des images des services
import service1Img from './assets/services1.jpg';
import service2Img from './assets/services2.jpg';
import service3Img from './assets/services3.jpg';
import service4Img from './assets/services4.jpg';

function App() {
  const { t, i18n } = useTranslation();

  // Fonction pour changer la langue
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '20px' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>{t('titrePrincipal')}</h1>
        <p>{t('sousTitre')}</p>
        <div style={{ marginTop: '20px' }}>
          {/* Boutons pour changer la langue */}
          <button onClick={() => changeLanguage('fr')}>FR</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('sw')}>SW</button>
          <button onClick={() => changeLanguage('rn')}>RN</button>
        </div>
      </header>

      <section>
        <h2>{t('services')}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          {/* Service 1 */}
          <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img src={service1Img} alt={t('services1Titre')} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{t('services1Titre')}</h3>
            <p>{t('services1Desc')}</p>
          </div>

          {/* Service 2 */}
          <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img src={service2Img} alt={t('services2Titre')} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{t('services2Titre')}</h3>
            <p>{t('services2Desc')}</p>
          </div>

          {/* Service 3 */}
          <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img src={service3Img} alt={t('services3Titre')} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{t('services3Titre')}</h3>
            <p>{t('services3Desc')}</p>
          </div>

          {/* Service 4 */}
          <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
            <img src={service4Img} alt={t('services4Titre')} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{t('services4Titre')}</h3>
            <p>{t('services4Desc')}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
