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

export default function FamHotelsOrient() {
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
        Familienhotels im Orient
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/abu-dhabi-park-hyatt-abu-dhabi-hotel-and-villas"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/7/csm_ps_ParkHyattAbuDhabi_PoolEsplanade_3d2ee3df7f.jpg"
          title="Park Hyatt Abu Dhabi Hotel and Villas"
          subtitle="Abu Dhabi"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/zighy-bay-six-senses-zighy-bay"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/a/c/csm_Sense_on_the_Edge_aerial__7027-A4__502d186cef.jpg"
          title="Six Senses Zighy Bay"
          subtitle="Zighy Bay"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/dubai-jumeirah-al-naseem-madinat-jumeirah"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/5/6/csm_Jumeirah_Al_Naseem_-_Royal_Penthouse_Suite_-_Terrace_Private_Pool_187545e28d.jpg"
          title="Jumeirah Al Naseem, Madinat Jumeirah"
          subtitle="Dubai"
        />
      </Grid>
    </Container>
  );
}