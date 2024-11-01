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

export default function NamibiaHotels() {
  const hotels = [
    {
      link: "https://www.designreisen.de/luxusreisen/etosha-nationalpark-little-ongava",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/b/3/csm_01_Little-Ongava_Apartment-Vogelperspektive_2a878f5736.jpg",
      title: "Little Ongava",
      subtitle: "Etosha Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/hartmann-valley-serra-cafema-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/1/c/csm_ps_SerraCafema_LoungeAusblick_8a3b194486.jpg",
      title: "Serra Cafema Camp",
      subtitle: "Hartmann Valley",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/namibrand-nature-park-wolwedans-dunes-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/b/csm_01_Wolwedans-Dunes-Lodge_Apartments_31d6f1b6f1.jpg",
      title: "Wolwedans Dunes Lodge",
      subtitle: "NamibRand Nature Park",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/namib-wueste-sonop-lodge-von-zannier-hotels",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/b/d/csm_ps_Sonop_Location4_5ed47c991a.jpg",
      title: "Sonop Lodge von Zannier Hotels",
      subtitle: "Namib Wüste",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/skeleton-coast-hoanib-skeleton-coast-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/f/0/csm_Hoanib-Skeleton-Coast-Zelt-bei-Nacht_f78e743ddf.jpg",
      title: "Hoanib Skeleton Coast Camp",
      subtitle: "Skeleton Coast",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/sossusvlei-little-kulala",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/3/csm_ps_abendsonne_0fc40845ec.jpg",
      title: "Little Kulala",
      subtitle: "Sossusvlei",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/swakopmund-strand-hotel-swakopmund",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/1/7/csm_Strand-Hotel-Swakopmund_a3a52ca958.jpg",
      title: "Strand Hotel Swakopmund",
      subtitle: "Swakopmund",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/windhoek-omaanda-von-zannier-hotels",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/d/csm_ps_Omaanda_Excursion2_82ef22cc08.jpg",
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
        Hotels (8)
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
