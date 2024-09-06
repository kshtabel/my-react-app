import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, TextField, Button, Paper, Grid, Breadcrumbs, Link, Avatar, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useAuth } from '../../../context/AuthContext'; // Falls ein AuthContext für die Authentifizierung verwendet wird
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import VisaIcon from '@mui/icons-material/Payment';
import MastercardIcon from '@mui/icons-material/CreditCard';

const ChangePassword = () => {
    const { updatePassword } = useAuth(); // Funktion zum Ändern des Passworts aus dem AuthContext (falls vorhanden)
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (newPassword !== confirmPassword) {
            return setError('Passwörter stimmen nicht überein.');
        }

        try {
            // Hier sollte die Logik zum Ändern des Passworts eingefügt werden, z.B.:
            // await updatePassword(currentPassword, newPassword);
            setSuccess('Passwort erfolgreich geändert.');
        } catch {
            setError('Fehler beim Ändern des Passworts.');
        }
    };

    return (
        <Box sx={{ padding: '24px', maxWidth: '400px' }}> {/* Breite auf 400px setzen */}
            <Typography variant="h5" sx={{ marginBottom: '24px', color: '#fff' }}>
                Passwort ändern
            </Typography>
            <Paper
                elevation={3}
                sx={{
                    padding: '24px',
                    borderRadius: '12px',
                    backgroundColor: '#1e1e1e',
                    color: '#fff',
                }}
            >
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                label="Aktuelles Passwort"
                                type="password"
                                fullWidth
                                required
                                variant="outlined"
                                value={currentPassword}
                                onChange={(e) => setCurrentPassword(e.target.value)}
                                sx={{
                                    input: { color: '#fff' },
                                    label: { color: '#bbb' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#444' },
                                        '&:hover fieldset': { borderColor: '#6200ea' },
                                        '&.Mui-focused fieldset': { borderColor: '#6200ea' },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Neues Passwort"
                                type="password"
                                fullWidth
                                required
                                variant="outlined"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                sx={{
                                    input: { color: '#fff' },
                                    label: { color: '#bbb' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#444' },
                                        '&:hover fieldset': { borderColor: '#6200ea' },
                                        '&.Mui-focused fieldset': { borderColor: '#6200ea' },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Neues Passwort bestätigen"
                                type="password"
                                fullWidth
                                required
                                variant="outlined"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                sx={{
                                    input: { color: '#fff' },
                                    label: { color: '#bbb' },
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': { borderColor: '#444' },
                                        '&:hover fieldset': { borderColor: '#6200ea' },
                                        '&.Mui-focused fieldset': { borderColor: '#6200ea' },
                                    },
                                }}
                            />
                        </Grid>
                        {error && (
                            <Grid item xs={12}>
                                <Typography color="error">{error}</Typography>
                            </Grid>
                        )}
                        {success && (
                            <Grid item xs={12}>
                                <Typography color="success.main">{success}</Typography>
                            </Grid>
                        )}
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                sx={{
                                    backgroundColor: '#6200ea',
                                    '&:hover': {
                                        backgroundColor: '#4500b5',
                                    },
                                }}
                            >
                                Passwort ändern
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Box>
    );
};

// Profilübersicht-Komponente
const ProfileOverview = () => {
    const { currentUser } = useAuth(); // Holen Sie die Benutzerdaten aus dem AuthContext (falls vorhanden)
    const [profileImage, setProfileImage] = useState(currentUser?.photoURL || ''); // Initialisieren mit aktuellem Profilbild
    const [newImage, setNewImage] = useState('');
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setNewImage(URL.createObjectURL(file));
      }
    };
  
    const saveProfileImage = () => {
      // Logik zum Speichern des neuen Profilbilds hier einfügen
      setProfileImage(newImage);
      setNewImage('');
    };
  
    return (
      <Box sx={{ padding: '24px', maxWidth: '400px' }}>
        <Typography variant="h5" sx={{ marginBottom: '24px', color: '#fff' }}>
          Profilübersicht
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: '24px',
            borderRadius: '12px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar src={profileImage} sx={{ width: 100, height: 100, marginRight: '16px' }} />
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="profile-image-upload"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="profile-image-upload">
                <IconButton color="primary" aria-label="upload picture" component="span">
                  <EditIcon />
                </IconButton>
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name des Benutzers"
                fullWidth
                variant="outlined"
                value={currentUser?.displayName || 'Benutzername'}
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  input: { color: '#fff' },
                  label: { color: '#bbb' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#6200ea' },
                    '&.Mui-focused fieldset': { borderColor: '#6200ea' },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email des Benutzers"
                fullWidth
                variant="outlined"
                value={currentUser?.email || 'user@example.com'}
                InputProps={{
                  readOnly: true,
                }}
                sx={{
                  input: { color: '#fff' },
                  label: { color: '#bbb' },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': { borderColor: '#444' },
                    '&:hover fieldset': { borderColor: '#6200ea' },
                    '&.Mui-focused fieldset': { borderColor: '#6200ea' },
                  },
                }}
              />
            </Grid>
            {newImage && (
              <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={saveProfileImage}>
                  Profilbild speichern
                </Button>
              </Grid>
            )}
          </Grid>
        </Paper>
      </Box>
    );
};

// Wallet-Komponente unter Profilübersicht
const WalletSettings = () => {
  const [walletAddress, setWalletAddress] = useState(''); // Wallet-Adresse wird nach Abruf gesetzt
  const [open, setOpen] = useState(false);
  const [newWalletAddress, setNewWalletAddress] = useState('');
  const { token } = useAuth(); // Auth-Token aus dem Kontext holen

  useEffect(() => {
    // Wallet-Adresse des angemeldeten Benutzers abrufen
    const fetchWalletAddress = async () => {
      try {
        const response = await axios.get('/api/user/wallet', {
          headers: {
            Authorization: `Bearer ${token}` // Token im Header senden
          }
        });
        setWalletAddress(response.data.wallet_address); // Wallet-Adresse setzen
      } catch (err) {
        console.error('Fehler beim Abrufen der Wallet-Adresse:', err);
      }
    };

    fetchWalletAddress();
  }, [token]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async () => {
    try {
      // Logik zum Speichern der neuen Wallet-Adresse im Backend
      await axios.put('/api/user/wallet', { wallet_address: newWalletAddress }, {
        headers: {
          Authorization: `Bearer ${token}` // Token im Header senden
        }
      });
      setWalletAddress(newWalletAddress); // Lokale Wallet-Adresse aktualisieren
      setNewWalletAddress('');
      setOpen(false);
    } catch (err) {
      console.error('Fehler beim Speichern der Wallet-Adresse:', err);
    }
  };

  return (
    <Box sx={{ padding: '24px', maxWidth: '400px', marginTop: '24px' }}>
      <Typography variant="h5" sx={{ marginBottom: '24px', color: '#fff' }}>
        Eigene Wallet
      </Typography>
      <Paper
        elevation={3}
        sx={{
          padding: '24px',
          borderRadius: '12px',
          backgroundColor: '#1e1e1e',
          color: '#fff',
        }}
      >
        <Typography variant="body1" sx={{ marginBottom: '16px' }}>
          Wallet-Adresse zum Empfang von Währungen:
        </Typography>
        <TextField
          fullWidth
          variant="outlined"
          value={walletAddress || 'Lädt...'} // Wallet-Adresse anzeigen oder "Lädt..." wenn noch nicht geladen
          InputProps={{
            readOnly: true,
          }}
          sx={{
            input: { color: '#fff' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: '#444' },
              '&:hover fieldset': { borderColor: '#6200ea' },
              '&.Mui-focused fieldset': { borderColor: '#6200ea' },
            },
          }}
        />
        <Button variant="contained" color="primary" sx={{ marginTop: '16px' }} onClick={handleClickOpen}>
          Wallet-Adresse ändern
        </Button>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Wallet-Adresse ändern</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Neue Wallet-Adresse"
              type="text"
              fullWidth
              variant="outlined"
              value={newWalletAddress}
              onChange={(e) => setNewWalletAddress(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Abbrechen
            </Button>
            <Button onClick={handleSave} color="primary">
              Speichern
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
};

// Komponente zum Hinzufügen von Zahlungsmitteln
const AddPaymentMethod = () => {
    const [open, setOpen] = useState(false);
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSave = () => {
      // Logik zum Speichern der neuen Kreditkarte hier einfügen
      console.log({ cardNumber, expiryDate, cvv, cardHolder });
      setOpen(false);
    };
  
    return (
      <Box sx={{ padding: '24px', maxWidth: '400px' }}>
        <Typography variant="h5" sx={{ marginBottom: '24px', color: '#fff' }}>
          Zahlungsmittel hinzufügen
        </Typography>
        <Button variant="contained" color="primary" startIcon={<AddIcon />} onClick={handleClickOpen}>
          Neue Kreditkarte hinzufügen
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Kreditkarte hinzufügen</DialogTitle>
          <DialogContent>
            <TextField
              margin="dense"
              label="Kreditkartennummer"
              type="text"
              fullWidth
              variant="outlined"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              sx={{ marginBottom: '16px' }}
            />
            <TextField
              margin="dense"
              label="Gültigkeit bis"
              type="text"
              fullWidth
              variant="outlined"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              sx={{ marginBottom: '16px' }}
            />
            <TextField
              margin="dense"
              label="CVV"
              type="text"
              fullWidth
              variant="outlined"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              sx={{ marginBottom: '16px' }}
            />
            <TextField
              margin="dense"
              label="Name des Karteninhabers"
              type="text"
              fullWidth
              variant="outlined"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              sx={{ marginBottom: '16px' }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Abbrechen
            </Button>
            <Button onClick={handleSave} color="primary">
              Speichern
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    );
};

// Übersicht der gespeicherten Zahlungsmittel
const PaymentMethodsOverview = () => {
    return (
      <Box sx={{ padding: '24px', maxWidth: '400px', marginTop: '24px' }}>
        <Typography variant="h5" sx={{ marginBottom: '24px', color: '#fff' }}>
          Gespeicherte Zahlungsmittel
        </Typography>
        <Paper
          elevation={3}
          sx={{
            padding: '16px',
            borderRadius: '12px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <VisaIcon sx={{ fontSize: 40, marginRight: '16px' }} />
          <Box>
            <Typography variant="body1">Visa **** 1234</Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Gültig bis: 12/23
            </Typography>
          </Box>
        </Paper>
        <Paper
          elevation={3}
          sx={{
            padding: '16px',
            borderRadius: '12px',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <MastercardIcon sx={{ fontSize: 40, marginRight: '16px' }} />
          <Box>
            <Typography variant="body1">Mastercard **** 5678</Typography>
            <Typography variant="body2" sx={{ color: '#bbb' }}>
              Gültig bis: 11/24
            </Typography>
          </Box>
        </Paper>
      </Box>
    );
  };

// Gesamtansicht der Einstellungen
const Settings = () => {
    const [activeSection, setActiveSection] = useState('profile'); // Standardmäßig auf 'profile' gesetzt
  
    return (
      <Box sx={{ padding: '24px' }}>
        <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff', marginBottom: '16px' }}>
          <Link
            underline="hover"
            sx={{ color: activeSection === 'profile' ? '#6200ea' : '#fff' }}
            href="#"
            onClick={() => setActiveSection('profile')}
          >
            Profil
          </Link>
          <Link
            underline="hover"
            sx={{ color: activeSection === 'security' ? '#6200ea' : '#fff' }}
            href="#"
            onClick={() => setActiveSection('security')}
          >
            Sicherheit
          </Link>
          <Link
            underline="hover"
            sx={{ color: activeSection === 'payment' ? '#6200ea' : '#fff' }}
            href="#"
            onClick={() => setActiveSection('payment')}
          >
            Zahlungsmittel
          </Link>
        </Breadcrumbs>
  
        {/* Conditional rendering based on the active section */}
        {activeSection === 'profile' && (
          <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
              <ProfileOverview />
            </Grid>
            <Grid item xs={12} md={6}>
              <WalletSettings />
            </Grid>
          </Grid>
        )}

        {activeSection === 'security' && <ChangePassword />}

        {activeSection === 'payment' && (
        <Box>
          <AddPaymentMethod />
          <PaymentMethodsOverview />
        </Box>
      )}
      </Box>
    );
};

export default Settings;