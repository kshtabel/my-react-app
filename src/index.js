// LoginPage.js (oder eine ähnliche Datei)
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './header'
import RegisterPage from './Views/RegisterPage';
import View_Login from './Views/LoginPage';

function MainPage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false); // Schließe Registrierungsseite, wenn Login angeklickt wird
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false); // Schließe Loginseite, wenn Registrieren angeklickt wird
  };

  return (
    <>
      <Navigation onLoginClick={handleLoginClick} onRegisterClick={handleRegisterClick} />
      {showLogin && <View_Login />}
      {showRegister && <RegisterPage />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>
);