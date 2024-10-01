import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const TeaserBox = ({ link, imgSrc, title }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card component="a" href={link} sx={{ textDecoration: 'none', color: '#aa8055' }}>
      <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: 'auto', width: '100%' }} />
      <CardContent sx={{ padding: '16px', textAlign: 'center', color: '#333' }}>
        <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          {title}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const MainApp = () => {
  return (
    <>
      <Grid container spacing={2} sx={{ marginTop: '20px', marginBottom: '20px' }}>
        <TeaserBox
          link="/admin/reise-verwaltung/uebersicht/antarktis"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/3/6/csm_66-north-F1YQrOc601M-unsplash_2590f40f05.jpg"
          title="Antarktis"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/afrika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/b/csm_Background_Back-to-Nature2_f193d8e820.jpg"
          title="Afrika"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/asien"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/9/csm_Laos_Teaser_3_73b25c6004.jpg"
          title="Asien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/europa"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/c/5/csm_Florenz_d1c151f0cc.jpg"
          title="Europa"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/indischer-ozean"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/e/9/csm_Teaser-Indischer-Ozean_1dbf43b8c7.jpg"
          title="Indischer Ozean"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/karibik"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/7/csm_Karibik4_62841912f5.jpg"
          title="Karibik"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/mittelamerika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/9/csm_Startbild-Mittelamerika_6675b6c6f4.jpg"
          title="Mittelamerika"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/suedamerika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/c/csm_Suedamerika_BG_9aced3d33b.jpg"
          title="Südamerika"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/nordamerika"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/3/7/csm_Teaser_USA_5fdba61524.jpg"
          title="Nordamerika"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/suedpazifik"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/1/6/csm_Teaser-Neuseeland-Wharea-Kea-Lodge_72819d3bdf.jpg"
          title="Südpazifik"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/orient"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/b/6/csm_Teaser-Palais-Namaskar-Marokko_a5ee5a3380.jpg"
          title="Orient"
        />
      </Grid>
    </>
  );
};

export default MainApp;