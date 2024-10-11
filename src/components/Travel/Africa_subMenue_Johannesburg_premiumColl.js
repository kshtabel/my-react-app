import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Divider } from '@mui/material';

const TeaserBox = ({ link, imgSrc, title, subtitle }) => (
  <Grid item xs={12} sm={6} md={4}>
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
      <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: 250, objectFit: 'cover' }} />
      <CardContent sx={{ padding: 2, textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
        <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          {title}
        </Typography>
        {subtitle && <Typography variant="body2">{subtitle}</Typography>}
      </CardContent>
    </Card>
  </Grid>
);

const hotels = [
  {
    title: '21 Nettleton',
    description: 'Kapstadt',
    link: 'https://www.designreisen.de/luxusreisen/kapstadt-21-nettleton',
    image: 'https://www.designreisen.de/fileadmin/_processed_/8/d/csm_21-Nettleton_exterior_86d06eae59.jpg',
  },
  {
    title: 'Ellerman House',
    description: 'Kapstadt',
    link: 'https://www.designreisen.de/luxusreisen/kapstadt-ellerman-house',
    image: 'https://www.designreisen.de/fileadmin/_processed_/b/1/csm_ps_EllermanHouse_1Mainhouse_60ead0f40e.jpg',
  },
  {
    title: 'The Silo',
    description: 'Kapstadt',
    link: 'https://www.designreisen.de/luxusreisen/kapstadt-the-silo',
    image: 'https://www.designreisen.de/fileadmin/_processed_/f/5/csm_ps_TheSilo_Kapstadt_Entrance_814edfb62f.jpg',
  },
  // Add any additional hotels here following the same structure
];

const AfricaSubMenueJohannesburg = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Section Heading */}
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#aa8055',
          marginBottom: '40px',
          textTransform: 'uppercase',
        }}
      >
        Premium Collection
      </Typography>

      <Divider sx={{ my: 4, backgroundColor: '#979797' }} />

      {/* Hotel Grid */}
      <Grid container spacing={4}>
        {hotels.map((hotel, index) => (
          <TeaserBox
            key={index}
            link={hotel.link}
            imgSrc={hotel.image}
            title={hotel.title}
            subtitle={hotel.description}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default AfricaSubMenueJohannesburg;
