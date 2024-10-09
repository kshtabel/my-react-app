import React, { useState } from 'react';
import { Typography, Box, Grid, Container, Button, CardMedia, Modal } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AcUnitIcon from '@mui/icons-material/AcUnit';

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

export default function AntarktisUltima() {
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleOpenModal = (imageSrc) => {
    setModalImage(imageSrc);
    setOpenModal(true);
  };

  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container
      sx={{
        backgroundColor: '#121212',
        color: '#d4a373',
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      {/* Header Image */}
      <CardMedia
        component="img"
        image="https://www.designreisen.de/assets/destinations/_processed_/0/7/csm_ULTIMA_ICE_TUNNEL_1_-_Photo_by_Christoph_Hoebenreich_72dc5435e2.jpg"
        alt="Antarktis Ultima"
        sx={{
          width: '100%',
          height: '600px',
          borderRadius: '8px',
          marginBottom: '20px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        }}
      />

      {/* Title and Description */}
      <Box sx={{ backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px', marginBottom: '40px' }}>
        <Typography variant="h4" sx={{ color: '#d4a373', fontWeight: 'bold', marginBottom: '10px' }}>
          Ultima Antarctica - Expedition
        </Typography>
        <Typography variant="body1" sx={{ color: '#bbb' }}>
          Faszination der eisigen Wunderwelt: Trotz einer Jahresdurchschnittstemperatur von -55°C übt der weiße Kontinent eine fast magische Anziehungskraft aus. Der Kontinent umfasst die um den Südpol gelegenen Land- und Meeresgebiete, von denen knapp 98% mit Eis bedeckt sind. Es ist ein Abenteuer in eine unberührte Wildnis, die Staunen und Ehrfurcht weckt.
        </Typography>
      </Box>

      {/* Icons Section */}
      <Grid container spacing={2} sx={{ marginBottom: '40px' }}>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
            <LocationOnIcon sx={{ color: '#d4a373', fontSize: '40px', marginRight: '10px' }} />
            <Box>
              <Typography variant="h6" sx={{ color: '#d4a373' }}>Standort</Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>Antarktis, Ultima</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
            <AccessTimeIcon sx={{ color: '#d4a373', fontSize: '40px', marginRight: '10px' }} />
            <Box>
              <Typography variant="h6" sx={{ color: '#d4a373' }}>Dauer</Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>Variabel</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '8px' }}>
            <AcUnitIcon sx={{ color: '#d4a373', fontSize: '40px', marginRight: '10px' }} />
            <Box>
              <Typography variant="h6" sx={{ color: '#d4a373' }}>Temperatur</Typography>
              <Typography variant="body2" sx={{ color: '#bbb' }}>Durchschnittlich -55°C</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Gallery */}
      <Typography variant="h5" sx={{ color: '#d4a373', marginBottom: '20px', fontWeight: 'bold' }}>
        Galerie
      </Typography>
      <Grid container spacing={3}>
        {images.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Box
              component="img"
              src={image.src}
              alt={image.alt}
              onClick={() => handleOpenModal(image.src)}
              sx={{
                width: '100%',
                borderRadius: '8px',
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
                sx={{ marginTop: '20px', backgroundColor: '#d4a373', color: '#121212', '&:hover': { backgroundColor: '#af814c' } }}
                variant="contained"
              >
                Schließen
              </Button>
            </>
          )}
        </Box>
      </Modal>

      {/* Booking Button */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#d4a373',
            color: '#121212',
            fontWeight: 'bold',
            padding: '10px 20px',
            '&:hover': {
              backgroundColor: '#af814c',
            },
          }}
        >
          Jetzt Buchen
        </Button>
      </Box>
    </Container>
  );
}
