import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import './MapStyles.css'; // Add custom styles here

const continents = [
  { name: 'Antarktis', id: 'antarctica' },
  { name: 'Afrika', id: 'africa' },
  { name: 'Asien', id: 'asia' },
  { name: 'Europa', id: 'europe' },
  { name: 'Indischer Ozean', id: 'indian-ocean' },
  { name: 'Indischer Subkontinent', id: 'indian-subcontinent' },
  { name: 'Karibik', id: 'caribbean' },
  { name: 'Mittelamerika', id: 'central-america' },
  { name: 'Südamerika', id: 'south-america' },
  { name: 'Nordamerika', id: 'north-america' },
  { name: 'Südpazifik', id: 'south-pacific' },
  { name: 'Orient', id: 'middle-east' },
];

function InteractiveMap() {
  const [activeContinent, setActiveContinent] = useState(null);

  const handleMouseOver = (id) => {
    setActiveContinent(id);
  };

  const handleMouseOut = () => {
    setActiveContinent(null);
  };

  return (
    <Grid container spacing={2}>
      {/* Left Side - List of Continents */}
      <Grid item xs={12} md={3}>
        <Box sx={{ color: '#d4a373', textAlign: 'left', marginLeft: '20px' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
            DESTINATIONEN WELTWEIT
          </Typography>
          <Box sx={{ borderBottom: '2px solid #d4a373', width: '100px', marginBottom: '20px' }} />
          {continents.map((continent) => (
            <Typography
              key={continent.id}
              variant="h6"
              sx={{
                marginBottom: '10px',
                cursor: 'pointer',
                '&:hover': { color: '#f0e6d2' },
              }}
              onMouseOver={() => handleMouseOver(continent.id)}
              onMouseOut={handleMouseOut}
            >
              {continent.name}
            </Typography>
          ))}
        </Box>
      </Grid>

      {/* Right Side - SVG Map */}
      <Grid item xs={12} md={9}>
        <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
          <svg
            viewBox="0 0 2000 1000"
            width="100%"
            height="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Example Continents as SVG Paths (you will need to replace with actual paths) */}
            <path
              id="antarctica"
              d="M..."
              className={`continent ${activeContinent === 'antarctica' ? 'active' : ''}`}
              fill={activeContinent === 'antarctica' ? '#d4a373' : 'none'}
              stroke="#d4a373"
            />
            <path
              id="africa"
              d="M..."
              className={`continent ${activeContinent === 'africa' ? 'active' : ''}`}
              fill={activeContinent === 'africa' ? '#d4a373' : 'none'}
              stroke="#d4a373"
            />
            {/* Add paths for all other continents */}
          </svg>
        </Box>
      </Grid>
    </Grid>
  );
}

export default InteractiveMap;