import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Grid, Card, CardContent, CardActions, Breadcrumbs, Link } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import NavigateNextIcon from '@mui/icons-material/NavigateNext'; // Für den Pfeil zwischen Breadcrumbs

const RealEstateAdministration = () => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedImages, setSelectedImages] = useState([]);
  const [submitStatus, setSubmitStatus] = useState('');
  const [activePage, setActivePage] = useState('create'); // Default page: 'create'

  const handleImageChange = (e) => {
    setSelectedImages([...e.target.files]);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('description', data.description);
    formData.append('detailedDescription', data.detailedDescription);
    formData.append('price', data.price);

    // Füge alle ausgewählten Bilder hinzu
    selectedImages.forEach((file) => {
      formData.append('images', file);
    });

    try {
      const response = await axios.post('/api/realEstate/createEstate', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setSubmitStatus('Erfolgreich erstellt');
      reset();
      setSelectedImages([]);
    } catch (error) {
      setSubmitStatus('Fehler beim Erstellen');
    }
  };

  // Wechsel der Ansicht basierend auf der Breadcrumb-Auswahl
  const handleBreadcrumbClick = (page) => {
    setActivePage(page);
    setSubmitStatus('');
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#121212', color: '#fff' }}> {/* Hintergrundfarbe angepasst */}
      {/* Breadcrumbs für Navigation */}
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" sx={{ color: '#fff' }} />} // Weißer Pfeil
        aria-label="breadcrumb"
        sx={{
          mb: 3,
          padding: '10px',
          backgroundColor: '#333', // Dunkler Hintergrund für Breadcrumbs
          borderRadius: '8px',
          paddingLeft: '16px',
          paddingRight: '16px',
          boxShadow: 3, // Leichte Schatten für mehr Tiefe
          color: '#fff', // Weißer Text
        }}
      >
        <Link
          underline="hover"
          color={activePage === 'create' ? 'primary' : 'inherit'}
          onClick={() => handleBreadcrumbClick('create')}
          sx={{
            fontSize: '16px',
            fontWeight: activePage === 'create' ? 'bold' : 'normal',
            cursor: 'pointer',
            color: activePage === 'create' ? '#bb86fc' : '#fff', // Lila für aktive Seite
            '&:hover': { textDecoration: 'underline', color: '#bb86fc' }, // Hover-Effekt in Lila
          }}
        >
          Immobilie erstellen
        </Link>
        <Link
          underline="hover"
          color={activePage === 'delete' ? 'primary' : 'inherit'}
          onClick={() => handleBreadcrumbClick('delete')}
          sx={{
            fontSize: '16px',
            fontWeight: activePage === 'delete' ? 'bold' : 'normal',
            cursor: 'pointer',
            color: activePage === 'delete' ? '#bb86fc' : '#fff', // Lila für aktive Seite
            '&:hover': { textDecoration: 'underline', color: '#bb86fc' }, // Hover-Effekt in Lila
          }}
        >
          Immobilie löschen
        </Link>
      </Breadcrumbs>

      {/* Rendering der entsprechenden Seite basierend auf dem ausgewählten Breadcrumb */}
      {activePage === 'create' ? (
        <Box>
          <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
            Immobilien erstellen
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Card sx={{ mb: 4, backgroundColor: '#1e1e1e', color: '#fff' }}>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Titel der Immobilie"
                      {...register('title', { required: true })}
                      required
                      InputLabelProps={{ style: { color: '#fff' } }} // Weißer Label-Text
                      InputProps={{ style: { color: '#fff' } }} // Weißer Text
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Preis (in BTC)"
                      {...register('price', { required: true })}
                      required
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Kurzbeschreibung"
                      {...register('description', { required: true })}
                      required
                      multiline
                      rows={3}
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Detaillierte Beschreibung"
                      {...register('detailedDescription', { required: true })}
                      required
                      multiline
                      rows={5}
                      InputLabelProps={{ style: { color: '#fff' } }}
                      InputProps={{ style: { color: '#fff' } }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                      style={{ display: 'block', marginTop: '20px', color: '#fff' }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button type="submit" variant="contained" color="primary">
                  Immobilie erstellen
                </Button>
              </CardActions>
            </Card>
          </form>
          {submitStatus && (
            <Typography variant="h6" color="primary">
              {submitStatus}
            </Typography>
          )}
        </Box>
      ) : (
        <Box>
          {/* Immobilien löschen Ansicht */}
          <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
            Verwaltung von Immo's - Löschen
          </Typography>
          <Typography variant="body1" sx={{ color: '#fff' }}>
            Hier können Immobilien verwaltet und gelöscht werden.
          </Typography>
          {/* Zusätzliche Funktionen zur Löschung von Immobilien können hier hinzugefügt werden */}
        </Box>
      )}
    </Box>
  );
};

export default RealEstateAdministration;
