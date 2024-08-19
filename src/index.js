import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login_Model from './components/Login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation /> {/* Navigation immer sichtbar */}
      <Routes>
        <Route path="/" element={<div>Willkommen auf der Startseite</div>} /> {/* Beispiel-Startseite */}
        <Route path='/login' element={<Login_Model />} /> {/* Login-Seite */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);