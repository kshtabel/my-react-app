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

export default function IndischerSubkontinentTeaser() {
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
        Indischer Subkontinent
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-bhutan-thunder-dragon"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/4/3/csm_ps_RundreiseBhutan_Punaka-Tzong_b30df41f5e.jpg"
          title="Thunder Dragon"
          subtitle="Bhutan"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-bhutan-hidden-kingdom"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/8/c/csm_raimond-klavins-JqT2Wp5S0Dk-unsplash_eade4594b7.jpg"
          title="Hidden Kingdom"
          subtitle="Bhutan"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-sri-lanka-garden-eden"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/d/3/csm_hill-gc4734b926_1920_af5381f9e0.jpg"
          title="Garden Eden"
          subtitle="Sri Lanka"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-nordindien-colors-of-life"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/5/7/csm_divya-agrawal-Lr1HuZPK_AA-unsplash_0cf32915b1.jpg"
          title="Colors of Life"
          subtitle="Nordindien"
        />
      </Grid>
    </Container>
  );
}