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

export default function RuandaOverview() {
  const overviews = [
    {
      link: "https://www.designreisen.de/luxusreisen/ruanda/ruanda-oneonly-nyungwe-house",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/2/3/csm_ps-clubhouse_74a2f40cf1.jpg",
      title: "One&Only Nyungwe House",
      subtitle: "Ruanda",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ruanda/volcanoes-national-park-singita-kwitonda-lodge",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/c/9/csm_DSC07803-2_7c4119140c.jpg",
      title: "Singita Kwitonda Lodge",
      subtitle: "Volcanoes National Park",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ruanda/volcanoes-national-park-bisate-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/7/9/csm_Bisate_Lodge_535d312cb3.jpg",
      title: "Bisate Lodge",
      subtitle: "Volcanoes National Park",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ruanda/akagera-national-park-magashi-camp",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/6/6/csm_ps_MagashiCamp_ZeltImDschungel_d697d7d70a.jpg",
      title: "Magashi Camp",
      subtitle: "Akagera National Park",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ruanda-oneandonly-gorillas-nest",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/a/b/csm_ps-aussenbreich_35a24fddaa.jpg",
      title: "One&Only Gorillas Nest",
      subtitle: "Vulcanic National Park",
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
        Ruanda Übersicht
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
