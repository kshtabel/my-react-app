// LoginPage.js
import * as React from 'react';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import {useState} from 'react';


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

        if (Username == '') {
            setUsernameError(true);
        }

        if (password == '') {
            setPasswordError(true);
        }

        if (VerifyPassword == '') {
            setVerifyPasswordError(true);
        }

        if (password != VerifyPassword) {
            setPasswordError(true);
            setVerifyPasswordError(true);
        }

        if (Username && password && VerifyPassword) {
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
            }}
        >
            <form onSubmit={handleSignUp}>
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
                        value={Username} 
                        onChange={e => setUsername(e.target.value)} 
                        error={UsernameError}
                        helperText={UsernameError ? "Benutzername ist erforderlich" : ""}
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

                    <TextField
                        id='filled-basic'
                        label='Passwort'
                        variant='filled'
                        type='password'
                        value={VerifyPassword}
                        onChange={e => setVerifyPassword(e.target.value)}
                        error={VerifyPasswordError}
                        helperText={VerifyPasswordError ? "Passwörter nicht identisch" : ""}
                    />

                    <Button variant='contained' type='submit'>
                        Registrieren
                    </Button>
                </Stack>
            </form>
        </Box>
    );
}

export default SignUp;