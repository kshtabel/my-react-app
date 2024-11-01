import React from "react";
import { Container, Grid, Box, Typography, Card, CardMedia } from "@mui/material";

const OverviewCard = ({ link, imgSrc, title, subtitle }) => (
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

export default function MosambikOverview() {
  const overviews = [
    {
      link: "https://www.designreisen.de/luxusreisen/benguerra-island-azura-benguerra-island",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/e/csm_01_Azura_Apartment-Meerblick_03b0f9d213.jpg",
      title: "Azura Benguerra Island",
      subtitle: "Benguerra Island",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/mosambik/benguerra-island-kisawa-sanctuary",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/f/4/csm_1_kisawa_residence_ed27a77217.jpg",
      title: "Kisawa Sanctuary",
      subtitle: "Benguerra Island",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/quilalea-island-azura-quilalea",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/e/4/csm_Azura_Quilalea_Abendstimmung_am_Pool_43dbc9e0a6.jpg",
      title: "Azura Quilalea",
      subtitle: "Quilalea Island",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ponta-mamoli-white-pearl",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/2/csm_01_White-Pearl_Pool-Bar_cc91e591e1.jpg",
      title: "White Pearl",
      subtitle: "Ponta Mamoli",
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
        Mosambik Übersicht
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {overviews.map((overview, index) => (
          <OverviewCard
            key={index}
            link={overview.link}
            imgSrc={overview.imgSrc}
            title={overview.title}
            subtitle={overview.subtitle}
          />
        ))}
      </Grid>
    </Container>
  );
}
