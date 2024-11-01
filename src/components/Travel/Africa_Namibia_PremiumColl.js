import React from "react";
import { Container, Grid, Box, Typography, Card, CardMedia } from "@mui/material";
import NamibiaHotels from "./Africa_Namibia_Hotels";
import NamibiaRundreisen from "./Africa_Namibia_RoundTrip";

const PremiumCard = ({ link, imgSrc, title, subtitle }) => (
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

export default function NamibiaPremiumCollection() {
  const premiumCollection = [
    {
      link: "https://www.designreisen.de/luxusreisen/skeleton-coast-hoanib-skeleton-coast-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/f/0/csm_Hoanib-Skeleton-Coast-Zelt-bei-Nacht_bb46301afe.jpg",
      title: "Hoanib Skeleton Coast Camp",
      subtitle: "Skeleton Coast",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/sossusvlei-little-kulala",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/3/csm_ps_abendsonne_e27a437f9a.jpg",
      title: "Little Kulala",
      subtitle: "Sossusvlei",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/windhoek-omaanda-von-zannier-hotels",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/d/csm_ps_Omaanda_Excursion2_de1ed3f471.jpg",
      title: "Omaanda von Zannier Hotels",
      subtitle: "Windhoek",
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
        Premium Collection
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {premiumCollection.map((item, index) => (
          <PremiumCard
            key={index}
            link={item.link}
            imgSrc={item.imgSrc}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </Grid>
      <NamibiaHotels />
      <NamibiaRundreisen />
    </Container>
  );
}
