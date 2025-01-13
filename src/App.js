import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/HomePage';
import AboutUs from './components/pages/AboutUs';
import Testimonials from './components/pages/Testimonials';
import ContactUs from './components/pages/ContactUs';
import CaregiverTraining from './components/services/CaregiverTraining';
import NewcomerSupport from './components/services/NewcomerSupport';
import HousingAssistance from './components/services/HousingAssistance';
import DocumentationSupport from './components/services/DocumentationSupport';
import EmploymentServices from './components/services/EmploymentServices';
import EducationSupport from './components/services/EducationSupport';
import Login from './components/Login';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './components/Dashboard';
import ContactInfo from './components/layout/ContactInfo';

function App() {
  return (
    <Router>
      <AuthProvider>
        <CssBaseline />
        <Box 
          sx={{ 
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            position: 'relative'
          }}
        >
          <Navbar />
          <Box 
            component="main" 
            sx={{ 
              flexGrow: 1,
              position: 'relative',
              zIndex: 0
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/services/caregiver-training" element={<CaregiverTraining />} />
              <Route path="/services/newcomer-support" element={<NewcomerSupport />} />
              <Route path="/services/housing-assistance" element={<HousingAssistance />} />
              <Route path="/services/documentation-support" element={<DocumentationSupport />} />
              <Route path="/services/employment-services" element={<EmploymentServices />} />
              <Route path="/services/education-support" element={<EducationSupport />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Box>
          <Footer>
            <ContactInfo>
              <a href="mailto:info@hudumacenter.com">info@hudumacenter.com</a>
              <a href="tel:206-460-9022">206-460-9022</a>
              <address>30821 Pacific Hwy S, Federal Way, WA 98003</address>
            </ContactInfo>
          </Footer>
        </Box>
      </AuthProvider>
    </Router>
  );
}

export default App;
