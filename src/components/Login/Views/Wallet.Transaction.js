// src/components/Login/Views/Wallet.Transaction.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const WalletTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('/api/user/wallet/transactions'); // Endpunkt anpassen
        setTransactions(response.data);
      } catch (error) {
        console.error('Fehler beim Abrufen der Transaktionsdaten:', error);
        setError('Fehler beim Abrufen der Transaktionsdaten.');
      }
    };

    fetchTransactions();
  }, []);

  if (error) {
    return <Typography color="error">{error}</Typography>;
  }

  return (
    <Box sx={{ marginTop: '40px' }}>
      <Typography variant="h4" gutterBottom>Transaktionen</Typography>
      <TableContainer component={Paper} sx={{ backgroundColor: '#1e1e1e', borderRadius: '12px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: '#bbb' }}>Datum</TableCell>
              <TableCell sx={{ color: '#bbb' }}>Typ</TableCell>
              <TableCell sx={{ color: '#bbb' }}>Betrag (BTC)</TableCell>
              <TableCell sx={{ color: '#bbb' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TableRow key={transaction.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#2e2e2e' }, '&:nth-of-type(even)': { backgroundColor: '#1e1e1e' } }}>
                  <TableCell sx={{ color: '#fff' }}>{new Date(transaction.date).toLocaleString()}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.type}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.amount}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.status}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4} sx={{ color: '#fff', textAlign: 'center' }}>Keine Transaktionen gefunden</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WalletTransaction;
