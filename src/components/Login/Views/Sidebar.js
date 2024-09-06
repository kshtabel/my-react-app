import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Collapse, Avatar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssessmentIcon from '@mui/icons-material/Assessment'; // Icon für Übersicht
import PeopleIcon from '@mui/icons-material/People'; // Icon für Benutzerverwaltung
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; // Importiere den AuthContext

const drawerWidth = 240;

const Sidebar = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const { role, user } = useAuth(); // Hole die Rolle und den Benutzernamen des aktuellen Benutzers

  const handleAdminClick = () => {
    setAdminOpen(!adminOpen);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: '#1e1e1e', // Dunkler Hintergrund für die Sidebar
          color: '#ffffff', // Weißer Text für die Sidebar
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '16px',
          backgroundColor: '#6200ea', // Hauptfarbe für den Header der Sidebar
          color: '#ffffff', // Weißer Text
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        Menü
        {/* Benutzerprofil mit Bild anzeigen */}
        <Avatar sx={{ marginTop: '16px', width: 56, height: 56 }}>
          {user?.name?.charAt(0).toUpperCase() || 'U'} {/* Initialen des Benutzers anzeigen */}
        </Avatar>
        <Typography variant="subtitle1" sx={{ marginTop: '8px', fontWeight: 'bold' }}>
          {user?.name || 'Benutzername'} {/* Fallback auf "Benutzername" wenn der Benutzername leer ist */}
        </Typography>
      </Box>
      <Divider sx={{ backgroundColor: '#444' }} />
      <List>
        <ListItem 
          button 
          component={Link} 
          to="/dashboard" 
          sx={{
            '&:hover': {
              backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/wallet" 
          sx={{
            '&:hover': {
              backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
            <AccountBalanceWalletIcon />
          </ListItemIcon>
          <ListItemText primary="Wallet" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/settings" 
          sx={{
            '&:hover': {
              backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Einstellungen" />
        </ListItem>

        <ListItem 
          button 
          component={Link} 
          to="/help" 
          sx={{
            '&:hover': {
              backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Hilfe" />
        </ListItem>

        {/* Admin-Bereich nur anzeigen, wenn der Benutzer Admin ist */}
        {role === 'admin' && (
          <>
            <ListItem 
              button 
              onClick={handleAdminClick}
              sx={{
                '&:hover': {
                  backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
                },
              }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
                <AdminPanelSettingsIcon /> {/* Icon für Admin */}
              </ListItemIcon>
              <ListItemText primary="Admin" />
              {adminOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
            </ListItem>
            
            {/* Kindelemente von Admin */}
            <Collapse in={adminOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem 
                  button 
                  component={Link} 
                  to="/admin/overview" 
                  sx={{ 
                    pl: 4,
                    '&:hover': {
                      backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
                    <AssessmentIcon /> {/* Icon für Übersicht */}
                  </ListItemIcon>
                  <ListItemText primary="Übersicht" />
                </ListItem>
                <ListItem 
                  button 
                  component={Link} 
                  to="/admin/manageAccounts" 
                  sx={{ 
                    pl: 4,
                    '&:hover': {
                      backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}> {/* Weißes Icon */}
                    <PeopleIcon /> {/* Icon für Benutzerverwaltung */}
                  </ListItemIcon>
                  <ListItemText primary="Benutzerverwaltung" />
                </ListItem>
              </List>
            </Collapse>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
