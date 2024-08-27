// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Erstelle den AuthContext
const AuthContext = createContext();

// AuthProvider-Komponente
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Überprüfe, ob ein Token im localStorage vorhanden ist
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const login = (token) => {
    localStorage.setItem('authToken', token); // Token speichern
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('authToken'); // Token entfernen
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
