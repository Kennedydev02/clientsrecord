import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import DashboardLayout from './DashboardLayout';
import MetricsCards from './MetricsCards';
import ClientTable from './ClientTable';

function Dashboard() {
  return (
    <DashboardLayout>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Dashboard
        </Typography>
        
        <MetricsCards />
        
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Client Overview
          </Typography>
          <ClientTable />
        </Box>
      </Box>
    </DashboardLayout>
  );
}

export default Dashboard; 