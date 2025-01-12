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
} from '@mui/material';
import {
  Person as PersonIcon,
  Assignment as AssignmentIcon,
  Event as EventIcon,
  ExitToApp as ExitToAppIcon,
  Notifications as NotificationsIcon,
} from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import useScrollToTop from '../hooks/useScrollToTop';

function Dashboard() {
  useScrollToTop();

  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  const menuItems = [
    { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
    { text: 'Assignments', icon: <AssignmentIcon />, path: '/assignments' },
    { text: 'Schedule', icon: <EventIcon />, path: '/schedule' },
    { text: 'Notifications', icon: <NotificationsIcon />, path: '/notifications' },
  ];

  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', pt: 8 }}>
      <Container>
        <Grid container spacing={3}>
          {/* Sidebar */}
          <Grid item xs={12} md={3}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 2,
                backgroundColor: 'white',
                borderRadius: 2
              }}
            >
              <Box sx={{ textAlign: 'center', mb: 3 }}>
                <Avatar 
                  sx={{ 
                    width: 80, 
                    height: 80, 
                    margin: '0 auto',
                    backgroundColor: '#1A237E'
                  }}
                >
                  {currentUser?.email?.charAt(0).toUpperCase()}
                </Avatar>
                <Typography variant="h6" sx={{ mt: 2, color: '#1A237E' }}>
                  {currentUser?.email}
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <List>
                {menuItems.map((item) => (
                  <ListItem 
                    button 
                    key={item.text}
                    onClick={() => navigate(item.path)}
                    sx={{
                      borderRadius: 1,
                      mb: 1,
                      '&:hover': {
                        backgroundColor: '#1A237E10',
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: '#1A237E' }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText 
                      primary={item.text}
                      sx={{ 
                        '& .MuiTypography-root': { 
                          color: '#1A237E'
                        }
                      }}
                    />
                  </ListItem>
                ))}
                <ListItem 
                  button 
                  onClick={handleLogout}
                  sx={{
                    borderRadius: 1,
                    color: '#d32f2f',
                    '&:hover': {
                      backgroundColor: '#d32f2f10',
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: '#d32f2f' }}>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Paper>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={9}>
            <Paper 
              elevation={3}
              sx={{ 
                p: 3,
                backgroundColor: 'white',
                borderRadius: 2
              }}
            >
              <Typography variant="h4" sx={{ color: '#1A237E', mb: 3 }}>
                Welcome to Your Dashboard
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                  <Paper 
                    elevation={2}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      backgroundColor: '#1A237E10',
                      borderRadius: 2
                    }}
                  >
                    <AssignmentIcon sx={{ fontSize: 40, color: '#1A237E' }} />
                    <Typography variant="h6" sx={{ mt: 1, color: '#1A237E' }}>
                      Active Tasks
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#1A237E' }}>
                      5
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Paper 
                    elevation={2}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      backgroundColor: '#1A237E10',
                      borderRadius: 2
                    }}
                  >
                    <EventIcon sx={{ fontSize: 40, color: '#1A237E' }} />
                    <Typography variant="h6" sx={{ mt: 1, color: '#1A237E' }}>
                      Upcoming Events
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#1A237E' }}>
                      3
                    </Typography>
                  </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <Paper 
                    elevation={2}
                    sx={{ 
                      p: 2, 
                      textAlign: 'center',
                      backgroundColor: '#1A237E10',
                      borderRadius: 2
                    }}
                  >
                    <NotificationsIcon sx={{ fontSize: 40, color: '#1A237E' }} />
                    <Typography variant="h6" sx={{ mt: 1, color: '#1A237E' }}>
                      Notifications
                    </Typography>
                    <Typography variant="h4" sx={{ color: '#1A237E' }}>
                      2
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>

              {/* Recent Activity Section */}
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" sx={{ color: '#1A237E', mb: 2 }}>
                  Recent Activity
                </Typography>
                <List>
                  {[1, 2, 3].map((item) => (
                    <ListItem 
                      key={item}
                      sx={{ 
                        backgroundColor: '#f8f9fa',
                        mb: 1,
                        borderRadius: 1
                      }}
                    >
                      <ListItemIcon>
                        <AssignmentIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={`Task ${item} completed`}
                        secondary="2 hours ago"
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Dashboard; 