// import React, { useState } from 'react';
// import { Typography, Box, Grid, Button, Divider, Container, Card, CardMedia, CardContent, AppBar, Tabs, Tab } from '@mui/material';
// import { LocationOn, AccessTime, AcUnit } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';
// import AntarktisUltima from './AntarktisUltima';
// import Gallery from './Gallery';

// // Tab-Navigation Komponente
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`tabpanel-${index}`}
//       aria-labelledby={`tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// // Wiederverwendbare TeaserBox-Komponente
// const TeaserBox = ({ image, title, description, onClick }) => (
//   <Grid item xs={12} sm={6} md={4}>
//     <Card
//       onClick={onClick}
//       sx={{
//         position: 'relative',
//         cursor: 'pointer',
//         transition: 'transform 0.3s ease-in-out',
//         '&:hover': {
//           transform: 'scale(1.02)',
//           boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
//         },
//       }}
//     >
//       <CardMedia component="img" height="200" image={image} alt={title} />
//       <CardContent>
//         <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
//           {title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           {description}
//         </Typography>
//       </CardContent>
//     </Card>
//   </Grid>
// );

// // Detaillierte Beschreibung des White Desert Hotels
// function WhiteDesertDetail() {
//   return (
//     <Box
//       sx={{
//         p: 4,
//         backgroundColor: '#1c1c1c',
//         borderRadius: 2,
//         color: '#f0f0f0',
//         boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.5)',
//         maxWidth: '1200px',
//         margin: '0 auto',
//       }}
//     >
//       {/* Header Image */}
//       <CardMedia
//         component="img"
//         image="https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_377565863d.jpg"
//         alt="White Desert"
//         sx={{ height: 400, objectFit: 'cover', marginBottom: '20px', borderRadius: '8px' }}
//       />

//       {/* Title and Description in a separate Box */}
//       <Box sx={{ backgroundColor: '#282828', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
//         <Typography variant="h4" sx={{ color: '#d4a373', fontWeight: 'bold', marginBottom: '10px' }}>
//           White Desert - ICE EXPERIENCE
//         </Typography>
//         <Typography variant="body1" sx={{ color: '#bbb', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
//           Faszination der eisigen Wunderwelt: Trotz einer Jahresdurchschnittstemperatur von -55 °C übt der weiße Kontinent eine fast magische Anziehungskraft aus. Die Antarktis umfasst die um den Südpol gelegenen Land- und Meeresgebiete, von denen knapp 98% mit Eis bedeckt sind.
//         </Typography>
//       </Box>

//       {/* Information Cards */}
//       <Grid container spacing={4} sx={{ mb: 4 }}>
//         <Grid item xs={12} sm={4}>
//           <Card
//             sx={{
//               backgroundColor: '#282828',
//               color: '#f0f0f0',
//               p: 2,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <LocationOn sx={{ color: '#d4a373', fontSize: 50, mr: 2 }} />
//             <Box>
//               <Typography variant="h6" sx={{ color: '#d4a373', fontWeight: 'bold' }}>
//                 Standort
//               </Typography>
//               <Typography variant="body2">Antarktis, White Desert</Typography>
//             </Box>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card
//             sx={{
//               backgroundColor: '#282828',
//               color: '#f0f0f0',
//               p: 2,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <AccessTime sx={{ color: '#d4a373', fontSize: 50, mr: 2 }} />
//             <Box>
//               <Typography variant="h6" sx={{ color: '#d4a373', fontWeight: 'bold' }}>
//                 Dauer
//               </Typography>
//               <Typography variant="body2">Variabel</Typography>
//             </Box>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={4}>
//           <Card
//             sx={{
//               backgroundColor: '#282828',
//               color: '#f0f0f0',
//               p: 2,
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             <AcUnit sx={{ color: '#d4a373', fontSize: 50, mr: 2 }} />
//             <Box>
//               <Typography variant="h6" sx={{ color: '#d4a373', fontWeight: 'bold' }}>
//                 Temperatur
//               </Typography>
//               <Typography variant="body2">Durchschnittlich -55°C</Typography>
//             </Box>
//           </Card>
//         </Grid>
//       </Grid>

//       <Divider sx={{ my: 4, backgroundColor: '#d4a373' }} />

//       {/* Galerie-Bereich */}
//       <Box sx={{ mb: 4 }}>
//         <Typography variant="h5" gutterBottom sx={{ color: '#d4a373', fontWeight: 'bold' }}>
//           Galerie
//         </Typography>
//         <Gallery />
//       </Box>

//       {/* Handlungsbereich */}
//       <Box sx={{ textAlign: 'center' }}>
//         <Button
//           variant="contained"
//           sx={{
//             backgroundColor: '#d4a373',
//             '&:hover': { backgroundColor: '#af814c' },
//             fontWeight: 'bold',
//             padding: '10px 20px',
//           }}
//         >
//           Jetzt buchen
//         </Button>
//       </Box>
//     </Box>
//   );
// }

