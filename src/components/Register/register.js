import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';

const SignUp = () => {

    const [Username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [VerifyPassword, setVerifyPassword] = useState('');
    const [VerifyPasswordError, setVerifyPasswordError] = useState(false);
    const [UsernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        
        setUsernameError(false);
        setPasswordError(false);
        setVerifyPasswordError(false);

        if (Username === '') {
            setUsernameError(true);
        }

        if (password === '') {
            setPasswordError(true);
        }

        if (VerifyPassword === '') {
            setVerifyPasswordError(true);
        }

        if (password !== VerifyPassword) {
            setPasswordError(true);
            setVerifyPasswordError(true);
        }

        if (Username && password && VerifyPassword && password === VerifyPassword) {
            console.log('Username: ' + Username + '\n' + 'Password: ' + password + '\n' + 'Verify password: ' + VerifyPassword);
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh', // Höhe des gesamten Viewports
                backgroundColor: '#000', // Schwarzer Hintergrund
                color: '#fff', // Weißer Text für bessere Lesbarkeit
            }}
        >
            <form onSubmit={handleSignUp}>
                <Stack
                    direction='column'
                    divider={<Divider orientation='horizontal' flexItem style={{ borderColor: '#444' }} />} // Angepasste Divider-Farbe
                    spacing={3}
                    sx={{
                        width: '300px', // Breite des Formulars
                        padding: '24px', // Zusätzliche Polsterung für bessere Benutzererfahrung
                        backgroundColor: '#1e1e1e', // Dunkleres Grau für das Formular
                        borderRadius: '10px', // Abgerundete Ecken für ein moderneres Aussehen
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Leichter Schatten für Tiefe
                    }}
                >
                    <TextField 
                        id='filled-basic' 
                        label='Benutzername' 
                        variant='filled' 
                        type='text' 
                        value={Username} 
                        onChange={e => setUsername(e.target.value)} 
                        error={UsernameError}
                        helperText={UsernameError ? "Benutzername ist erforderlich" : ""}
                        InputProps={{
                            style: { color: '#fff' }, // Weißer Text
                        }}
                        InputLabelProps={{
                            style: { color: '#888' }, // Grau für das Label
                        }}
                        sx={{
                            backgroundColor: '#333', // Hintergrund der Textfelder
                            borderRadius: '5px', // Abgerundete Ecken
                        }}
                    />
                    <TextField 
                        id='filled-basic' 
                        label='Passwort' 
                        variant='filled' 
                        type='password' 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        error={passwordError}
                        helperText={passwordError ? "Passwort ist erforderlich" : ""}
                        InputProps={{
                            style: { color: '#fff' }, // Weißer Text
                        }}
                        InputLabelProps={{
                            style: { color: '#888' }, // Grau für das Label
                        }}
                        sx={{
                            backgroundColor: '#333', // Hintergrund der Textfelder
                            borderRadius: '5px', // Abgerundete Ecken
                        }}
                    />
                    <TextField
                        id='filled-basic'
                        label='Passwort bestätigen'
                        variant='filled'
                        type='password'
                        value={VerifyPassword}
                        onChange={e => setVerifyPassword(e.target.value)}
                        error={VerifyPasswordError}
                        helperText={VerifyPasswordError ? "Passwörter nicht identisch" : ""}
                        InputProps={{
                            style: { color: '#fff' }, // Weißer Text
                        }}
                        InputLabelProps={{
                            style: { color: '#888' }, // Grau für das Label
                        }}
                        sx={{
                            backgroundColor: '#333', // Hintergrund der Textfelder
                            borderRadius: '5px', // Abgerundete Ecken
                        }}
                    />

                    <Button 
                        variant='contained' 
                        type='submit'
                        sx={{
                            backgroundColor: '#6200ea', // Dunkles Lila für den Button
                            color: '#fff', // Weißer Text
                            '&:hover': {
                                backgroundColor: '#3700b3', // Etwas dunkler beim Hover
                            },
                            padding: '10px 0',
                            borderRadius: '5px', // Abgerundete Ecken
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
