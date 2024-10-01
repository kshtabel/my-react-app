import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button, Alert, Box } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [verifyPasswordError, setVerifyPasswordError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState(''); // 'success', 'warning', etc.

  const handleSignUp = async (e) => {
    e.preventDefault();

    setUsernameError(false);
    setPasswordError(false);
    setVerifyPasswordError(false);

    if (username === '') {
      setUsernameError(true);
    }

    if (password === '') {
      setPasswordError(true);
    }

    if (verifyPassword === '') {
      setVerifyPasswordError(true);
    }

    if (password !== verifyPassword) {
      setPasswordError(true);
      setVerifyPasswordError(true);
      setAlertMessage('Passwörter stimmen nicht überein.');
      setAlertSeverity('warning');
      return;
    }

    if (username && password && verifyPassword && password === verifyPassword) {
      try {
        const response = await axios.post('/api/registration/', { username, password });

        if (response.data.status === 'USER_EXIST_N') {
          setAlertMessage('Registrierung erfolgreich. Bitte loggen Sie sich mit Ihren Daten ein.');
          setAlertSeverity('success');
          setUsername('');
          setPassword('');
          setVerifyPassword('');
        } else {
          setAlertMessage('Registrierung nicht erfolgreich, bitte überprüfen Sie Ihren Benutzernamen.');
          setAlertSeverity('warning');
        }
      } catch (error) {
        setAlertMessage('Fehler bei der Registrierung.');
        setAlertSeverity('warning');
      }
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        backgroundColor: '#000',
        color: '#fff',
      }}
    >
      <form onSubmit={handleSignUp}>
        <Stack
          direction='column'
          divider={<Divider orientation='horizontal' flexItem style={{ borderColor: '#444' }} />}
          spacing={3}
          sx={{
            width: '300px',
            padding: '24px',
            backgroundColor: '#1e1e1e',
            borderRadius: '10px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <TextField
            label='Benutzername'
            variant='filled'
            value={username}
            onChange={e => setUsername(e.target.value)}
            error={usernameError}
            helperText={usernameError ? "Benutzername ist erforderlich" : ""}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#888' } }}
            sx={{ backgroundColor: '#333', borderRadius: '5px' }}
          />
          <TextField
            label='Passwort'
            variant='filled'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={passwordError}
            helperText={passwordError ? "Passwort ist erforderlich" : ""}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#888' } }}
            sx={{ backgroundColor: '#333', borderRadius: '5px' }}
          />
          <TextField
            label='Passwort bestätigen'
            variant='filled'
            type='password'
            value={verifyPassword}
            onChange={e => setVerifyPassword(e.target.value)}
            error={verifyPasswordError}
            helperText={verifyPasswordError ? "Passwörter nicht identisch" : ""}
            InputProps={{ style: { color: '#fff' } }}
            InputLabelProps={{ style: { color: '#888' } }}
            sx={{ backgroundColor: '#333', borderRadius: '5px' }}
          />

          {alertMessage && (
            <Alert severity={alertSeverity} variant="outlined">
              {alertMessage}
            </Alert>
          )}

          <Button
            variant='contained'
            type='submit'
            sx={{
              backgroundColor: '#6200ea',
              color: '#fff',
              '&:hover': {
                backgroundColor: '#3700b3',
              },
              padding: '10px 0',
              borderRadius: '5px',
            }}
          >
            Registrieren
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default SignUp;
