import React from 'react';
import { Container, Box, Typography, Card, CardMedia, CardContent, Link } from '@mui/material';

export default function Rundreisen() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          color: '#aa8055',
          mb: 3,
          textTransform: 'uppercase',
        }}
      >
        Rundreisen
      </Typography>
      <Box sx={{ borderBottom: '1px solid rgb(151, 151, 151)', mb: 5 }} />
      <Card sx={{ width: '100%', position: 'relative', overflow: 'hidden', borderRadius: 2, boxShadow: 3 }}>
        <Link
          href="https://www.designreisen.de/luxusreisen/rundreise-indonesien-island-paradise"
          underline="none"
          color="inherit"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none', color: 'inherit' }}
        >
          <CardMedia
            component="img"
            height="400"
            image="https://www.designreisen.de/fileadmin/_processed_/7/d/csm_ps_RRIndonesien_IslandParadise_Tag6-9Ubud_b52c625a76.jpg"
            alt="Indonesien - Island Paradise"
            sx={{ objectFit: 'cover' }}
          />
          <CardContent
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: '#fff',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{ textTransform: 'uppercase', fontWeight: 'bold', letterSpacing: 1, mb: 1 }}
            >
              Island Paradise
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '18px', lineHeight: 1.22 }}>
              Indonesien
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Container>
  );
}
