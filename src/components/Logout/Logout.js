// Logout.js
import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate

const Logout = ({ setIsLoggedIn, setToken }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Token aus dem Local Storage entfernen
        setIsLoggedIn(false);
        setToken('');
        navigate('/login'); // Nach dem Logout zur Login-Seite navigieren
    };

    return (
        <Button variant='contained' color='secondary' onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default Logout;
