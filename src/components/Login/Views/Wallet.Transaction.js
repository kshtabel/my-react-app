// src/components/Login/Views/Wallet.Transaction.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { useAuth } from '../../../context/AuthContext'; // Import the AuthContext to get the user ID

const WalletTransaction = () => {
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useAuth(); // Get the current user

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        // Ensure we have a user ID before making the request
        if (user && user.id) {
          const response = await axios.get(`/api/user/wallet/transactions/${user.id}`); // Use the user ID in the endpoint
          setTransactions(response.data);
        }
      } catch (error) {
        console.error('Fehler beim Abrufen der Transaktionsdaten:', error);
        setError('Fehler beim Abrufen der Transaktionsdaten.');
      }
    };

    fetchTransactions();
  }, [user]);

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
              <TableCell sx={{ color: '#bbb' }}>Transaktionsgebühr</TableCell>
              <TableCell sx={{ color: '#bbb' }}>Empfängeradresse</TableCell>
              <TableCell sx={{ color: '#bbb' }}>Status</TableCell>
              <TableCell sx={{ color: '#bbb' }}>Transaktions-ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.length > 0 ? (
              transactions.map((transaction) => (
                <TableRow key={transaction.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#2e2e2e' }, '&:nth-of-type(even)': { backgroundColor: '#1e1e1e' } }}>
                  <TableCell sx={{ color: '#fff' }}>{new Date(transaction.created_at).toLocaleString()}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.transaction_type}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.amount}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.transaction_fee}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.recipient_address || 'N/A'}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.transaction_status}</TableCell>
                  <TableCell sx={{ color: '#fff' }}>{transaction.tx_id || 'N/A'}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} sx={{ color: '#fff', textAlign: 'center' }}>Keine Transaktionen gefunden</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default WalletTransaction;
