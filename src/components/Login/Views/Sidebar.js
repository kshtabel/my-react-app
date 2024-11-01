// import { useState } from 'react';
// import {
//   Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Collapse, Avatar, Typography, IconButton
// } from '@mui/material';
// import {
//   Dashboard as DashboardIcon, AccountBalanceWallet as WalletIcon, Settings as SettingsIcon, Help as HelpIcon,
//   AdminPanelSettings as AdminIcon, Assessment as OverviewIcon, People as UsersIcon, House as RealEstateIcon,
//   TravelExplore as TravelIcon, ExpandLess, ExpandMore, Logout as LogoutIcon
// } from '@mui/icons-material';
// import { Link, useNavigate } from 'react-router-dom'; // useNavigate für die Navigation nach dem Logout
// import { useAuth } from '../../../context/AuthContext';

// const drawerWidth = 280;

// const Sidebar = () => {
//   const [adminOpen, setAdminOpen] = useState(false);
//   const [realEstateOpen, setRealEstateOpen] = useState(false);
//   const [travelOpen, setTravelOpen] = useState(false);
//   const { role, user, logout } = useAuth(); // Logout aus dem AuthContext holen
//   const navigate = useNavigate(); // useNavigate verwenden, um nach dem Logout zu navigieren

//   // Funktionen zum Umschalten der Menüs
//   const handleAdminClick = () => setAdminOpen(!adminOpen);
//   const handleRealEstateClick = () => setRealEstateOpen(!realEstateOpen);
//   const handleTravelClick = () => setTravelOpen(!travelOpen);

//   const handleLogout = () => {
//     logout(); // Den Benutzer abmelden (Token entfernen, Status zurücksetzen)
//     navigate('/login'); // Nach dem Logout zur Login-Seite weiterleiten
//   };

//   return (
//     <Drawer
//       variant="permanent"
//       sx={{
//         width: drawerWidth,
//         flexShrink: 0,
//         '& .MuiDrawer-paper': {
//           width: drawerWidth,
//           backgroundColor: '#232323',
//           color: '#f0f0f0',
//           boxSizing: 'border-box',
//           boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
//         },
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: '24px 16px',
//           backgroundColor: '#6200ea',
//           color: '#ffffff',
//         }}
//       >
//         <Avatar sx={{ width: 64, height: 64, marginBottom: '12px' }}>
//           {user?.name?.charAt(0).toUpperCase() || 'U'}
//         </Avatar>
//         <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '8px' }}>
//           {user?.name || 'Benutzername'}
//         </Typography>
//         <Typography variant="body2" sx={{ opacity: 0.8 }}>
//           {role || 'Rolle'}
//         </Typography>
//         <Divider sx={{ width: '80%', backgroundColor: '#ffffff', marginY: '16px' }} />
//       </Box>

//       <List>
//         <ListItem button component={Link} to="/dashboard" sx={listItemStyles}>
//           <ListItemIcon sx={listItemIconStyles}><DashboardIcon /></ListItemIcon>
//           <ListItemText primary="Dashboard" />
//         </ListItem>

//         <ListItem button component={Link} to="/wallet" sx={listItemStyles}>
//           <ListItemIcon sx={listItemIconStyles}><WalletIcon /></ListItemIcon>
//           <ListItemText primary="Wallet" />
//         </ListItem>

//         <ListItem button component={Link} to="/settings" sx={listItemStyles}>
//           <ListItemIcon sx={listItemIconStyles}><SettingsIcon /></ListItemIcon>
//           <ListItemText primary="Einstellungen" />
//         </ListItem>

//         <ListItem button component={Link} to="/help" sx={listItemStyles}>
//           <ListItemIcon sx={listItemIconStyles}><HelpIcon /></ListItemIcon>
//           <ListItemText primary="Hilfe" />
//         </ListItem>

