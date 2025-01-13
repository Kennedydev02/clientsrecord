import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Tab,
  Tabs,
  Button,
  MenuItem,
  TextField,
} from '@mui/material';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function AnalyticsDashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null,
  });
  const [reportType, setReportType] = useState('all');

  // Mock data - replace with actual data from your backend
  const revenueData = [
    { month: 'Jan', tuition: 15000, accommodation: 5000, services: 2000 },
    { month: 'Feb', tuition: 18000, accommodation: 5500, services: 2500 },
    { month: 'Mar', tuition: 20000, accommodation: 6000, services: 3000 },
  ];

  const enrollmentData = [
    { month: 'Jan', students: 25 },
    { month: 'Feb', students: 30 },
    { month: 'Mar', students: 35 },
  ];

  const courseCompletionData = [
    { name: 'Completed', value: 65 },
    { name: 'In Progress', value: 25 },
    { name: 'Not Started', value: 10 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Box sx={{ p: 3 }}>
      {/* Analytics Header */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>
          Analytics & Reports
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={4}>
            <DatePicker
              label="Start Date"
              value={dateRange.start}
              onChange={(newValue) =>
                setDateRange({ ...dateRange, start: newValue })
              }
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DatePicker
              label="End Date"
              value={dateRange.end}
              onChange={(newValue) =>
                setDateRange({ ...dateRange, end: newValue })
              }
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              select
              fullWidth
              label="Report Type"
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <MenuItem value="all">All Reports</MenuItem>
              <MenuItem value="financial">Financial Reports</MenuItem>
              <MenuItem value="enrollment">Enrollment Reports</MenuItem>
              <MenuItem value="performance">Performance Reports</MenuItem>
            </TextField>
          </Grid>
        </Grid>
      </Box>

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Total Revenue
              </Typography>
              <Typography variant="h4">$45,000</Typography>
              <Typography color="success.main" variant="body2">
                +15% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Active Students
              </Typography>
              <Typography variant="h4">35</Typography>
              <Typography color="success.main" variant="body2">
                +5 new enrollments
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Graduation Rate
              </Typography>
              <Typography variant="h4">92%</Typography>
              <Typography color="success.main" variant="body2">
                +2% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Accommodation Usage
              </Typography>
              <Typography variant="h4">85%</Typography>
              <Typography color="info.main" variant="body2">
                15 rooms occupied
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Charts */}
      <Grid container spacing={3}>
        {/* Revenue Chart */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Revenue Breakdown
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="tuition" fill="#8884d8" name="Tuition" />
                <Bar dataKey="accommodation" fill="#82ca9d" name="Accommodation" />
                <Bar dataKey="services" fill="#ffc658" name="Services" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Course Completion Chart */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Course Completion Status
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={courseCompletionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {courseCompletionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        {/* Enrollment Trends */}
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Enrollment Trends
            </Typography>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={enrollmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="students"
                  stroke="#8884d8"
                  name="Students Enrolled"
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AnalyticsDashboard; 