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

export default function FamilienhotelsAfrikaTeaser() {
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
        Familienhotels in Afrika
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/de-hoop-nature-reserve-morukuru-family-ocean-house"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/9/e/csm_Morukuru-Family-Ocean-House-Abendstimmung_c07cf40a76.jpg"
          title="Morukuru Family Ocean House"
          subtitle="De Hoop Nature Reserve"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/kapstadt-belmond-mount-nelson-hotel"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/5/e/csm_ps_BelmondMountNelson_Overview_acf59bd6d9.jpg"
          title="Mount Nelson, A Belmond Hotel, Kapstadt"
          subtitle="Kapstadt"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/kapstadt-oneonly-cape-town"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/8/5/csm_One_Only_Cape_Town_Resort_View_from_Marina_Rise_38028dade2.jpg"
          title="One&Only Cape Town"
          subtitle="Kapstadt"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-sweni"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/6/e/csm_Singita_Sweni_Pool_5833d9a218.jpg"
          title="Singita Sweni"
          subtitle="Krüger Nationalpark"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-ebony"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/7/csm_Singita_Ebony_Aussenrestaurant_15df2dfea7.jpg"
          title="Singita Ebony"
          subtitle="Krüger Nationalpark"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/malilangwe-wildreservat-singita-pamushana-lodge"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/7/f/csm_PAMU_LAKE_VIEW_e3d0943820.jpg"
          title="Singita Pamushana Lodge"
          subtitle="Malilangwe Wildreservat"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/tarangire-nationalpark-chem-chem-tarangire"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/8/0/csm_02_Chem-Chem_Tarangire_Blick-auf-Lodge-Vogelperspektive_735054af2e.jpg"
          title="Chem Chem Tarangire"
          subtitle="Tarangire Nationalpark"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/singita-grumeti-reserves-singita-faru-faru-lodge"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/6/e/csm_Singita-Faru-Faru-Lodge-Deck-in-the-evening_6c0c4844e2.jpg"
          title="Singita Faru Faru Lodge"
          subtitle="Singita Grumeti Reserves"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/thanda-island-thanda-island-villa"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/e/8/csm_Thanda-Island_Areal-View_83b336127d.jpg"
          title="Thanda Island Villa"
          subtitle="Thanda Island"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/masai-mara-angama-mara"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/8/8/csm_Angama-Mara_fEUERPLATZ_a142e73893.jpg"
          title="Angama Mara"
          subtitle="Masai Mara"
        />
      </Grid>
    </Container>
  );
}