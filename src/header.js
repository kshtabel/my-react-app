// src/header.js

import * as React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom'; 
import { useAuth } from './context/AuthContext'; 
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import { Button, Box, Typography, Avatar, IconButton, styled, GlobalStyles } from '@mui/material';
import { SOCIAL_MEDIA_URLS } from './config';

const LogoLink = styled('a')(({ theme }) => ({
  textDecoration: 'none',
  marginRight: '48px',
  display: 'inline-block',
  maxWidth: '238px',
}));

const LogoImage = styled('img')(({ theme }) => ({
  maxWidth: '100%',
}));

const FlexBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

const ListBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  pl: 0,
  mb: 0,
  listStyleType: 'none',
}));

export default function MainHeader() {
  const { isLoggedIn, logout } = useAuth(); 
  const location = useLocation(); 
  const isReisenPage = location.pathname === '/travel'; 

  return (
    <>
      <Box
        component="header"
        sx={{
          background: '#1C1C1E',
          zIndex: 1000,
          boxSizing: 'border-box',
          position: 'relative',
          opacity: 1,
        }}
      >
        <Box
          sx={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '1316px',
            px: 3,
          }}
        >
          <Box
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              py: 4,
              display: 'flex',
            }}
          >
            <FlexBox>
              <Typography variant="h4" sx={{ color: '#E0E0E0', fontWeight: 'bold', mr: '48px' }}>Wealthwondersworld</Typography>
              <nav role="navigation">
                <ListBox component="ul">
                  <Box component="li" sx={{ pr: 4 }}>
                    <Link to="/home" style={linkStyle}>Home</Link>
                  </Box>
                  <Box component="li" sx={{ pr: 4 }}>
                    <Link to="/about" style={linkStyle}>About</Link>
                  </Box>
                </ListBox>
              </nav>
            </FlexBox>
            <FlexBox sx={{ gap: 3, ml: 5 }}>
              {isLoggedIn ? (
                <Button color="inherit" onClick={logout} sx={buttonStyle}>Logout</Button>
              ) : (
                <>
                  <Link to="/login" style={buttonStyle}>Login</Link>
                  <Link to="/register" style={buttonStyle}>Registrieren</Link>
                </>
              )}
              <FlexBox sx={{ gap: 2 }}>
                <IconButton href={SOCIAL_MEDIA_URLS.facebook} target="_blank" rel="noopener noreferrer">
                  <Facebook sx={iconStyle} />
                </IconButton>
                <IconButton href={SOCIAL_MEDIA_URLS.twitter} target="_blank" rel="noopener noreferrer">
                  <Twitter sx={iconStyle} />
                </IconButton>
                <IconButton href={SOCIAL_MEDIA_URLS.instagram} target="_blank" rel="noopener noreferrer">
                  <Instagram sx={iconStyle} />
                </IconButton>
                <IconButton href={SOCIAL_MEDIA_URLS.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedIn sx={iconStyle} />
                </IconButton>
              </FlexBox>
            </FlexBox>
          </Box>
        </Box>
      </Box>

      {!isReisenPage && (
        <>
          <GlobalStyles
            styles={`
              html { box-sizing: border-box; text-size-adjust: 100%; font-family: sans-serif; height: 100%; }
              body { margin: 0px; min-height: 100%; background-color: #050505; color: #afafaf; font-family: Objectivity, sans-serif; font-size: 18px; font-weight: 400; line-height: 1.667em; }
            `}
          />
          <Outlet />
        </>
      )}
    </>
  );
}

// Stile
const linkStyle = {
  textDecoration: 'none',
  color: '#E0E0E0',
  transition: 'color 0.3s',
  verticalAlign: 'top',
  padding: '0px',
};

const buttonStyle = {
  backgroundColor: '#1C1C1E',
  padding: '12px 20px',
  borderRadius: '96px',
  color: 'white',
  textDecoration: 'none',
};

const iconStyle = { fontSize: '25px', color: '#E0E0E0' };