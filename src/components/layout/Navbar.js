import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Stack,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pages = [
    { title: 'Home', path: '/' },
    { title: 'Services', path: '/services' },
    { title: 'About Us', path: '/about' },
    { title: 'Testimonials', path: '/testimonials' }
  ];

  const MobileDrawer = () => (
    <Drawer
      anchor="right"
      open={isDrawerOpen}
      onClose={() => setIsDrawerOpen(false)}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: '300px',
          background: 'rgba(232, 234, 246, 0.98)',
          backdropFilter: 'blur(10px)',
          padding: '20px'
        }
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography variant="h6" sx={{ color: '#1a237e' }}>
          Menu
        </Typography>
        <IconButton onClick={() => setIsDrawerOpen(false)}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
        <Button
          fullWidth
          variant="outlined"
          sx={{
            color: '#1a237e',
            borderColor: '#1a237e',
            '&:hover': { borderColor: '#4CAF50', color: '#4CAF50' }
          }}
          onClick={() => {
            navigate('/contact');
            setIsDrawerOpen(false);
          }}
        >
          Contact Us
        </Button>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: '#4CAF50',
            '&:hover': { bgcolor: '#388E3C' }
          }}
          onClick={() => {
            navigate('/login');
            setIsDrawerOpen(false);
          }}
        >
          Client Portal
        </Button>
      </Stack>
      
      <List>
        {pages.map((page) => (
          <motion.div
            key={page.title}
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ListItem
              button
              onClick={() => {
                navigate(page.path);
                setIsDrawerOpen(false);
              }}
              sx={{
                borderRadius: '8px',
                mb: 1,
                backgroundColor: location.pathname === page.path ? 'rgba(76, 175, 80, 0.1)' : 'transparent',
                '&:hover': {
                  backgroundColor: 'rgba(76, 175, 80, 0.05)'
                }
              }}
            >
              <ListItemText 
                primary={page.title}
                sx={{
                  color: location.pathname === page.path ? '#4CAF50' : '#1a237e'
                }}
              />
            </ListItem>
          </motion.div>
        ))}
      </List>
    </Drawer>
  );

  return (
    <AppBar 
      position="fixed" 
      elevation={isScrolled ? 4 : 1}
      sx={{ 
        bgcolor: isScrolled 
          ? 'rgba(26, 35, 126, 0.95)' 
          : 'rgba(232, 234, 246, 0.95)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Container maxWidth="xl">
        <Toolbar 
          disableGutters 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            minHeight: { xs: '56px', sm: '64px' }
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                fontWeight: 700,
                color: '#4CAF50',
                textDecoration: 'none',
                fontSize: { xs: '1.2rem', sm: '1.5rem' }
              }}
            >
              HUDUMA CENTER
            </Typography>
          </motion.div>

          {isMobile ? (
            <IconButton
              onClick={() => setIsDrawerOpen(true)}
              sx={{ 
                color: isScrolled ? 'white' : '#1a237e',
                '&:hover': { color: '#4CAF50' }
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Stack direction="row" spacing={1} alignItems="center">
              <Box sx={{ display: 'flex', gap: 2 }}>
                {pages.map((page) => (
                  <motion.div
                    key={page.title}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={() => navigate(page.path)}
                      sx={{ 
                        color: isScrolled ? 'white' : '#1a237e',
                        '&:hover': { color: '#4CAF50' },
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          width: '0%',
                          height: '2px',
                          backgroundColor: '#4CAF50',
                          transition: 'all 0.3s ease-in-out',
                        },
                        '&:hover::after': {
                          width: '80%',
                          left: '10%'
                        }
                      }}
                    >
                      {page.title}
                    </Button>
                  </motion.div>
                ))}
              </Box>
              
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  sx={{ 
                    color: isScrolled ? 'white' : '#1a237e',
                    borderColor: isScrolled ? 'white' : '#1a237e',
                    '&:hover': { borderColor: '#4CAF50', color: '#4CAF50' }
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </Button>
                <Button
                  variant="contained"
                  sx={{ 
                    bgcolor: '#4CAF50',
                    '&:hover': { bgcolor: '#388E3C' }
                  }}
                  onClick={() => navigate('/login')}
                >
                  Client Portal
                </Button>
              </Stack>
            </Stack>
          )}
        </Toolbar>
      </Container>
      
      <MobileDrawer />
    </AppBar>
  );
}

export default Navbar; 