import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);

    useEffect(() => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            setToken(savedToken);
            setIsLoggedIn(true);
        }
    }, []);

    const login = (token) => {
        setToken(token);
        setIsLoggedIn(true);
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setToken(null);
        setIsLoggedIn(false);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
