// src/header.js
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Import AuthContext
import { Outlet } from 'react-router-dom'; // Import Outlet, um den Hauptinhalt zu rendern
import PersonIcon from '@mui/icons-material/Person'; // Importiere PersonIcon für den Account
import SettingsIcon from '@mui/icons-material/Settings'; // Importiere SettingsIcon für die Einstellungen

const drawerWidth = 240; // Breite der Sidebar

export default function Navigation() {
  const { isLoggedIn, logout } = useAuth(); // Zugriff auf Auth-Status und Logout-Funktion
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false); // Zustand für Drawer

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen((prevOpen) => !prevOpen); // Zustand umschalten
  };

  const handleLogout = () => {
    logout(); // Logout ausführen
    setDrawerOpen(false); // Drawer schließen
  };

  const drawerContent = (
    <Box
      sx={{ width: drawerWidth }}
      role="presentation"
      onClick={(event) => {
        // Prevent closing drawer when clicking inside
        event.stopPropagation();
      }}
    >
      <List>
        <ListItem button component={Link} to="/dashboard">
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button component={Link} to="/wallet">
          <ListItemText primary="Wallet" />
        </ListItem>
        <ListItem button component={Link} to="/settings">
          <ListItemText primary="Einstellungen" />
        </ListItem>
        <ListItem button component={Link} to="/help">
          <ListItemText primary="Hilfe" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1, // AppBar über dem Drawer anzeigen
          width: { sm: `calc(100% - ${drawerOpen ? drawerWidth : 0}px)` }, // Dynamische Breite basierend auf dem Drawer-Zustand
          ml: { sm: drawerOpen ? `${drawerWidth}px` : '0' }, // Margin-Left für den Verschiebeeffekt
          transition: 'margin 0.3s', // Animation für die Anpassung
        }}
      >
        <Toolbar>
          {/* Nur für eingeloggte Benutzer anzeigen */}
          {isLoggedIn && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer} // Umschalten der Sidebar beim Klicken
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Startseite
          </Typography>

          {/* Dynamische Anzeige basierend auf Login-Status */}
          {!isLoggedIn ? (
            <>
              <Button component={Link} to="/" color="inherit">Startseite</Button>
              <Button component={Link} to="/login" color="inherit">Login</Button>
              <Button component={Link} to="/register" color="inherit">Registrieren</Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <PersonIcon sx={{ mr: 2 }} /> {/* PersonIcon für Account mit größerem Abstand */}
                  Account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <SettingsIcon sx={{ mr: 2 }} /> {/* SettingsIcon für Einstellungen mit größerem Abstand */}
                  Einstellungen
                </MenuItem>
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer-Komponente, nur anzeigen wenn der Benutzer eingeloggt ist */}
      {isLoggedIn && (
        <Drawer
          variant="persistent" // Verwenden Sie "persistent" für den permanenten Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          {drawerContent}
        </Drawer>
      )}

      {/* Hauptinhalt, verschiebt sich bei geöffnetem Drawer */}
      <Box
        component="main"
        sx={{ 
          flexGrow: 1, 
          p: 3, 
          transition: 'margin 0.3s', 
          marginLeft: { sm: drawerOpen ? `${drawerWidth}px` : '0' }, // Margin-Left für den Verschiebeeffekt
        }}
      >
        <Outlet /> {/* Hier wird der gerenderte Inhalt der Route angezeigt */}
      </Box>
    </Box>
  );
}
