import React, { useState } from 'react';
import {
  Box,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  ImageList,
  ImageListItem,
  Avatar,
  Button,
  Rating,
  TextField,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const RealEstateDetails = ({ open, onClose, realEstate }) => {
  const [rating, setRating] = useState(4); // Beispiel Bewertung
  const [views, setViews] = useState(123); // Beispiel Benutzer, die die Anzeige angesehen haben
  const [comments, setComments] = useState([
    { username: 'Benutzer1', text: 'Tolles Objekt!' },
    { username: 'Benutzer2', text: 'Sehr schöne Gegend, interessiere mich dafür.' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { username: 'Benutzername', text: newComment }]);
      setNewComment('');
    }
  };

  const getImageUrl = (image) => {
    // Hier stellen wir sicher, dass der /uploads/ Pfad richtig verwendet wird
    return image.startsWith('http') ? image : `/${image}`;
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md">
      <DialogTitle>
        <Typography variant="h6">Details der Immobilie</Typography>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: 'grey' }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
            {realEstate.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" gutterBottom>
            Erstellungsdatum: 12. September 2024, 10:30 Uhr
          </Typography>
          <Typography variant="body1">{realEstate.detailedDescription}</Typography>
        </Box>

        {/* Bilder Slideshow */}
        <ImageList cols={2} gap={10}>
          {realEstate.images.map((image, index) => (
            <ImageListItem key={index}>
              <img
                src={getImageUrl(image)} // Verwende die Funktion, um den korrekten Pfad zu erhalten
                alt={`real-estate-img-${index}`}
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
              />
            </ImageListItem>
          ))}
        </ImageList>

        {/* Kaufpreis und Verkäufer */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Kaufpreis: {realEstate.price}</Typography>
          <Typography variant="subtitle1">Verkäufer: {realEstate.seller}</Typography>
          <Typography variant="body2" color="textSecondary">
            {views} Benutzer haben diese Anzeige angesehen.
          </Typography>
        </Box>

        {/* Bewertung */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Bewertung der Immobilie:</Typography>
          <Rating
            name="immobilie-bewertung"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </Box>

        {/* Kommentare */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Kommentare</Typography>
          <List>
            {comments.map((comment, index) => (
              <ListItem key={index}>
                <Avatar>{comment.username.charAt(0).toUpperCase()}</Avatar>
                <ListItemText
                  primary={comment.username}
                  secondary={comment.text}
                  sx={{ ml: 2 }}
                />
              </ListItem>
            ))}
          </List>

          {/* Kommentar hinzufügen */}
          <TextField
            fullWidth
            label="Neuen Kommentar hinzufügen"
            variant="outlined"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddComment}
            sx={{ mt: 2 }}
          >
            Kommentar hinzufügen
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default RealEstateDetails;
