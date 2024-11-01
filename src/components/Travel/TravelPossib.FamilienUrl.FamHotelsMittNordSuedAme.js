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

export default function FamHotelsMittNordSuedAme() {
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
        Familienhotels in Mittel-, Nord- und Südamerika
      </Typography>
      <Box sx={{ borderBottom: '1px solid #979797', marginBottom: 5 }} />

      <Grid container spacing={4}>
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/montana-the-ranch-at-rock-creek"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/a/7/csm_01_The-Ranch-at-Rock-Creek_moose-house_fe83c561bb.jpg"
          title="The Ranch at Rock Creek"
          subtitle="Montana"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/punta-mita-four-seasons-punta-mita"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/3/csm_Four-Seasons-Punta-Mita_natural_9751423ceb.jpg"
          title="Four Seasons Punta Mita"
          subtitle="Punta Mita"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/tofino-clayoquot-wilderness-resort"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/f/2/csm_ps_evening_953af4d033.jpg"
          title="Clayoquot Wilderness Resort"
          subtitle="Tofino"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/west-end-village-four-seasons-resort-and-residences-anguilla"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/4/0/csm_01_Viceroy-Anguilla_exteriors_283f2d82b5.jpg"
          title="Four Seasons Resort and Residences Anguilla"
          subtitle="West End Village"
        />
        <TeaserBox
          link="https://www.designreisen.de/luxusreisen/santo-andre-campo-bahia"
          imgSrc="https://www.designreisen.de/fileadmin/_processed_/2/7/csm_Campo-Bahia-Pool-bei-Nacht_09987d2973.jpg"
          title="Campo Bahia"
          subtitle="Santo Andre"
        />
      </Grid>
    </Container>
  );
}