//         {role === 'admin' && (
//           <>
//             <ListItem button onClick={handleAdminClick} sx={listItemStyles}>
//               <ListItemIcon sx={listItemIconStyles}><AdminIcon /></ListItemIcon>
//               <ListItemText primary="Admin" />
//               {adminOpen ? <ExpandLess sx={{ color: '#f0f0f0' }} /> : <ExpandMore sx={{ color: '#f0f0f0' }} />}
//             </ListItem>
//             <Collapse in={adminOpen} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 <ListItem button component={Link} to="/admin/overview" sx={nestedListItemStyles}>
//                   <ListItemIcon sx={listItemIconStyles}><OverviewIcon /></ListItemIcon>
//                   <ListItemText primary="Übersicht" />
//                 </ListItem>
//                 <ListItem button component={Link} to="/admin/manageAccounts" sx={nestedListItemStyles}>
//                   <ListItemIcon sx={listItemIconStyles}><UsersIcon /></ListItemIcon>
//                   <ListItemText primary="Benutzerverwaltung" />
//                 </ListItem>

//                 <ListItem button onClick={handleRealEstateClick} sx={nestedListItemStyles}>
//                   <ListItemIcon sx={listItemIconStyles}><RealEstateIcon /></ListItemIcon>
//                   <ListItemText primary="Immobilien Verwaltung" />
//                   {realEstateOpen ? <ExpandLess sx={{ color: '#f0f0f0' }} /> : <ExpandMore sx={{ color: '#f0f0f0' }} />}
//                 </ListItem>
//                 <Collapse in={realEstateOpen} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItem button component={Link} to="/admin/realEstate" sx={nestedNestedListItemStyles}>
//                       <ListItemIcon sx={listItemIconStyles}><RealEstateIcon /></ListItemIcon>
//                       <ListItemText primary="Übersicht" />
//                     </ListItem>
//                     <ListItem button component={Link} to="/admin/realEstate/administration" sx={nestedNestedListItemStyles}>
//                       <ListItemIcon sx={listItemIconStyles}><RealEstateIcon /></ListItemIcon>
//                       <ListItemText primary="Administration" />
//                     </ListItem>
//                   </List>
//                 </Collapse>

//                 <ListItem button onClick={handleTravelClick} sx={nestedListItemStyles}>
//                   <ListItemIcon sx={listItemIconStyles}><TravelIcon /></ListItemIcon>
//                   <ListItemText primary="Reise Verwaltung" />
//                   {travelOpen ? <ExpandLess sx={{ color: '#f0f0f0' }} /> : <ExpandMore sx={{ color: '#f0f0f0' }} />}
//                 </ListItem>
//                 <Collapse in={travelOpen} timeout="auto" unmountOnExit>
//                   <List component="div" disablePadding>
//                     <ListItem button component={Link} to="/admin/reise-verwaltung/uebersicht" sx={nestedNestedListItemStyles}>
//                       <ListItemIcon sx={listItemIconStyles}><TravelIcon /></ListItemIcon>
//                       <ListItemText primary="Übersicht" />
//                     </ListItem>
//                   </List>
//                 </Collapse>
//               </List>
//             </Collapse>
//           </>
//         )}

//         <Divider sx={{ my: 2, backgroundColor: '#444' }} />
        
//         {/* Logout Button */}
//         <ListItem button onClick={handleLogout} sx={listItemStyles}>
//           <ListItemIcon sx={listItemIconStyles}><LogoutIcon /></ListItemIcon>
//           <ListItemText primary="Logout" />
//         </ListItem>
//       </List>
//     </Drawer>
//   );
// };

// const listItemStyles = {
//   '&:hover': {
//     backgroundColor: '#6200ea',
//   },
//   '&.Mui-selected': {
//     backgroundColor: '#6200ea',
//   },
// };

// const nestedListItemStyles = {
//   pl: 4,
//   '&:hover': {
//     backgroundColor: '#6200ea',
//   },
// };

// const nestedNestedListItemStyles = {
//   pl: 8,
//   '&:hover': {
//     backgroundColor: '#6200ea',
//   },
// };

// const listItemIconStyles = {
//   color: '#f0f0f0',
// };

// export default Sidebar;

import { useState, useCallback } from 'react';
import {
  Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Box, Collapse, Typography, Avatar, Button
} from '@mui/material';
import {
  Dashboard as DashboardIcon, AccountBalanceWallet as WalletIcon, Settings as SettingsIcon, Help as HelpIcon,
  AdminPanelSettings as AdminIcon, ExpandLess, ExpandMore, Logout as LogoutIcon, Assessment as OverviewIcon,
  People as UsersIcon, House as RealEstateIcon, TravelExplore as TravelIcon
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const drawerWidth = 280;

const drawerStyles = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    backgroundColor: '#1C1C1E',
    color: '#E0E0E0',
    boxSizing: 'border-box',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
};

