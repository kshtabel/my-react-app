// src/footer.js

import React from 'react';
import { Box, Typography, Grid, Link } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: '#1e1e1e',
        color: '#fff',
        p: 4,
        width: '100%',
        marginTop: 'auto', // Positioniert den Footer am unteren Rand des Containers
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Über uns
          </Typography>
          <Typography variant="body2">
            Wir sind ein Unternehmen, das sich auf sichere und anonyme Transaktionen spezialisiert hat.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Wichtige Links
          </Typography>
          <Box>
            <Link href="/home" color="inherit" underline="hover">
              Home
            </Link>
          </Box>
          <Box>
            <Link href="/about" color="inherit" underline="hover">
              Über uns
            </Link>
          </Box>
          <Box>
            <Link href="/help" color="inherit" underline="hover">
              Hilfe & Support
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Kontakt
          </Typography>
          <Typography variant="body2">Email: kontakt@beispiel.de</Typography>
          <Typography variant="body2">Telefon: +49 123 456789</Typography>
        </Grid>
      </Grid>
      <Box textAlign="center" mt={4}>
        <Typography variant="body2">
          &copy; {currentYear} Dein Unternehmen. Alle Rechte vorbehalten.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
