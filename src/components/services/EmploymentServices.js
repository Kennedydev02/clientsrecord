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
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupIcon from '@mui/icons-material/Group';
import SchoolIcon from '@mui/icons-material/School';
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

function EmploymentServices() {
  useScrollToTop();

  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const tabs = [
    { icon: <WorkIcon />, label: "Job Search", color: '#4CAF50' },
    { icon: <DescriptionIcon />, label: "Resume Services", color: '#2196F3' },
    { icon: <GroupIcon />, label: "Interview Prep", color: '#9C27B0' },
    { icon: <SchoolIcon />, label: "Career Counseling", color: '#FF9800' }
  ];

  const employmentData = [
    {
      title: "Job Search Assistance",
      duration: "Ongoing Support",
      description: "Comprehensive job search support including job matching, application assistance, and employer connections.",
      keyFeatures: [
        "Personalized Job Matching",
        "Application Support",
        "Employer Networks",
        "Job Market Insights"
      ],
      services: [
        {
          title: "Job Matching",
          details: "Customized job opportunities based on skills"
        },
        {
          title: "Application Support",
          details: "Assistance with job applications"
        },
        {
          title: "Network Access",
          details: "Connection to employer networks"
        },
        {
          title: "Market Research",
          details: "Current job market information"
        }
      ],
      requirements: [
        "Updated Resume",
        "Work Authorization",
        "Skills Assessment",
        "Career Goals"
      ]
    },
    {
      title: "Resume Writing Services",
      duration: "1-2 Weeks",
      description: "Professional resume development and optimization services to highlight your skills and experience.",
      keyFeatures: [
        "Professional Writing",
        "ATS Optimization",
        "Cover Letters",
        "LinkedIn Profiles"
      ],
      services: [
        {
          title: "Resume Writing",
          details: "Professional resume development"
        },
        {
          title: "ATS Optimization",
          details: "Keyword optimization for systems"
        },
        {
          title: "Cover Letters",
          details: "Customized cover letter writing"
        },
        {
          title: "Digital Presence",
          details: "LinkedIn profile optimization"
        }
      ],
      requirements: [
        "Work History",
        "Education Details",
        "Skills List",
        "Target Job Information"
      ]
    },
    {
      title: "Interview Preparation",
      duration: "1-3 Sessions",
      description: "Comprehensive interview preparation including mock interviews, feedback, and strategy development.",
      keyFeatures: [
        "Mock Interviews",
        "Feedback Sessions",
        "Question Preparation",
        "Body Language Training"
      ],
      services: [
        {
          title: "Mock Interviews",
          details: "Practice interview sessions"
        },
        {
          title: "Feedback",
          details: "Detailed performance feedback"
        },
        {
          title: "Q&A Prep",
          details: "Common question preparation"
        },
        {
          title: "Presentation Skills",
          details: "Communication coaching"
        }
      ],
      requirements: [
        "Job Description",
        "Resume",
        "Industry Research",
        "Professional Attire"
      ]
    },
    {
      title: "Career Counseling",
      duration: "Ongoing Support",
      description: "Professional career guidance and development planning for long-term success.",
      keyFeatures: [
        "Career Assessment",
        "Goal Setting",
        "Development Planning",
        "Skills Analysis"
      ],
      services: [
        {
          title: "Career Assessment",
          details: "Skills and interests evaluation"
        },
        {
          title: "Goal Planning",
          details: "Career goal development"
        },
        {
          title: "Action Planning",
          details: "Step-by-step career planning"
        },
        {
          title: "Progress Review",
          details: "Regular progress assessment"
        }
      ],
      requirements: [
        "Career History",
        "Goals Discussion",
        "Skills Assessment",
        "Commitment to Growth"
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
            Employment Services
          </Typography>
        </motion.div>

        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 2
        }}>
          <Typography variant="h5" sx={{ color: '#1E4D40', fontWeight: 600 }}>
            Job Search Services
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<WorkIcon />}
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
            Find Jobs
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

          {employmentData.map((data, index) => (
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
                      icon={<WorkIcon />}
                      label="Employment"
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

export default EmploymentServices; 