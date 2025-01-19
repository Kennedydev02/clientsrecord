import React from 'react';
import Axi0s from 'axios';
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
  Tooltip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  AccountBalance as AccountBalanceIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const navigate = useNavigate();

  // Mock data - replace with actual data later
  const students = [
    {
      id: 1,
      name: 'John Doe',
      course: 'Caregiver Training',
      enrollmentDate: '2024-03-01',
      expectedCompletionDate: '2024-06-01',
      status: 'Active',
      balance: 1500,
      progress: 75,
      email: 'john.doe@example.com',
      phone: '(206) 555-0123',
    },
    {
      id: 2,
      name: 'Jane Smith',
      course: 'Healthcare Assistant',
      enrollmentDate: '2024-02-15',
      expectedCompletionDate: '2024-05-15',
      status: 'Active',
      balance: 0,
      progress: 40,
      email: 'jane.smith@example.com',
      phone: '(206) 555-0124',
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'success';
      case 'completed':
        return 'info';
      case 'suspended':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStudents = () => {
    const response =  Axi0s.get('https://api-hudumacenter.fly.dev/students');
    console.log(response.data);
    
    if (response.data.success) {
      return response.data.students;
    }else{
      return [];
    }
  };

  const getBalanceColor = (balance) => {
    if (balance === 0) return 'success';
    if (balance < 1000) return 'warning';
    return 'error';
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Students</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/dashboard/students/new')}
        >
          Add New Student
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Course</TableCell>
              <TableCell>Enrollment Date</TableCell>
              <TableCell>Expected Completion</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Balance</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {getStudents().map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell>{student.course}</TableCell>
                <TableCell>{student.enrollmentDate}</TableCell>
                <TableCell>{student.expectedCompletionDate}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box
                      sx={{
                        width: '100%',
                        backgroundColor: '#e0e0e0',
                        borderRadius: 5,
                        mr: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: `${student.progress}%`,
                          height: 8,
                          backgroundColor: 'primary.main',
                          borderRadius: 5,
                        }}
                      />
                    </Box>
                    <Typography variant="body2">{student.progress}%</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Tooltip title={student.balance === 0 ? 'Fully Paid' : 'Payment Required'}>
                    <Chip
                      icon={<AccountBalanceIcon />}
                      label={`$${student.balance}`}
                      color={getBalanceColor(student.balance)}
                      size="small"
                    />
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Chip
                    label={student.status}
                    color={getStatusColor(student.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <Tooltip title="View Details">
                    <IconButton 
                      onClick={() => navigate(`/dashboard/students/${student.id}`)}
                      size="small"
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton
                      onClick={() => navigate(`/dashboard/students/edit/${student.id}`)}
                      size="small"
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton color="error" size="small">
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default StudentList; 