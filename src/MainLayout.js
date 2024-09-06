import React from 'react';
import { Outlet } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/Login/Views/Sidebar'; // Importiere die Sidebar

const MainLayout = () => {
  const { isLoggedIn } = useAuth(); // Überprüfe, ob der Benutzer eingeloggt ist

  return (
    <div style={{ display: 'flex' }}>
      {isLoggedIn && <Sidebar />} {/* Sidebar wird nur angezeigt, wenn der Benutzer eingeloggt ist */}
      <div style={{ flex: 1, padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;