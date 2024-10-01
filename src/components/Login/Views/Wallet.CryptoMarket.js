import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useAuth } from '../../../context/AuthContext'; // Importiere useAuth
import io from 'socket.io-client';

const WalletMarket = () => {
  const [marketData, setMarketData] = useState([]);
  const [error, setError] = useState(null);
  const { token, isLoggedIn } = useAuth(); // Hole das Token und den Anmeldestatus aus useAuth

  useEffect(() => {
    if (!isLoggedIn) {
      return; // Beende die Ausführung, wenn der Benutzer nicht angemeldet ist
    }

    const socket = io('http://localhost:3001', {
      query: { token }, // Sende das Token als Query-Parameter für die Authentifizierung
      transports: ['websocket'], // Verwenden Sie WebSocket für die Verbindung
    });

    const fetchMarketData = async () => {
      try {
        const response = await axios.get('/api/market-data', {
          headers: {
            Authorization: `Bearer ${token}`, // Authorization-Header mit Token
          },
        });

        const { price, timestamp } = response.data;

        // Füge den neuen Datenpunkt hinzu
        setMarketData((prevData) => [
          ...prevData,
          {
            time: new Date(timestamp).toLocaleTimeString(),
            price: price,
          },
        ]);
      } catch (error) {
        console.error('Fehler beim Abrufen der Marktdaten:', error);
        setError('Fehler beim Abrufen der Marktdaten.');
      }
    };

    // Initialer Aufruf, um sofort Daten zu laden
    fetchMarketData();

    // Socket.IO-Verbindung für Echtzeitaktualisierung
    socket.on('marketDataUpdate', (newData) => {
      setMarketData((prevData) => [
        ...prevData,
        {
          time: new Date(newData.time).toLocaleTimeString(),
          price: newData.price,
        },
      ]);
    });

    return () => {
      socket.disconnect(); // Trenne die Verbindung, wenn die Komponente entladen wird
    };
  }, [token, isLoggedIn]); // Token und Anmeldestatus als Abhängigkeit hinzufügen

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ padding: '24px' }}>
      <Typography variant="h4" gutterBottom>
        Marktübersicht (BTC/USD)
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={marketData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default WalletMarket;
