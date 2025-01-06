import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const MetricCard = ({ title, value, icon, color }) => (
  <Paper
    sx={{
      p: 3,
      background: 'linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%)',
      borderRadius: 3,
      boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box sx={{ 
        backgroundColor: `${color}15`,
        borderRadius: '50%',
        p: 1,
        mr: 2
      }}>
        {icon}
      </Box>
      <Typography variant="h6" color="text.secondary">
        {title}
      </Typography>
    </Box>
    <Typography variant="h4" sx={{ fontWeight: 600 }}>
      {value}
    </Typography>
  </Paper>
);

function MetricsCards() {
  const metrics = [
    { 
      title: 'Total Active Clients',
      value: '124',
      icon: <PeopleIcon sx={{ color: '#1A237E' }} />,
      color: '#1A237E'
    },
    {
      title: 'Upcoming Eligibilities',
      value: '8',
      icon: <WorkIcon sx={{ color: '#00BCD4' }} />,
      color: '#00BCD4'
    },
    {
      title: 'Pending Payments',
      value: '15',
      icon: <PaymentIcon sx={{ color: '#FF9800' }} />,
      color: '#FF9800'
    },
    {
      title: 'Outstanding Balance',
      value: '$12,450',
      icon: <AccountBalanceIcon sx={{ color: '#F44336' }} />,
      color: '#F44336'
    }
  ];

  return (
    <Grid container spacing={3}>
      {metrics.map((metric) => (
        <Grid item xs={12} sm={6} md={3} key={metric.title}>
          <MetricCard {...metric} />
        </Grid>
      ))}
    </Grid>
  );
}

export default MetricsCards; 