import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();

  const backgroundStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1470&q=80')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    padding: '40px',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: '#ff7f50',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const imgStyle = {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    margin: '10px',
  };

  return (
    <div style={backgroundStyle}>
      {/* Header */}
      <h1 style={{ fontSize: '3em', marginBottom: '20px' }}>{t('titrePrincipal')}</h1>
      <p style={{ fontSize: '1.2em', marginBottom: '30px' }}>{t('sousTitre')}</p>

      {/* Buttons */}
      <div>
        <button style={buttonStyle}>{t('assistance')}</button>
        <button style={buttonStyle}>{t('services')}</button>
        <button style={buttonStyle}>{t('rejoindre')}</button>
      </div>

      {/* Images illustratives */}
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '40px' }}>
        <img src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80" alt="Sensibilisation" style={imgStyle} />
        <img src="https://images.unsplash.com/photo-1581092580490-02d06de73e64?auto=format&fit=crop&w=800&q=80" alt="Formation" style={imgStyle} />
        <img src="https://images.unsplash.com/photo-1590608897129-79d37f39aaf6?auto=format&fit=crop&w=800&q=80" alt="Assistance" style={imgStyle} />
      </div>

      {/* Footer simple */}
      <footer style={{ marginTop: '50px', fontSize: '0.9em' }}>
        <p>{t('contact')}</p>
      </footer>
    </div>
  );
}

export default App;
