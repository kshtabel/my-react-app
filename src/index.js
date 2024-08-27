// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // AuthProvider und useAuth importieren
import Navigation from './header'; // Navigation-Komponente importieren
import Login from './components/Login/Login'; // Login-Seite
import Register from './components/Register/register'; // Registrierungs-Seite
import Dashboard from './components/Login/Views/Dashboard'; // Dashboard-Seite
import Wallet from './components/Login/Views/Wallet'; // Beispiel-Komponente
import Settings from './components/Login/Views/Settings'; // Beispiel-Komponente
import Help from './components/Login/Views/Help'; // Beispiel-Komponente

// PrivateRoute-Komponente
const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = useAuth(); // Auth-Status abrufen
  return isLoggedIn ? element : <Navigate to="/login" />; // Weiterleitung zur Login-Seite, wenn nicht eingeloggt
};

const App = () => {
  return (
    <AuthProvider> {/* AuthProvider um die App wickeln */}
      <BrowserRouter>
        <Navigation /> {/* Navigation immer sichtbar */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={<PrivateRoute element={<Dashboard />} />} // Geschützte Route
          />
          <Route
            path="/wallet"
            element={<PrivateRoute element={<Wallet />} />} // Geschützte Route
          />
          <Route
            path="/settings"
            element={<PrivateRoute element={<Settings />} />} // Geschützte Route
          />
          <Route
            path="/help"
            element={<PrivateRoute element={<Help />} />} // Geschützte Route
          />
          <Route path="/" element={<Navigate to="/login" />} /> {/* Standard-Weiterleitung */}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
