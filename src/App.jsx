import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css'; // Crée ce fichier pour le style si tu veux

function App() {
  const { t } = useTranslation();

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: '20px' }}>
      
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ fontSize: '2.5rem', color: '#333' }}>{t('titrePrincipal')}</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>{t('sousTitre')}</p>
      </header>

      {/* Services */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: '40px', maxWidth: '900px', margin: '0 auto' }}>
        
        {/* Service 1 */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src={require('./assets/services1.jpg')} alt={t('services1Titre')} style={{ width: '150px', borderRadius: '10px' }} />
          <div>
            <h2>{t('services1Titre')}</h2>
            <p>{t('services1Desc')}</p>
          </div>
        </div>

        {/* Service 2 */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src={require('./assets/services2.jpg')} alt={t('services2Titre')} style={{ width: '150px', borderRadius: '10px' }} />
          <div>
            <h2>{t('services2Titre')}</h2>
            <p>{t('services2Desc')}</p>
          </div>
        </div>

        {/* Service 3 */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src={require('./assets/services3.jpg')} alt={t('services3Titre')} style={{ width: '150px', borderRadius: '10px' }} />
          <div>
            <h2>{t('services3Titre')}</h2>
            <p>{t('services3Desc')}</p>
          </div>
        </div>

        {/* Service 4 */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <img src={require('./assets/services4.jpg')} alt={t('services4Titre')} style={{ width: '150px', borderRadius: '10px' }} />
          <div>
            <h2>{t('services4Titre')}</h2>
            <p>{t('services4Desc')}</p>
          </div>
        </div>

      </section>

    </div>
  );
}

export default App;
