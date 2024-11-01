import React from "react";
import { Container, Box, Typography, Card, CardMedia } from "@mui/material";

const RundreiseCard = ({ link, imgSrc, title, subtitle }) => (
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
      width: '100%',
    }}
  >
    <Box sx={{ position: 'relative' }}>
      <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: 500, objectFit: 'cover' }} />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          padding: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  </Card>
);

export default function NamibiaRundreisen() {
  const rundreisen = [
    {
      link: "https://www.designreisen.de/luxusreisen/rundreise-namibia-glowing-desert",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/e/b/csm_ps_RRNamibiaGlowingDesert_Sternenbilderschau_d771f7b0be.jpg",
      title: "Glowing Desert",
      subtitle: "Namibia",
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
        Namibia Rundreisen (1)
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {rundreisen.map((trip, index) => (
          <RundreiseCard
            key={index}
            link={trip.link}
            imgSrc={trip.imgSrc}
            title={trip.title}
            subtitle={trip.subtitle}
          />
        ))}
      </Box>
    </Container>
  );
}