const Sidebar = ({ drawerWidth = 280 }) => {
  const [openSections, setOpenSections] = useState({ admin: false, realEstate: false, travel: false, travelThemes: false });
  const { role, user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      // Optionally, show an error message to the user
    }
  };

  const CustomListItem = ({ to, icon, primary, onClick, nested = false }) => (
    <ListItem
      button
      component={Link}
      to={to}
      onClick={onClick}
      sx={{
        '&:hover': { backgroundColor: '#B0B0B0' },
        pl: nested ? 4 : 2,
      }}
    >
      <ListItemIcon sx={{ color: '#E0E0E0' }}>{icon}</ListItemIcon>
      <ListItemText primary={primary} />
    </ListItem>
  );

  return (
    <Drawer
      variant="permanent"
      sx={drawerStyles}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3,
          bgcolor: '#202024',
        }}
      >
        <Avatar sx={{ width: 64, height: 64, mb: 2 }}>
          {user?.name?.charAt(0).toUpperCase() || 'U'}
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E0E0E0' }}>
          {user?.name || 'Benutzername'}
        </Typography>
        <Typography variant="body2" sx={{ opacity: 0.8, color: '#E0E0E0' }}>
          {role || 'Rolle'}
        </Typography>
      </Box>

      <List>
        <CustomListItem to="/dashboard" icon={<DashboardIcon />} primary="Dashboard" />
        <CustomListItem to="/wallet" icon={<WalletIcon />} primary="Wallet" />
        <CustomListItem to="/settings" icon={<SettingsIcon />} primary="Einstellungen" />
        <CustomListItem to="/help" icon={<HelpIcon />} primary="Hilfe" />

        {role === 'admin' && (
          <>
            <ListItem button onClick={() => toggleSection('admin')} sx={{ '&:hover': { backgroundColor: '#B0B0B0' } }}>
              <ListItemIcon sx={{ color: '#E0E0E0' }}>
                <AdminIcon />
              </ListItemIcon>
              <ListItemText primary="Admin" />
              {openSections.admin ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSections.admin} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <CustomListItem to="/admin/overview" icon={<OverviewIcon />} primary="Übersicht" nested />
                <CustomListItem to="/admin/manageAccounts" icon={<UsersIcon />} primary="Benutzerverwaltung" nested />
                <ListItem button onClick={() => toggleSection('realEstate')} sx={{ pl: 4, '&:hover': { backgroundColor: '#B0B0B0' } }}>
                  <ListItemIcon sx={{ color: '#E0E0E0' }}>
                    <RealEstateIcon />
                  </ListItemIcon>
                  <ListItemText primary="Immobilien Verwaltung" />
                  {openSections.realEstate ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSections.realEstate} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <CustomListItem to="/admin/realEstate" icon={<RealEstateIcon />} primary="Übersicht" nested />
                    <CustomListItem to="/admin/realEstate/administration" icon={<RealEstateIcon />} primary="Administration" nested />
                  </List>
                </Collapse>

                <ListItem button onClick={() => toggleSection('travel')} sx={{ pl: 4, '&:hover': { backgroundColor: '#B0B0B0' } }}>
                  <ListItemIcon sx={{ color: '#E0E0E0' }}>
                    <TravelIcon />
                  </ListItemIcon>
                  <ListItemText primary="Reise Verwaltung" />
                  {openSections.travel ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openSections.travel} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <CustomListItem to="/admin/reise-verwaltung/uebersicht" icon={<TravelIcon />} primary="Übersicht" nested />
                    <CustomListItem to="/admin/reise-verwaltung/themen" icon={<TravelIcon />} primary="Reisethemen" nested />
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </>
        )}

        <Divider sx={{ my: 2, backgroundColor: '#444' }} />

        <CustomListItem
          onClick={handleLogout}
          icon={<LogoutIcon />}
          primary="Logout"
        />
      </List>
    </Drawer>
  );
};

export default Sidebar;