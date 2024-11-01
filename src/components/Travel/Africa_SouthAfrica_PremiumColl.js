import React from "react";
import { Container, Grid, Card, CardMedia, Box, Typography } from "@mui/material";

const TeaserBox = ({ link, imgSrc, title, subtitle }) => (
  <Grid item xs={12} sm={6} md={4}>
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
            padding: 1,
            textAlign: 'center',
          }}
        >
          <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" sx={{ mt: 1 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default function PremiumCollection() {
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
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-boulders-lodge"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/8/csm_Singita_Boulders_Pool_oeffentlich_a7abf63cc3.jpg"
          title="Singita Boulders Lodge"
          subtitle="Krüger Nationalpark"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/kapstadt-the-silo"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/5/csm_ps_TheSilo_Kapstadt_Entrance_814edfb62f.jpg"
          title="The Silo"
          subtitle="Kapstadt"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/kapstadt-21-nettleton"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/8/d/csm_21-Nettleton_exterior_86d06eae59.jpg"
          title="21 Nettleton"
          subtitle="Kapstadt"
        />
      </Grid>
    </Container>
  );
}
