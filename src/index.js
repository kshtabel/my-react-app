import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import Navigation from './main';
import App from './App';
// import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation />
    <App />
  </React.StrictMode>
);