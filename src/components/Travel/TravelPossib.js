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

export default function TravelThemes() {
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
        Reisethemen
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="/admin/reise-verwaltung/themen/rundreisen"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/8/7/csm_afr4_9d15bab8a4.jpg"
          title="Explore The World"
          subtitle="Rundreisen"
        />
        <TeaserBox
          link="/admin/reise-verwaltung/themen/familienurlaub"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/7/b/csm_FIP_Activity_family_adventure_1_5053b9004d.jpg"
          title="Family Moments"
          subtitle="Familienurlaub"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/reisethemen/luxus-yachtcharter-weltweit"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/c/b/csm_motoryachten_26_charterwelt_6ece416854.jpg"
          title="Luxus Yachtcharter"
          subtitle="Privates Chalet auf dem Meer"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/honeymoon"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/3/6/csm_coup5_798ed129fb.jpg"
          title="Honeymoon"
          subtitle="Reise ins Glück"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/staedtereisen"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/d/6/csm_skyRED__67d104d182.jpg"
          title="Urban Hotspots"
          subtitle="Städtereisen"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/kreuzfahrten"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/2/csm_PSScenic-Eclipse-Nebel_2acb9980de.jpg"
          title="Luxury Cruises"
          subtitle="Kreuzfahrten"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/luxus-chalets"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/0/e/csm_Luxus-Chalets-Banner-2_deedc9dc5b.jpg"
          title="Magic Mountains"
          subtitle="Luxus-Chalets"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/virgin-galactic"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/8/csm_Virgin_Galactic_Spaceship_6_71559fc85b.jpg"
          title="Discover The Universe"
          subtitle="Reise ins All mit Virgin Galactic"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/my-body-my-soul"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/7/csm_My-Body-My-Soul-Massage_c76b588896.jpg"
          title="My Body My Soul"
          subtitle="Wellness, Spa, Health, Yoga, Detox"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/privatjets"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/e/csm_Designreisen_Privatjets_fa3ac865ec.jpg"
          title="Flying Private"
          subtitle="Privatjets"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/reisethemen/private-jet-journey-arount-the-world"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/f/csm_FS_g_6613fb43e0.jpg"
          title="Private Jet Experience"
          subtitle="Privat um die Welt"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/golfers-paradise"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/3/2/csm_01_The_Lodge_at_Camp_Kidnappers_Aerial_fa30e9ce1c.jpg"
          title="Golfer's Paradise"
          subtitle="Golf-Destinationen"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/luxusvillen/"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/6/0/csm_ps_Cinema_47ec31e73b.jpg"
          title="Luxus Villen"
          subtitle="Luxusvillen in Europa"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/luxuszuege"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/b/0/csm_VSOE-EXT-SCE-21_b3e8ad48b3.jpg"
          title="Luxuszüge"
          subtitle="Reisen im luxuriösen Zug"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/aktuelle-specials"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/7/csm_special_offer_ae1f4a6f3d.jpg"
          title="Aktuelle Specials"
          subtitle="Exklusive Angebote"
        />
      </Grid>
    </Container>
  );
}