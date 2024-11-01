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

export default function FamHotelsKaribik() {
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
        Familienhotels in der Karibik
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/west-end-village-four-seasons-resort-and-residences-anguilla"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/4/0/csm_01_Viceroy-Anguilla_exteriors_283f2d82b5.jpg"
          title="Four Seasons Resort and Residences Anguilla"
          subtitle="West End Village"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/antigua-jumby-bay-island"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/6/1/csm_01_Rosewood-Jumby-Bay_exterior_7f10bf91ef.jpg"
          title="Jumby Bay Island"
          subtitle="Antigua"
        />
      </Grid>
    </Container>
  );
}