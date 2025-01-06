import React from 'react';
import {
  Box,
  Paper,
  Grid,
  Typography,
  Tabs,
  Tab,
  Avatar,
  Chip,
  Button,
  Divider,
  LinearProgress
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function ClientDetails() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Mock client data
  const client = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    applicationDate: "2024-01-15",
    workPermitDays: 120,
    status: "Active",
    paymentStatus: "Paid",
    totalPaid: "$2,500",
    remainingBalance: "$1,500"
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* Header Section */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              sx={{ width: 100, height: 100 }}
              alt={client.name}
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h4">{client.name}</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Chip label={client.status} color="primary" />
              <Chip 
                label={client.paymentStatus}
                color={client.paymentStatus === 'Paid' ? 'success' : 'warning'}
              />
            </Box>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              sx={{ mr: 1 }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
            >
              Export
            </Button>
          </Grid>
        </Grid>
      </Paper>

      {/* Work Permit Countdown */}
      <Paper sx={{ p: 3, mb: 3, borderRadius: 3 }}>
        <Typography variant="h6" gutterBottom>
          Work Permit Eligibility
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography>Progress ({client.workPermitDays} days remaining)</Typography>
            <Typography>{Math.round((client.workPermitDays / 150) * 100)}%</Typography>
          </Box>
          <LinearProgress 
            variant="determinate" 
            value={(client.workPermitDays / 150) * 100}
            sx={{ height: 10, borderRadius: 5 }}
          />
        </Box>
      </Paper>

      {/* Tabs Section */}
      <Paper sx={{ borderRadius: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Personal Info" />
          <Tab label="Application Timeline" />
          <Tab label="Payments" />
          <Tab label="Documents" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">Email</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{client.email}</Typography>
              
              <Typography variant="subtitle2">Phone</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{client.phone}</Typography>
              
              <Typography variant="subtitle2">Application Date</Typography>
              <Typography variant="body1">{client.applicationDate}</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle2">Total Paid</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{client.totalPaid}</Typography>
              
              <Typography variant="subtitle2">Remaining Balance</Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>{client.remainingBalance}</Typography>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <Timeline>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="h6">Application Submitted</Typography>
                <Typography variant="body2" color="text.secondary">
                  January 15, 2024
                </Typography>
              </TimelineContent>
            </TimelineItem>
            {/* Add more timeline items */}
          </Timeline>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>Payment History</Typography>
            {/* Add payment history table or list */}
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={3}>
          <Box sx={{ mb: 3 }}>
            <Button
              variant="outlined"
              startIcon={<AttachFileIcon />}
              sx={{ mb: 2 }}
            >
              Upload Document
            </Button>
            {/* Add document list */}
          </Box>
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default ClientDetails; 