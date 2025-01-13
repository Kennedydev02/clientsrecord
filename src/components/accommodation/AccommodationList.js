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
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function AccommodationList() {
  const navigate = useNavigate();

  // Mock data
  const accommodations = [
    {
      id: 1,
      studentName: 'John Doe',
      roomNumber: 'A101',
      startDate: '2024-03-01',
      endDate: '2024-06-01',
      status: 'Active',
      paymentStatus: 'Paid',
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      roomNumber: 'B202',
      startDate: '2024-02-15',
      endDate: '2024-05-15',
      status: 'Active',
      paymentStatus: 'Pending',
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Accommodation</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/dashboard/accommodation/assign')}
        >
          Assign Accommodation
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Payment Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {accommodations.map((accommodation) => (
              <TableRow key={accommodation.id}>
                <TableCell>{accommodation.studentName}</TableCell>
                <TableCell>{accommodation.roomNumber}</TableCell>
                <TableCell>{accommodation.startDate}</TableCell>
                <TableCell>{accommodation.endDate}</TableCell>
                <TableCell>
                  <Chip
                    label={accommodation.status}
                    color={accommodation.status === 'Active' ? 'success' : 'default'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Chip
                    label={accommodation.paymentStatus}
                    color={accommodation.paymentStatus === 'Paid' ? 'success' : 'warning'}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => navigate(`/dashboard/accommodation/edit/${accommodation.id}`)}
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

export default AccommodationList; 