import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box } from '@mui/material';

const hotels = [
  {
    name: 'Raffles Bali',
    location: 'Bali',
    imgSrc: '/images/raffles_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/asien/indonesien/bali-raffles-bali',
  },
  {
    name: 'Jumeirah Bali',
    location: 'Bali',
    imgSrc: '/images/jumeirah_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/asien/indonesien/jumeirah-bali',
  },
  {
    name: 'Alila Manggis',
    location: 'Bali',
    imgSrc: '/images/alila_manggis.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-alila-manggis',
  },
  {
    name: 'Alila Seminyak',
    location: 'Bali',
    imgSrc: '/images/alila_seminyak.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-alila-seminyak',
  },
  {
    name: 'Alila Villas Uluwatu',
    location: 'Bali',
    imgSrc: '/images/alila_villas_uluwatu.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-alila-villas-uluwatu',
  },
  {
    name: 'Amankila',
    location: 'Bali',
    imgSrc: '/images/amankila.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-amankila',
  },
  {
    name: 'Banyan Tree Ungasan',
    location: 'Bali',
    imgSrc: '/images/banyan_tree_ungasan.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-banyan-tree-ungasan',
  },
  {
    name: 'Bulgari Resort Bali',
    location: 'Bali',
    imgSrc: '/images/bulgari_resort_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-bulgari-resort-bali',
  },
  {
    name: 'COMO Uma Canggu',
    location: 'Bali',
    imgSrc: '/images/como_uma_canggu.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-como-uma-canggu',
  },
  {
    name: 'COMO Uma Ubud',
    location: 'Bali',
    imgSrc: '/images/como_uma_ubud.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-como-uma-ubud',
  },
  {
    name: 'Como Shambhala Estate',
    location: 'Bali',
    imgSrc: '/images/como_shambhala_estate.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-como-shambhala-estate',
  },
  {
    name: 'Four Seasons Resort Bali at Sayan',
    location: 'Bali',
    imgSrc: '/images/four_seasons_resort_bali_at_sayan.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-four-seasons-resort-bali-at-sayan',
  },
  {
    name: 'Four Seasons Resort Bali at Jimbaran Bay',
    location: 'Bali',
    imgSrc: '/images/four_seasons_resort_bali_at_jimbaran_bay.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-four-seasons-resort-bali-at-jimbaran-bay',
  },
  {
    name: 'Mandapa, a Ritz Carlton Reserve',
    location: 'Bali',
    imgSrc: '/images/mandapa_a_ritz_carlton_reserve.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-mandapa-a-ritz-carlton-reserve',
  },
  {
    name: 'Six Senses Uluwatu',
    location: 'Bali',
    imgSrc: '/images/six_senses_uluwatu.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-six-senses-uluwatu',
  },
  {
    name: 'Soori Bali',
    location: 'Bali',
    imgSrc: '/images/soori_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-soori-bali',
  },
  {
    name: 'The Legian Bali',
    location: 'Bali',
    imgSrc: '/images/the_legian_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-the-legian-bali',
  },
  {
    name: 'The Ritz-Carlton Bali',
    location: 'Bali',
    imgSrc: '/images/the_ritz_carlton_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-the-ritz-carlton-hotel-bali',
  },
  {
    name: 'The St. Regis Resort Bali',
    location: 'Bali',
    imgSrc: '/images/the_st_regis_resort_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-the-st-regis-resort-bali',
  },
  {
    name: 'The Oberoi Beach Resort, Bali',
    location: 'Bali',
    imgSrc: '/images/the_oberoi_beach_resort_bali.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-the-oberoi-beach-resort-bali',
  },
  {
    name: 'Bawah Reserve',
    location: 'Bawah Private Island',
    imgSrc: '/images/bawah_reserve.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bawah-private-island-bawah-reserve',
  },
  {
    name: 'The Sanchaya',
    location: 'Bintan Island',
    imgSrc: '/images/the_sanchaya.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bintan-island-the-sanchaya',
  },
  {
    name: 'Amanjiwo',
    location: 'Java / Indonesien',
    imgSrc: '/images/amanjiwo.jpg',
    link: 'https://www.designreisen.de/luxusreisen/java-amanjiwo',
  },
  {
    name: 'The Oberoi Beach Resort Lombok',
    location: 'Lombok',
    imgSrc: '/images/the_oberoi_beach_resort_lombok.jpg',
    link: 'https://www.designreisen.de/luxusreisen/lombok-the-oberoi-beach-resort-lombok',
  },
  {
    name: 'Nihi Sumba',
    location: 'Sumba',
    imgSrc: '/images/nihi_sumba.jpg',
    link: 'https://www.designreisen.de/luxusreisen/sumba-nihi-sumba',
  },
  {
    name: 'Nihi Sumba',
    location: 'Bali',
    imgSrc: '/images/nihi_sumba.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-capella-ubud',
  },
  {
    name: 'Ta\'Aktana, A Luxury Resort & SPA',
    location: 'Bali',
    imgSrc: '/images/ta_aktana_a_luxury_resort_and_spa.jpg',
    link: 'https://www.designreisen.de/luxusreisen/bali-chedi-club-tanah-gajah',
  },
];

const HotelCard = ({ link, imgSrc, title, location }) => (
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
      <Box sx={{ position: 'relative' }}>
        <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: 250, objectFit: 'cover' }} />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: '#fff',
            padding: 2,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            {location}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default function Hotels() {
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
        Hotels({hotels.length})
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />
      <Grid container spacing={4}>
        {hotels.map((hotel, index) => (
          <HotelCard
            key={index}
            link={hotel.link}
            imgSrc={hotel.imgSrc}
            title={hotel.name}
            location={hotel.location}
          />
        ))}
      </Grid>
    </Container>
  );
}
