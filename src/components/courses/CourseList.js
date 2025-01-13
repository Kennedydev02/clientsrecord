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
  LinearProgress,
  Chip,
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function CourseList() {
  const navigate = useNavigate();

  // Mock data - replace with actual data later
  const courses = [
    {
      id: 1,
      studentName: 'John Doe',
      courseName: 'Caregiver Training',
      startDate: '2024-03-01',
      endDate: '2024-06-01',
      progress: 75,
      status: 'In Progress',
      completedModules: 6,
      totalModules: 8,
    },
    {
      id: 2,
      studentName: 'Jane Smith',
      courseName: 'Healthcare Assistant',
      startDate: '2024-02-15',
      endDate: '2024-05-15',
      progress: 40,
      status: 'In Progress',
      completedModules: 4,
      totalModules: 10,
    },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'primary';
      case 'not started':
        return 'default';
      default:
        return 'default';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Course Management</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/dashboard/courses/new')}
        >
          Enroll Student in Course
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Student Name</TableCell>
              <TableCell>Course Name</TableCell>
              <TableCell>Start Date</TableCell>
              <TableCell>End Date</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses.map((course) => (
              <TableRow key={course.id}>
                <TableCell>{course.studentName}</TableCell>
                <TableCell>{course.courseName}</TableCell>
                <TableCell>{course.startDate}</TableCell>
                <TableCell>{course.endDate}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ flex: 1 }}>
                      <LinearProgress
                        variant="determinate"
                        value={course.progress}
                        sx={{ height: 8, borderRadius: 4 }}
                      />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {course.progress}%
                    </Typography>
                  </Box>
                  <Typography variant="caption" color="text.secondary">
                    {course.completedModules}/{course.totalModules} modules
                  </Typography>
                </TableCell>
                <TableCell>
                  <Chip
                    label={course.status}
                    color={getStatusColor(course.status)}
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() => navigate(`/dashboard/courses/${course.id}`)}
                    title="View Details"
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => navigate(`/dashboard/courses/edit/${course.id}`)}
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

export default CourseList; 