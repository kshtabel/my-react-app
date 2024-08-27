// src/components/Login/Views/Dashboard.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  return (
    <Box
      sx={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh', // Höhe auf den gesamten Bildschirm setzen
        backgroundColor: '#f5f5f5', // Optional: Hintergrundfarbe
      }}
    >
      <Typography variant="h4" component="h1">
        Willkommen zum Dashboard
      </Typography>
    </Box>
  );
};

export default Dashboard;