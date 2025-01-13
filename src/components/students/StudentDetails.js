import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  Chip,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material';
import {
  Person as PersonIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  School as SchoolIcon,
  Event as EventIcon,
  AccountBalance as AccountBalanceIcon,
  Assignment as AssignmentIcon,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';

function StudentDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual data fetch
  const student = {
    id: id,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '(206) 555-0123',
    course: 'Caregiver Training',
    enrollmentDate: '2024-03-01',
    expectedCompletionDate: '2024-06-01',
    status: 'Active',
    balance: 1500,
    progress: 75,
    address: '123 Main St, Seattle, WA 98101',
    emergencyContact: {
      name: 'Jane Doe',
      relation: 'Spouse',
      phone: '(206) 555-0124',
    },
    recentPayments: [
      { date: '2024-03-01', amount: 1000, type: 'Tuition' },
      { date: '2024-02-15', amount: 500, type: 'Registration' },
    ],
    courseModules: [
      { name: 'Introduction to Caregiving', completed: true },
      { name: 'Safety Procedures', completed: true },
      { name: 'Patient Care Basics', completed: false },
      { name: 'Medical Terminology', completed: false },
    ],
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Student Details</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={() => navigate('/dashboard/students')}
          >
            Back to List
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate(`/dashboard/students/edit/${id}`)}
          >
            Edit Student
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        {/* Personal Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Personal Information
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary="Name" secondary={student.name} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText primary="Email" secondary={student.email} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PhoneIcon />
                </ListItemIcon>
                <ListItemText primary="Phone" secondary={student.phone} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Emergency Contact" 
                  secondary={`${student.emergencyContact.name} (${student.emergencyContact.relation}) - ${student.emergencyContact.phone}`} 
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Course Information */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Course Information
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <SchoolIcon />
                </ListItemIcon>
                <ListItemText primary="Course" secondary={student.course} />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Enrollment Date" 
                  secondary={student.enrollmentDate} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Expected Completion" 
                  secondary={student.expectedCompletionDate} 
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Balance" 
                  secondary={
                    <Chip
                      label={`$${student.balance}`}
                      color={student.balance === 0 ? 'success' : 'error'}
                      size="small"
                    />
                  }
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>

        {/* Progress */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Course Progress
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box sx={{ flexGrow: 1, mr: 1 }}>
                  <Box
                    sx={{
                      height: 10,
                      bgcolor: 'grey.300',
                      borderRadius: 5,
                      position: 'relative',
                    }}
                  >
                    <Box
                      sx={{
                        height: '100%',
                        bgcolor: 'primary.main',
                        borderRadius: 5,
                        width: `${student.progress}%`,
                      }}
                    />
                  </Box>
                </Box>
                <Typography variant="body2">{student.progress}%</Typography>
              </Box>
            </Box>
            <List>
              {student.courseModules.map((module, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <AssignmentIcon color={module.completed ? 'success' : 'action'} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={module.name}
                    secondary={module.completed ? 'Completed' : 'In Progress'}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Recent Payments */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Payments
            </Typography>
            <List>
              {student.recentPayments.map((payment, index) => (
                <ListItem key={index}>
                  <ListItemIcon>
                    <AccountBalanceIcon />
                  </ListItemIcon>
                  <ListItemText 
                    primary={`$${payment.amount} - ${payment.type}`}
                    secondary={payment.date}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentDetails; 