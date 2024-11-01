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

export default function BotswanaHotels() {
  const hotels = [
    {
      link: "https://www.designreisen.de/luxusreisen/linyanti-wildreservat-kings-pool",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/c/4/csm_ps_KingsPool_MainArea_5ca8f5c352.jpg",
      title: "Kings Pool",
      subtitle: "Linyanti Wildreservat",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/linyanti-wildreservat-zarafa-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/3/csm_01_Zarafa-Camp_Ausblick-Meer-Terrasse_b18806f762.jpg",
      title: "Zarafa Camp",
      subtitle: "Linyanti Wildreservat",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/moremi-wildreservat-sanctuary-baines-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/3/csm_Sanctuary-Baines-Camp-Aussenansicht-Camp_99f3bf1108.jpg",
      title: "Sanctuary Baines' Camp",
      subtitle: "Moremi Wildreservat",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/moremi-wildreservat-sanctuary-chiefs-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/4/csm_01_Sanctuary-Chiefs-Camp_Restaurant_Outside_Wasser_f5b16ab2db.jpg",
      title: "Sanctuary Chief's Camp",
      subtitle: "Moremi Wildreservat",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-jao-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/4/csm_ps_JaoCamp_CampFire_e185547695.jpg",
      title: "Jao Camp",
      subtitle: "Okavango Delta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-mombo-camp-little-mombo",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/5/c/csm_ps_MomboCamp_Elefant_eea81438e5.jpg",
      title: "Mombo Camp & Little Mombo",
      subtitle: "Okavango Delta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-sanctuary-stanleys-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/4/f/csm_Sactuary-Stanleys-Camp_entspannen-und-geniessen_c602f32823.jpg",
      title: "Sanctuary Stanley's Camp",
      subtitle: "Okavango Delta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-vumbura-plains-camp",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/c/9/csm_Wilderness_Vumbura_Plains_3_bcc310ad3c.jpg",
      title: "Vumbura Plains Camp",
      subtitle: "Okavango Delta",
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
        Botswana Hotels (8)
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
