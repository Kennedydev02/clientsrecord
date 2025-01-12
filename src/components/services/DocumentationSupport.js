import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {
  Description as DescriptionIcon,
  CheckCircle as CheckCircleIcon,
  Assignment as AssignmentIcon,
  Translate as TranslateIcon,
  VerifiedUser as VerifiedUserIcon
} from '@mui/icons-material';
import useScrollToTop from '../../hooks/useScrollToTop';

const DocumentationSupport = () => {
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
      {/* Hero Section */}
      <Box 
        sx={{ 
          backgroundColor: '#1E4D40',
          color: 'white',
          py: { xs: 6, md: 8 },
          mb: 6
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ fontWeight: 600, mb: 2 }}>
            Documentation Support
          </Typography>
          <Typography variant="h5" sx={{ maxWidth: '800px', opacity: 0.9 }}>
            Professional assistance with all your documentation needs
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Service Overview Section */}
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 3
              }}>
                <Typography variant="h5" sx={{ color: '#1E4D40', fontWeight: 600 }}>
                  Documentation Services Overview
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<DescriptionIcon />}
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
                  Request Documents
                </Button>
              </Box>

              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
                Our comprehensive documentation support services help you navigate through various paperwork requirements, ensuring accuracy and compliance with all necessary regulations.
              </Typography>

              {/* Services Grid */}
              <Grid container spacing={3}>
                {[
                  {
                    icon: <AssignmentIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
                    title: 'Document Preparation',
                    description: 'Professional assistance in preparing various types of documents and applications.'
                  },
                  {
                    icon: <TranslateIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
                    title: 'Translation Services',
                    description: 'Certified translation services for official documents in multiple languages.'
                  },
                  {
                    icon: <VerifiedUserIcon sx={{ fontSize: 40, color: '#2E8B57' }} />,
                    title: 'Document Verification',
                    description: 'Thorough verification and authentication of important documents.'
                  }
                ].map((service, index) => (
                  <Grid item xs={12} md={4} key={index}>
                    <Card 
                      elevation={2}
                      sx={{ 
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.3s ease',
                        '&:hover': { transform: 'translateY(-4px)' }
                      }}
                    >
                      <CardContent>
                        <Box sx={{ mb: 2 }}>
                          {service.icon}
                        </Box>
                        <Typography variant="h6" sx={{ mb: 1, color: '#1E4D40' }}>
                          {service.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {service.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {/* Benefits List */}
              <Box sx={{ mt: 6 }}>
                <Typography variant="h6" sx={{ mb: 3, color: '#1E4D40' }}>
                  Why Choose Our Documentation Services?
                </Typography>
                <List>
                  {[
                    'Professional and accurate document preparation',
                    'Certified translation services',
                    'Quick turnaround time',
                    'Confidential handling of documents',
                    'Expert guidance throughout the process'
                  ].map((benefit, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircleIcon sx={{ color: '#2E8B57' }} />
                      </ListItemIcon>
                      <ListItemText primary={benefit} />
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
};

export default DocumentationSupport; 