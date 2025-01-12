import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Stack
} from '@mui/material';
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
  Email,
  LocationOn
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@hudumacare.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+12533334444';
  };

  const handleLocationClick = () => {
    window.open('https://maps.google.com/?q=30821+Pacific+Hwy+S,+Federal+Way,+WA+98003', '_blank');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1E4D40',
        color: 'white',
        pt: 6,
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Huduma Center
            </Typography>
            <Stack spacing={2.5}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 1.5,
                  cursor: 'pointer',
                  '&:hover': { color: '#90caf9' }
                }}
                onClick={handleLocationClick}
              >
                <LocationOn sx={{ mt: 0.3 }} />
                <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                  30821 Pacific Hwy S,<br />
                  Federal Way, WA 98003
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  cursor: 'pointer',
                  '&:hover': { color: '#90caf9' }
                }}
                onClick={handlePhoneClick}
              >
                <Phone />
                <Typography variant="body2">
                  (206) 460-9022
                </Typography>
              </Box>
              <Box 
                sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1.5,
                  cursor: 'pointer',
                  '&:hover': { color: '#90caf9' }
                }}
                onClick={handleEmailClick}
              >
                <Email />
                <Typography variant="body2">
                  info@hudumacare.com
                </Typography>
              </Box>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Quick Links
            </Typography>
            <Stack spacing={2}>
              {[
                { text: 'Home', path: '/' },
                { text: 'About Us', path: '/about' },
                { text: 'Testimonials', path: '/testimonials' },
                { text: 'Contact Us', path: '/contact' },
                { text: 'Portal Login', path: '/login' }
              ].map((link) => (
                <Link 
                  key={link.text}
                  component="button"
                  onClick={() => navigate(link.path)}
                  sx={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    textAlign: 'left',
                    '&:hover': { color: '#90caf9' },
                    transition: 'color 0.3s ease'
                  }}
                >
                  {link.text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Our Services
            </Typography>
            <Stack spacing={2}>
              {[
                { text: 'Caregiver Training', path: '/services/caregiver-training' },
                { text: 'Newcomer Support', path: '/services/newcomer-support' },
                { text: 'Housing Assistance', path: '/services/housing-assistance' },
                { text: 'Documentation Support', path: '/services/documentation-support' },
                { text: 'Employment Services', path: '/services/employment-services' },
                { text: 'Education Support', path: '/services/education-support' }
              ].map((service) => (
                <Link 
                  key={service.text}
                  component="button"
                  onClick={() => navigate(service.path)}
                  sx={{ 
                    color: 'white', 
                    textDecoration: 'none', 
                    textAlign: 'left',
                    '&:hover': { color: '#90caf9' },
                    transition: 'color 0.3s ease'
                  }}
                >
                  {service.text}
                </Link>
              ))}
            </Stack>
          </Grid>

          {/* Social Media */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2}>
              {[
                { icon: <Facebook />, url: 'https://facebook.com/hudumacare' },
                { icon: <Twitter />, url: 'https://twitter.com/hudumacare' },
                { icon: <Instagram />, url: 'https://instagram.com/hudumacare' },
                { icon: <LinkedIn />, url: 'https://linkedin.com/company/hudumacare' }
              ].map((social, index) => (
                <IconButton 
                  key={index}
                  href={social.url}
                  target="_blank"
                  sx={{ 
                    color: 'white', 
                    '&:hover': { 
                      color: '#90caf9',
                      transform: 'translateY(-2px)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Typography 
          variant="body2" 
          align="center" 
          sx={{ 
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          © {new Date().getFullYear()} Huduma Center. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 