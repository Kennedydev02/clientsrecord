import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function AccommodationForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: '',
    roomNumber: '',
    startDate: '',
    endDate: '',
    paymentCollected: false,
    notes: '',
  });

  // Mock data
  const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  const rooms = [
    'A101', 'A102', 'A103',
    'B201', 'B202', 'B203',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Accommodation form submitted:', formData);
    navigate('/dashboard/accommodation');
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h5">Assign Accommodation</Typography>
        <Button variant="outlined" onClick={() => navigate('/dashboard/accommodation')}>
          Back to Accommodation
        </Button>
      </Box>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Student</InputLabel>
                <Select
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  label="Student"
                  required
                >
                  {students.map((student) => (
                    <MenuItem key={student.id} value={student.id}>
                      {student.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Room Number</InputLabel>
                <Select
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleChange}
                  label="Room Number"
                  required
                >
                  {rooms.map((room) => (
                    <MenuItem key={room} value={room}>
                      {room}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Start Date"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="End Date"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleChange}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="paymentCollected"
                    checked={formData.paymentCollected}
                    onChange={handleChange}
                  />
                }
                label="Payment Collected"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Notes"
                name="notes"
                multiline
                rows={4}
                value={formData.notes}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                <Button
                  variant="outlined"
                  onClick={() => navigate('/dashboard/accommodation')}
                >
                  Cancel
                </Button>
                <Button type="submit" variant="contained">
                  Assign Room
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default AccommodationForm; 