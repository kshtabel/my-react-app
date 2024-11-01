import React from "react";
import { Container, Grid, Box, Typography, Card, CardMedia } from "@mui/material";

const RundreiseCard = ({ link, imgSrc, title, subtitle }) => (
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

export default function Rundreisen() {
  const rundreisen = [
    {
      link: "https://www.designreisen.de/luxusreisen/rundreise-suedafrika-beautiful-garden-route",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/0/csm_1_84fd703764.jpg",
      title: "Beautiful Garden Route",
      subtitle: "Südafrika",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/rundreise-suedafrika-the-magic-of-the-south",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/1/csm_ps_RRSuedafrikaTheMagicOfTheSouth_Startbild_52918bbd58.jpg",
      title: "The Magic of the South",
      subtitle: "Südafrika",
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
        Rundreisen (2)
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        {rundreisen.map((trip, index) => (
          <RundreiseCard
            key={index}
            link={trip.link}
            imgSrc={trip.imgSrc}
            title={trip.title}
            subtitle={trip.subtitle}
          />
        ))}
      </Grid>
    </Container>
  );
}
