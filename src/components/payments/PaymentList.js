import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Receipt as ReceiptIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function PaymentList() {
  const navigate = useNavigate();

  // Mock data
  const payments = [
    {
      id: 1,
      studentName: 'John Doe',
      amount: 1500,
      type: 'Course Fee',
      date: '2024-03-01',
      status: 'Completed',
      method: 'Credit Card',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      amount: 800,
      type: 'Accommodation Fee',
      date: '2024-02-28',
      status: 'Pending',
      method: 'Bank Transfer',
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Payments</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/dashboard/payments/new')}
        >
          Record Payment
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.studentName}</TableCell>
                <TableCell>${payment.amount}</TableCell>
                <TableCell>{payment.type}</TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell>{payment.method}</TableCell>
                <TableCell>
                  <Chip
                    label={payment.status}
                    color={getStatusColor(payment.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => navigate(`/dashboard/payments/${payment.id}`)}
                    title="View Receipt"
                  >
                    <ReceiptIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`/dashboard/payments/edit/${payment.id}`)}
                    title="Edit"
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton color="error" title="Delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default PaymentList; 