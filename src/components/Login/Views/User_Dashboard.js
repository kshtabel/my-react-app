import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const UserDashboard = () => {
    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom>
                Willkommen zu Ihrem Dashboard
            </Typography>
            <Typography variant="body1">
                Hier können Sie Ihre Account-Einstellungen und weitere Optionen verwalten.
            </Typography>
        </Box>
    );
};

export default UserDashboard;