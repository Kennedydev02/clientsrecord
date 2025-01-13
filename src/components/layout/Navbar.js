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
  useMediaQuery,
  Avatar,
  Menu,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate, useLocation } from 'react-router-dom';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useAuth } from '../../contexts/AuthContext';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { currentUser } = useAuth();
  const open = Boolean(anchorEl);

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

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleServicesClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const drawer = (
    <Box sx={{ width: 250 }}>
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.title}
            button
            onClick={() => handleNavigate(page.path)}
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
        ))}
      </List>
    </Box>
  );

  const contactInfo = {
    email: "info@hudumacenter.com",
    phone: "206-460-9022",
    address: "30821 Pacific Hwy S, Federal Way, WA 98003"
  };

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: isScrolled ? '#fff' : 'rgba(30, 77, 64, 0.95)',
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(8px)'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center',
              cursor: 'pointer',
              mr: 2
            }}
            onClick={() => handleNavigate('/')}
          >
            <Avatar
              src="/logo.png"
              alt="Huduma Center Logo"
              sx={{ 
                width: 40, 
                height: 40,
                mr: 1,
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)'
                }
              }}
            />
            <Typography
              variant="h6"
              noWrap
              sx={{ 
                fontWeight: 700,
                color: isScrolled ? '#2E8B57' : '#fff',
                transition: 'color 0.3s ease'
              }}
            >
              HUDUMA CENTER
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {isMobile ? (
              <>
                <Button
                  variant="contained"
                  startIcon={<LockOpenIcon />}
                  onClick={() => navigate('/login')}
                  sx={{
                    mr: 2,
                    backgroundColor: isScrolled ? '#2E8B57' : '#fff',
                    color: isScrolled ? '#fff' : '#1E4D40',
                    '&:hover': {
                      backgroundColor: isScrolled ? '#1E4D40' : '#f0f0f0'
                    },
                    textTransform: 'none'
                  }}
                >
                  Portal
                </Button>
                
                <IconButton
                  sx={{
                    color: '#fff'
                  }}
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon />
                </IconButton>
              </>
            ) : (
              <>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mr: 3 }}>
                  {['/', '/about', '/testimonials', '/contact'].map((path) => (
                    <Button 
                      key={path}
                      sx={{
                        color: isScrolled ? '#1E4D40' : '#fff',
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: isActive(path) ? '100%' : '0%',
                          height: '2px',
                          backgroundColor: isScrolled ? '#1E4D40' : '#fff',
                          transition: 'width 0.3s ease'
                        },
                        '&:hover::after': {
                          width: '100%'
                        },
                        '&:hover': {
                          backgroundColor: isScrolled ? 'rgba(30, 77, 64, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                        }
                      }}
                      onClick={() => handleNavigate(path)}
                    >
                      {path === '/' ? 'Home' : 
                       path === '/about' ? 'About Us' :
                       path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                    </Button>
                  ))}
                  <Button
                    id="services-button"
                    aria-controls={open ? 'services-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleServicesClick}
                    sx={{
                      color: isScrolled ? '#1E4D40' : '#fff',
                      '&:hover': {
                        backgroundColor: isScrolled ? 'rgba(30, 77, 64, 0.1)' : 'rgba(255, 255, 255, 0.1)'
                      }
                    }}
                    endIcon={<KeyboardArrowDownIcon />}
                  >
                    Services
                  </Button>
                </Box>

                <Button
                  variant="contained"
                  startIcon={<LockOpenIcon />}
                  onClick={() => navigate('/login')}
                  sx={{
                    backgroundColor: isScrolled ? '#2E8B57' : '#fff',
                    color: isScrolled ? '#fff' : '#1E4D40',
                    '&:hover': {
                      backgroundColor: isScrolled ? '#1E4D40' : '#f0f0f0'
                    },
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    fontWeight: 500
                  }}
                >
                  Portal Login
                </Button>
              </>
            )}
          </Box>

          <Menu
            id="services-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'services-button',
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            sx={{
              '& .MuiPaper-root': {
                mt: 1,
                minWidth: 200,
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              }
            }}
          >
            {[
              { title: 'Caregiver Training', path: '/services/caregiver-training' },
              { title: 'Newcomer Support', path: '/services/newcomer-support' },
              { title: 'Housing Assistance', path: '/services/housing-assistance' },
              { title: 'Documentation Support', path: '/services/documentation-support' },
              { title: 'Employment Services', path: '/services/employment-services' },
              { title: 'Education Support', path: '/services/education-support' }
            ].map((service) => (
              <MenuItem
                key={service.path}
                onClick={() => {
                  handleNavigate(service.path);
                  handleClose();
                }}
                sx={{
                  color: '#1E4D40',
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: 'rgba(46, 139, 87, 0.1)'
                  }
                }}
              >
                {service.title}
              </MenuItem>
            ))}
          </Menu>

          <Drawer
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              '& .MuiDrawer-paper': { 
                width: 240,
                backgroundColor: '#f8f9fa'
              }
            }}
          >
            {drawer}
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar; 