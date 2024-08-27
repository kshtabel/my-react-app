import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import { useState } from 'react';
import axios from 'axios';
import UserBoard from './User_Board';
import { useAuth } from '../../context/AuthContext'; // Importieren Sie den AuthContext
import UserDashboard from './Views/User_Dashboard';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const { isLoggedIn, login } = useAuth(); // Verwenden Sie den AuthContext

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
                const response = await axios.post('api/login', {
                    email: email,
                    password: password
                });

                console.log('Server response: ', response.data);
                alert('Login erfolgreich');

                login(response.data.token); // Verwenden Sie die login-Funktion aus dem AuthContext
            } catch (error) {
                console.error('Fehler bei der Verarbeitung ', error);
                alert('Fehler bei der Verarbeitung');
            }
        }
    }

    if (isLoggedIn) {
        return <UserDashboard />;
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
            }}
        >
            <form onSubmit={handleSubmit}>
                <Stack
                    direction='column'
                    divider={<Divider orientation='horizontal' flexItem />}
                    spacing={2}
                    sx={{
                        width: '300px',
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
                    />
                    <Button variant='contained' type='submit'>
                        Login
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default Login;
