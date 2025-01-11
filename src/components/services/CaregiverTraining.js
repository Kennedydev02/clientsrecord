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
  Button,
  Tooltip,
  Zoom,
  Badge
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SchoolIcon from '@mui/icons-material/School';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import PsychologyIcon from '@mui/icons-material/Psychology';
import ElderlyIcon from '@mui/icons-material/Elderly';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import TimelineIcon from '@mui/icons-material/Timeline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import TimerIcon from '@mui/icons-material/Timer';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import { serviceStyles } from '../../styles/serviceStyles';

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={serviceStyles.tabPanel}>{children}</Box>}
    </div>
  );
};

const LearningPathStep = ({ step, index, color }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    <Card variant="outlined" sx={{ mb: 2, borderColor: color }}>
      <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box
          sx={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            bgcolor: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          {index + 1}
        </Box>
        <Typography variant="body1">{step}</Typography>
      </CardContent>
    </Card>
  </motion.div>
);

function CaregiverTraining() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Define the tabs configuration
  const tabs = [
    { icon: <SchoolIcon />, label: "Orientation", color: '#4CAF50' },
    { icon: <MedicalServicesIcon />, label: "Core Basic", color: '#2196F3' },
    { icon: <PsychologyIcon />, label: "Mental Health", color: '#9C27B0' },
    { icon: <ElderlyIcon />, label: "Dementia Care", color: '#FF9800' },
    { icon: <LocalHospitalIcon />, label: "Nursing Skills", color: '#F44336' }
  ];

  const courseData = [
    {
      title: "Orientation & Safety",
      duration: "5 Hours",
      description: "Essential foundation for aspiring caregivers, focusing on workplace safety and professional conduct.",
      keyFeatures: [
        "Industry Best Practices",
        "OSHA Guidelines",
        "Emergency Protocols",
        "Professional Ethics"
      ],
      topics: [
        {
          title: "Introduction to Caregiving",
          details: "Understanding the role, responsibilities, and importance of professional caregiving"
        },
        {
          title: "Workplace Safety",
          details: "OSHA guidelines, hazard identification, and prevention strategies"
        },
        {
          title: "Emergency Response",
          details: "Basic first aid, emergency protocols, and crisis management"
        },
        {
          title: "Professional Ethics",
          details: "Code of conduct, confidentiality, and professional boundaries"
        }
      ],
      learningPath: [
        "Safety Fundamentals",
        "Professional Standards",
        "Basic First Aid",
        "Communication Essentials"
      ],
      certification: "Certificate of Completion - Orientation & Safety"
    },
    {
      title: "Core Basic Training",
      duration: "54 Hours",
      description: "Comprehensive homecare aid core competencies training focusing on essential caregiving skills.",
      keyFeatures: [
        "Personal Care Skills",
        "ADL Support",
        "Vital Signs Monitoring",
        "Documentation"
      ],
      topics: [
        {
          title: "Personal Care Skills",
          details: "Basic caregiving techniques and personal hygiene"
        },
        {
          title: "ADL Support",
          details: "Assistance with Activities of Daily Living (ADLs)"
        },
        {
          title: "Vital Signs Monitoring",
          details: "Monitoring and recording vital signs"
        },
        {
          title: "Documentation",
          details: "Keeping accurate and detailed records"
        }
      ],
      learningPath: [
        "Personal Care Skills",
        "ADL Support",
        "Vital Signs Monitoring",
        "Documentation"
      ],
      certification: "Certificate of Completion - Core Basic Training"
    },
    {
      title: "Mental Health Training",
      duration: "8 Hours",
      description: "Specialized training focused on understanding and supporting individuals with mental health conditions.",
      keyFeatures: [
        "Mental Health Awareness",
        "Crisis Intervention",
        "Behavioral Support",
        "Communication Techniques"
      ],
      topics: [
        {
          title: "Mental Health Awareness",
          details: "Understanding mental health conditions and their impact"
        },
        {
          title: "Crisis Intervention",
          details: "Identifying and responding to mental health crises"
        },
        {
          title: "Behavioral Support",
          details: "Supporting individuals with mental health conditions"
        },
        {
          title: "Communication Techniques",
          details: "Effective communication strategies for mental health support"
        }
      ],
      learningPath: [
        "Mental Health Awareness",
        "Crisis Intervention",
        "Behavioral Support",
        "Communication Techniques"
      ],
      certification: "Certificate of Completion - Mental Health Training"
    },
    {
      title: "Dementia Care",
      duration: "8 Hours",
      description: "Comprehensive training on understanding and caring for individuals with dementia.",
      keyFeatures: [
        "Dementia Understanding",
        "Behavior Management",
        "Safety Measures",
        "Family Support"
      ],
      topics: [
        {
          title: "Dementia Understanding",
          details: "Understanding dementia and its impact"
        },
        {
          title: "Behavior Management",
          details: "Managing behaviors associated with dementia"
        },
        {
          title: "Safety Measures",
          details: "Safety precautions and strategies for individuals with dementia"
        },
        {
          title: "Family Support",
          details: "Supporting families of individuals with dementia"
        }
      ],
      learningPath: [
        "Dementia Understanding",
        "Behavior Management",
        "Safety Measures",
        "Family Support"
      ],
      certification: "Certificate of Completion - Dementia Care"
    },
    {
      title: "Nursing Skills",
      duration: "16 Hours",
      description: "Advanced training in delegated nursing tasks and specialized care procedures.",
      keyFeatures: [
        "Nurse Delegation",
        "Medication Management",
        "Wound Care",
        "Health Assessment"
      ],
      topics: [
        {
          title: "Nurse Delegation",
          details: "Delegating nursing tasks to support staff"
        },
        {
          title: "Medication Management",
          details: "Managing medications and their administration"
        },
        {
          title: "Wound Care",
          details: "Wound care and management"
        },
        {
          title: "Health Assessment",
          details: "Health assessment techniques and procedures"
        }
      ],
      learningPath: [
        "Nurse Delegation",
        "Medication Management",
        "Wound Care",
        "Health Assessment"
      ],
      certification: "Certificate of Completion - Nursing Skills"
    }
  ];

  const handleEnroll = (courseTitle) => {
    // You can add enrollment logic here
    console.log(`Enrolling in ${courseTitle}`);
  };

  return (
    <Box sx={serviceStyles.pageContainer}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h3" component="h1" align="center" gutterBottom>
            Caregiver Training Program
          </Typography>
        </motion.div>

        <Paper elevation={3} sx={serviceStyles.contentCard}>
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
                  color: theme => theme.palette.primary.light,
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
                '&:hover': {
                  color: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.2s',
                },
                '&.Mui-selected .MuiSvgIcon-root': {
                  transform: 'scale(1.2)',
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

          {courseData.map((course, index) => (
            <TabPanel key={index} value={tabValue} index={index}>
              <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start',
                    mb: 3 
                  }}>
                    <Typography variant="h4" gutterBottom>
                      {course.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={() => handleEnroll(course.title)}
                      sx={{
                        bgcolor: tabs[index].color,
                        '&:hover': {
                          bgcolor: `${tabs[index].color}dd`
                        },
                        boxShadow: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: 4
                        }
                      }}
                    >
                      Enroll Now
                    </Button>
                  </Box>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    gap: 2, 
                    mb: 3,
                    flexWrap: 'wrap' 
                  }}>
                    <Chip
                      icon={<TimerIcon />}
                      label={course.duration}
                      color="primary"
                      variant="outlined"
                      sx={{ borderColor: tabs[index].color, color: tabs[index].color }}
                    />
                    <Chip
                      icon={<EmojiObjectsIcon />}
                      label="Certificate Provided"
                      color="secondary"
                      variant="outlined"
                    />
                  </Box>

                  <Card sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.8)' }}>
                    <CardContent>
                      <Typography variant="body1" paragraph>
                        {course.description}
                      </Typography>
                    </CardContent>
                  </Card>

                  <Typography variant="h6" gutterBottom color="primary" sx={{ color: tabs[index].color }}>
                    Key Features
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {course.keyFeatures.map((feature, idx) => (
                      <Grid item xs={12} sm={6} key={idx}>
                        <Card 
                          elevation={0} 
                          sx={{ 
                            bgcolor: 'rgba(255,255,255,0.8)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              bgcolor: 'white',
                              boxShadow: 2
                            }
                          }}
                        >
                          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <CheckCircleOutlineIcon sx={{ color: tabs[index].color }} />
                            <Typography>{feature}</Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography variant="h6" gutterBottom color="primary" sx={{ color: tabs[index].color }}>
                    Learning Path
                  </Typography>
                  {course.learningPath.map((step, idx) => (
                    <LearningPathStep 
                      key={idx} 
                      step={step} 
                      index={idx}
                      color={tabs[index].color}
                    />
                  ))}
                </Grid>

                <Grid item xs={12} md={4}>
                  <Card sx={{ 
                    position: 'sticky', 
                    top: 24,
                    bgcolor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(10px)'
                  }}>
                    <CardContent>
                      <Typography variant="h6" gutterBottom sx={{ color: tabs[index].color }}>
                        Course Topics
                      </Typography>
                      <List>
                        {course.topics.map((topic, idx) => (
                          <ListItem key={idx}>
                            <ListItemIcon>
                              <CheckCircleOutlineIcon sx={{ color: tabs[index].color }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={topic.title}
                              secondary={topic.details}
                            />
                          </ListItem>
                        ))}
                      </List>

                      <Box sx={{ mt: 3 }}>
                        <Button
                          variant="contained"
                          fullWidth
                          size="large"
                          onClick={() => handleEnroll(course.title)}
                          sx={{
                            bgcolor: tabs[index].color,
                            '&:hover': {
                              bgcolor: `${tabs[index].color}dd`
                            },
                            boxShadow: 2,
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-2px)',
                              boxShadow: 4
                            }
                          }}
                        >
                          Enroll Now - {course.duration}
                        </Button>
                      </Box>
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

export default CaregiverTraining; 