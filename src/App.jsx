import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation(); // t() pour traduire

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); // changer la langue
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Boutons pour changer de langue */}
      <div>
        <button onClick={() => changeLanguage('fr')}>FR</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('sw')}>SW</button>
        <button onClick={() => changeLanguage('rn')}>RN</button>
      </div>

      {/* Contenu principal */}
      <h1>{t('titrePrincipal')}</h1>
      <p>{t('sousTitre')}</p>

      {/* Menu exemple */}
      <ul>
        <li>{t('accueil')}</li>
        <li>{t('apropos')}</li>
        <li>{t('services')}</li>
        <li>{t('assistance')}</li>
        <li>{t('impact')}</li>
        <li>{t('blog')}</li>
        <li>{t('rejoindre')}</li>
        <li>{t('contact')}</li>
      </ul>
    </div>
  );
}

export default App;
