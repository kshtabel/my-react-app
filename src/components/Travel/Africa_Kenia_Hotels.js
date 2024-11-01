import React from "react";
import { Container, Grid, Box, Typography, Card, CardMedia } from "@mui/material";

const HotelCard = ({ link, imgSrc, title, subtitle }) => (
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
            {subtitle}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default function KeniaHotels() {
  const hotels = [
    {
      link: "https://www.designreisen.de/luxusreisen/laikipia-segera-retreat",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/c/d/csm_01_Segera-Retreat_Garten_ec865270c8.jpg",
      title: "Segera Retreat",
      subtitle: "Laikipia",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/masai-mara-angama-mara",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/8/csm_Angama-Mara_fEUERPLATZ_ee4ee1a36c.jpg",
      title: "Angama Mara",
      subtitle: "Masai Mara",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/masai-mara-mahali-mzuri",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/1/7/csm_01_Mahali-Mzuri_Blick-auf-Hotel_085d16fa8b.jpg",
      title: "Mahali Mzuri",
      subtitle: "Masai Mara",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/masai-mara-mara-bushtops",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/4/0/csm_Mara-Bushtops-Abenddaemmerung_5c012d7c1f.jpg",
      title: "Mara Bushtops",
      subtitle: "Masai Mara",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/tsavo-west-national-park-finch-hattons-luxury-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/9/csm_Finch-Hattons-Luxury-Camp-Bush-By-Night-Watching_b646f98338.jpg",
      title: "Finch Hattons Luxury Camp",
      subtitle: "Tsavo West National Park",
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
        Kenia Hotels
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {hotels.map((hotel, index) => (
          <HotelCard
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
}
