import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import useScrollToTop from '../../hooks/useScrollToTop';

const ContactUs = () => {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will get back to you soon!',
      severity: 'success'
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      title: 'Our Location',
      details: ['30821 Pacific Hwy S', 'Federal Way, WA 98003']
    },
    {
      icon: <PhoneIcon />,
      title: 'Phone Numbers',
      details: ['206-460-9022']
    },
    {
      icon: <EmailIcon />,
      title: 'Email Address',
      details: ['info@hudumacenter.com']
    },
    {
      icon: <AccessTimeIcon />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 5:00 PM',
        'Saturday - Sunday: By Appointment'
      ]
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
              Contact Us
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
              Get in touch with us for any inquiries or support
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom color="primary">
                    Send Us a Message
                  </Typography>
                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Email Address"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Phone Number"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          fullWidth
                          label="Message"
                          name="message"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{
                            backgroundColor: '#1a237e',
                            '&:hover': {
                              backgroundColor: '#000051'
                            }
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card sx={{ height: '100%', backgroundColor: '#1a237e', color: 'white' }}>
                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h4" gutterBottom>
                    Contact Information
                  </Typography>
                  <List>
                    {contactInfo.map((info, index) => (
                      <ListItem key={index} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                          {info.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={info.title}
                          secondary={
                            <Box sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                              {info.details.map((detail, idx) => (
                                <Typography key={idx} variant="body2">
                                  {detail}
                                </Typography>
                              ))}
                            </Box>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>

                  <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                      Follow Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <IconButton sx={{ color: 'white' }}>
                        <FacebookIcon />
                      </IconButton>
                      <IconButton sx={{ color: 'white' }}>
                        <TwitterIcon />
                      </IconButton>
                      <IconButton sx={{ color: 'white' }}>
                        <InstagramIcon />
                      </IconButton>
                      <IconButton sx={{ color: 'white' }}>
                        <WhatsAppIcon />
                      </IconButton>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Google Map */}
          <Grid item xs={12}>
            <Card>
              <CardContent sx={{ p: 0, height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.8041357775493!2d-122.31325372346546!3d47.27731977916422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905934e1674d5d%3A0x44b33815f0c9fa0e!2s30821%20Pacific%20Hwy%20S%2C%20Federal%20Way%2C%20WA%2098003!5e0!3m2!1sen!2sus!4v1710644183274!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactUs; 