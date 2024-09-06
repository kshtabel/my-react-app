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
              secondary="Hier erhalten Sie eine Übersicht über alle wichtigen Informationen. Dazu gehören aktuelle Benachrichtigungen, Ihr Kontostand und eine Zusammenfassung der letzten Aktivitäten. Das Dashboard ist der zentrale Ausgangspunkt, von dem aus Sie auf andere Funktionen zugreifen können."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Wallet"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="Hier können Sie Ihre digitale Geldbörse verwalten. Sie können Ihre aktuelle Wallet-Adresse einsehen und bei Bedarf ändern. Diese Wallet-Adresse wird verwendet, um Zahlungen zu empfangen. Stellen Sie sicher, dass die eingegebene Adresse korrekt ist, um Probleme bei Transaktionen zu vermeiden."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Einstellungen"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="In den Einstellungen können Sie persönliche Informationen ändern, wie z.B. Ihr Passwort oder Ihr Profilbild. Es wird empfohlen, Ihr Passwort regelmäßig zu aktualisieren, um die Sicherheit Ihres Kontos zu gewährleisten. Zudem können Sie hier auch weitere Kontoeinstellungen vornehmen, um Ihre Benutzererfahrung anzupassen."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

          <ListItem alignItems="flex-start">
            <ListItemText
              primary="Hilfe"
              primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
              secondary="Auf dieser Seite finden Sie detaillierte Erklärungen zu allen verfügbaren Routen und Funktionen. Diese Hilfeseite dient als Leitfaden, um Ihnen den Umgang mit der Plattform zu erleichtern. Sollten Sie weitere Fragen haben, steht Ihnen unser Support-Team zur Verfügung."
              secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
            />
          </ListItem>
          
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
                  secondary="Diese Seite bietet eine Übersicht für Administratoren, um wichtige administrative Aufgaben und Benachrichtigungen zu überwachen. Hier können Admins einen schnellen Überblick über Systemwarnungen und wichtige Ereignisse erhalten."
                  secondaryTypographyProps={{ variant: 'body1', color: '#bbb' }}
                />
              </ListItem>
              <Divider sx={{ backgroundColor: '#444', marginY: '16px' }} />

              <ListItem alignItems="flex-start">
                <ListItemText
                  primary="Benutzerverwaltung"
                  primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                  secondary="Auf dieser Seite können Administratoren alle registrierten Benutzer verwalten. Dies umfasst das Erstellen, Bearbeiten und Löschen von Benutzerkonten sowie das Zuweisen von Rollen. Diese Seite ist für die Verwaltung von Benutzerzugriffen und -rechten unerlässlich."
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