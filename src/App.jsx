import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
  const { t } = useTranslation();

  // Images gratuites pour illustration
  const images = {
    services1: "https://images.unsplash.com/photo-1581091215363-1d4d25fc0c40?auto=format&fit=crop&w=600&q=80",
    services2: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80",
    services3: "https://images.unsplash.com/photo-1582719478170-1d7f20412c48?auto=format&fit=crop&w=600&q=80",
    services4: "https://images.unsplash.com/photo-1581093458791-6c839fcd6f48?auto=format&fit=crop&w=600&q=80"
  };

  return (
    <div style={{ backgroundColor: '#fef9f2', padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      {/* Section principale */}
      <header style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1>{t('titrePrincipal')}</h1>
        <p style={{ fontSize: '18px', maxWidth: '700px', margin: '10px auto' }}>{t('sousTitre')}</p>
      </header>

      {/* Section Services */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        {/* Service 1 */}
        <div style={{ textAlign: 'center' }}>
          <img src={images.services1} alt={t('services1Titre')} style={{ width: '100%', borderRadius: '10px' }} />
          <h2>{t('services1Titre')}</h2>
          <p>{t('services1Desc')}</p>
        </div>

        {/* Service 2 */}
        <div style={{ textAlign: 'center' }}>
          <img src={images.services2} alt={t('services2Titre')} style={{ width: '100%', borderRadius: '10px' }} />
          <h2>{t('services2Titre')}</h2>
          <p>{t('services2Desc')}</p>
        </div>

        {/* Service 3 */}
        <div style={{ textAlign: 'center' }}>
          <img src={images.services3} alt={t('services3Titre')} style={{ width: '100%', borderRadius: '10px' }} />
          <h2>{t('services3Titre')}</h2>
          <p>{t('services3Desc')}</p>
        </div>

        {/* Service 4 */}
        <div style={{ textAlign: 'center' }}>
          <img src={images.services4} alt={t('services4Titre')} style={{ width: '100%', borderRadius: '10px' }} />
          <h2>{t('services4Titre')}</h2>
          <p>{t('services4Desc')}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
