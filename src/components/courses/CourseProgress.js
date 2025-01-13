import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Card,
  CardContent,
  LinearProgress,
  Grid,
} from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';

function CourseProgress() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock data - replace with actual data later
  const courseData = {
    id: id,
    studentName: 'John Doe',
    courseName: 'Caregiver Training',
    startDate: '2024-03-01',
    endDate: '2024-06-01',
    progress: 75,
    status: 'In Progress',
    modules: [
      {
        title: 'Introduction to Caregiving',
        completed: true,
        tasks: ['Basic concepts', 'Role of a caregiver', 'Ethics in caregiving']
      },
      {
        title: 'Safety and Emergency Procedures',
        completed: true,
        tasks: ['First aid basics', 'Emergency protocols', 'Safety measures']
      },
      {
        title: 'Patient Care Fundamentals',
        completed: false,
        tasks: ['Personal hygiene', 'Mobility assistance', 'Medication management']
      },
    ]
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Course Progress</Typography>
        <Button variant="outlined" onClick={() => navigate('/dashboard/courses')}>
          Back to Courses
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>Course Overview</Typography>
              <Box sx={{ mb: 2 }}>
                <Typography color="textSecondary">Student</Typography>
                <Typography variant="body1">{courseData.studentName}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography color="textSecondary">Course</Typography>
                <Typography variant="body1">{courseData.courseName}</Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography color="textSecondary">Progress</Typography>
                <LinearProgress 
                  variant="determinate" 
                  value={courseData.progress} 
                  sx={{ height: 10, borderRadius: 5, mt: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {courseData.progress}% Complete
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Module Progress</Typography>
            <Stepper orientation="vertical">
              {courseData.modules.map((module, index) => (
                <Step key={index} active={true} completed={module.completed}>
                  <StepLabel>
                    <Typography variant="subtitle1">{module.title}</Typography>
                  </StepLabel>
                  <StepContent>
                    {module.tasks.map((task, taskIndex) => (
                      <Typography key={taskIndex} variant="body2" sx={{ ml: 2 }}>
                        • {task}
                      </Typography>
                    ))}
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CourseProgress; 