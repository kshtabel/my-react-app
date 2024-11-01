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

export default function IndischerOzeanTeaser() {
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
        Indischer Ozean
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-malediven-comfort-insel-hopping"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/e/1/csm_shai-pal-05p3EF6tNzs-unsplash_2be1bcfa0a.jpg"
          title="Comfort-Insel-Hopping"
          subtitle="Malediven"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreisen/luxusreisen/yachtcharter-katamaran-seychellen"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/7/1/csm_luxusyachtcharter-seychellen_07_Charterwelt_-_Kopie_ce3d66e808.jpg"
          title="Seychellen per Katamaran"
          subtitle="Seychellen"
        />
      </Grid>
    </Container>
  );
}