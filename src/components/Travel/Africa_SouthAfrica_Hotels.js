import React from "react";
import { Container, Grid, Card, CardMedia, Box, Typography } from "@mui/material";

const HotelCard = ({ link, imgSrc, title, subtitle }) => (
  <Grid item xs={12} sm={12} md={4} lg={4}>
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

export default function Hotels() {
  const hotels = [
    {
      link: "https://www.designreisen.de/luxusreisen/de-hoop-nature-reserve-morukuru-beach-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/0/csm_ps_MorukuruBeachLodge_ExteriorViewwithFynbos_8d7e7cf383.jpg",
      title: "Morukuru Beach Lodge",
      subtitle: "De Hoop Nature Reserve",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/de-hoop-nature-reserve-morukuru-family-ocean-house",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/9/e/csm_Morukuru-Family-Ocean-House-Abendstimmung_d88282443c.jpg",
      title: "Morukuru Family Ocean House",
      subtitle: "De Hoop Nature Reserve",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/franschhoek-la-residence",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/7/4/csm_PS-Weinberge_9b99fc9aaa.jpg",
      title: "La Residence",
      subtitle: "Franschhoek",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/franschhoek-leeu-estates",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/d/f/csm_LEEU-Estates-Garden_035c98d0d0.jpg",
      title: "LEEU Estates",
      subtitle: "Franschhoek",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/suedafrika/franschhoek-babylonstoren",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/a/3/csm_Babylonstoren-Fynbos_Cottages_in_der_Daemmerung_e596e3707a.jpg",
      title: "Babylonstoren",
      subtitle: "Franschhoek",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/franschhoek-leeu-house",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/3/csm_LEEU-House-Aussenansicht_fc25c449d5.jpg",
      title: "LEEU House",
      subtitle: "Franschhoek",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/franschhoek-mont-rochelle",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/7/csm_ps_MontRochelle_1Exterior_97af3044b4.jpg",
      title: "Mont Rochelle",
      subtitle: "Franschhoek",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/hermanus-birkenhead-house",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/b/9/csm_PS-Aussenfassade_9f7dfd34f4.jpg",
      title: "Birkenhead House",
      subtitle: "Hermanus",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/hout-bay-tintswalo-atlantic",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/a/8/csm_Tintswalo-Atlantic-Ausblick-3_7114d0aee6.jpg",
      title: "Tintswalo Atlantic",
      subtitle: "Hout Bay",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/johannesburg-four-seasons-hotel-the-westcliff-johannesburg",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/1/4/csm_Four-Seasons-Johnnesburg_aerial_1e9167b730.jpg",
      title: "Four Seasons Hotel The Westcliff",
      subtitle: "Johannesburg",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kapstadt-21-nettleton",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/d/csm_21-Nettleton_exterior_deabdb6049.jpg",
      title: "21 Nettleton",
      subtitle: "Kapstadt",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kapstadt-belmond-mount-nelson-hotel",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/5/e/csm_ps_BelmondMountNelson_Overview_e1c1b1874c.jpg",
      title: "Mount Nelson, A Belmond Hotel",
      subtitle: "Kapstadt",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kapstadt-ellerman-house",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/b/1/csm_ps_EllermanHouse_1Mainhouse_cbf2f63f13.jpg",
      title: "Ellerman House",
      subtitle: "Kapstadt",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kapstadt-oneonly-cape-town",
      imgSrc: "https://www.designreisen.de/assets/destinations/_processed_/8/5/csm_One_Only_Cape_Town_Resort_View_from_Marina_Rise_a0a2d93a0d.jpg",
      title: "One&Only Cape Town",
      subtitle: "Kapstadt",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kapstadt-the-silo",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/f/5/csm_ps_TheSilo_Kapstadt_Entrance_e041cda858.jpg",
      title: "The Silo",
      subtitle: "Kapstadt",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/kariega-game-reserve-kariega-settlers-drift",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/c/c/csm_Kariega-Settlers-Drift-Landschaft_5a3e19fbb9.jpg",
      title: "Kariega Settlers Drift",
      subtitle: "Kariega Game Reserve",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/krueger-nationalpark-royal-malewane",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/0/c/csm_01_Royal-Malewane_Suite_b9d1117bac.jpg",
      title: "Royal Malewane",
      subtitle: "Kruger Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-boulders-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/a/8/csm_Singita_Boulders_Pool_oeffentlich_3e30f88fb7.jpg",
      title: "Singita Boulders Lodge",
      subtitle: "Kruger Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-ebony",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/7/7/csm_Singita_Ebony_Aussenrestaurant_ef9c15b319.jpg",
      title: "Singita Ebony Lodge",
      subtitle: "Kruger Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-lebombo",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/9/c/csm_Singita_Lebombo_Lodge_df72dac1f4.jpg",
      title: "Singita Lebombo Lodge",
      subtitle: "Kruger Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/krueger-nationalpark-singita-sweni",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/6/e/csm_Singita_Sweni_Pool_7e05b205b9.jpg",
      title: "Singita Sweni Lodge",
      subtitle: "Kruger Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/krueger-nationalpark-ulusaba-game-reserve",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/a/b/csm_Virgin-Limited-Edition-Ulusaba-Dinner_8d1aff5b22.jpg",
      title: "Ulusaba Game Reserve",
      subtitle: "Kruger Nationalpark",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/madikwe-game-reserve-mateya-safari-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/8/7/csm_02_Mateya-Safari-Lodge_c5f6ef4f29.jpg",
      title: "Mateya Safari Lodge",
      subtitle: "Madikwe Game Reserve",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ostkap-kwandwe-ecca-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/9/5/csm_ps_KwandweEccaLodge_Ausblick_051855203b.jpg",
      title: "Kwandwe Ecca Lodge",
      subtitle: "Ostkap",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ostkap-kwandwe-melton-manor",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/7/5/csm_Kwandwe-Melton-Manor-Exterior_f3204db6da.jpg",
      title: "Kwandwe Melton Manor",
      subtitle: "Ostkap",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ostkap-kwandwe-ubon-lodge",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/2/7/csm_Kwandwe-Ubon-Lodge-Luxury-Safari_2360c6d2e7.jpg",
      title: "Kwandwe Ubon Lodge",
      subtitle: "Ostkap",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/ostkap-shamwari-game-reserve",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/4/9/csm_Shamwari-Game-Reserve-Luxury-Tents_8df8921b67.jpg",
      title: "Shamwari Game Reserve",
      subtitle: "Ostkap",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/stellenbosch-delaire-graff-lodges",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/a/2/csm_delaire_graff_lodge_stellenbosch_exterior_6c372fb1e2.jpg",
      title: "Delaire Graff Lodges",
      subtitle: "Stellenbosch",
    },
    {
      link: "https://www.designreisen.de/luxusreisen/stellenbosch-lanzerac-hotel",
      imgSrc: "https://www.designreisen.de/fileadmin/_processed_/3/1/csm_lanzerac_hotel_stellenbosch_7b4d8ef9e3.jpg",
      title: "Lanzerac Hotel",
      subtitle: "Stellenbosch",
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
        Hotels (28)
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
