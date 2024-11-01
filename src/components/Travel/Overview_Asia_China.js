import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box } from '@mui/material';

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

export default function ChinaOverview() {
  const hotels = [
    {
      link: 'https://www.designreisen.de/luxusreisen/chengdu-the-temple-house',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/a/5/csm_The-Temple-House_Haupteingang_731be37284.jpg',
      title: 'The Temple House',
      location: 'Chengdu',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/hangzhou-amanfayun',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/b/0/csm_01_Amanfayun_Spa-Haus_66060968e4.jpg',
      title: 'Amanfayun',
      location: 'Hangzhou',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/hong-kong-mandarin-oriental-hong-kong',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/e/d/csm_03_Mandarin-Oriental-Hong-Kong_Ausblick-auf-Stadt_ab266ef69a.jpg',
      title: 'Mandarin Oriental Hong Kong',
      location: 'Hong Kong',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/asien/china/hong-kong',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/b/4/csm_ps_RosewoodHongKong_ExteriorByNight_69c59aca49.jpg',
      title: 'Rosewood Hong Kong',
      location: 'Hong Kong',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/hong-kong-the-landmark-mandarin-oriental',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/4/0/csm_01_The-Landmark-Mandarin-Oriental_Bar_de96f62f7f.jpg',
      title: 'The Landmark Mandarin Oriental',
      location: 'Hong Kong',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/hong-kong-the-upper-house',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/0/e/csm_The-Upper-House-Aussenansicht_2426c861b8.jpg',
      title: 'The Upper House',
      location: 'Hong Kong',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/lijiang-banyan-tree-lijiang',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/d/2/csm_03_Banyan-Tree-Lijiang_Umgebung-Berge_c644a39131.jpg',
      title: 'Banyan Tree Lijiang',
      location: 'Lijiang',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/peking-aman-at-summer-palace',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/0/2/csm_01_Aman-at-Summer-Palace_Hotel_Eingang_1ed6dbf8be.jpg',
      title: 'Aman at Summer Palace',
      location: 'Peking',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/peking-rosewood-beijing',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/1/f/csm_ps_RosewoodBeijing_Entrance_b1128c824f.jpg',
      title: 'Rosewood Beijing',
      location: 'Peking',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/peking-the-opposite-house',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/7/5/csm_10_The-Opposite-House_Lounge_dac0253474.jpg',
      title: 'The Opposite House',
      location: 'Peking',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/ringha-banyan-tree-ringha',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/5/c/csm_01_Banyan-Tree-Ringha_Resort_acf08b4caa.jpg',
      title: 'Banyan Tree Ringha',
      location: 'Ringha',
    },
    {
      link: 'https://www.designreisen.de/luxusreisen/shanghai-park-hyatt-shanghai',
      imgSrc: 'https://www.designreisen.de/fileadmin/_processed_/e/c/csm_Park-Hyatt-Shanghai-1_1580cc0e64.jpg',
      title: 'Park Hyatt Shanghai',
      location: 'Shanghai',
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
        China Übersicht
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {hotels.map((hotel, index) => (
          <HotelCard key={index} link={hotel.link} imgSrc={hotel.imgSrc} title={hotel.title} location={hotel.location} />
        ))}
      </Grid>
    </Container>
  );
}
