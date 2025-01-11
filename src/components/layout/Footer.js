import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const quickLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'Contact', path: '/contact' }
  ];

  const services = [
    'Caregiver Training',
    'Newcomer Support',
    'Housing Assistance',
    'Documentation Support',
    'Employment Services'
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a237e',
        color: 'white',
        pt: 8,
        pb: 4,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ color: '#4CAF50', mb: 2 }}>
              HUDUMA CENTER
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Supporting Communities, Empowering Lives
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOnIcon sx={{ color: '#4CAF50' }} />
                <Typography variant="body2">
                  30821 Pacific Hwy S, Federal Way, WA 98003
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <PhoneIcon sx={{ color: '#4CAF50' }} />
                <Link 
                  href="tel:+12064609022" 
                  sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4CAF50' } }}
                >
                  206-460-9022
                </Link>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <EmailIcon sx={{ color: '#4CAF50' }} />
                <Link 
                  href="mailto:info@hudumacenter.com"
                  sx={{ color: 'white', textDecoration: 'none', '&:hover': { color: '#4CAF50' } }}
                >
                  info@hudumacenter.com
                </Link>
              </Box>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <motion.div
                  key={link.title}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    component="button"
                    onClick={() => navigate(link.path)}
                    sx={{
                      color: 'white',
                      textDecoration: 'none',
                      '&:hover': { color: '#4CAF50' }
                    }}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </Stack>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Our Services
            </Typography>
            <Stack spacing={1}>
              {services.map((service) => (
                <motion.div
                  key={service}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Typography variant="body2">
                    {service}
                  </Typography>
                </motion.div>
              ))}
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: isMobile ? 'center' : 'flex-start',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ textAlign: isMobile ? 'center' : 'left' }}>
            © {new Date().getFullYear()} Huduma Center. All rights reserved.
          </Typography>

          {/* Social Media Icons */}
          <Stack direction="row" spacing={1}>
            {[FacebookIcon, TwitterIcon, LinkedInIcon, InstagramIcon].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <IconButton
                  sx={{
                    color: 'white',
                    '&:hover': { color: '#4CAF50' }
                  }}
                >
                  <Icon />
                </IconButton>
              </motion.div>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 