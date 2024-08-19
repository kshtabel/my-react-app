// LoginPage.js
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import {useState} from 'react';

export default function View_Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const handleSubmit = (e) => {

        e.preventDefault();
        

        setEmailError(false);
        setPasswordError(false);

        if (email == '') {
            setEmailError(true);
        }

        if (password == '') {
            setPasswordError(true);
        }

        if (email && password) {
            alert(email + password)
        }
    }

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh', // Höhe des gesamten Viewports
            }}
        >
            <form onSubmit={handleSubmit}>
                <Stack
                    direction='column'
                    divider={<Divider orientation='horizontal' flexItem />}
                    spacing={2}
                    sx={{
                        width: '300px', // Breite des Formulars
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
