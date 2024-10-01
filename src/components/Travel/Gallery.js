import React, { useState } from "react";
import { Box, Grid, IconButton, Dialog, DialogContent } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";

export default function Gallery() {
  const [open, setOpen] = useState(false); // State für Dialog öffnen/schließen
  const [selectedImage, setSelectedImage] = useState(""); // State für das ausgewählte Bild

  // Funktion zum Öffnen des Dialogs und Setzen des ausgewählten Bilds
  const handleOpen = (imageUrl) => {
    setSelectedImage(imageUrl);
    setOpen(true);
  };

  // Funktion zum Schließen des Dialogs
  const handleClose = () => {
    setOpen(false);
    setSelectedImage(""); // Bild nach Schließen zurücksetzen
  };

  return (
    <>
      <Box sx={{ margin: "0 auto", position: "relative", width: "100%", maxWidth: "1200px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box component="a" onClick={() => handleOpen("https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_1646252163.jpg")}>
              <Box component="img" src="https://www.designreisen.de/fileadmin/_processed_/e/2/csm_White-Desert_Kuppel_1646252163.jpg" alt="White Desert Camp Kuppel" sx={{ width: "100%", height: "auto", cursor: "pointer" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box component="a" onClick={() => handleOpen("https://www.designreisen.de/fileadmin/_processed_/d/6/csm_White-Desert_Pinguine_64a98ddd5a.jpg")}>
              <Box component="img" src="https://www.designreisen.de/fileadmin/_processed_/d/6/csm_White-Desert_Pinguine_64a98ddd5a.jpg" alt="White Desert Camp" sx={{ width: "100%", height: "auto", cursor: "pointer" }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box component="a" onClick={() => handleOpen("https://www.designreisen.de/fileadmin/_processed_/9/b/csm_White-Desert_Lounge_43ef396356.jpg")}>
              <Box component="img" src="https://www.designreisen.de/fileadmin/_processed_/9/b/csm_White-Desert_Lounge_43ef396356.jpg" alt="White Desert Lounge" sx={{ width: "100%", height: "auto", cursor: "pointer" }} />
            </Box>
          </Grid>
        </Grid>

        {/* Slider Navigation */}
        <IconButton sx={{ position: "absolute", top: "50%", left: "0", transform: "translateY(-50%)", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff" }}>
          <ArrowBackIosIcon />
        </IconButton>
        <IconButton sx={{ position: "absolute", top: "50%", right: "0", transform: "translateY(-50%)", backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff" }}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      {/* Dialog für Bildvorschau */}
      <Dialog open={open} onClose={handleClose} maxWidth="xl" sx={{ width: '100%', maxWidth: 'none' }}>
        <DialogContent
          sx={{
            position: "relative",
            padding: 0,
            width: '100%',
            maxWidth: '1600px', // Vergrößert das Fenster, verdoppelt die Breite
            height: 'auto',
            maxHeight: '90vh', // Vergrößert die Höhe
            margin: '0 auto',
          }}
        >
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 10, right: 10, backgroundColor: "rgba(0, 0, 0, 0.5)", color: "#fff" }}>
            <CloseIcon />
          </IconButton>
          <Box
            component="img"
            src={selectedImage}
            alt="Selected Preview"
            sx={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh', // Maximiert die Bildhöhe
              objectFit: 'contain',
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
