import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

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
      <CardMedia component="img" image={imgSrc} alt={title} sx={{ height: 250, objectFit: 'cover' }} />
      <CardContent sx={{ padding: 2, textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
        <Typography variant="h6" sx={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
          {title}
        </Typography>
        {subtitle && <Typography variant="body2">{subtitle}</Typography>}
      </CardContent>
    </Card>
  </Grid>
);

export default function EuropaTeaser() {
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
        Europa
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-al-andaluz-suedspanien-rundreise"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/0/9/csm_Startbild_Rundreise_12c6f4abdb.jpg"
          title="Al Andaluz"
          subtitle="Südspanien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-irland-land-of-celts-and-goblins"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/b/1/csm_click-and-learn-photography-mZtdV4eDsT0-unsplash_daf0eda2dd.jpg"
          title="Land of Celts and Goblins"
          subtitle="Irland"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-kroatien-at-its-best"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/1/9/csm_croatia-g7ef6d5990_1920_37494693dd.jpg"
          title="Kroatien At its best"
          subtitle="Kroatien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-norditalien-the-north-of-bella-italia"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/6/c/csm_ps_RRNorditalien_ComerSee_4f1513f7aa.jpg"
          title="The North of Bella Italia"
          subtitle="Norditalien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-wine-culture-and-waves"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/2/0/csm_Startbild_Rundreise_6b74d9a943.jpg"
          title="Wine, Culture and Waves"
          subtitle="Nordportugal"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-revealed-beauty-suedportugal-rundreise"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/3/8/csm_Startbild_Rundreise_8841628449.jpg"
          title="Revealed Beauty"
          subtitle="Südportugal"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-sizilien-la-dolce-vita"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/e/csm_ps_galerie_view_b5cd29db66.jpg"
          title="La Dolce Vita"
          subtitle="Sizilien"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-schottland-wikinger-whisky-wilde-kuesten"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/c/4/csm_eric-welch-XucH5JNRFig-unsplash_91185613ea.jpg"
          title="WIKINGER, WHISKY, WILDE KÜSTEN"
          subtitle="Schottland"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-tuerkei"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/8/csm_ps_RRTuerkei_Startbild_042b94fa84.jpg"
          title="Metropolis & Dream World"
          subtitle="Türkei"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-baltische-staaten-luxury-baltic-summer"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/9/3/csm_michael-9wXvgLMDetA-unsplash_7ce0fbaf68.jpg"
          title="Luxury Baltic Summer"
          subtitle="Baltische Staaten"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/rundreise-kroatien-montenegro-highlights-auf-der-balkanhalbinsel"
          imgSrc="https://www.designreisen.de/assets/destinations/_processed_/1/a/csm_mike-swigunski-NfkWUOkB78c-unsplash_0d23f80e59.jpg"
          title="Highlights auf der Balkanhalbinsel"
          subtitle="Kroatien & Montenegro"
        />
      </Grid>
    </Container>
  );
}