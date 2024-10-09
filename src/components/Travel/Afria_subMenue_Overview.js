import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Africa_subMenue_Overview_premiumColl from './Africa_subMenue_Overview_premiumColl';
import AfricaSubMenueOverviewHotels from './Africa_subMenue_Overview_Hotels';
import AfricaSubMenueOverviewTravelAround from "./Africa_subMenue_Overview_TravelAround";

// TeaserBox component for mini-thumbnails with hover effects and modern design
const TeaserBox = ({ link, imgSrc, title }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(link);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        onClick={handleClick}
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
        </CardContent>
      </Card>
    </Grid>
  );
};

// Modernized South Africa Top Destinations component
const SouthAfrica_TopDest = () => {
  return (
    <>
      {/* Main Content */}
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
          Südafrikas Top-Destinationen
        </Typography>
        <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

        {/* Teaser Grid */}
        <Grid container spacing={4}>
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/suedafrika/johannesburg"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/2/csm_ds_johannesburg_c7b6589adf.jpg"
            title="Johannesburg"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/suedafrika/kapstadt"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/4/3/csm_DS_KAP_SAF_3362cbdce3.jpg"
            title="Kapstadt"
          />
        </Grid>

        {/* Dynamic Section for Additional Components */}
        <Box sx={{ mt: 8 }}>
          <Grid container spacing={4}>
            <Africa_subMenue_Overview_premiumColl />
            <AfricaSubMenueOverviewHotels />
            <AfricaSubMenueOverviewTravelAround />
          </Grid>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ backgroundColor: '#333', padding: '24px 0', color: '#fff', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ marginBottom: '8px' }}>
          © 2024 Luxusreisen. Alle Rechte vorbehalten.
        </Typography>
        <Typography variant="body2">
          <a href="/privacy-policy" style={{ color: '#fff', textDecoration: 'none' }}>
            Datenschutzerklärung
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default SouthAfrica_TopDest;
