import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Button, Card, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, ImageList, ImageListItem, IconButton, CircularProgress
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RealEstateDetails from './RealEstate.Details';
import axios from 'axios'; // Für API-Anfragen
import { useAuth } from '../../../context/AuthContext'; // Importiere den Auth-Kontext

const RealEstate = () => {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [openDetails, setOpenDetails] = useState(false);
  const [selectedRealEstate, setSelectedRealEstate] = useState(null);
  const [realEstateList, setRealEstateList] = useState([]);
  const [loading, setLoading] = useState(true);
  const { token } = useAuth(); // Token aus dem Auth-Kontext abrufen

  // API-Anfrage, um Immobilien aus der Datenbank zu laden
  useEffect(() => {
    const fetchRealEstateData = async () => {
      try {
        const response = await axios.get('/api/realEstate'); // API-Aufruf
        setRealEstateList(response.data);
      } catch (error) {
        console.error('Fehler beim Laden der Immobilien:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRealEstateData();
  }, []);

  const handleOpenDialog = (images) => {
    setSelectedImages(images.map(image => `/${image}`));
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleOpenDetails = (realEstate) => {
    setSelectedRealEstate(realEstate);
    setOpenDetails(true);
  };

  const handleCloseDetails = () => {
    setOpenDetails(false);
  };

  // Immobilien löschen
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/realEstate/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Füge den Authorization-Header hinzu
        },
      });
      setRealEstateList(realEstateList.filter(item => item.id !== id)); // Entfernt das Objekt dynamisch
    } catch (error) {
      console.error('Fehler beim Löschen der Immobilie:', error);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
        Immobilien Übersicht
      </Typography>

      {loading ? ( // Ladeanzeige, wenn die Immobilien geladen werden
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
          <CircularProgress />
        </Box>
      ) : realEstateList.length === 0 ? ( // Anzeige, wenn keine Immobilien vorhanden sind
        <Typography variant="h6" color="textSecondary" sx={{ textAlign: 'center', mt: 5 }}>
          Zurzeit sind keine Immobilien vorhanden.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {realEstateList.map((realEstate) => (
            <Grid item xs={12} md={6} key={realEstate.id}>
              <Card
                sx={{
                  boxShadow: 3,
                  '&:hover': {
                    boxShadow: 6,
                    transform: 'translateY(-5px)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={realEstate.images.length > 0 ? `/${realEstate.images[0]}` : 'https://via.placeholder.com/200'} // Bildpfad anpassen
                  alt={realEstate.title}
                  onClick={() => handleOpenDialog(realEstate.images)}
                  sx={{ cursor: 'pointer' }}
                />
                <CardContent sx={{ backgroundColor: '#f9f9f9' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {realEstate.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {realEstate.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ marginTop: '16px' }}>
                    {realEstate.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => handleOpenDetails(realEstate)}
                  >
                    Details
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2, ml: 2 }}
                    onClick={() => handleDelete(realEstate.id)}
                  >
                    Löschen
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Dialog für die Bildansicht */}
      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="md">
        <DialogTitle>
          <Typography variant="h6">Immobilien Bilder</Typography>
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: 'absolute', right: 8, top: 8, color: 'grey' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <ImageList cols={2} gap={10}>
            {selectedImages.map((image, index) => (
              <ImageListItem key={index}>
                <img
                  src={image}
                  alt={`real-estate-img-${index}`}
                  loading="lazy"
                  style={{ width: '100%', height: 'auto' }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </DialogContent>
      </Dialog>

      {/* Modalfenster für Details */}
      {selectedRealEstate && (
        <RealEstateDetails
          open={openDetails}
          onClose={handleCloseDetails}
          realEstate={selectedRealEstate}
        />
      )}
    </Box>
  );
};

export default RealEstate;
