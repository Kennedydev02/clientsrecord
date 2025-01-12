import React from 'react';
import useScrollToTop from '../../hooks/useScrollToTop';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PeopleIcon from '@mui/icons-material/People';
import HistoryIcon from '@mui/icons-material/History';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const AboutUs = () => {
  useScrollToTop();

  const teamMembers = [
    {
      name: "Kennedy Gichobi",
      role: "Founder & CEO",
      image: "/images/team/kennedy-gichobi.jpg", // Add actual image path
      description: "Experienced leader with a passion for community development and immigrant support services. Dedicated to empowering newcomers and building stronger communities through comprehensive support programs."
    }
  ];

  const coreValues = [
    {
      title: "Excellence",
      description: "Committed to delivering the highest quality services"
    },
    {
      title: "Integrity",
      description: "Operating with honesty and transparency"
    },
    {
      title: "Empowerment",
      description: "Enabling individuals to achieve their full potential"
    },
    {
      title: "Community",
      description: "Building strong, supportive networks"
    }
  ];

  return (
    <Box 
      sx={{ 
        width: '100%',
        minHeight: '100vh',
        paddingTop: '80px',
        backgroundColor: '#f8f9fa'
      }}
    >
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundColor: '#1a237e',
          color: 'white',
          py: { xs: 6, md: 10 },
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h2" 
              align="center"
              sx={{ 
                fontWeight: 700,
                mb: 2
              }}
            >
              About Huduma Center
            </Typography>
            <Typography 
              variant="h5" 
              align="center"
              sx={{ 
                maxWidth: '800px',
                mx: 'auto',
                opacity: 0.9
              }}
            >
              Empowering newcomers and building stronger communities through comprehensive support services
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: '2px solid #1a237e',
                  borderRadius: 2
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmojiObjectsIcon sx={{ fontSize: 40, color: '#1a237e', mr: 2 }} />
                    <Typography variant="h4" component="h2" color="primary">
                      Our Mission
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    To provide comprehensive support services that empower newcomers to the United States,
                    facilitating their successful integration into the community while helping
                    them achieve their personal and professional goals.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card 
                elevation={0}
                sx={{ 
                  height: '100%',
                  backgroundColor: 'transparent',
                  border: '2px solid #1a237e',
                  borderRadius: 2
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PeopleIcon sx={{ fontSize: 40, color: '#1a237e', mr: 2 }} />
                    <Typography variant="h4" component="h2" color="primary">
                      Our Vision
                    </Typography>
                  </Box>
                  <Typography variant="body1" paragraph>
                    To be the leading support center in Washington State, known for excellence in
                    newcomer services, community integration, and professional development,
                    creating a more inclusive and prosperous society.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            align="center" 
            color="primary"
            sx={{ mb: 4 }}
          >
            Our Core Values
          </Typography>
          <Grid container spacing={3}>
            {coreValues.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
                      backgroundColor: '#fff',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-5px)'
                      }
                    }}
                  >
                    <CardContent>
                      <Typography 
                        variant="h6" 
                        gutterBottom 
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      >
                        {value.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Leadership Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            align="center" 
            color="primary"
            sx={{ mb: 4 }}
          >
            Our Leadership
          </Typography>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card sx={{ height: '100%' }}>
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Avatar
                      src={teamMembers[0].image}
                      sx={{ 
                        width: 200, 
                        height: 200, 
                        mx: 'auto',
                        mb: 3,
                        border: '4px solid #1a237e'
                      }}
                    />
                    <Typography 
                      variant="h4" 
                      gutterBottom
                      sx={{ color: '#1a237e', fontWeight: 600 }}
                    >
                      {teamMembers[0].name}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      color="primary"
                      gutterBottom
                      sx={{ mb: 2 }}
                    >
                      {teamMembers[0].role}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      color="text.secondary"
                      sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
                    >
                      {teamMembers[0].description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutUs; 