// src/header.js

import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'; 
import { useAuth } from './context/AuthContext'; 
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Button } from '@mui/material';

export default function MainHeader() {
  const { isLoggedIn, logout } = useAuth(); 
  const location = useLocation(); 
  const isReisenPage = location.pathname === '/travel'; 

  return (
    <>
      <div
        className="header-wrapper w-nav"
        role="banner"
        style={{
          background: '#000', // Set background to black to match the dark theme
          zIndex: 1000,
          boxSizing: 'border-box',
          position: 'relative',
          opacity: 1
        }}
      >
        <div
          className="container-default w-container"
          style={{
            marginLeft: 'auto', marginRight: 'auto', maxWidth: '1316px', paddingLeft: '24px', paddingRight: '24px'
          }}
        >
          <div
            className="header-content-wrapper"
            style={{ justifyContent: 'space-between', alignItems: 'center', paddingTop: '32px', paddingBottom: '32px', display: 'flex' }}
          >
            <div className="header-left-side" style={{ display: 'flex', alignItems: 'center' }}>
              <a href="/" className="header-logo-link w-nav-brand" style={{ textDecoration: 'none', marginRight: '48px', display: 'inline-block', color: 'rgb(51, 51, 51)', maxWidth: '238px' }}>
                <img src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cba9270d1ff77c6836d95a_Wealthwondersworld_Header.png" alt="Logo" style={{ maxWidth: '100%' }} />
              </a>
              <nav className="header-nav-menu-wrapper w-nav-menu" role="navigation">
                <ul className="header-nav-menu-list" style={{ display: 'flex', paddingLeft: '0px', marginBottom: '0px', listStyleType: 'none' }}>
                  <li style={{ paddingRight: '32px' }}>
                    <Link to="/home" style={linkStyle}>Home</Link>
                  </li>
                  <li style={{ paddingRight: '32px' }}>
                    <Link to="/about" style={linkStyle}>About</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header-right-side" style={{ display: 'flex', gap: '24px', alignItems: 'center', marginLeft: '40px' }}>
              {isLoggedIn ? (
                <Button color="inherit" onClick={logout}>Logout</Button>
              ) : (
                <>
                  <Link to="/login" style={buttonStyle}>Login</Link>
                  <Link to="/register" style={buttonStyle}>Registrieren</Link>
                </>
              )}
              <div className="social-media-links-container" style={{ display: 'flex', gap: '16px' }}>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <Facebook style={iconStyle} />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <Twitter style={iconStyle} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <Instagram style={iconStyle} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <LinkedIn style={iconStyle} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {!isReisenPage && (
        <>
          <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
          <Outlet />
        </>
      )}
    </>
  );
}

// Stile
const linkStyle = {
  textDecoration: 'none', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0)', transition: 'color 0.3s', verticalAlign: 'top', padding: '0px'
};

const buttonStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0)', backgroundImage: 'linear-gradient(135deg, rgb(86, 96, 112) 15%, rgb(6, 6, 6))', padding: '12px 20px', borderRadius: '96px', color: 'white', textDecoration: 'none'
};

const iconStyle = { fontSize: '25px', color: 'white' };

const globalStyle = `
  html { box-sizing: border-box; text-size-adjust: 100%; font-family: sans-serif; height: 100%; }
  body { margin: 0px; min-height: 100%; background-color: #050505; color: #afafaf; font-family: Objectivity, sans-serif; font-size: 18px; font-weight: 400; line-height: 1.667em; }
`;