// // Hauptseite für die Hotelauswahl und Details
// const AntarktisPage = () => {
//   const navigate = useNavigate();
//   const [selectedHotel, setSelectedHotel] = useState(null);
//   const [tabIndex, setTabIndex] = useState(0);

//   // Funktion, um den Tab zu wechseln und das entsprechende Hotel zu setzen
//   const handleHotelClick = (hotelTitle) => {
//     setSelectedHotel(hotelTitle);
//     setTabIndex(hotelTitle === 'White Desert' ? 1 : 2); // Tab für das jeweilige Hotel setzen
//   };

//   const handleTabChange = (event, newIndex) => {
//     setTabIndex(newIndex);
//   };

//   const hotels = [
//     {
//       title: 'White Desert',
//       image: 'https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_377565863d.jpg',
//       description: 'Erleben Sie die Antarktis wie nie zuvor.',
//     },
//     {
//       title: 'Ultima Antarctic Expeditions',
//       image: 'https://www.designreisen.de/assets/destinations/_processed_/0/7/csm_ULTIMA_ICE_TUNNEL_1_-_Photo_by_Christoph_Hoebenreich_e33fe70f3b.jpg',
//       description: 'Expeditionen in der tiefsten Wildnis der Antarktis.',
//     },
//   ];

//   return (
//     <Container maxWidth="lg" sx={{ py: 6, textAlign: 'center' }}>
//       {/* AppBar und Tabs */}
//       <AppBar position="static" color="default">
//         <Tabs
//           value={tabIndex}
//           onChange={handleTabChange}
//           indicatorColor="primary"
//           textColor="inherit"
//           variant="fullWidth"
//         >
//           <Tab label="Hotelauswahl" />
//           <Tab label="Erleben Sie die Antarktis" />
//           <Tab label="Ultima Antarctica" />
//         </Tabs>
//       </AppBar>

//       {/* TabPanels */}
//       <TabPanel value={tabIndex} index={0}>
//         <Typography
//           variant="h4"
//           color="textSecondary"
//           gutterBottom
//           sx={{ color: '#d4a373', fontWeight: 'bold' }}
//         >
//           Hotels in der Antarktis
//         </Typography>
//         <Divider sx={{ my: 2, backgroundColor: '#d4a373' }} />
//         <Grid container spacing={4}>
//           {hotels.map((hotel, index) => (
//             <TeaserBox
//               key={index}
//               image={hotel.image}
//               title={hotel.title}
//               description={hotel.description}
//               onClick={() => handleHotelClick(hotel.title)}
//             />
//           ))}
//         </Grid>
//         <Button
//           variant="contained"
//           onClick={() => navigate('/admin/reise-verwaltung/uebersicht')}
//           sx={{
//             mt: 4,
//             backgroundColor: '#d4a373',
//             '&:hover': {
//               backgroundColor: '#af814c',
//             },
//           }}
//         >
//           Zurück zur Übersicht
//         </Button>
//       </TabPanel>

//       <TabPanel value={tabIndex} index={1}>
//         <WhiteDesertDetail />
//       </TabPanel>

//       <TabPanel value={tabIndex} index={2}>
//         <AntarktisUltima />
//       </TabPanel>
//     </Container>
//   );
// };

// export default AntarktisPage;

import React, { useState } from 'react';
import { Typography, Box, Grid, Button, Divider, Container, Card, CardMedia, CardContent, AppBar, Tabs, Tab, Modal } from '@mui/material';
import { LocationOn, AccessTime, AcUnit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import AntarktisUltima from './AntarktisUltima';
import Gallery from './Gallery';

// Modal Styles
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '90%',
  maxHeight: '90%',
  backgroundColor: '#fff',
  boxShadow: 24,
  padding: '20px',
  outline: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 4 }}>{children}</Box>}
    </div>
  );
}

const TeaserBox = ({ image, title, description, onClick }) => (
  <Grid item xs={12} sm={6} md={4}>
    <Card
      onClick={onClick}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.4s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 15px 30px rgba(0, 0, 0, 0.3)',
        },
        borderRadius: '12px',
      }}
    >
      <CardMedia component="img" height="220" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

