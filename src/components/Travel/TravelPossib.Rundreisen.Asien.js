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

export default function AsienTeaser() {
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
        Asien
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-indonesien-island-paradise"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/d/csm_ps_RRIndonesien_IslandParadise_Tag6-9Ubud_729a4b778f.jpg"
          title="Island Paradise"
          subtitle="Indonesien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-japan-land-der-aufgehenden-sonne"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/9/6/csm_Startbild-Japan_NEU_f248556df8.jpg"
          title="Land der aufgehenden Sonne"
          subtitle="Japan"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-thailand-place-of-peace"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/8/csm_ps_RRThailand_POP_Elefant1_65db204987.jpg"
          title="Place of Peace"
          subtitle="Thailand"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreisen/luxusreisen/rundreisen-asien/hidden-trail-of-vietnam"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/7/8/csm_Avana_Retreat_Mai_Chau_-_Avana_Retreat_-_Cloud_Pool_Bar_Cloud-Pool-Bar--2-_f0c6708e0b.jpg"
          title="Hidden Trails of Nordvietnam"
          subtitle="Vietnam"
        />
      </Grid>
    </Container>
  );
}