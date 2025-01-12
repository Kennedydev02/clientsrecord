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
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import LanguageIcon from '@mui/icons-material/Language';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import useScrollToTop from '../../hooks/useScrollToTop';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

function EducationSupport() {
  useScrollToTop();

  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    { icon: <SchoolIcon />, label: "School Enrollment", color: '#4CAF50' },
    { icon: <MenuBookIcon />, label: "Academic Support", color: '#2196F3' },
    { icon: <LanguageIcon />, label: "Language Programs", color: '#9C27B0' },
    { icon: <EmojiEventsIcon />, label: "Skills Development", color: '#FF9800' }
  ];

  const educationData = [
    {
      title: "School Enrollment Assistance",
      duration: "2-4 Weeks",
      description: "Comprehensive support for school enrollment process, including documentation, registration, and orientation.",
      keyFeatures: [
        "School Selection Guidance",
        "Application Assistance",
        "Document Preparation",
        "Enrollment Process Support"
      ],
      services: [
        {
          title: "School Selection",
          details: "Help choosing appropriate schools"
        },
        {
          title: "Application Support",
          details: "Assistance with enrollment forms"
        },
        {
          title: "Documentation",
          details: "Required document preparation"
        },
        {
          title: "Orientation",
          details: "School system familiarization"
        }
      ],
      requirements: [
        "Educational Records",
        "Identification Documents",
        "Proof of Address",
        "Health Records"
      ]
    },
    {
      title: "Academic Support Services",
      duration: "Ongoing Support",
      description: "Comprehensive academic assistance including tutoring, homework help, and study skills development.",
      keyFeatures: [
        "One-on-One Tutoring",
        "Homework Assistance",
        "Study Skills Training",
        "Academic Planning"
      ],
      services: [
        {
          title: "Tutoring",
          details: "Subject-specific academic support"
        },
        {
          title: "Homework Help",
          details: "Daily homework assistance"
        },
        {
          title: "Study Skills",
          details: "Learning strategy development"
        },
        {
          title: "Academic Planning",
          details: "Educational goal setting"
        }
      ],
      requirements: [
        "Current Academic Records",
        "Subject Requirements",
        "Schedule Availability",
        "Learning Goals"
      ]
    },
    {
      title: "Language Learning Programs",
      duration: "3-6 Months",
      description: "Intensive language programs focusing on English proficiency and communication skills.",
      keyFeatures: [
        "ESL Classes",
        "Conversation Practice",
        "Writing Workshops",
        "Cultural Integration"
      ],
      services: [
        {
          title: "ESL Training",
          details: "English language instruction"
        },
        {
          title: "Conversation Groups",
          details: "Speaking practice sessions"
        },
        {
          title: "Writing Support",
          details: "Written communication skills"
        },
        {
          title: "Cultural Learning",
          details: "Cultural context education"
        }
      ],
      requirements: [
        "Language Assessment",
        "Regular Attendance",
        "Practice Commitment",
        "Learning Materials"
      ]
    },
    {
      title: "Skills Development Programs",
      duration: "Variable",
      description: "Practical skills training and professional development opportunities for career advancement.",
      keyFeatures: [
        "Technical Skills",
        "Soft Skills Training",
        "Professional Development",
        "Certificate Programs"
      ],
      services: [
        {
          title: "Technical Training",
          details: "Practical skills development"
        },
        {
          title: "Soft Skills",
          details: "Communication and leadership"
        },
        {
          title: "Professional Growth",
          details: "Career development support"
        },
        {
          title: "Certification",
          details: "Professional certifications"
        }
      ],
      requirements: [
        "Skill Assessment",
        "Program Prerequisites",
        "Time Commitment",
        "Learning Equipment"
      ]
    }
  ];

  return (
    <Box sx={{ 
      width: '100%',
      minHeight: '100vh',
      paddingTop: '80px',
      backgroundColor: '#f8f9fa',
      position: 'relative',
      zIndex: 0 
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h3" 
            component="h1" 
            align="center" 
            sx={{ 
              color: '#1a237e',
              fontWeight: 600,
              marginBottom: 4
            }}
          >
            Education Support Services
          </Typography>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h5" sx={{ color: '#1E4D40', fontWeight: 600 }}>
            Education Services
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<SchoolIcon />}
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
            Get Support
          </Button>
        </Box>

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
                  '&.Mui-selected': {
                    color: 'white'
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
                    fontSize: { xs: '0.75rem', md: '0.875rem' }
                  }}
                />
              ))}
            </Tabs>
          </Box>

          {educationData.map((data, index) => (
            <TabPanel key={index} value={tabValue} index={index}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Typography variant="h4" gutterBottom>
                    {data.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                    <Chip
                      icon={<AccessTimeIcon />}
                      label={data.duration}
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      icon={<SchoolIcon />}
                      label="Education"
                      color="secondary"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="body1" paragraph>
                    {data.description}
                  </Typography>

                  <Typography variant="h6" gutterBottom>
                    Key Features
                  </Typography>
                  <List>
                    {data.keyFeatures.map((feature, idx) => (
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
                    {data.requirements.map((req, idx) => (
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
                        {data.services.map((service, idx) => (
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

export default EducationSupport; 