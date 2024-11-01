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

export default function FamilienhotelAsienTeaser() {
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
        Familienhotels in Asien
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/hoi-an-four-seasons-resort-the-nam-hai"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/4/csm_The-Nam-Hai_3-Bedroom-villa_8745b3c4b3.jpg"
          title="Four Seasons Resort The Nam Hai"
          subtitle="Hoi An"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/koh-samui-four-seasons-resort-koh-samui"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/8/b/csm_02_Four-Seasons_Main-Pool_7be20feff2.jpg"
          title="Four Seasons Resort Koh Samui"
          subtitle="Koh Samui"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/koh-samui-w-retreat-koh-samui"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/b/csm_03_W-Retreat-Koh-Samui_Strand-Liegen_fda9b8e33d.jpg"
          title="W Retreat Koh Samui"
          subtitle="Koh Samui"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/langkawi-four-seasons-resort-langkawi"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/a/csm_01_Four-Seasons-Resort-Langkawi_Beach-Villa_82eb811a45.jpg"
          title="Four Seasons Resort Langkawi"
          subtitle="Langkawi"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/phuket-six-senses-yao-noi"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/c/6/csm_The_Hilltop_Aerial_View2__8955-A4__be5b342018.jpg"
          title="Six Senses Yao Noi"
          subtitle="Phuket"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/koh-samui-six-senses-samui"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/b/csm_Six-Senses-Samui-Hauptpool-bei-Tag_c3edaff74a.jpg"
          title="Six Senses Samui"
          subtitle="Koh Samui"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/sumba-island-nihi-sumba"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/9/1/csm_Nihiwatu-Lamba-Villas_12959b28e4.jpg"
          title="Nihi Sumba"
          subtitle="Sumba Island"
        />
      </Grid>
    </Container>
  );
}