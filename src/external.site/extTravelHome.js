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

export default function ExtTravelHome() {
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
        Unsere Reiseziele
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="/admin/reise-verwaltung/uebersicht/antarktis"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/3/6/csm_66-north-F1YQrOc601M-unsplash_2590f40f05.jpg"
          title="Antarktis"
          subtitle=""
        />
        <TeaserBox
          link="/admin/reise-verwaltung/uebersicht/afria_subCountries"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/b/csm_Background_Back-to-Nature2_f193d8e820.jpg"
          title="Afrika"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/asien"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/9/csm_Laos_Teaser_3_73b25c6004.jpg"
          title="Asien"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/europa"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/c/5/csm_Florenz_d1c151f0cc.jpg"
          title="Europa"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/indischer-ozean"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/e/9/csm_Teaser-Indischer-Ozean_1dbf43b8c7.jpg"
          title="Indischer Ozean"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/karibik"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/7/csm_Karibik4_62841912f5.jpg"
          title="Karibik"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/mittelamerika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/9/csm_Startbild-Mittelamerika_6675b6c6f4.jpg"
          title="Mittelamerika"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/suedamerika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/c/csm_Suedamerika_BG_9aced3d33b.jpg"
          title="Südamerika"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/nordamerika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/3/7/csm_Teaser_USA_5fdba61524.jpg"
          title="Nordamerika"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/suedpazifik"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/1/6/csm_Teaser-Neuseeland-Wharea-Kea-Lodge_72819d3bdf.jpg"
          title="Südpazifik"
          subtitle=""
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/orient"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/6/csm_Teaser-Palais-Namaskar-Marokko_a5ee5a3380.jpg"
          title="Orient"
          subtitle=""
        />
      </Grid>
    </Container>
  );
}