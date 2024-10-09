import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Divider } from '@mui/material';

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
          <Typography variant="body2">{subtitle}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );

const rundreisenData = [
  {
    title: 'Beautiful Garden Route',
    location: 'Südafrika',
    link: 'https://www.designreisen.de/luxusreisen/rundreise-suedafrika-beautiful-garden-route',
    image: 'https://www.designreisen.de/fileadmin/_processed_/8/0/csm_1_84fd703764.jpg',
  },
  {
    title: 'The Magic of the South',
    location: 'Südafrika',
    link: 'https://www.designreisen.de/luxusreisen/rundreise-suedafrika-the-magic-of-the-south',
    image: 'https://www.designreisen.de/fileadmin/_processed_/d/1/csm_ps_RRSuedafrikaTheMagicOfTheSouth_Startbild_52918bbd58.jpg',
  },
];

export default function AfricaSubMenueOverviewTravelAround() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#aa8055',
          mb: 4,
          textTransform: 'uppercase',
        }}
      >
        Rundreisen
      </Typography>

      <Divider sx={{ mb: 4, borderColor: 'rgba(151, 151, 151, 0.5)' }} />

      <Grid container spacing={4}>
        {rundreisenData.map((rundreise, index) => (
          <TeaserBox
            key={index}
            link={rundreise.link}
            imgSrc={rundreise.image}
            title={rundreise.title}
            description={rundreise.location}
          />
        ))}
      </Grid>
    </Container>
  );
}