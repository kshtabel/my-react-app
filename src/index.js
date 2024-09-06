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
import Overview from './components/Login/Views/admin/Overview'; // Importiere die Overview-Komponente
import AccountsManager from './components/Login/Views/admin/Accounts.Manager';
import WalletTransaction from './components/Login/Views/Wallet.Transaction';

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
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<MainLayout />}>
            <Route
              path="dashboard"
              element={<PrivateRoute element={<Dashboard />} />}
            />
            <Route
              path="wallet"
              element={<PrivateRoute element={<Wallet />} />}
            />
            <Route
              path="/wallet/transactions"
              element={<PrivateRoute element={<WalletTransaction />} />}
            />
            <Route
              path="settings"
              element={<PrivateRoute element={<Settings />} />}
            />
            <Route
              path="help"
              element={<PrivateRoute element={<Help />} />}
            />
            <Route
              path="admin/overview"
              element={<PrivateRoute element={<Overview />} requiredRole="admin" />}
            />
             <Route
              path="admin/manageAccounts/"
              element={<PrivateRoute element={<AccountsManager />} requiredRole="admin" />}
            />
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
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
