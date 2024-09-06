import * as React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Authentifizierungskontext importieren
import { Outlet } from 'react-router-dom'; // Outlet für gerenderte Inhalte
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Button } from '@mui/material';

export default function MainHeader() {
  const { isLoggedIn, logout } = useAuth(); // Authentifizierungsstatus und Logout-Funktion erhalten
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLogout = () => {
    logout(); // Benutzer abmelden
    setDrawerOpen(false); // Drawer schließen
  };

  return (
    <>
      <div
        className="header-wrapper w-nav"
        role="banner"
        style={{
          boxSizing: 'border-box',
          background: 'rgb(221, 221, 221)',
          zIndex: 1000,
          position: 'relative',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          opacity: 1,
        }}
      >
        <div
          className="container-default w-container"
          style={{
            boxSizing: 'border-box',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1316px',
            paddingLeft: '24px',
            paddingRight: '24px',
          }}
        >
          <div
            className="header-content-wrapper"
            style={{
              boxSizing: 'border-box',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '32px',
              paddingBottom: '32px',
              display: 'flex',
            }}
          >
            <div
              className="header-left-side"
              style={{
                boxSizing: 'border-box',
                alignItems: 'center',
                display: 'flex',
              }}
            >
              <a
                className="header-logo-link w-nav-brand"
                href="/"
                style={{
                  boxSizing: 'border-box',
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  textDecoration: 'none',
                  cssFloat: 'left',
                  color: 'rgb(51, 51, 51)',
                  position: 'relative',
                  transition: 'transform 0.3s, color 0.3s',
                  transformStyle: 'preserve-3d',
                  maxWidth: '238px',
                  marginBottom: '4px',
                  marginRight: '48px',
                  paddingLeft: '0px',
                }}
              >
                <img
                  src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cba9270d1ff77c6836d95a_Wealthwondersworld_Header.png"
                  style={{
                    boxSizing: 'border-box',
                    border: '0px',
                    verticalAlign: 'middle',
                    maxWidth: '100%',
                    display: 'inline-block',
                  }}
                />
              </a>
              <nav
                className="header-nav-menu-wrapper w-nav-menu"
                role="navigation"
                style={{
                  boxSizing: 'border-box',
                  display: 'block',
                  cssFloat: 'right',
                  position: 'relative',
                }}
              >
                <ul
                  className="header-nav-menu-list"
                  role="list"
                  style={{
                    boxSizing: 'border-box',
                    marginTop: '0px',
                    zIndex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginBottom: '0px',
                    paddingLeft: '0px',
                    listStyleType: 'none',
                    display: 'flex',
                  }}
                >
                  <li
                    className="header-nav-list-item"
                    style={{
                      boxSizing: 'border-box',
                      marginBottom: '0px',
                      paddingLeft: '0px',
                      paddingRight: '32px',
                    }}
                  >
                    <a
                      className="header-nav-link w-nav-link"
                      href="/home"
                      style={{
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        transition: 'color 0.3s',
                        textDecoration: 'none',
                        verticalAlign: 'top',
                        textAlign: 'left',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'inline-block',
                        position: 'relative',
                        padding: '0px',
                        color: 'white',
                        maxWidth: '1316px',
                      }}
                    >
                      Home
                    </a>
                  </li>
                  <li
                    className="header-nav-list-item"
                    style={{
                      boxSizing: 'border-box',
                      marginBottom: '0px',
                      paddingLeft: '0px',
                      paddingRight: '32px',
                    }}
                  >
                    <a
                      className="header-nav-link w-nav-link"
                      href="/about"
                      style={{
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(0, 0, 0, 0)',
                        transition: 'color 0.3s',
                        textDecoration: 'none',
                        verticalAlign: 'top',
                        textAlign: 'left',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        display: 'inline-block',
                        position: 'relative',
                        padding: '0px',
                        color: 'white',
                        maxWidth: '1316px',
                      }}
                    >
                      About
                    </a>
                  </li>
                  <li
                    className="header-nav-list-item"
                    style={{
                      boxSizing: 'border-box',
                      marginBottom: '0px',
                      paddingLeft: '0px',
                      paddingRight: '32px',
                    }}
                  >
                  </li>
                </ul>
              </nav>
            </div>
            <div
              className="header-right-side"
              style={{
                boxSizing: 'border-box',
                columnGap: '24px',
                justifyContent: 'flex-end',
                alignItems: 'center',
                marginLeft: '40px',
                display: 'flex',
              }}
            >
              {isLoggedIn ? (
                <>
                  <Button color="inherit" onClick={handleLogout}>
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <a
                    className="btn-primary small w-button"
                    href="/login"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.3s',
                      border: '0px',
                      cursor: 'pointer',
                      display: 'inline-block',
                      borderRadius: '96px',
                      textDecoration: 'none',
                      color: 'white',
                      textAlign: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      backgroundImage:
                        'linear-gradient(135deg, rgb(86, 96, 112) 15%, rgb(6, 6, 6))',
                      justifyContent: 'center',
                      fontWeight: 500,
                      padding: '12px 20px',
                      fontSize: '16px',
                      lineHeight: '1.125em',
                    }}
                  >
                    Login
                  </a>
                  <a
                    className="btn-primary small w-button"
                    href="/register"
                    style={{
                      boxSizing: 'border-box',
                      transition: 'color 0.3s',
                      border: '0px',
                      cursor: 'pointer',
                      display: 'inline-block',
                      borderRadius: '96px',
                      textDecoration: 'none',
                      color: 'white',
                      textAlign: 'center',
                      backgroundColor: 'rgba(0, 0, 0, 0)',
                      backgroundImage:
                        'linear-gradient(135deg, rgb(86, 96, 112) 15%, rgb(6, 6, 6))',
                      justifyContent: 'center',
                      fontWeight: 500,
                      padding: '12px 20px',
                      fontSize: '16px',
                      lineHeight: '1.125em',
                    }}
                  >
                    Registrieren
                  </a>
                </>
              )}
              <div
                className="social-media-links-container hidden-on-mbl"
                style={{
                  boxSizing: 'border-box',
                  columnGap: '16px',
                  display: 'flex',
                }}
              >
                <a
                  className="social-link-single w-inline-block"
                  href="https://www.facebook.com/share/rZ9HjBCNdFGPT6Wh/?mibextid=qi2Omg"
                  target="_blank"
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textDecoration: 'none',
                    transition: 'transform 0.3s, color 0.3s',
                    color: 'white',
                    transformStyle: 'preserve-3d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '20px',
                    maxWidth: '20px',
                    minHeight: '20px',
                    maxHeight: '20px',
                    fontFamily: '"Social Icons Font", sans-serif',
                    fontSize: '18px',
                    lineHeight: '1em',
                    display: 'flex',
                  }}
                >
                  <div style={{ boxSizing: 'border-box' }}>
                    <FacebookIcon style={{ fontSize: '25px', color: 'white' }} />
                  </div>
                </a>
                <a
                  className="social-link-single w-inline-block"
                  href="https://www.twitter.com/"
                  target="_blank"
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textDecoration: 'none',
                    transition: 'transform 0.3s, color 0.3s',
                    color: 'white',
                    transformStyle: 'preserve-3d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '20px',
                    maxWidth: '20px',
                    minHeight: '20px',
                    maxHeight: '20px',
                    fontFamily: '"Social Icons Font", sans-serif',
                    fontSize: '18px',
                    lineHeight: '1em',
                    display: 'flex',
                  }}
                >
                  <div style={{ boxSizing: 'border-box' }}>
                    <TwitterIcon style={{ fontSize: '25px', color: 'white' }} />
                  </div>
                </a>
                <a
                  className="social-link-single w-inline-block"
                  href="https://www.instagram.com/wealthwondersworld?igsh=MXJrdmdrZjl5bDdidQ%3D%3D&utm_source=qr"
                  target="_blank"
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textDecoration: 'none',
                    transition: 'transform 0.3s, color 0.3s',
                    color: 'white',
                    transformStyle: 'preserve-3d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '20px',
                    maxWidth: '20px',
                    minHeight: '20px',
                    maxHeight: '20px',
                    fontFamily: '"Social Icons Font", sans-serif',
                    fontSize: '18px',
                    lineHeight: '1em',
                    display: 'flex',
                  }}
                >
                  <div style={{ boxSizing: 'border-box' }}>
                    <InstagramIcon style={{ fontSize: '25px', color: 'white' }} />
                  </div>
                </a>
                <a
                  className="social-link-single w-inline-block"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  style={{
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    textDecoration: 'none',
                    transition: 'transform 0.3s, color 0.3s',
                    color: 'white',
                    transformStyle: 'preserve-3d',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minWidth: '20px',
                    maxWidth: '20px',
                    minHeight: '20px',
                    maxHeight: '20px',
                    fontFamily: '"Social Icons Font", sans-serif',
                    fontSize: '18px',
                    lineHeight: '1em',
                    display: 'flex',
                  }}
                >
                  <div style={{ boxSizing: 'border-box' }}>
                    <LinkedInIcon style={{ fontSize: '25px', color: 'white' }} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          id="w-nav-overlay-0"
          className="w-nav-overlay"
          style={{
            boxSizing: 'border-box',
            overflow: 'hidden',
            width: '100%',
            display: 'none',
            position: 'absolute',
            top: '100%',
            left: '0px',
            right: '0px',
          }}
        />
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font-family: sans-serif;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  min-height: 100%;
  background-color: #050505;
  color: #afafaf;
  font-family: Objectivity, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.667em;
}
`,
        }}
      />
      <Outlet /> {/* Hier wird der gerenderte Inhalt der Route angezeigt */}
    </>
  );
}
