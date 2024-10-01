import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { useAuth } from '../../../context/AuthContext';

const Help = () => {
  const { role } = useAuth(); // Rolle des Benutzers aus dem AuthContext

  return (
    <Box sx={{ padding: '24px', backgroundColor: '#121212', minHeight: '100vh' }}>
      <Typography variant="h4" gutterBottom sx={{ color: '#fff' }}>
        Hilfe & Anleitung
      </Typography>
      <Paper sx={{ backgroundColor: '#1e1e1e', padding: '16px', borderRadius: '12px' }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
          Übersicht der verfügbaren Routen
        </Typography>
        <Divider sx={{ backgroundColor: '#444', marginBottom: '16px' }} />

        <List sx={{ color: '#fff' }}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Dashboard"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="Das Dashboard zeigt alle wichtigen Informationen auf einen Blick. Hier können Sie Ihren aktuellen Kontostand, Transaktionshistorie und Benachrichtigungen einsehen. Benutzer können auch ihre letzten Aktivitäten und Wallet-Details überprüfen."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Wallet"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="In der Wallet-Übersicht können Sie Ihre Wallet-Adresse einsehen und verwalten. Überprüfen Sie den aktuellen Kontostand und verfolgen Sie eingehende sowie ausgehende Transaktionen. Für mehr Sicherheit können Sie auch Ihre Wallet-Einstellungen ändern."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Einstellungen"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="Ändern Sie Ihre persönlichen Einstellungen, wie z.B. Ihr Passwort, Profilbild oder andere Kontoinformationen. Sie können hier auch Sicherheitseinstellungen anpassen, um Ihren Account vor unbefugtem Zugriff zu schützen."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Hilfe"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="Hier finden Sie detaillierte Anleitungen und Informationen zu den verschiedenen Funktionen der Plattform. Wenn Sie weitere Fragen haben, können Sie sich auch an den Support wenden."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>

          {/* Zusätzliche Erklärungen für Admin-Routen */}
          {role === 'admin' && (
            <>
              <Divider sx={{ backgroundColor: '#6200ea', marginY: '24px' }} />
              <Typography variant="h5" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
                Zusätzliche Routen für Admins
              </Typography>

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Admin Übersicht"
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  secondary="Die Admin-Übersicht bietet einen zentralen Punkt, um administrative Aufgaben zu überwachen. Hier können Admins auf wichtige Systeminformationen zugreifen, wie z.B. aktuelle Benutzeraktivitäten, Systemstatus und Warnmeldungen."
                  secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
                />
              </ListItem>
              <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Benutzerverwaltung"
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  secondary="Administratoren können alle Benutzerkonten verwalten. Dazu gehören das Erstellen, Bearbeiten und Löschen von Benutzerprofilen sowie das Zuweisen von spezifischen Rollen. Zudem können Admins Benutzeraktivitäten überwachen und gegebenenfalls Maßnahmen ergreifen."
                  secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
                />
              </ListItem>
              <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Immobilien Verwaltung"
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  secondary="Administratoren können Immobilienanzeigen hinzufügen, bearbeiten und löschen. Die Verwaltung von Immobilien ermöglicht es, verschiedene Anzeigen mit detaillierten Beschreibungen, Preisen und Bildern zu erstellen. Admins können hier auch bestehende Anzeigen aktualisieren oder entfernen."
                  secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
                />
              </ListItem>
              <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Immobilien Administration"
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  secondary="Über die Immobilien-Administration können Administratoren neue Immobilien in die Plattform einpflegen. Sie können hier die Titel, Beschreibungen, Preise und Bilder hinzufügen sowie bestehende Immobilieneinträge aktualisieren."
                  secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
                />
              </ListItem>
            </>
          )}
        </List>
      </Paper>
    </Box>
  );
};

export default Help;
