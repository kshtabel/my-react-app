// header.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LoginPage from './Views/LoginPage'

export default function Navigation({ onLoginClick, onRegisterClick }) {
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
          <Button color='inherit'>Startseite</Button>
          <Button onClick={onLoginClick} color='inherit'>
            Login
          </Button>
          <Button onClick={onRegisterClick} color='inherit'>
            Registrieren
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
