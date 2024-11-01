import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

const TeaserBox = ({ link, imgSrc, title, subtitle }) => (
  <Grid item xs={12} sm={6} md={4} lg={4}>
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

export default function TravelDestinations() {
  const teaserData = [
    {
      link: "https://www.designreisen.de/luxusreisen/kreta-daios-cove",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/0/f/csm_DC_AdultsPool_Ocean_01_Kopie_ad359d7704.jpg",
      title: "Daios Cove",
      subtitle: "Kreta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kreta-domes-of-elounda-autograph-collection",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/0/9/csm_DomesOfElounda_SpinalongaView_2c1ed84df8.jpg",
      title: "Domes of Elounda, Autograph Collection",
      subtitle: "Kreta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/griechenland/costa-navarino-the-romanos",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/a/f/csm_Guestroom_Grand_Premium_Infinity_Suite_Beachfront__2__891b80966a.jpg",
      title: "The Romanos, a Luxury Collection Resort",
      subtitle: "Costa Navarino",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/costa-navarino-the-westin",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/0/6/csm_PS-Pool-zwei_dc74535b32.jpg",
      title: "The Westin",
      subtitle: "Costa Navarino",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/griechenland/athen-one-and-only-aesthesis",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/3/9/csm_180922_OneOnly_Aesthesis_Bungalow_Terrace_Fireplace_0570_MASTER-scaled_e76b08f2ba.jpg",
      title: "One&Only Aesthesis",
      subtitle: "Athen",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/chalkidiki-ikos-oceania",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/d/c/csm_ikos_oceania_veranda_2880x1919_1__0a94c169c2.jpg",
      title: "Ikos Oceania",
      subtitle: "Chalkidiki",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/chalkidiki-porto-sani-village",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/4/f/csm_01_Porto-Sani-Village_Hotel-Resort_6f0cf00f90.jpg",
      title: "Porto Sani Village",
      subtitle: "Chalkidiki",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/chalkidiki-sani-dunes",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/e/4/csm_Sani-Dunes_Vogelperspektive-Resort_87e7e31310.jpg",
      title: "Sani Dunes",
      subtitle: "Chalkidiki",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/chalkidiki-sani-club",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/1/3/csm_saniclub_beach_aerial_0538f6d7e1.jpg",
      title: "Sani Club",
      subtitle: "Chalkidiki",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/chalkidiki-the-danai",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/1/8/csm_ps_private_beach_e86010fb9a.jpg",
      title: "The Danai",
      subtitle: "Chalkidiki",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/chalkidiki-sani-asterias-suites",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/1/8/csm_sani_asterias_beachfront_2_2880x2158_5cfed5b76b.jpg",
      title: "Sani Asterias Suites",
      subtitle: "Chalkidiki",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/apulien-borgo-egnazia",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/8/csm_ps_Pool_Aussen_654051c385.jpg",
      title: "Borgo Egnazia",
      subtitle: "Apulien",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/italien/sardinien-abi-d-oru",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/f/0/csm_11_Bella_7e09acbd67.jpg",
      title: "Abi d'Oru",
      subtitle: "Sardinien",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/sizilien-belmond-grand-hotel-timeo",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/7/4/csm_belmond_timeo_sizilien_1200x800_d83b8509ae.jpg",
      title: "Belmond Grand Hotel Timeo",
      subtitle: "Sizilien",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/portugal-vila-vita-parc",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/6/9/csm_vila_vita_parc_pool_blick_97179747c5.jpg",
      title: "Vila Vita Parc",
      subtitle: "Portugal",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/spanien-finca-cortesin",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/1/csm_finca_cortesin_pool_b43a56dd24.jpg",
      title: "Finca Cortesin",
      subtitle: "Spanien",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/griechenland-kreta-blue-palace",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/5/2/csm_blue_palace_kreta_pool_45132e8e77.jpg",
      title: "Blue Palace",
      subtitle: "Kreta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/italien-toskana-rosewood-castiglion-del-bosco",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/a/9/csm_rosewood_castiglion_del_bosco_toskana_2_80e94f5cf8.jpg",
      title: "Rosewood Castiglion del Bosco",
      subtitle: "Toskana",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/griechenland-santorin-grace-hotel",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/9/e/csm_grace_hotel_santorini_pool_5a2d6e29a6.jpg",
      title: "Grace Hotel",
      subtitle: "Santorin",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/italien-venetien-aman-venice",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/e/3/csm_aman_venice_hotel_d5b8ac9f29.jpg",
      title: "Aman Venice",
      subtitle: "Venetien",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/frankreich-provence-chateau-de-fonscolombe",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/8/csm_chateau_de_fonscolombe_provence_pool_d81b83409c.jpg",
      title: "Chateau de Fonscolombe",
      subtitle: "Provence",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/italien-amalfi-belmond-hotel-caruso",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/b/3/csm_belmond_hotel_caruso_amalfikueste_84e4bc1f4e.jpg",
      title: "Belmond Hotel Caruso",
      subtitle: "Amalfiküste",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/portugal-six-senses-douro-valley",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/6/8/csm_six_senses_douro_valley_portugal_pool_9465d62c5e.jpg",
      title: "Six Senses Douro Valley",
      subtitle: "Portugal",
    },
  ];

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
        Familienhotels in Europa
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {teaserData.map((teaser, index) => (
          <TeaserBox key={index} {...teaser} />
        ))}
      </Grid>
    </Container>
  );
}