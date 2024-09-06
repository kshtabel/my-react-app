import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext'; // AuthContext importieren
import { useNavigate } from 'react-router-dom'; // useNavigate importieren

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { isLoggedIn, login } = useAuth(); // AuthContext verwenden
    const navigate = useNavigate(); // useNavigate-Hook verwenden


    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmailError(false);
        setPasswordError(false);

        if (email === '') {
            setEmailError(true);
        }

        if (password === '') {
            setPasswordError(true);
        }

        if (email && password) {
            try {
                const response = await axios.post('/api/login', { // Endpunkt aktualisiert
                    email: email,
                    password: password
                });

                login(response.data.token); // Auth-Status setzen
                console.log("Login.js: " + response.data.token);
                navigate('/dashboard'); // Weiterleiten zur Dashboard-Seite
            } catch (error) {
                console.error('Fehler bei der Verarbeitung ', error);
                alert('Fehler bei der Verarbeitung');
            }
        }
    };

    React.useEffect(() => {
        if (isLoggedIn) {
            navigate('/dashboard'); // Redirect zur Dashboard-Seite, wenn bereits eingeloggt
        }
    }, [isLoggedIn, navigate]);

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
                backgroundColor: '#000', // Schwarzer Hintergrund
                color: '#fff', // Weißer Text für bessere Lesbarkeit
            }}
        >
            <form onSubmit={handleSubmit}>
                <Stack
                    direction='column'
                    divider={<Divider orientation='horizontal' flexItem style={{ borderColor: '#444' }} />} // Angepasste Divider-Farbe
                    spacing={3}
                    sx={{
                        width: '300px',
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
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        error={emailError}
                        helperText={emailError ? "Benutzername ist erforderlich" : ""}
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
                        Login
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default Login;