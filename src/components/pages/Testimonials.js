import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  useTheme,
  useMediaQuery,
  Button
} from '@mui/material';
import { motion } from 'framer-motion';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import useScrollToTop from '../../hooks/useScrollToTop';

const Testimonials = () => {
  useScrollToTop();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const testimonials = [
    {
      name: "John Kamau",
      location: "Kenya",
      image: "/images/testimonials/john-kamau.jpg",
      service: "Employment Services",
      rating: 5,
      text: "Huduma Center helped me secure my dream job through their employment services. Their resume writing and interview preparation services were invaluable.",
      date: "March 2024"
    },
    {
      name: "Amara Okafor",
      location: "Nigeria",
      image: "/images/testimonials/amara-okafor.jpg",
      service: "Documentation Support",
      rating: 5,
      text: "The documentation support team made my work permit application process smooth and stress-free. Their attention to detail and professional guidance was exceptional.",
      date: "February 2024"
    },
    {
      name: "Emmanuel Kwesi",
      location: "Ghana",
      image: "/images/testimonials/emmanuel-kwesi.jpg",
      service: "Education Support",
      rating: 5,
      text: "Thanks to Huduma Center's education support, my children successfully enrolled in school and received excellent academic assistance. The language programs were particularly helpful.",
      date: "January 2024"
    },
    {
      name: "Fatima Ahmed",
      location: "Somalia",
      image: "/images/testimonials/fatima-ahmed.jpg",
      service: "Housing Assistance",
      rating: 5,
      text: "Finding suitable housing seemed impossible until I contacted Huduma Center. They helped me find the perfect home within my budget and handled all the paperwork.",
      date: "March 2024"
    },
    {
      name: "Jean-Pierre Hakizimana",
      location: "Rwanda",
      image: "/images/testimonials/jean-pierre.jpg",
      service: "Newcomer Support",
      rating: 5,
      text: "As a newcomer to the US, the support I received was incredible. From airport pickup to cultural orientation, every service was delivered with care and professionalism.",
      date: "February 2024"
    },
    {
      name: "Grace Mutua",
      location: "Kenya",
      image: "/images/testimonials/grace-mutua.jpg",
      service: "Caregiver Training",
      rating: 5,
      text: "The caregiver training program was comprehensive and practical. I now feel confident in my skills and have secured a great position in healthcare.",
      date: "January 2024"
    }
  ];

  useEffect(() => {
    // Load Google Reviews Widget
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
              What Our Clients Say
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
              Real experiences from our valued clients
            </Typography>
          </motion.div>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Google Reviews Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h3" 
            align="center" 
            sx={{ 
              color: '#1a237e',
              mb: 4
            }}
          >
            Google Reviews
          </Typography>
          
          {/* Google Reviews Widget */}
          <Box 
            sx={{ 
              width: '100%',
              height: 'auto',
              mb: 6,
              '& iframe': {
                width: '100%',
                minHeight: '600px'
              }
            }}
          >
            <div className="elfsight-app-reviews-slider"
              data-place-id="ChIJXU1nETS1kVQRDvr5D4U4M0Q" // This is derived from your Google Maps URL
              data-source="google"
              data-style="light"
              data-layout="slider"
              data-reviews-number="10"
              data-show-rating="true"
              data-show-review-text="true"
              data-show-reviewer-photo="true"
              data-auto-play="true"
            ></div>
          </Box>
        </Box>

        {/* Featured Client Stories Section */}
        <Typography 
          variant="h3" 
          align="center" 
          sx={{ 
            color: '#1a237e',
            mb: 4
          }}
        >
          Featured Client Stories
        </Typography>
        
        {/* Testimonials Grid */}
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    overflow: 'visible',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      transition: 'transform 0.3s ease-in-out'
                    }
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box sx={{ position: 'relative', mb: 3 }}>
                      <FormatQuoteIcon 
                        sx={{ 
                          position: 'absolute',
                          top: -20,
                          left: -20,
                          fontSize: 40,
                          color: '#1a237e',
                          opacity: 0.2
                        }}
                      />
                      <Typography 
                        variant="body1" 
                        paragraph
                        sx={{ 
                          fontStyle: 'italic',
                          color: '#555'
                        }}
                      >
                        "{testimonial.text}"
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        src={testimonial.image}
                        sx={{ 
                          width: 60,
                          height: 60,
                          mr: 2,
                          border: '2px solid #1a237e'
                        }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.location}
                        </Typography>
                      </Box>
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Chip 
                        label={testimonial.service}
                        color="primary"
                        size="small"
                      />
                      <Rating value={testimonial.rating} readOnly />
                    </Box>
                    
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        display: 'block',
                        textAlign: 'right',
                        mt: 1,
                        color: 'text.secondary'
                      }}
                    >
                      {testimonial.date}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Direct Google Reviews Link */}
      <Box 
        sx={{ 
          textAlign: 'center',
          mb: 4
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          See all our reviews on Google
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          href="https://g.co/kgs/aMvJR5C"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            borderColor: '#1a237e',
            color: '#1a237e',
            '&:hover': {
              borderColor: '#000051',
              backgroundColor: 'rgba(26, 35, 126, 0.04)'
            }
          }}
        >
          View on Google
        </Button>
      </Box>
    </Box>
  );
};

export default Testimonials; 