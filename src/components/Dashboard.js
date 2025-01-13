import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  TextField,
  InputAdornment,
  Badge,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import {
  Person as PersonIcon,
  School as SchoolIcon,
  Payment as PaymentIcon,
  HomeWork as HomeWorkIcon,
  Assessment as AssessmentIcon,
  Search as SearchIcon,
  Notifications as NotificationsIcon,
  Add as AddIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  // Mock data for dashboard stats
  const stats = {
    students: {
      active: 45,
      newEnrollments: 12,
      graduating: 8
    },
    payments: {
      totalCollected: 25000,
      pending: 8500,
      accommodation: 3500
    },
    accommodation: {
      currentOccupants: 15,
      revenue: 7500
    }
  };

  // Mock data for charts
  const revenueData = [
    { month: 'Jan', amount: 15000 },
    { month: 'Feb', amount: 18000 },
    { month: 'Mar', amount: 20000 },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 25 },
    { month: 'Feb', students: 30 },
    { month: 'Mar', students: 35 },
  ];

  const quickActions = [
    {
      title: 'New Student',
      icon: <PersonIcon />,
      path: '/dashboard/students/new',
      color: '#1A237E',
    },
    {
      title: 'Record Payment',
      icon: <PaymentIcon />,
      path: '/dashboard/payments/new',
      color: '#2E7D32',
    },
    {
      title: 'Assign Accommodation',
      icon: <HomeWorkIcon />,
      path: '/dashboard/accommodation/assign',
      color: '#C62828',
    },
    {
      title: 'View Reports',
      icon: <AssessmentIcon />,
      path: '/dashboard/reports',
      color: '#00695C',
    },
  ];

  const handleNavigation = (path) => {
    console.log('Navigating to:', path); // Keep this for debugging
    navigate(path);
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Typography variant="h4" gutterBottom>
              Welcome back, {currentUser?.email}
            </Typography>
            <Typography color="textSecondary">
              Here's what's happening with your school today.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              placeholder="Search..."
              size="small"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Box>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Students
              </Typography>
              <Typography variant="h4">{stats.students.active}</Typography>
              <Typography color="success.main" variant="body2">
                +{stats.students.newEnrollments} new enrollments
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Revenue
              </Typography>
              <Typography variant="h4">${stats.payments.totalCollected}</Typography>
              <Typography color="error.main" variant="body2">
                ${stats.payments.pending} pending
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Accommodation
              </Typography>
              <Typography variant="h4">{stats.accommodation.currentOccupants}</Typography>
              <Typography color="info.main" variant="body2">
                ${stats.accommodation.revenue} revenue
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Graduating Soon
              </Typography>
              <Typography variant="h4">{stats.students.graduating}</Typography>
              <Typography color="success.main" variant="body2">
                In the next 7 days
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {quickActions.map((action) => (
          <Grid item xs={12} sm={6} md={3} key={action.title}>
            <Button
              fullWidth
              variant="contained"
              startIcon={action.icon}
              onClick={() => handleNavigation(action.path)}
              sx={{
                backgroundColor: action.color,
                '&:hover': {
                  backgroundColor: action.color,
                  opacity: 0.9,
                },
                py: 2,
                textTransform: 'none', // Makes the text look better
                fontWeight: 500,
              }}
            >
              {action.title}
            </Button>
          </Grid>
        ))}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Overview
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="amount" fill="#1A237E" name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Enrollment Trends
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#1A237E"
                  name="Students"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 