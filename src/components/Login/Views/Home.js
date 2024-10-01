import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
          Willkommen bei unserem Produkt
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Entdecken Sie die Möglichkeit, anonyme Transaktionen sicher und einfach durchzuführen.
          Unsere Plattform bietet Ihnen den besten Service, um Ihre Transaktionen vollständig privat und geschützt zu halten.
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" href="/register" sx={{ mr: 2 }}>
          Jetzt Registrieren
        </Button>
        <Button variant="outlined" color="secondary" href="/login">
          Einloggen
        </Button>
      </Box>
    </Container>
  );
};

export default Home;