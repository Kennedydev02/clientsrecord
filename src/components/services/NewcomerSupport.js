import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Chip,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import TranslateIcon from '@mui/icons-material/Translate';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { serviceStyles } from '../../styles/serviceStyles';
import useScrollToTop from '../../hooks/useScrollToTop';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={serviceStyles.tabPanel}>{children}</Box>}
    </div>
  );
};

function NewcomerSupport() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    { icon: <FlightLandIcon />, label: "Airport Services", color: '#4CAF50' },
    { icon: <HomeIcon />, label: "Accommodation", color: '#2196F3' },
    { icon: <PeopleIcon />, label: "Community Support", color: '#9C27B0' },
    { icon: <TranslateIcon />, label: "Cultural Integration", color: '#FF9800' }
  ];

  const newcomerData = [
    {
      title: "Airport Pickup Services",
      duration: "24/7 Available",
      description: "Comprehensive airport reception and transportation services for newcomers arriving in the area.",
      keyFeatures: [
        "24/7 Airport Reception",
        "Luggage Assistance",
        "Safe Transportation",
        "Welcome Package"
      ],
      services: [
        {
          title: "Airport Reception",
          details: "Professional meet and greet at arrivals"
        },
        {
          title: "Transportation",
          details: "Direct transport to accommodation"
        },
        {
          title: "Luggage Support",
          details: "Assistance with baggage handling"
        },
        {
          title: "Welcome Kit",
          details: "Essential items and local information"
        }
      ],
      requirements: [
        "Flight Details",
        "Arrival Time",
        "Number of Passengers",
        "Contact Information"
      ]
    },
    {
      title: "Temporary Accommodation",
      duration: "1-3 Months",
      description: "Safe and comfortable temporary housing solutions with essential amenities for newcomers.",
      keyFeatures: [
        "Furnished Rooms/Apartments",
        "Basic Utilities Included",
        "Safe Neighborhoods",
        "Close to Transit"
      ],
      services: [
        {
          title: "Housing Placement",
          details: "Suitable accommodation matching needs"
        },
        {
          title: "Essential Setup",
          details: "Basic furniture and utilities"
        },
        {
          title: "Area Orientation",
          details: "Local amenities and services guide"
        },
        {
          title: "Support Services",
          details: "24/7 emergency assistance"
        }
      ],
      requirements: [
        "Duration of Stay",
        "Number of Occupants",
        "Budget Range",
        "Special Requirements"
      ]
    },
    {
      title: "Community Integration",
      duration: "Ongoing Support",
      description: "Comprehensive community integration services to help newcomers settle and connect.",
      keyFeatures: [
        "Local Community Events",
        "Social Connections",
        "Support Groups",
        "Networking Opportunities"
      ],
      services: [
        {
          title: "Community Events",
          details: "Regular social gatherings and activities"
        },
        {
          title: "Support Groups",
          details: "Peer connection and sharing"
        },
        {
          title: "Local Resources",
          details: "Access to community services"
        },
        {
          title: "Cultural Activities",
          details: "Integration programs and events"
        }
      ],
      requirements: [
        "Registration Form",
        "Basic Information",
        "Areas of Interest",
        "Availability"
      ]
    },
    {
      title: "Cultural Orientation",
      duration: "4-6 Weeks",
      description: "Cultural adaptation and orientation programs to help newcomers understand local customs and practices.",
      keyFeatures: [
        "Cultural Workshops",
        "Language Support",
        "Local Customs",
        "Practical Tips"
      ],
      services: [
        {
          title: "Cultural Training",
          details: "Understanding local customs and norms"
        },
        {
          title: "Language Support",
          details: "Basic language assistance"
        },
        {
          title: "Local Systems",
          details: "Navigation of local services"
        },
        {
          title: "Practical Skills",
          details: "Daily life management tips"
        }
      ],
      requirements: [
        "Language Level",
        "Cultural Background",
        "Learning Goals",
        "Schedule Preference"
      ]
    }
  ];

  useScrollToTop();

  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        paddingTop: '120px',
        backgroundColor: '#f8f9fa'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '40px', marginBottom: '40px' }}
        >
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Newcomer Support Services
          </Typography>
        </motion.div>

        <Paper elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={tabValue}
              onChange={(e, newValue) => setTabValue(newValue)}
              variant={isMobile ? "scrollable" : "fullWidth"}
              scrollButtons={isMobile ? "auto" : false}
              sx={{
                bgcolor: '#1a237e',
                '& .MuiTab-root': {
                  color: 'rgba(255, 255, 255, 0.7)',
                  transition: 'all 0.3s ease-in-out',
                  '&.Mui-selected': {
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  },
                  '&:hover': {
                    color: 'white',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                  }
                }
              }}
            >
              {tabs.map((tab, index) => (
                <Tab
                  key={index}
                  icon={tab.icon}
                  label={tab.label}
                  sx={{
                    minHeight: 72,
                    fontSize: { xs: '0.75rem', md: '0.875rem' },
                    '&.Mui-selected': {
                      color: tab.color,
                    }
                  }}
                />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ p: 4 }}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Box sx={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mb: 2
                }}>
                  <Typography variant="h5" sx={{ color: '#1E4D40', fontWeight: 600 }}>
                    Airport Pickup Services
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<CalendarTodayIcon />}
                    href="/contact"
                    sx={{
                      backgroundColor: '#2E8B57',
                      color: 'white',
                      py: 1.5,
                      px: 3,
                      fontSize: '1rem',
                      fontWeight: 600,
                      borderRadius: '30px',
                      textTransform: 'none',
                      boxShadow: '0 4px 12px rgba(46, 139, 87, 0.2)',
                      '&:hover': {
                        backgroundColor: '#1E4D40',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 16px rgba(46, 139, 87, 0.3)',
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Book Appointment
                  </Button>
                </Box>
                <Typography variant="body1" color="text.secondary">
                  We provide reliable airport pickup services to ensure a smooth arrival...
                </Typography>
              </Grid>

              {newcomerData.map((newcomer, index) => (
                <TabPanel key={index} value={tabValue} index={index}>
                  <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                      <Typography variant="h4" gutterBottom>
                        {newcomer.title}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <Chip
                          icon={<AccessTimeIcon />}
                          label={newcomer.duration}
                          color="primary"
                          variant="outlined"
                        />
                        <Chip
                          icon={<FlightLandIcon />}
                          label="Newcomer Support"
                          color="secondary"
                          variant="outlined"
                        />
                      </Box>

                      <Typography variant="body1" paragraph>
                        {newcomer.description}
                      </Typography>

                      <Typography variant="h6" gutterBottom>
                        Key Features
                      </Typography>
                      <List>
                        {newcomer.keyFeatures.map((feature, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>

                      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
                        Requirements
                      </Typography>
                      <List>
                        {newcomer.requirements.map((req, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={req} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>

                    <Grid item xs={12} md={4}>
                      <Card>
                        <CardContent>
                          <Typography variant="h6" gutterBottom>
                            Available Services
                          </Typography>
                          <List>
                            {newcomer.services.map((service, idx) => (
                              <ListItem key={idx}>
                                <ListItemIcon>
                                  <CheckCircleOutlineIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                  primary={service.title}
                                  secondary={service.details}
                                />
                              </ListItem>
                            ))}
                          </List>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </TabPanel>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default NewcomerSupport; 