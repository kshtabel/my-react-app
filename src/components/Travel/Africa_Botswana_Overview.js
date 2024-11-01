import React from "react";
import { Container, Grid, Box, Typography, Card, CardMedia } from "@mui/material";
import BotswanaHotels from "./Africa_Botswana_Hotels"
import BotswanaRundreisen from "./Africa_Botswana_RoundTrip";

const BotswanaCard = ({ link, imgSrc, title, subtitle }) => (
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

export default function BotswanaCollection() {
  const botswanaCamps = [
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-jao-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/4/csm_ps_JaoCamp_CampFire_d0fb568a53.jpg",
      title: "Jao Camp",
      subtitle: "Okavango Delta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-mombo-camp-little-mombo",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/5/c/csm_ps_MomboCamp_Elefant_f3dee7a60e.jpg",
      title: "Mombo Camp & Little Mombo",
      subtitle: "Okavango Delta",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/okavango-delta-vumbura-plains-camp",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/c/9/csm_Wilderness_Vumbura_Plains_3_420f7e624f.jpg",
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
        Botswana Premium Collection
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {botswanaCamps.map((camp, index) => (
          <BotswanaCard
            key={index}
            link={camp.link}
            imgSrc={camp.imgSrc}
            title={camp.title}
            subtitle={camp.subtitle}
          />
        ))}
      </Grid>
      <BotswanaHotels />
      <BotswanaRundreisen />
    </Container>
  );
}
