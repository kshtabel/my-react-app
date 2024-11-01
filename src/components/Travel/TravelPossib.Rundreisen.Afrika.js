import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

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

export default function Component() {
  const destinations = [
    {
      title: 'Juwel in the Wilderness',
      location: 'Kenia',
      imgSrc:
        'https://www.designreisen.de/assets/destinations/_processed_/2/4/csm_damian-patkowski-T-LfvX-7IVg-unsplash_8e56f8e033.jpg',
      link: 'https://www.designreisen.de/luxusreisen/rundreise-kenia-juwel-in-the-wilderness',
    },
    {
      title: 'Pure Africa Experience',
      location: 'Botswana',
      imgSrc:
        'https://www.designreisen.de/fileadmin/_processed_/9/9/csm_Botswana_sundown_0bded1a686.jpg',
      link: 'https://www.designreisen.de/luxusreisen/rundreise-botswana-pure-africa-experience',
    },
    {
      title: 'Glowing Desert',
      location: 'Namibia',
      imgSrc:
        'https://www.designreisen.de/fileadmin/_processed_/e/b/csm_ps_RRNamibiaGlowingDesert_Sternenbilderschau_616d7a65f2.jpg',
      link: 'https://www.designreisen.de/luxusreisen/rundreise-namibia-glowing-desert',
    },
    {
      title: 'The Magic of the South',
      location: 'Südafrika',
      imgSrc:
        'https://www.designreisen.de/fileadmin/_processed_/d/1/csm_ps_RRSuedafrikaTheMagicOfTheSouth_Startbild_8314443138.jpg',
      link: 'https://www.designreisen.de/luxusreisen/rundreise-suedafrika-the-magic-of-the-south',
    },
    {
      title: 'Bush & Beach',
      location: 'Tansania',
      imgSrc:
        'https://www.designreisen.de/fileadmin/_processed_/5/0/csm_ps_RRTansaniaBush_Beach_SingitaSerengetiHouseWildlife_02222470e9.jpg',
      link: 'https://www.designreisen.de/luxusreisen/rundreise-tansania-bush-and-beach',
    },
    {
      title: '1001 Nights',
      location: 'Marokko',
      imgSrc:
        'https://www.designreisen.de/fileadmin/_processed_/5/3/csm_ps_RRMarokko_Spices_6d07c5f5b3.jpg',
      link: 'https://www.designreisen.de/luxusreisen/rundreise-marokko-nights',
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
        Afrika
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {destinations.map((destination) => (
          <TeaserBox
            key={destination.title}
            link={destination.link}
            imgSrc={destination.imgSrc}
            title={destination.title}
            subtitle={destination.location}
          />
        ))}
      </Grid>
    </Container>
  );
}