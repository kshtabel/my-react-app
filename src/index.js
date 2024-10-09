// src/index.js

import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';
import Login from "./components/Login/Login";
import Register from "./components/Register/register";
import Dashboard from "./components/Login/Views/Dashboard";
import Wallet from "./components/Login/Views/Wallet";
import Settings from "./components/Login/Views/Settings";
import Help from "./components/Login/Views/Help";
import Navigation from "./header";
import MainLayout from './MainLayout';
import Overview from './components/Login/Views/admin/Overview';
import AccountsManager from './components/Login/Views/admin/Accounts.Manager';
import WalletTransaction from './components/Login/Views/Wallet.Transaction';
import RealEstate from './components/Login/Views/RealEstate';
import RealEstateAdministration from './components/Login/Views/RealEstate.Administration';
import Home from "./components/Login/Views/Home";
import Footer from "./footer";
import { Box } from '@mui/material'; 
import WalletMarket from "./components/Login/Views/Wallet.CryptoMarket";
import ExtTravelHome from './external.site/extTravelHome'; // Importiere ExtTravelHome
import AntarktisPage from './components/Travel/AntarktisPage'; // Importiere AntarktisPage
import AntarktisUltima from './components/Travel/AntarktisUltima'; // Importiere AntarktisUltima
import Africa_subMenue from "./components/Travel/Africa_subMenue";
import SouthAfrica_TopDest from "./components/Travel/Afria_subMenue_Overview";

const PrivateRoute = ({ element, requiredRole }) => {
  const { isLoggedIn, role } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && role !== requiredRole) {
    return <Navigate to="/dashboard" />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Box sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<MainLayout />}>
                <Route path="dashboard" element={<PrivateRoute element={<Dashboard />} />} />
                <Route path="/home" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                <Route path="/admin/reise-verwaltung/uebersicht/antarktis" element={<AntarktisPage />} />
                <Route path="/admin/reise-verwaltung/uebersicht/antarktisultima" element={<AntarktisUltima />} />
                <Route path="/admin/reise-verwaltung/uebersicht/afria_subCountries" element={<Africa_subMenue />} />
                <Route path="/admin/reise-verwaltung/uebersicht/afria_subCountries/overview" element={<SouthAfrica_TopDest />} />
                <Route path="wallet" element={<PrivateRoute element={<Wallet />} />} />
                <Route path="/wallet/transactions" element={<PrivateRoute element={<WalletTransaction />} />} />
                <Route path="/wallet/market" element={<PrivateRoute element={<WalletMarket />} />} />
                <Route path="settings" element={<PrivateRoute element={<Settings />} />} />
                <Route path="help" element={<PrivateRoute element={<Help />} />} />
                <Route path="admin/overview" element={<PrivateRoute element={<Overview />} requiredRole="admin" />} />
                <Route path="admin/manageAccounts/" element={<PrivateRoute element={<AccountsManager />} requiredRole="admin" />} />
                <Route path="admin/realEstate" element={<PrivateRoute element={<RealEstate />} requiredRole="admin" />} />
                <Route path="admin/realEstate/administration" element={<PrivateRoute element={<RealEstateAdministration />} requiredRole="admin" />} />
                
                {/* Neue Route für Reise Verwaltung Übersicht */}
                <Route path="admin/reise-verwaltung/uebersicht" element={<PrivateRoute element={<ExtTravelHome />} requiredRole="admin" />} />
              </Route>
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </Box>
          {/* Zeige den Footer nur auf den /home und /about Seiten */}
          <Routes>
            {/* <Route path="/home" element={<Footer />} /> */}
            <Route path="/about" element={<Footer />} />
          </Routes>
        </Box>
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