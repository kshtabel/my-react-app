import React, { useState } from 'react';
import { Typography, Box, Grid, Button, Divider, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Gallery from './Gallery'; // Importiere die Galerie-Komponente
import AntarktisUltima from './AntarktisUltima'; // Importiere die Ultima-Komponente

// Wiederverwendbare TeaserBox-Komponente
const TeaserBox = ({ image, title, description, onClick }) => (
  <Grid item xs={12} md={6}>
    <Box
      onClick={onClick}
      sx={{
        display: 'block',
        textDecoration: 'none',
        backgroundColor: 'transparent',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        '&:hover img': {
          transform: 'scale(1.05)',
        },
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          boxShadow: '0 6px 15px rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: '100%',
          height: 'auto',
          transition: 'transform 0.3s ease-in-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          opacity: 0,
          transition: 'opacity 0.3s ease-in-out',
          '&:hover': {
            opacity: 1,
          },
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Box>
  </Grid>
);

function WhiteDesertDetail() {
  return (
    <Box
      sx={{
        padding: '40px',
        color: '#f0f0f0',
        backgroundColor: '#121212',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
      }}
    >
      <Typography variant="h4" sx={{ color: '#d4a373', marginBottom: '20px', fontWeight: 'bold' }}>
        Beschreibung
      </Typography>
      <Typography variant="h5" sx={{ color: '#d4a373', marginBottom: '20px', fontWeight: 'bold' }}>
        ICE EXPERIENCE
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', color: '#bbb' }}>
        Die Antarktis: Unendlich weiße Eisplatten, gigantische Eisberge, eiskalte Temperaturen und in der Sonne
        glitzernder Schnee. Der siebte Kontinent fasziniert durch seine Extreme und ist der Inbegriff von
        Unerreichbarkeit und Unberührtheit.
      </Typography>
      <Gallery /> {/* Galerie anzeigen */}
    </Box>
  );
}

function TravelBody({ setSelectedHotel }) {
  const hotels = [
    {
      title: 'White Desert',
      link: 'https://www.designreisen.de/luxusreisen/antarktis/antarktis-white-desert',
      image: 'https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_377565863d.jpg',
      description: 'Antarktis',
    },
    {
      title: 'Ultima Antarctic Expeditions',
      link: 'https://www.designreisen.de/luxusreisen/antarktis/antarktis-ultima-antarctic-expeditions',
      image: 'https://www.designreisen.de/assets/destinations/_processed_/0/7/csm_ULTIMA_ICE_TUNNEL_1_-_Photo_by_Christoph_Hoebenreich_e33fe70f3b.jpg',
      description: 'Antarktis',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
      <Typography variant="h4" color="textSecondary" gutterBottom sx={{ color: '#d4a373', fontWeight: 'bold' }}>
        HOTELS (2)
      </Typography>
      <Divider sx={{ marginY: 2, backgroundColor: '#d4a373' }} />

      <Grid container spacing={3}>
        {hotels.map((hotel, index) => (
          <TeaserBox
            key={index}
            image={hotel.image}
            title={hotel.title}
            description={hotel.description}
            onClick={() => setSelectedHotel(hotel.title)}
          />
        ))}
      </Grid>
    </Container>
  );
}

const AntarktisPage = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);

  const goBack = () => {
    setSelectedHotel(null);
  };

  const goToOverview = () => {
    navigate('/admin/reise-verwaltung/uebersicht'); // Sicherstellen, dass diese Route existiert
  };

  return (
    <Container
      sx={{
        backgroundColor: '#121212',
        color: '#d4a373',
        minHeight: '100vh',
        padding: '40px',
        textAlign: 'center',
      }}
    >
      {!selectedHotel ? (
        <>
          <TravelBody setSelectedHotel={setSelectedHotel} />
          <Button
            variant="contained"
            onClick={goToOverview}
            sx={{
              marginTop: '40px',
              backgroundColor: '#d4a373',
              '&:hover': {
                backgroundColor: '#af814c',
              },
            }}
          >
            Zurück zur Übersicht
          </Button>
        </>
      ) : (
        <>
          {selectedHotel === 'White Desert' && <WhiteDesertDetail />}
          {selectedHotel === 'Ultima Antarctic Expeditions' && <AntarktisUltima />}
          <Button
            variant="contained"
            onClick={goBack}
            sx={{
              marginTop: '40px',
              backgroundColor: '#d4a373',
              '&:hover': {
                backgroundColor: '#af814c',
              },
            }}
          >
            Zurück zur Hotelauswahl
          </Button>
        </>
      )}
    </Container>
  );
};

export default AntarktisPage;
