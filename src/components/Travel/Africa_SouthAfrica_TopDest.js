import React from "react";
import { Container, Grid, Card, CardMedia, Box, Typography } from "@mui/material";
import PremiumCollection from "./Africa_SouthAfrica_PremiumColl";
import Hotels from "./Africa_SouthAfrica_Hotels";
import Rundreisen from "./Africa_SouthAfrica_RoundTrip"

const TeaserBox = ({ link, imgSrc, title }) => (
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
          <Typography variant="body1">{title}</Typography>
        </Box>
      </Box>
    </Card>
  </Grid>
);

export default function Component() {
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
        Unsere Reiseziele
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/johannesburg"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/2/csm_ds_johannesburg_c7b6589adf.jpg"
          title="Johannesburg"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/kapstadt"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/4/3/csm_DS_KAP_SAF_3362cbdce3.jpg"
          title="Kapstadt"
        />
      </Grid>
      <PremiumCollection />
      <Hotels />
      <Rundreisen />
    </Container>
  );    
}
