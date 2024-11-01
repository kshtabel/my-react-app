import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Box, Button } from '@mui/material';

// TeaserBox component matching the design in extTravelHome
const TeaserBox = ({ link, imgSrc, title }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = link;
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        component="a"
        href={link}
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
};

// Modernized AfricaSubMenue component without Header
const AfricaSubMenue = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/admin/reise-verwaltung/uebersicht');
  };

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
            marginBottom: '40px',
            textTransform: 'uppercase',
          }}
        >
          Entdecke Afrika
        </Typography>

        <Button variant="contained" onClick={handleBackClick} sx={{ marginBottom: '20px', backgroundColor: '#aa8055', '&:hover': { backgroundColor: '#8f6b42' } }}>
          Zurück zur Übersicht
        </Button>

        {/* Teaser Grid */}
        <Grid container spacing={4}>
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/suedafrika"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/b/csm_Teaser_Suedafrika_17c99ec7e7.jpg"
            title="Südafrika"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/kenia"
            imgSrc="https://www.designreisen.de/assets/destinations/_processed_/d/4/csm_sammy-wong-mDwBsRcsqbU-unsplash_2a7b87f0fe.jpg"
            title="Kenia"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/botswana"
            imgSrc="https://www.designreisen.de/assets/destinations/_processed_/e/b/csm_travel-explore-protect-nWvVeKXxG7E-unsplash_2029bc8e63.jpg"
            title="Botswana"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/namibia"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/7/1/csm_Namibia-Teaser-002_c7bdc4843a.jpg"
            title="Namibia"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/madagaskar"
            imgSrc="https://www.designreisen.de/typo3temp/assets/_processed_/e/1/csm_basic-2_999f446173.jpg"
            title="Madagaskar"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/mosambik"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/d/8/csm_Mosambik_Anantara-Bazurata-Island_a96347a9cc.jpg"
            title="Mosambik"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/malawi"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/8/4/csm_Startbild-Malawi3_2612773c84.jpg"
            title="Malawi"
          />
          <TeaserBox
            link="/admin/reise-verwaltung/uebersicht/afrika/ruanda"
            imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/8/csm_Ruanda_f1b6c57249.jpg"
            title="Ruanda"
          />
        </Grid>
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

export default AfricaSubMenue;
