import React from 'react';
import { Container, Typography, Grid, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PeopleIcon from '@mui/icons-material/People';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import useScrollToTop from '../hooks/useScrollToTop';

const HomePage = () => {
  useScrollToTop();
  const navigate = useNavigate();
  
  const services = [
    {
      title: 'Caregiver Training',
      description: 'Comprehensive training programs for caregivers...',
      icon: <LocalHospitalIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
      path: '/services/caregiver-training'
    },
    {
      title: 'Newcomer Support',
      description: 'Assistance for newcomers transitioning to the United States...',
      icon: <PeopleIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
      path: '/services/newcomer-support'
    },
    {
      title: 'Housing Assistance',
      description: 'Help finding suitable housing and accommodation...',
      icon: <HomeIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
      path: '/services/housing-assistance'
    },
    {
      title: 'Documentation Support',
      description: 'Assistance with document preparation and processing...',
      icon: <DescriptionIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
      path: '/services/documentation-support'
    },
    {
      title: 'Employment Services',
      description: 'Job search and employment preparation support...',
      icon: <WorkIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
      path: '/services/employment-services'
    },
    {
      title: 'Education Support',
      description: 'Educational guidance and resources...',
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
      path: '/services/education-support'
    }
  ];

  return (
    <Box 
      component="main"
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        paddingTop: '80px',
        backgroundColor: '#f8f9fa',
        position: 'relative',
        zIndex: 0
      }}
    >
      <Box 
        sx={{ 
          width: '100%',
          backgroundColor: '#1a237e',
          color: 'white',
          padding: { xs: '40px 0', md: '80px 0' },
          marginBottom: { xs: 4, md: 8 }
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            sx={{ 
              fontSize: { xs: '2rem', md: '3.5rem' },
              fontWeight: 700,
              textAlign: 'center',
              marginBottom: 2
            }}
          >
            Welcome to Huduma Center
          </Typography>
          <Typography 
            variant="h2" 
            sx={{ 
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              textAlign: 'center',
              fontWeight: 400,
              opacity: 0.9
            }}
          >
            Supporting Your Journey Every Step of the Way
          </Typography>
        </Container>
      </Box>

      <Container 
        sx={{ 
          py: 8,
          mb: 10
        }}
      >
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            color: '#1a237e',
            mb: 6,
            fontWeight: 600,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -16,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 80,
              height: 4,
              backgroundColor: '#000051',
              borderRadius: 2
            }
          }}
        >
          Our Services
        </Typography>
        
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                  cursor: 'pointer',
                  borderRadius: 2
                }}
                onClick={() => navigate(service.path)}
              >
                <Box sx={{ mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  sx={{
                    mb: 2,
                    color: '#1E4D40',
                    fontWeight: 600
                  }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, flex: 1 }}
                >
                  {service.description}
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    mt: 'auto',
                    backgroundColor: '#E8F5E9',
                    color: '#2E8B57',
                    '&:hover': {
                      backgroundColor: '#C8E6C9',
                      transform: 'translateX(8px)'
                    },
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    boxShadow: 'none'
                  }}
                >
                  Learn More
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage; 