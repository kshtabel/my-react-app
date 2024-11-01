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

export default function FamilienhotelsIndischOzeanTeaser() {
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
        Familienhotels im Indischen Ozean
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/baa-atoll-soneva-fushi"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/c/1/csm_ps_Soneva-Fushi-Aerial-View_a4f5d508e8.jpg"
          title="Soneva Fushi"
          subtitle="Baa Atoll"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/baa-atoll-the-nautilus"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/4/b/csm_The_Nautilus_Maldives_Beach_Residence__3__exterior_f37ebd5eb9.jpg"
          title="The Nautilus"
          subtitle="Baa Atoll"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/baa-atoll-anantara-kihavah-villas"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/8/1/csm_ps_beachCAndle_fe425346e2.jpg"
          title="Anantara Kihavah Villas"
          subtitle="Baa Atoll"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/lhaviyani-atoll-six-senses-kanuhura"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/a/d/csm_Three_Bedroom_Beach_Reserve_Outside_deck_view_88f71f07db.jpg"
          title="Six Senses Kanuhura"
          subtitle="Lhaviyani Atoll"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/laamu-atoll-six-senses-laamu"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/1/7/csm_Aerial_-_SHELL_sunset_17fd81f0b6.jpg"
          title="Six Senses Laamu"
          subtitle="Laamu Atoll"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/nord-male-atoll-oneonly-reethi-rah"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/9/7/csm_OO_RR_Wellness_Spa_Drone_1043_MASTER_70dba2bde9.jpg"
          title="One&Only Reethi Rah"
          subtitle="Nord Malé Atoll"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/desroches-island-four-seasons-resort-seychelles-at-desroches-island"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/6/8/csm_ps_FSResortSEZatDesrochesIsland_TurtleBoy_ad9f16bdc0.jpg"
          title="Four Seasons Resort Seychelles at Desroches Island"
          subtitle="Desroches Island"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/beau-champ-four-seasons-resort-mauritius-at-anahita"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/1/1/csm_ps_Abend-Sonne_6841554b3d.jpg"
          title="Four Seasons Resort Mauritius at Anahita"
          subtitle="Beau Champ"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/belle-mare-oneonly-le-saint-geran"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/e/c/csm_OO_LeSaintGeran_Beach_Drone_V1_777f956299.jpg"
          title="One&Only Le Saint Géran"
          subtitle="Belle Mare"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/trou-deau-douce-shangri-las-le-touessrok-resort-spa"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/d/csm_PS-Ambiente_740e14d342.jpg"
          title="Shangri-La’s Le Touessrok Resort & Spa"
          subtitle="Trou d'Eau Douce"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/mahe-four-seasons-resort-seychelles"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/0/9/csm_ps_balkon2_a700e117ca.jpg"
          title="Four Seasons Resort Seychelles"
          subtitle="Mahe"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/malediven/four-seasons-resort-maldives-at-landaa-giraavaru"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/3/csm_ps_Four-Seasons-Giraavaru_e7f0bf9828.jpg"
          title="Four Seasons Resort Maldives at Landaa Giraavaru"
          subtitle="Baa Atoll"
        />
      </Grid>
    </Container>
  );
}