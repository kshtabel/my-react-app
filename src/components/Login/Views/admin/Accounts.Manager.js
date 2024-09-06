import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../../../context/AuthContext';
import {
  Typography, Box, Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, IconButton, Modal, TextField, Button, MenuItem
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete'; // Importiere das Delete-Icon
import AddIcon from '@mui/icons-material/Add'; // Importiere das Add-Icon

const AccountsManager = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false); // State für das Modalfenster
  const [newUser, setNewUser] = useState({ username: '', password: '', role: 'user' }); // Initialer Zustand für neuen Benutzer
  const { role, token } = useAuth();  // Token und Rolle aus dem AuthContext
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== 'admin') {
      navigate('/dashboard'); // Redirect, wenn der Benutzer keine Admin-Rechte hat
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/admin/getUsers', {
          headers: {
            Authorization: `Bearer ${token}`  // Token im Header senden
          }
        });
        setUsers(response.data);
      } catch (err) {
        console.error('Fehler beim Abrufen der Benutzer-Daten:', err);
        setError('Fehler beim Abrufen der Benutzer-Daten.');
      }
    };

    fetchUsers();
  }, [role, navigate, token]);

  const handleDelete = async (id) => {
    console.log('Front: Deleting user with ID:', id);
    if (window.confirm('Möchten Sie diesen Benutzer wirklich löschen?')) {
      try {
        await axios.delete(`/api/admin/deleteUser/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`  // Token im Header senden
          }
        });
        setUsers(users.filter(user => user.id !== id)); // Benutzer nach Löschung aus der Liste entfernen
      } catch (err) {
        console.error('Frontend: Fehler beim Löschen des Benutzers:', err);
        setError('Fehler beim Löschen des Benutzers.');
      }
    }
  };

  const handleAddUser = async () => {
    try {
      await axios.post('/api/admin/addUser', newUser, {
        headers: {
          Authorization: `Bearer ${token}`  // Token im Header senden
        }
      });
      setOpen(false); // Schließe das Modalfenster
      setNewUser({ username: '', password: '', role: 'user' }); // Setze das Formular zurück
      // Aktualisiere die Benutzerliste
      const response = await axios.get('/api/admin/getUsers', {
        headers: {
          Authorization: `Bearer ${token}`  // Token im Header senden
        }
      });
      setUsers(response.data);
    } catch (err) {
      console.error('Fehler beim Hinzufügen des Benutzers:', err);
      setError('Fehler beim Hinzufügen des Benutzers.');
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  if (!users.length) {
    return <Typography>Lädt...</Typography>;
  }

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212', color: '#fff', borderRadius: '12px' }}>
      <Typography variant="h4" gutterBottom>Benutzerverwaltung</Typography>
      <IconButton onClick={() => setOpen(true)} sx={{ color: '#fff', marginBottom: '16px' }}>
        <AddIcon /> {/* Hinzufügen-Icon */}
      </IconButton>
      <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: '12px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="Benutzer Tabelle">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>ID</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Benutzername</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Rolle</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Wallet Adresse</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Wallet Balance</TableCell>
              <TableCell sx={{ color: '#bbb', fontWeight: 'bold' }}>Aktionen</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: '#2e2e2e' },
                  '&:nth-of-type(even)': { backgroundColor: '#1e1e1e' },
                  '&:hover': {
                    backgroundColor: '#6200ea', // Leuchtendes Lila bei Hover
                    cursor: 'pointer', // Ändert den Cursor in eine Hand bei Hover
                  },
                }}
              >
                <TableCell sx={{ color: '#fff' }}>{user.id}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{user.name}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{user.role}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{user.wallet_address}</TableCell>
                <TableCell sx={{ color: '#fff' }}>{user.wallet_balance}</TableCell>
                <TableCell sx={{ color: '#fff' }}>
                  <IconButton onClick={() => handleDelete(user.id)} sx={{ color: '#fff', '&:hover': { color: '#ff1744' } }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Modalfenster zum Hinzufügen eines Benutzers */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="add-user-modal"
        aria-describedby="add-user-form"
      >
        <Box sx={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          width: 400, backgroundColor: '#1e1e1e', padding: '24px', borderRadius: '12px', boxShadow: 24
        }}>
          <Typography variant="h6" sx={{ marginBottom: '16px', color: '#fff' }}>Neuen Benutzer hinzufügen</Typography>
          <TextField
            label="Benutzername"
            name="username"
            variant="filled"
            fullWidth
            required
            value={newUser.username}
            onChange={handleChange}
            sx={{ marginBottom: '16px', input: { color: '#fff' }, label: { color: '#bbb' }, backgroundColor: '#333', borderRadius: '5px' }}
          />
          <TextField
            label="Initialpasswort"
            name="password"
            type="password"
            variant="filled"
            fullWidth
            required
            value={newUser.password}
            onChange={handleChange}
            sx={{ marginBottom: '16px', input: { color: '#fff' }, label: { color: '#bbb' }, backgroundColor: '#333', borderRadius: '5px' }}
          />
          <TextField
            select
            label="Rolle"
            name="role"
            variant="filled"
            fullWidth
            required
            value={newUser.role}
            onChange={handleChange}
            sx={{ marginBottom: '24px', input: { color: '#fff' }, label: { color: '#bbb' }, backgroundColor: '#333', borderRadius: '5px' }}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </TextField>
          <Button onClick={handleAddUser} variant="contained" fullWidth sx={{ backgroundColor: '#6200ea', color: '#fff', '&:hover': { backgroundColor: '#4500b5' } }}>
            Speichern
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default AccountsManager;
