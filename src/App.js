import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    axios.get('/api/data')
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: 1000}}>

      <Typography variant='h3' gutterBottom>React and Node.js Integration</Typography>
      
      <Typography variant='body1' gutterBottom>Message from the server: {data}</Typography>

    </Box>
  );

}

export default App;