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

export default function Component() {
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
        Arktis & Island
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-island-in-style"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/9/8/csm_ps_RRIsland_DiamantenStrand_05dc7a46ad.jpg"
          title="Island - In Style"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-sommer-luxus-edition"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/6/7/csm_66-north-NaQMJ-xNDWI-unsplash_10bbd0418c.jpg"
          title="Arktis - Sommer - Luxus Edition"
          subtitle=""
        />
      </Grid>
    </Container>
  );
}