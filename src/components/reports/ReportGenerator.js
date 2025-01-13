import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Download as DownloadIcon,
  Print as PrintIcon,
  Email as EmailIcon,
} from '@mui/icons-material';

function ReportGenerator() {
  const [reportConfig, setReportConfig] = useState({
    type: '',
    dateRange: 'last30',
    format: 'pdf',
    email: '',
  });

  const reportTypes = [
    'Financial Summary',
    'Student Enrollment',
    'Course Completion',
    'Accommodation Status',
    'Payment Collection',
  ];

  const dateRanges = [
    { value: 'last7', label: 'Last 7 Days' },
    { value: 'last30', label: 'Last 30 Days' },
    { value: 'last90', label: 'Last 90 Days' },
    { value: 'custom', label: 'Custom Range' },
  ];

  const formats = [
    { value: 'pdf', label: 'PDF' },
    { value: 'excel', label: 'Excel' },
    { value: 'csv', label: 'CSV' },
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Financial Summary - March 2024',
      date: '2024-03-15',
      type: 'PDF',
    },
    {
      id: 2,
      name: 'Student Enrollment Report Q1',
      date: '2024-03-01',
      type: 'Excel',
    },
  ];

  const handleChange = (e) => {
    setReportConfig({
      ...reportConfig,
      [e.target.name]: e.target.value,
    });
  };

  const handleGenerateReport = () => {
    console.log('Generating report with config:', reportConfig);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Reports
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Generate New Report
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Report Type</InputLabel>
                  <Select
                    name="type"
                    value={reportConfig.type}
                    onChange={handleChange}
                    label="Report Type"
                  >
                    {reportTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Date Range</InputLabel>
                  <Select
                    name="dateRange"
                    value={reportConfig.dateRange}
                    onChange={handleChange}
                    label="Date Range"
                  >
                    {dateRanges.map((range) => (
                      <MenuItem key={range.value} value={range.value}>
                        {range.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Format</InputLabel>
                  <Select
                    name="format"
                    value={reportConfig.format}
                    onChange={handleChange}
                    label="Format"
                  >
                    {formats.map((format) => (
                      <MenuItem key={format.value} value={format.value}>
                        {format.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Report To"
                  name="email"
                  type="email"
                  value={reportConfig.email}
                  onChange={handleChange}
                  helperText="Optional: Enter email to receive the report"
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="contained"
                  onClick={handleGenerateReport}
                  disabled={!reportConfig.type}
                >
                  Generate Report
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Recent Reports
            </Typography>
            <List>
              {recentReports.map((report, index) => (
                <React.Fragment key={report.id}>
                  {index > 0 && <Divider />}
                  <ListItem>
                    <ListItemText
                      primary={report.name}
                      secondary={report.date}
                    />
                    <ListItemSecondaryAction>
                      <IconButton title="Download">
                        <DownloadIcon />
                      </IconButton>
                      <IconButton title="Print">
                        <PrintIcon />
                      </IconButton>
                      <IconButton title="Email">
                        <EmailIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ReportGenerator; 