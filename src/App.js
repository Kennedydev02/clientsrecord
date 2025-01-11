import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ClientDetails from './components/ClientDetails';
import CaregiverTraining from './components/services/CaregiverTraining';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          minHeight: '100vh'
        }}>
          <Navbar />
          <Box sx={{ 
            mt: '64px',
            flex: 1,
            bgcolor: '#f5f5f5' // Light background for content
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/clients/:id" element={<ClientDetails />} />
              <Route path="/services/caregiver-training" element={<CaregiverTraining />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </AuthProvider>
    </Router>
  );
}

export default App;
