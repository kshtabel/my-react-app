import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box } from '@mui/material';
import IndonesienHotels from './Overview_Asia_Indonesien_Hotels';
import Rundreisen from './Overview_Asia_Indonesien_RoundTrip';

const HotelCard = ({ link, imgSrc, title, location }) => (
  <Grid item xs={12} sm={6} md={4} lg={4}>
    <Card
      component="a"
      href={link}
      sx={{
        textDecoration: 'none',
        color: 'inherit',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)',
        },
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: 250, objectFit: 'cover' }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            padding: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {location}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default function IndonesienOverview() {
  const hotels = [
    {
      link: 'https://www.designreisen.de/luxusreisen/bali-mandapa-a-ritz-carlton-reserve',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/d/0/csm_ps_RitzCarltonBali_Overview_18ad8739ad.jpg',
      title: 'Mandapa, a Ritz Carlton Reserve',
      location: 'Bali',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/bali-bulgari-resort-bali',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/8/3/csm_ps_BulgariResortBali_CliffSidePool_50d236a7e9.jpg',
      title: 'Bulgari Resort Bali',
      location: 'Bali',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/sumba-island-nihi-sumba',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/9/1/csm_Nihiwatu-Lamba-Villas_12959b28e4.jpg',
      title: 'Nihi Sumba',
      location: 'Sumba Island',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#aa8055',
          marginBottom: 4,
          textTransform: 'uppercase',
        }}
      >
        Premium Collection
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {hotels.map((hotel, index) => (
          <HotelCard key={index} link={hotel.link} imgSrc={hotel.imgSrc} title={hotel.title} location={hotel.location} />
        ))}
      </Grid>
      <IndonesienHotels />
      <Rundreisen />
    </Container>
  );
}
