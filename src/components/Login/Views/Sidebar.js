import { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Collapse, Avatar, Typography } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import HouseIcon from '@mui/icons-material/House'; 
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext'; 
import React from 'react';
import TravelExploreIcon from '@mui/icons-material/TravelExplore'; // Icon für Reise Verwaltung

const drawerWidth = 240;

const Sidebar = () => {
  const [adminOpen, setAdminOpen] = useState(false);
  const [realEstateOpen, setRealEstateOpen] = useState(false);
  const [travelOpen, setTravelOpen] = useState(false); // Zustand für Reise Verwaltung
  const { role, user } = useAuth();

  const handleAdminClick = () => {
    setAdminOpen(!adminOpen);
  };

  const handleRealEstateClick = () => {
    setRealEstateOpen(!realEstateOpen);
  };

  const handleTravelClick = () => {
    setTravelOpen(!travelOpen); // Öffnet und schließt das Reise Verwaltung Untermenü
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
          backgroundColor: '#1e1e1e',
          color: '#ffffff',
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
          backgroundColor: '#6200ea',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '18px',
        }}
      >
        Menü
        <Avatar sx={{ marginTop: '16px', width: 56, height: 56 }}>
          {user?.name?.charAt(0).toUpperCase() || 'U'} 
        </Avatar>
        <Typography variant="subtitle1" sx={{ marginTop: '8px', fontWeight: 'bold' }}>
          {user?.name || 'Benutzername'} 
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
              backgroundColor: '#6200ea',
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> 
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
              backgroundColor: '#6200ea',
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> 
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
              backgroundColor: '#6200ea',
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> 
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
              backgroundColor: '#6200ea',
            },
          }}
        >
          <ListItemIcon sx={{ color: '#ffffff' }}> 
            <HelpIcon />
          </ListItemIcon>
          <ListItemText primary="Hilfe" />
        </ListItem>

        {role === 'admin' && (
          <>
            <ListItem 
              button 
              onClick={handleAdminClick}
              sx={{
                '&:hover': {
                  backgroundColor: '#6200ea',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#ffffff' }}>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
              {adminOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
            </ListItem>
            
            <Collapse in={adminOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem 
                  button 
                  component={Link} 
                  to="/admin/overview" 
                  sx={{ 
                    pl: 4,
                    '&:hover': {
                      backgroundColor: '#6200ea',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}>
                    <AssessmentIcon />
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
                      backgroundColor: '#6200ea',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText primary="Benutzerverwaltung" />
                </ListItem>

                {/* Immobilien Verwaltung */}
                <ListItem 
                  button 
                  onClick={handleRealEstateClick} 
                  sx={{
                    pl: 4,
                    '&:hover': {
                      backgroundColor: '#6200ea',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}>
                    <HouseIcon />
                  </ListItemIcon>
                  <ListItemText primary="Immobilien Verwaltung" />
                  {realEstateOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
                </ListItem>

                <Collapse in={realEstateOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      component={Link}
                      to="/admin/realEstate"
                      sx={{
                        pl: 8,
                        '&:hover': {
                          backgroundColor: '#6200ea',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: '#ffffff' }}>
                        <HouseIcon />
                      </ListItemIcon>
                      <ListItemText primary="Übersicht" />
                    </ListItem>
                    <ListItem
                      button
                      component={Link}
                      to="/admin/realEstate/administration"
                      sx={{
                        pl: 8,
                        '&:hover': {
                          backgroundColor: '#6200ea',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: '#ffffff' }}>
                        <HouseIcon />
                      </ListItemIcon>
                      <ListItemText primary="Administration" />
                    </ListItem>
                  </List>
                </Collapse>

                {/* Reise Verwaltung */}
                <ListItem 
                  button 
                  onClick={handleTravelClick} 
                  sx={{
                    pl: 4,
                    '&:hover': {
                      backgroundColor: '#6200ea',
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: '#ffffff' }}>
                    <TravelExploreIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reise Verwaltung" />
                  {travelOpen ? <ExpandLess sx={{ color: '#ffffff' }} /> : <ExpandMore sx={{ color: '#ffffff' }} />}
                </ListItem>

                <Collapse in={travelOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem
                      button
                      component={Link}
                      to="/admin/reise-verwaltung/uebersicht"
                      sx={{
                        pl: 8,
                        '&:hover': {
                          backgroundColor: '#6200ea',
                        },
                      }}
                    >
                      <ListItemIcon sx={{ color: '#ffffff' }}>
                        <TravelExploreIcon />
                      </ListItemIcon>
                      <ListItemText primary="Übersicht" />
                    </ListItem>
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
