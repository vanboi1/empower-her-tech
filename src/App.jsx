import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh', padding: '20px' }}>
      {/* Titre principal */}
      <h1>{t('titrePrincipal')}</h1>
      <p>{t('sousTitre')}</p>

      {/* Services */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', marginTop: '40px' }}>
        {/* Service 1 */}
        <div>
          <h2>{t('services1Titre')}</h2>
          <p>{t('services1Desc')}</p>
          <img
            src="https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80"
            alt={t('services1Titre')}
            style={{ width: '300px', borderRadius: '10px' }}
          />
        </div>

        {/* Service 2 */}
        <div>
          <h2>{t('services2Titre')}</h2>
          <p>{t('services2Desc')}</p>
          <img
            src="https://images.unsplash.com/photo-1593011954678-70f8a0c06a45?auto=format&fit=crop&w=800&q=80"
            alt={t('services2Titre')}
            style={{ width: '300px', borderRadius: '10px' }}
          />
        </div>

        {/* Recyclage des déchets ménagers */}
        <div>
          <h2>{t('services3Titre')}</h2>
          <p>{t('services3Desc')}</p>
          <img
            src="https://images.unsplash.com/photo-1601018317567-df1b4c7fc264?auto=format&fit=crop&w=800&q=80"
            alt={t('services3Titre')}
            style={{ width: '300px', borderRadius: '10px' }}
          />
        </div>

        {/* Assistance & conseils */}
        <div>
          <h2>{t('services4Titre')}</h2>
          <p>{t('services4Desc')}</p>
          <img
            src="https://images.unsplash.com/photo-1581091870626-12c8e1a4829b?auto=format&fit=crop&w=800&q=80"
            alt={t('services4Titre')}
            style={{ width: '300px', borderRadius: '10px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
