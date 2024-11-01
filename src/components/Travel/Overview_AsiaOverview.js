import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box } from '@mui/material';

const CountryCard = ({ link, imgSrc, title }) => (
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
            padding: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="body1">{title}</Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default function AsienOverview() {
  const countries = [
    { link: '/admin/reise-verwaltung/uebersicht/asien/china', imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/5/0/csm_destination-1_b18d46d783.jpg', title: 'China' },
    { link: '/admin/reise-verwaltung/uebersicht/asien/indonesien', imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/4/1/csm_Indonesien_1864f9de89.jpg', title: 'Indonesien' },
    { link: 'https://www.designreisen.de/luxusreisen/japan', imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/9/6/csm_Startbild-Japan_NEU_ee43d79f9a.jpg', title: 'Japan' },
    { link: 'https://www.designreisen.de/luxusreisen/kambodscha', imgSrc: 'https://www.designreisen.de/assets/destinations/_processed_/7/3/csm_vince-gx-opCFMhUe_FA-unsplash_fa8ed3ae8b.jpg', title: 'Kambodscha' },
    { link: 'https://www.designreisen.de/luxusreisen/laos', imgSrc: 'https://www.designreisen.de/assets/destinations/_processed_/6/7/csm_david-suaza-BGlLB0zZtu8-unsplash_3631a7082c.jpg', title: 'Laos' },
    { link: 'https://www.designreisen.de/luxusreisen/malaysia', imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/1/3/csm_Malaysia_Stadtsicht_9befa60d66.jpg', title: 'Malaysia' },
    { link: 'https://www.designreisen.de/luxusreisen/singapur', imgSrc: 'https://www.designreisen.de/assets/destinations/_processed_/4/1/csm_mikhail-preobrazhenskiy-zH3M9rfYtuk-unsplash_7b7b21ef3d.jpg', title: 'Singapur' },
    { link: 'https://www.designreisen.de/luxusreisen/thailand', imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/7/6/csm_Teaser_Thailand_aa7b8984c5.jpg', title: 'Thailand' },
    { link: 'https://www.designreisen.de/luxusreisen/vietnam', imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/4/d/csm_Vietnam_11458c0661.jpg', title: 'Vietnam' },
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
        Asien Übersicht
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {countries.map((country, index) => (
          <CountryCard key={index} link={country.link} imgSrc={country.imgSrc} title={country.title} />
        ))}
      </Grid>
    </Container>
  );
}
