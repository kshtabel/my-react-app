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

export default function MittelamerikaTeaser() {
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
        Mittelamerika
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-costa-rica-luxus-pur-zwischen-dschungel-und-meer"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/7/f/csm_keel-billed-toucan-gfca3953ac_1920_a8400a07d0.jpg"
          title="Luxus pur zwischen Dschungel und Meer"
          subtitle="Costa Rica"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-costa-rica-natur-pur-tiere-hautnah"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/8/e/csm_anteater-g21ac7c8b5_1920_e60d4d9a38.jpg"
          title="Natur Pur & Tiere Hautnah"
          subtitle="Costa Rica"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-mexiko-koloniale-perlen"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/a/csm_ps_tagDeath_76cf1f41c6.jpg"
          title="Koloniale Perlen"
          subtitle="Mexiko"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-mexiko-fiesta-mexicana"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/8/4/csm_david-carballar-FZU-vIW-lk8-unsplash_cddf22b302.jpg"
          title="Fiesta Mexicana"
          subtitle="Mexiko"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-mexiko-farbspektakel-yukatan"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/4/0/csm_filip-gielda-QKrLdkoYDrc-unsplash_73e4dfe0e3.jpg"
          title="Farbspektakel Yucatán"
          subtitle="Mexiko"
        />
      </Grid>
    </Container>
  );
}