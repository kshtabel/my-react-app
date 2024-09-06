import React, { createContext, useContext, useState } from 'react';
import {jwtDecode} from 'jwt-decode'; // Achte auf die richtige Schreibweise

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    isLoggedIn: false,
    role: null,
    user: null, // Benutzername oder E-Mail
    userId: null, // User-ID im State speichern
  });

  const login = (token) => {
    const decodedToken = jwtDecode(token);
    localStorage.setItem('authToken', token);  // Token im localStorage speichern
    setAuthState({
      token: token,
      isLoggedIn: true,
      role: decodedToken.role,
      user: {
        id: decodedToken.id,  // Hier wird die Benutzer-ID gespeichert
        name: decodedToken.email || decodedToken.name // Benutzername oder E-Mail speichern
      }
    });
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthState({
      token: null,
      isLoggedIn: false,
      role: null,
      user: null,
      userId: null,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
