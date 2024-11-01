import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';
import FamilienurlaubHeader from './TravelPossib.FamilienUrl.Header';
import FamilienhotelsTeaser from './TravelPossib.FamilienUrl.FamHotelsEurope';
import FamilienhotelsAfrikaTeaser from './TravelPossib.FamilienUrl.FamHotelsAfrika';
import FamilienhotelAsienTeaser from './TravelPossib.FamilienUrl.FamHotelsAsien';
import FamilienhotelsIndischOzeanTeaser from './TravelPossib.FamilienUrl.FamHotelsIndischOzean'
import FamHotelsMittNordSuedAme from './TravelPossib.FamilienUrl.FamHotelsMittNordSuedAme';
import FamHotelsKaribik from './TravelPossib.FamilienUrl.FamHotelsKaribik';
import FamHotelsOrient from './TravelPossib.FamilienUrl.FamHotelsOrient';
import OnlineMagazine from './TravelPossib.FamilienUrl.OnlineMagaz';

export default function FamilienurlaubTeaser() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ maxWidth: 742, margin: '103px auto 100px', textAlign: 'center' }}>
        <Typography
          variant="h4"
          sx={{
            color: '#aa8055',
            lineHeight: 1.14,
            marginBottom: 3,
            textTransform: 'uppercase',
          }}
        >
          Familienurlaub
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 18, lineHeight: 1.22, color: '#fff', marginBottom: 2 }}
        >
          Endlich Urlaub, endlich Zeit, um gemeinsam etwas zu erleben. Doch mit Nachwuchs ist das alles nicht mehr ganz so leicht umzusetzen, vor allem wenn der Urlaub nicht nur Spaß, sondern auch Stil und für jeden das gewisse Etwas bieten soll.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 18, lineHeight: 1.22, color: '#fff', marginBottom: 2 }}
        >
          Dazu gehören Spiel und Abenteuer für die Kinder, genauso wie eine erholsame Zeit am Strand oder im Spa einer exklusiven Unterkunft.
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 18, lineHeight: 1.22, color: '#fff', marginBottom: 2 }}
        >
          Finden Sie hier eine exklusive Auswahl an ausgezeichneten Familienhotels.
        </Typography>
        {/* <Link
          href="mailto:anfrage@designreisen.de"
          sx={{
            fontSize: 18,
            lineHeight: 1.22,
            color: '#aa8055',
            textDecoration: 'none',
            fontWeight: 'bold',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Jetzt unverbindlich beraten lassen!
        </Link> */}
      </Box>

      <FamilienurlaubHeader />
      <FamilienhotelsTeaser />
      <FamilienhotelsAfrikaTeaser />
      <FamilienhotelAsienTeaser />
      <FamilienhotelsIndischOzeanTeaser />
      <FamHotelsMittNordSuedAme />
      <FamHotelsKaribik />
      <FamHotelsOrient />
      <OnlineMagazine />

    </Container>
  );
}