import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Breadcrumbs, Typography, Link, Grid, Paper, Divider } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useAuth } from '../../../context/AuthContext'; // Hole die Auth-Informationen


// Komponenten für Transaktionen und Crypto Market
const WalletTransaction = () => (
  <Box sx={{ marginTop: '40px' }}>
    <Typography variant="h4" gutterBottom>Transaktionen</Typography>
    <Typography variant="body1" sx={{ color: '#bbb', marginBottom: '16px' }}>
      Hier könnte die Transaktionsübersicht angezeigt werden.
    </Typography>
    <Divider sx={{ backgroundColor: '#444' }} />
    <Typography variant="body2" sx={{ color: '#bbb', marginTop: '16px' }}>
      Details zu den Transaktionen werden hier bald hinzugefügt.
    </Typography>
  </Box>
);

const CryptoMarket = () => (
  <Box sx={{ marginTop: '40px' }}>
    <Typography variant="h4" gutterBottom>Crypto Market</Typography>
    <Typography variant="body1" sx={{ color: '#bbb', marginBottom: '16px' }}>
      Hier könnte eine Übersicht der aktuellen Kryptowährungskurse angezeigt werden.
      Dies könnte auch als grafische Darstellung oder Preistrend implementiert werden.
    </Typography>
    <Divider sx={{ backgroundColor: '#444' }} />
    <Typography variant="body2" sx={{ color: '#bbb', marginTop: '16px' }}>
      Eine detaillierte Marktübersicht wird bald hinzugefügt.
    </Typography>
  </Box>
);

// Wallet-Seite
const Wallet = () => {
  const [wallet, setWallet] = useState({ balance: '0.00000000' });
  const [activeSection, setActiveSection] = useState('overview'); // Standardmäßig auf 'overview' gesetzt
  const { token, user } = useAuth(); // Hole das Token und die User-Daten aus dem AuthContext

  useEffect(() => {
    // Ruft die Wallet-Daten des angemeldeten Benutzers anhand der Benutzer-ID ab
    console.log(user.id);
    const fetchWalletData = async () => {
      try {
        const response = await axios.get(`/api/user/wallet/${user.id}`, { // Benutzer-ID korrekt übergeben
          headers: {
            Authorization: `Bearer ${token}` // Authentifizierungs-Token im Header senden
          }
        });
        setWallet(response.data); // Setze die erhaltenen Wallet-Daten
      } catch (error) {
        console.error('Fehler beim Abrufen der Wallet-Daten:', error);
      }
    };
  
    if (user && user.id) { // Sicherstellen, dass die Benutzer-ID vorhanden ist
      fetchWalletData();
    }
  }, [user, token]);

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212', color: '#fff', borderRadius: '12px' }}>
      {/* Breadcrumb Navigation */}
      <Breadcrumbs 
        separator={<NavigateNextIcon fontSize="small" />} 
        aria-label="breadcrumb"
        sx={{ color: '#fff' }} // Hier wird die Schriftfarbe auf weiß gesetzt
      >
        <Link
          underline="hover"
          sx={{ color: activeSection === 'overview' ? '#6200ea' : '#fff' }}
          onClick={() => setActiveSection('overview')}
          component="button"
        >
          Wallet Übersicht
        </Link>
        <Link
          underline="hover"
          sx={{ color: activeSection === 'transactions' ? '#6200ea' : '#fff' }}
          onClick={() => setActiveSection('transactions')}
          component="button"
        >
          Transaktionen
        </Link>
        <Link
          underline="hover"
          sx={{ color: activeSection === 'market' ? '#6200ea' : '#fff' }}
          onClick={() => setActiveSection('market')}
          component="button"
        >
          Crypto Market
        </Link>
      </Breadcrumbs>

      {/* Bedingtes Rendering basierend auf der aktiven Breadcrumb */}
      {activeSection === 'overview' && (
        <Box sx={{ marginTop: '24px' }}>
          <Typography variant="h4" gutterBottom>Wallet Übersicht</Typography>
          <Grid container spacing={3}>
            {/* Wallet Balance */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: '16px', backgroundColor: '#1e1e1e', borderRadius: '12px' }}>
                <Typography variant="h6" sx={{ color: '#bbb' }}>Kontostand</Typography>
                <Typography variant="h4" sx={{ color: '#fff', marginTop: '16px' }}>{wallet.wallet_balance || '0.00000000'} BTC</Typography>
              </Paper>
            </Grid>

            {/* Weitere Wallet-Informationen oder Aktionen */}
            <Grid item xs={12} sm={6}>
              <Paper sx={{ padding: '16px', backgroundColor: '#1e1e1e', borderRadius: '12px' }}>
                <Typography variant="h6" sx={{ color: '#bbb' }}>Weitere Optionen</Typography>
                <Typography variant="body1" sx={{ color: '#fff', marginTop: '16px' }}>Hier können zusätzliche Wallet-Optionen oder Aktionen angezeigt werden.</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}

      {activeSection === 'transactions' && <WalletTransaction />}
      {activeSection === 'market' && <CryptoMarket />}
    </Box>
  );
};

export default Wallet;
