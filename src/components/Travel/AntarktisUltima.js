import React from 'react';
import { Typography, Box, Grid, Container, Button } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const images = [
  {
    src: "https://www.designreisen.de/assets/destinations/_processed_/0/7/csm_ULTIMA_ICE_TUNNEL_1_-_Photo_by_Christoph_Hoebenreich_72dc5435e2.jpg",
    alt: "Ice Tunnel",
  },
  {
    src: "https://www.designreisen.de/assets/destinations/_processed_/3/b/csm_ANTARCTIC_LANDSCAPE_-_Photo_By_Christoph_Hoebenreich_14da53bbdf.jpg",
    alt: "Antarctic Landscape",
  },
  {
    src: "https://www.designreisen.de/assets/destinations/_processed_/e/5/csm_ULTIMA_EMPEROR_PENGUINS_1_-_Photo_By_Christoph_Hoebenreich_780ced9493.jpg",
    alt: "Emperor Penguins",
  },
];

export default function AntarktisUltima() {
  return (
    <Container
      sx={{
        backgroundColor: '#121212',
        color: '#d4a373',
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      {/* Textbeschreibung oberhalb der Bilder */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{ color: '#d4a373', fontWeight: 'bold', textAlign: 'center' }}
      >
        EXPEDITION IN DIE ANTARKTIS
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: '20px', textAlign: 'center', color: '#bbb' }}>
        Mit Ultima Antarctic Expeditions
      </Typography>

      <Box sx={{ marginBottom: '40px', color: '#bbb' }}>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Das Abenteuer beginnt im pulsierenden Kapstadt, einer der schönsten Städte der Welt. Nur 5,5 bis 6 Flugstunden entfernt, landet man auf der 3 Kilometer langen Eislandebahn im „Deep Field“ der Antarktis. Eine weite, unberührte Wildnis aus Eis und Schnee breitet sich aus und weckt Staunen und Abenteuerlust.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Vor gewaltigen, jahrhundertealten Eiswänden stehen, durch blau schimmernde Gletschertunnel navigieren und die eisigen Wunder der Natur bestaunen. Die faszinierende Weite des Kontinentalen Eisschildes raubt einem den Atem.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Eine Mini-Expedition zu einer Kolonie von 28.000 Kaiserpinguinen ist demütigend und aufregend zugleich.
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Und dann das ultimative Ziel – eine Expedition zum südlichsten Punkt der Erde, dem geografischen Südpol. Ein Once-in-a-Lifetime Erlebnis par excellence!
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '20px' }}>
          Das Oasis Camp bietet Einzel- und Doppelzimmer für 10-12 Gäste. Hier genießen Sie herzliche Gastfreundschaft, Fünf-Sterne-Service und komfortable, moderne Zimmer mit Panoramablick auf die schneebedeckten Nunatak-Berge und einen gefrorenen See.
        </Typography>
      </Box>

      {/* Bildgalerie */}
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box component="img" src={image.src} alt={image.alt} sx={{ width: '100%', borderRadius: '8px' }} />
          </Grid>
        ))}
      </Grid>

      {/* Navigationsbuttons */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button
          startIcon={<ArrowBackIosIcon />}
          sx={{
            color: '#d4a373',
            borderColor: '#d4a373',
            '&:hover': { backgroundColor: '#d4a373', color: '#121212' },
          }}
        >
          Zurück
        </Button>
        <Button
          endIcon={<ArrowForwardIosIcon />}
          sx={{
            color: '#d4a373',
            borderColor: '#d4a373',
            '&:hover': { backgroundColor: '#d4a373', color: '#121212' },
          }}
        >
          Weiter
        </Button>
      </Box>
    </Container>
  );
}
