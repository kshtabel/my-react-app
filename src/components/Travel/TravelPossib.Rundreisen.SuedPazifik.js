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

export default function SuedpazifikTeaser() {
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
        Südpazifik
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-australien-australia-deluxe"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/7/3/csm_photoholgic-1GFUOji-yck-unsplash_38a50cdf74.jpg"
          title="Australia Deluxe"
          subtitle="Australien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-australien-whales-wildlife-western-australia"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/c/b/csm_ps_RRAustralienWWA_QokkaNEU_2c30c5b864.jpg"
          title="Whales & Wildlife in Western Australia"
          subtitle="Australien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-franzoesisch-polynesien-polynesian-dream"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/c/csm_ps_RRPolynesien_Blume_b768f1b494.jpg"
          title="Polynesian Dream"
          subtitle="Französisch-Polynesien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-neuseeland-aotearoa-deluxe"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/3/9/csm_ps_RRNeuseelandAotearoaDeluxe_MaoriWandbild_a2afe962bf.jpg"
          title="Aotearoa Deluxe"
          subtitle="Neuseeland"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-neuseeland-away-from-it-all"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/0/5/csm_ps_RRNeuseelandAwayFromItAll_CatlinsOtago_1a0d7c780a.jpg"
          title="Away From It All"
          subtitle="Neuseeland"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-neuseeland-golfers-paradise"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/c/csm_ps_NeuseelandGolfersParadise_Startbild_02a1b14807.jpg"
          title="Golfers Paradise"
          subtitle="Neuseeland"
        />
      </Grid>
    </Container>
  );
}