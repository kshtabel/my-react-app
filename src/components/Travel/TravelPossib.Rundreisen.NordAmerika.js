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

export default function NordamerikaTeaser() {
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
        Nordamerika
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-hawaii-island-paradise"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/3/csm_ps_RRHawaii_Beach-and-cliffside-along-the-Napali-Coast_645ffc9d39.jpg"
          title="Island Paradise"
          subtitle="Hawaii"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-kanada-rockies-and-wildlife"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/4/b/csm_ps_RRKanada_See2_c81a1d22d4.jpg"
          title="Rockies & Wildlife"
          subtitle="Kanada"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-neuengland-indian-summer"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/5/csm_ps_RRNeuengland_AusblickAusDemMandarinOriental_cd20030cc8.jpg"
          title="Indian Summer"
          subtitle="Neuengland"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-usa-gambling-nature"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/3/4/csm_ps_RRUSA_HorseshoeBend_495ef33cb1.jpg"
          title="Gambling & Nature"
          subtitle="USA"
        />
      </Grid>
    </Container>
  );
}