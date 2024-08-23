import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext'; // Importieren Sie den AuthProvider
import Navigation from './header';
import Login_Model from './components/Login/Login';
import App from './App';
import SignUp_Model from './components/Register/register';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Navigation /> {/* Navigation immer sichtbar */}
        <Routes>
          <Route path="/" element={<App />} /> {/* Beispiel-Startseite */}
          <Route path='/login' element={<Login_Model />} /> {/* Login-Seite */}
          <Route path='/register' element={<SignUp_Model />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