function WhiteDesertDetail() {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (image) => {
    setModalImage(image);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  const images = [
    {
      src: "https://www.designreisen.de/assets/destinations/_processed_/0/7/csm_ULTIMA_ICE_TUNNEL_1_-_Photo_by_Christoph_Hoebenreich_72dc5435e2.jpg",
      alt: "Ice Tunnel",
    },
    {
      src: "https://www.designreisen.de/assets/destinations/_processed_/3/b/csm_ANTARCTIC_LANDSCAPE_-_Photo_By_Christoph_Hoebenreich_14da53bbdf.jpg",
      alt: "Antarctic Landscape",
    },
    {
      src: "https://www.designreisen.de/assets/destinations/_processed_/e/5/csm_ULTIMA_EMPEROR_PENGUINS_1_-_Photo_By_Christoph_Hoebenreich_780ced9493.jpg",
      alt: "Emperor Penguins",
    },
  ];

  return (
    <Box
      sx={{
        p: 6,
        backgroundColor: '#141414',
        borderRadius: 3,
        color: '#fff',
        boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.6)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <CardMedia
        component="img"
        image="https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_377565863d.jpg"
        alt="White Desert"
        sx={{ height: 450, objectFit: 'cover', borderRadius: '12px', marginBottom: '24px' }}
      />

      <Box sx={{ backgroundColor: '#1c1c1c', padding: '24px', borderRadius: '12px', marginBottom: '48px' }}>
        <Typography variant="h4" sx={{ color: '#e0b382', fontWeight: 'bold', marginBottom: '12px', textAlign: 'center' }}>
          White Desert - ICE EXPERIENCE
        </Typography>
        <Typography variant="body1" sx={{ color: '#ccc', textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          Faszination der eisigen Wunderwelt: Trotz einer Jahresdurchschnittstemperatur von -55 °C übt der weiße Kontinent eine fast magische Anziehungskraft aus. Die Antarktis umfasst die um den Südpol gelegenen Land- und Meeresgebiete, von denen knapp 98% mit Eis bedeckt sind.
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ mb: 5 }}>
        {images.map((image, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              onClick={() => handleOpenModal(image.src)}
              sx={{
                width: '100%',
                borderRadius: '12px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                cursor: 'pointer',
              }}
            />
          </Grid>
        ))}
      </Grid>

      {/* Modal für vergrößertes Bild */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          {modalImage && (
            <>
              <CardMedia
                component="img"
                src={modalImage}
                alt="Vergrößertes Bild"
                sx={{ width: '100%', borderRadius: '12px' }}
              />
              <Button
                onClick={handleCloseModal}
                sx={{ marginTop: '20px', backgroundColor: '#e0b382', '&:hover': { backgroundColor: '#b58a60' } }}
                variant="contained"
              >
                Schließen
              </Button>
            </>
          )}
        </Box>
      </Modal>

      <Divider sx={{ my: 5, backgroundColor: '#e0b382' }} />

      <Box sx={{ textAlign: 'center' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#e0b382',
            '&:hover': { backgroundColor: '#b58a60' },
            fontWeight: 'bold',
            padding: '12px 28px',
            borderRadius: '8px',
          }}
        >
          Jetzt buchen
        </Button>
      </Box>
    </Box>
  );
}

const AntarktisPage = () => {
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);

  const handleHotelClick = (hotelTitle) => {
    setSelectedHotel(hotelTitle);
    setTabIndex(hotelTitle === 'White Desert' ? 1 : 2);
  };

  const handleTabChange = (event, newIndex) => {
    setTabIndex(newIndex);
  };

  const hotels = [
    {
      title: 'White Desert',
      image: 'https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_377565863d.jpg',
      description: 'Erleben Sie die Antarktis wie nie zuvor.',
    },
    {
      title: 'Ultima Antarctic Expeditions',
      image: 'https://www.designreisen.de/assets/destinations/_processed_/0/7/csm_ULTIMA_ICE_TUNNEL_1_-_Photo_by_Christoph_Hoebenreich_e33fe70f3b.jpg',
      description: 'Expeditionen in der tiefsten Wildnis der Antarktis.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <AppBar position="static" color="default">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Hotelauswahl" />
          <Tab label="Erleben Sie die Antarktis" />
          <Tab label="Ultima Antarctica" />
        </Tabs>
      </AppBar>

      <TabPanel value={tabIndex} index={0}>
        <Typography
          variant="h4"
          sx={{ color: '#e0b382', fontWeight: 'bold', mb: 3 }}
        >
          Hotels in der Antarktis
        </Typography>
        <Divider sx={{ my: 3, backgroundColor: '#e0b382' }} />
        <Grid container spacing={5}>
          {hotels.map((hotel, index) => (
            <TeaserBox
              key={index}
              image={hotel.image}
              title={hotel.title}
              description={hotel.description}
              onClick={() => handleHotelClick(hotel.title)}
            />
          ))}
        </Grid>
        <Button
          variant="contained"
          onClick={() => navigate('/admin/reise-verwaltung/uebersicht')}
          sx={{
            mt: 5,
            backgroundColor: '#e0b382',
            '&:hover': {
              backgroundColor: '#b58a60',
            },
            fontWeight: 'bold',
            borderRadius: '8px',
          }}
        >
          Zurück zur Übersicht
        </Button>
      </TabPanel>

      <TabPanel value={tabIndex} index={1}>
        <WhiteDesertDetail />
      </TabPanel>

      <TabPanel value={tabIndex} index={2}>
        <AntarktisUltima />
      </TabPanel>
    </Container>
  );
};

export default AntarktisPage;
