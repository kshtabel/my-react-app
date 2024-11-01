import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const TeaserBox = ({ link, imgSrc, title }) => (
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
      </CardContent>
    </Card>
  </Grid>
);

export default function OnlineMagazine() {
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
        Online-Magazin
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Box sx={{ position: 'relative' }}>
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#aa8055',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
        </IconButton>
        <Grid container spacing={4}>
          <TeaserBox
            link="https://www.designreisen.de/magazin/familienurlaub-auf-sardinien-tipps/"
            imgSrc="https://www.designreisen.de/assets/destinations/_processed_/3/1/csm_Baglioni_Resort_Sardinia_General_Resort_Family_1__00d929ce84.jpg"
            title="Familienurlaub auf Sardinien"
          />
          <TeaserBox
            link="https://www.designreisen.de/magazin/sommerurlaub-mit-kindern/"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/c/csm_sommerurlaub-mit-kindern-hotels-tipps-leo-rivas-R_BLOGXpsOg-unsplash-2-1_2f7efb61d9.jpg"
            title="Sommerurlaub mit Kindern"
          />
          <TeaserBox
            link="https://www.designreisen.de/magazin/luxus-familienhotels-in-europa/"
            imgSrc="https://www.designreisen.de/assets/destinations/_processed_/b/a/csm_2024-02-15_17_08_55-Mediathek___Connection_to_Paradise___Luxusreiseblog_-_WordPress_-_Mozilla_Firefo_9f5b7dd46a.png"
            title="Unsere liebsten Luxus Familienhotels"
          />
        </Grid>
        <IconButton
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: '#aa8055',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
            },
          }}
        >
        </IconButton>
      </Box>
    </Container>
  );
}