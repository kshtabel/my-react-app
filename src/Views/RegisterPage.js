// RegisterPage.js
import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function RegisterPage() {
  return (
    <div className='RegisterBox'>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          flexDirection: 'column',
        }}
      >
        <Stack
          direction='column'
          divider={<Divider orientation='horizontal' flexItem />}
          spacing={2}
        >
          <TextField id='filled-basic' label='Benutzername' variant='filled' type='text' />
          <TextField id='filled-basic' label='Passwort' variant='filled' type='password' />
          <Button variant='contained'>Registrieren</Button>
        </Stack>
      </Box>
    </div>
  );
}

export default RegisterPage;