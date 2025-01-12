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
import HomeIcon from '@mui/icons-material/Home';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SearchIcon from '@mui/icons-material/Search';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { serviceStyles } from '../../styles/serviceStyles';
import useScrollToTop from '../../hooks/useScrollToTop';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={serviceStyles.tabPanel}>{children}</Box>}
    </div>
  );
};

function HousingAssistance() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleEnroll = () => {
    console.log('Enrollment handled');
  };

  const tabs = [
    { icon: <HomeIcon />, label: "Temporary Housing", color: '#4CAF50' },
    { icon: <ApartmentIcon />, label: "Rental Support", color: '#2196F3' },
    { icon: <SearchIcon />, label: "Housing Search", color: '#9C27B0' },
    { icon: <AttachMoneyIcon />, label: "Financial Aid", color: '#FF9800' }
  ];

  const housingData = [
    {
      title: "Temporary Housing Solutions",
      duration: "1-3 Months",
      description: "Immediate housing solutions for individuals and families in transition, providing safe and comfortable temporary accommodations.",
      keyFeatures: [
        "Emergency Shelter Access",
        "Furnished Accommodations",
        "Basic Utilities Included",
        "Safe Neighborhoods"
      ],
      services: [
        {
          title: "Emergency Housing",
          details: "Immediate shelter arrangements"
        },
        {
          title: "Basic Amenities",
          details: "Furnished rooms with utilities"
        },
        {
          title: "Location Support",
          details: "Convenient and safe areas"
        },
        {
          title: "Transition Help",
          details: "Support for permanent housing"
        }
      ],
      requirements: [
        "Valid Identification",
        "Current Situation Details",
        "Length of Stay Needed",
        "Basic Background Check"
      ]
    },
    {
      title: "Rental Assistance Program",
      duration: "Up to 6 Months",
      description: "Comprehensive rental support including application assistance, deposit help, and ongoing rental guidance.",
      keyFeatures: [
        "Rental Application Support",
        "Security Deposit Assistance",
        "Tenant Rights Education",
        "Landlord Mediation"
      ],
      services: [
        {
          title: "Application Help",
          details: "Assistance with rental applications"
        },
        {
          title: "Deposit Support",
          details: "Security deposit assistance programs"
        },
        {
          title: "Tenant Education",
          details: "Rights and responsibilities training"
        },
        {
          title: "Mediation Services",
          details: "Landlord-tenant communication support"
        }
      ],
      requirements: [
        "Income Verification",
        "Rental History",
        "Financial Assessment",
        "Program Eligibility"
      ]
    },
    {
      title: "Housing Search Services",
      duration: "2-4 Weeks",
      description: "Personalized housing search assistance to find suitable permanent housing options within your budget and preferences.",
      keyFeatures: [
        "Property Database Access",
        "Viewing Arrangements",
        "Location Assessment",
        "Negotiation Support"
      ],
      services: [
        {
          title: "Property Search",
          details: "Customized housing options"
        },
        {
          title: "Viewing Schedule",
          details: "Arranged property viewings"
        },
        {
          title: "Area Analysis",
          details: "Neighborhood evaluation"
        },
        {
          title: "Negotiation Help",
          details: "Lease terms assistance"
        }
      ],
      requirements: [
        "Housing Preferences",
        "Budget Range",
        "Desired Location",
        "Move-in Timeline"
      ]
    },
    {
      title: "Housing Financial Aid",
      duration: "Case Dependent",
      description: "Financial assistance programs for housing-related expenses, including rent subsidies and utility payment support.",
      keyFeatures: [
        "Rent Subsidies",
        "Utility Assistance",
        "Emergency Funds",
        "Financial Planning"
      ],
      services: [
        {
          title: "Financial Assessment",
          details: "Needs and eligibility evaluation"
        },
        {
          title: "Subsidy Programs",
          details: "Rent assistance options"
        },
        {
          title: "Utility Support",
          details: "Help with utility payments"
        },
        {
          title: "Budget Planning",
          details: "Long-term financial guidance"
        }
      ],
      requirements: [
        "Financial Documentation",
        "Income Verification",
        "Expense Records",
        "Aid Program Eligibility"
      ]
    }
  ];

  useScrollToTop();

  return (
    <Box sx={{
      ...serviceStyles.pageContainer,
      paddingTop: '40px'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '40px', marginBottom: '40px' }}
        >
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Housing Assistance Services
          </Typography>
        </motion.div>

        <Paper elevation={3} sx={serviceStyles.contentCard}>
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

          {housingData.map((housing, index) => (
            <TabPanel key={index} value={tabValue} index={index}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" gutterBottom>
                    {housing.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={housing.duration}
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<HomeIcon />}
                      label="Housing Support"
                      color="secondary"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="body1" paragraph>
                    {housing.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Key Features
                  </Typography>
                  <List>
                    {housing.keyFeatures.map((feature, idx) => (
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
                    {housing.requirements.map((req, idx) => (
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
                        {housing.services.map((service, idx) => (
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
        </Paper>
      </Container>
    </Box>
  );
}

export default HousingAssistance; 