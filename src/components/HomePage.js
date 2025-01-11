import React from 'react';
import { 
  Box, 
  Button, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActions,
  Stack 
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

function HomePage() {
  const navigate = useNavigate();

  const allServices = [
    {
      title: 'Caregiver Training',
      description: [
        '75hr Basic Training/HCA',
        'Nurse Delegation',
        'CPR/AED & First Aid',
        'Continuous Education (CEs)',
        'Basic Life Support (BLS)'
      ],
      icon: <LocalHospitalIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      link: '/caregiver-training'
    },
    {
      title: 'Newcomer Support',
      description: [
        'Airport pick-up service',
        'Full board accommodation',
        'Community integration support',
        'Cultural orientation'
      ],
      icon: <FlightLandIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      link: '/newcomer-support'
    },
    {
      title: 'Housing Assistance',
      description: [
        'Temporary housing options',
        'Rental assistance',
        'Housing search support',
        'Accommodation arrangements'
      ],
      icon: <HomeIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      link: '/housing'
    },
    {
      title: 'Documentation Support',
      description: [
        'Work permit assistance',
        'License applications',
        'Document processing',
        'Application guidance'
      ],
      icon: <ArticleIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      link: '/documentation'
    },
    {
      title: 'Employment Services',
      description: [
        'Job search assistance',
        'Resume writing',
        'Interview preparation',
        'Career counseling'
      ],
      icon: <WorkIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      link: '/employment'
    },
    {
      title: 'Education Support',
      description: [
        'School enrollment assistance',
        'Educational guidance',
        'Training programs',
        'Skills development'
      ],
      icon: <SchoolIcon sx={{ fontSize: 40, color: '#4CAF50' }} />,
      link: '/education'
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          bgcolor: '#1a237e',
          color: 'white',
          py: 8,
          mb: 6,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h2" component="h1" gutterBottom>
                HUDUMA CENTER
              </Typography>
              <Typography variant="h5" sx={{ mb: 4, color: '#4CAF50' }}>
                SUPPORTING COMMUNITIES, EMPOWERING LIVES
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
          Our Services
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Comprehensive support services for our community
        </Typography>
        
        <Grid container spacing={4}>
          {allServices.map((service, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                '&:hover': { boxShadow: 6 }
              }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    {service.icon}
                    <Typography variant="h5" component="h3" sx={{ ml: 1 }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Box component="ul" sx={{ pl: 2 }}>
                    {service.description.map((item, idx) => (
                      <Typography component="li" key={idx} sx={{ mb: 1 }}>
                        {item}
                      </Typography>
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant="contained" 
                    fullWidth
                    sx={{ 
                      bgcolor: '#4CAF50', 
                      '&:hover': { bgcolor: '#388E3C' }
                    }}
                    onClick={() => navigate('/services/caregiver-training')}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default HomePage; 