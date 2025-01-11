import React, { useEffect, useState } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  LinearProgress,
  Chip,
  IconButton,
  Box
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useNavigate } from 'react-router-dom';
import { clientService } from '../services/api';

function ClientTable() {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    setLoading(true);
    try {
      const result = await clientService.getClients();
      if (result.success) {
        setClients(result.data);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Failed to fetch clients');
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Paid': return '#4CAF50';
      case 'Pending': return '#FF9800';
      case 'Overdue': return '#F44336';
      default: return '#757575';
    }
  };

  return (
    <TableContainer component={Paper} sx={{ mt: 3, borderRadius: 3 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client Name</TableCell>
            <TableCell>Application Date</TableCell>
            <TableCell>Work Permit Status</TableCell>
            <TableCell>Payment Status</TableCell>
            <TableCell>Next Due Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clients.map((client, index) => (
            <TableRow 
              key={index} 
              sx={{ 
                backgroundColor: index % 2 === 0 ? '#FAFBFC' : 'white',
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
              onClick={() => navigate(`/clients/${index}`)}
            >
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.applicationDate}</TableCell>
              <TableCell>
                {client.workPermitDays <= 150 ? (
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={(client.workPermitDays / 150) * 100}
                      sx={{ width: 100 }}
                    />
                    <span>{client.workPermitDays} days</span>
                  </Box>
                ) : (
                  <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                )}
              </TableCell>
              <TableCell>
                <Chip 
                  label={client.paymentStatus}
                  sx={{ 
                    backgroundColor: `${getStatusColor(client.paymentStatus)}15`,
                    color: getStatusColor(client.paymentStatus),
                  }}
                />
              </TableCell>
              <TableCell>{client.nextDueDate}</TableCell>
              <TableCell>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ClientTable; 