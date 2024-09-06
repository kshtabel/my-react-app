import React from 'react';
import { Typography, Box } from '@mui/material';

const Overview = () => {
  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212', color: '#fff', borderRadius: '12px' }}>
      <Typography variant="h4" gutterBottom>Admin Übersicht</Typography>
      <Typography variant="body1">
        Willkommen im Admin-Bereich. Hier können Sie verschiedene administrative Aufgaben erledigen.
      </Typography>
    </Box>
  );
};

export default Overview;
