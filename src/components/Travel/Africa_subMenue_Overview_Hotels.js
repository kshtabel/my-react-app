import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Divider } from '@mui/material';

const hotels = [
  {
    title: 'De Hoop Nature Reserve - Morukuru Beach Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/d/0/csm_ps_MorukuruBeachLodge_ExteriorViewwithFynbos_8d7e7cf383.jpg',
    link: 'https://www.designreisen.de/luxusreisen/de-hoop-nature-reserve-morukuru-beach-lodge',
    description: 'De Hoop Nature Reserve',
  },
  {
    title: 'De Hoop Nature Reserve - Morukuru Family Ocean House',
    image: 'https://www.designreisen.de/fileadmin/_processed_/9/e/csm_Morukuru-Family-Ocean-House-Abendstimmung_d88282443c.jpg',
    link: 'https://www.designreisen.de/luxusreisen/de-hoop-nature-reserve-morukuru-family-ocean-house',
    description: 'De Hoop Nature Reserve',
  },
  {
    title: 'Franschhoek - La Residence',
    image: 'https://www.designreisen.de/fileadmin/_processed_/7/4/csm_PS-Weinberge_9b99fc9aaa.jpg',
    link: 'https://www.designreisen.de/luxusreisen/franschhoek-la-residence',
    description: 'Franschhoek',
  },
  {
    title: 'Franschhoek - LEEU Estates',
    image: 'https://www.designreisen.de/fileadmin/_processed_/d/f/csm_LEEU-Estates-Garden_035c98d0d0.jpg',
    link: 'https://www.designreisen.de/luxusreisen/franschhoek-leeu-estates',
    description: 'Franschhoek',
  },
  {
    title: 'Franschhoek - Babylonstoren',
    image: 'https://www.designreisen.de/assets/destinations/_processed_/a/3/csm_Babylonstoren-Fynbos_Cottages_in_der_Daemmerung_e596e3707a.jpg',
    link: 'https://www.designreisen.de/luxusreisen/suedafrika/franschhoek-babylonstoren',
    description: 'Franschhoek',
  },
  {
    title: 'Hermanus - Birkenhead House',
    image: 'https://www.designreisen.de/fileadmin/_processed_/b/9/csm_PS-Aussenfassade_9f7dfd34f4.jpg',
    link: 'https://www.designreisen.de/luxusreisen/hermanus-birkenhead-house',
    description: 'Hermanus',
  },
  {
    title: 'Kapstadt - Ellerman House',
    image: 'https://www.designreisen.de/fileadmin/_processed_/b/1/csm_ps_EllermanHouse_1Mainhouse_cbf2f63f13.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kapstadt-ellerman-house',
    description: 'Kapstadt',
  },
  {
    title: 'Kapstadt - One&Only Cape Town',
    image: 'https://www.designreisen.de/assets/destinations/_processed_/8/5/csm_One_Only_Cape_Town_Resort_View_from_Marina_Rise_a0a2d93a0d.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kapstadt-one-and-only-cape-town',
    description: 'Kapstadt',
  },
  {
    title: 'Kapstadt - The Silo',
    image: 'https://www.designreisen.de/fileadmin/_processed_/f/5/csm_ps_TheSilo_Kapstadt_Entrance_e041cda858.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kapstadt-the-silo',
    description: 'Kapstadt',
  },
  {
    title: 'Johannesburg - Four Seasons Hotel The Westcliff Johannesburg',
    image: 'https://www.designreisen.de/fileadmin/_processed_/1/4/csm_Four-Seasons-Johnnesburg_aerial_1e9167b730.jpg',
    link: 'https://www.designreisen.de/luxusreisen/johannesburg-four-seasons-hotel-the-westcliff',
    description: 'Johannesburg',
  },
  {
    title: 'Krüger Nationalpark - Singita Sweni',
    image: 'https://www.designreisen.de/fileadmin/_processed_/6/e/csm_Singita_Sweni_Pool_7e05b205b9.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-singita-sweni',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Hout Bay - Tintswalo Atlantic',
    image: 'https://www.designreisen.de/fileadmin/_processed_/a/8/csm_Tintswalo-Atlantic-Ausblick-3_7114d0aee6.jpg',
    link: 'https://www.designreisen.de/luxusreisen/hout-bay-tintswalo-atlantic',
    description: 'Hout Bay',
  },
  {
    title: 'Singita Lebombo Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/9/c/csm_Singita_Lebombo_Lodge_df72dac1f4.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-singita-lebombo-lodge',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Royal Malewane',
    image: 'https://www.designreisen.de/fileadmin/_processed_/0/c/csm_01_Royal-Malewane_Suite_b9d1117bac.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-royal-malewane',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Kapama Karula',
    image: 'https://www.designreisen.de/fileadmin/_processed_/d/3/csm_Kapama-Karula-Luxus-Lodge_a2e57b2f6e.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-kapama-karula',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Londolozi Pioneer Camp',
    image: 'https://www.designreisen.de/fileadmin/_processed_/c/9/csm_Londolozi-Pioneer-Camp_b5b9a9eb3a.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-londolozi-pioneer-camp',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Sabi Sabi Earth Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/b/f/csm_Sabi-Sabi-Earth-Lodge_d5f03ea80f.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-sabi-sabi-earth-lodge',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Ulusaba Private Game Reserve',
    image: 'https://www.designreisen.de/fileadmin/_processed_/e/6/csm_Ulusaba-Private-Game-Reserve_3c2b8aa4e4.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-ulusaba-private-game-reserve',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Madikwe Hills Private Game Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/3/7/csm_Madikwe-Hills-Private-Game-Lodge_93a9f853ab.jpg',
    link: 'https://www.designreisen.de/luxusreisen/madikwe-hills-private-game-lodge',
    description: 'Madikwe Hills',
  },
  {
    title: 'Sanbona Wildlife Reserve',
    image: 'https://www.designreisen.de/fileadmin/_processed_/9/c/csm_Sanbona-Wildlife-Reserve_c6b60f417e.jpg',
    link: 'https://www.designreisen.de/luxusreisen/sanbona-wildlife-reserve',
    description: 'Sanbona Wildlife Reserve',
  },
  {
    title: 'Thanda Safari',
    image: 'https://www.designreisen.de/fileadmin/_processed_/0/4/csm_Thanda-Safari-Lodge_c5ef34f8e1.jpg',
    link: 'https://www.designreisen.de/luxusreisen/thanda-safari',
    description: 'Thanda Safari',
  },
  {
    title: 'Phinda Mountain Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/5/3/csm_Phinda-Mountain-Lodge_8e6034fb6e.jpg',
    link: 'https://www.designreisen.de/luxusreisen/phinda-mountain-lodge',
    description: 'Phinda Mountain Lodge',
  },
  {
    title: 'Singita Boulders Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/9/7/csm_Singita_Boulders_Lodge_06e9cde8e6.jpg',
    link: 'https://www.designreisen.de/luxusreisen/kruger-nationalpark-singita-boulders-lodge',
    description: 'Krüger Nationalpark',
  },
  {
    title: 'Molori Safari Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/4/9/csm_Molori_Safari_Lodge_d9e8248f36.jpg',
    link: 'https://www.designreisen.de/luxusreisen/molori-safari-lodge',
    description: 'Molori Safari Lodge',
  },
  {
    title: 'Chitwa Chitwa Private Game Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/5/4/csm_Chitwa_Chitwa_Private_Game_Lodge_e31c8a6f13.jpg',
    link: 'https://www.designreisen.de/luxusreisen/chitwa-chitwa-private-game-lodge',
    description: 'Chitwa Chitwa',
  },
  {
    title: 'Jamala Madikwe Royal Safari Lodge',
    image: 'https://www.designreisen.de/fileadmin/_processed_/2/7/csm_Jamala_Madikwe_Royal_Safari_Lodge_74c7b6ed7e.jpg',
    link: 'https://www.designreisen.de/luxusreisen/jamala-madikwe-royal-safari-lodge',
    description: 'Jamala Madikwe',
  },
  {
    title: 'Tswalu Kalahari',
    image: 'https://www.designreisen.de/fileadmin/_processed_/6/5/csm_ps_Tswalu-Camp_MotseHauptgebaeude_d7a3bf327e.jpg',
    link: 'https://www.designreisen.de/luxusreisen/tswalu-kalahari',
    description: 'Tswalu Kalahari',
  },
];

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

const AfricaSubMenueOverviewHotels = () => (
  <Container maxWidth="lg" sx={{ py: 8 }}>
    {/* Section Heading */}
    <Typography
      variant="h4"
      sx={{
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#aa8055',
        marginBottom: '20px',
        textTransform: 'uppercase',
      }}
    >
      Hotels
    </Typography>

    <Divider sx={{ mb: 4, borderColor: 'rgba(151, 151, 151, 0.5)' }} />

    {/* Hotel Grid */}
    <Grid container spacing={4}>
      {hotels.map((hotel, index) => (
        <TeaserBox
          key={index}
          link={hotel.link}
          imgSrc={hotel.imgSrc}
          title={hotel.title}
          subtitle={hotel.subtitle}
        />
      ))}
    </Grid>
  </Container>
);

export default AfricaSubMenueOverviewHotels;