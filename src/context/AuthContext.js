import React, { createContext, useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode'; // Korrigiere den Import

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isLoggedIn: false,
    role: null,
    user: null, 
  });

  useEffect(() => {
    // Beim Laden der Anwendung prüfen, ob ein Token im localStorage vorhanden ist
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        setAuthState({
          token: token,
          isLoggedIn: true,
          role: decodedToken.role,
          user: {
            id: decodedToken.id,
            name: decodedToken.email || decodedToken.name,
          },
        });
      } catch (error) {
        console.error('Fehler beim Decodieren des Tokens:', error);
        localStorage.removeItem('authToken'); // Entferne das ungültige Token
      }
    }
  }, []); // Leeres Abhängigkeitsarray, um nur beim Initialisieren auszuführen

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    localStorage.setItem('authToken', token);  // Token im localStorage speichern
    setAuthState({
      token: token,
      isLoggedIn: true,
      role: decodedToken.role,
      user: {
        id: decodedToken.id,
        name: decodedToken.email || decodedToken.name,
      },
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthState({
      token: null,
      isLoggedIn: false,
      role: null,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
