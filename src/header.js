// src/header.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Importieren Sie den AuthContext

export default function Navigation() {
  const { isLoggedIn, logout } = useAuth(); // Verwenden Sie den AuthContext

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Startseite
          </Typography>
          <Button component={Link} to='/' color='inherit'>Startseite</Button>
          {!isLoggedIn ? (
            <>
              <Button component={Link} to='/login' color='inherit'>
                Login
              </Button>
              <Button component={Link} to='/register' color='inherit'>
                Registrieren
              </Button>
            </>
          ) : (
            <>
              <Button onClick={logout} color='inherit'>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
