import React from 'react';
import { Box, Paper, Typography, Divider, Switch, FormControlLabel } from '@mui/material';

function Settings() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Notifications
        </Typography>
        <Divider sx={{ my: 2 }} />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Email notifications"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Payment reminders"
        />
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Course updates"
        />
      </Paper>
    </Box>
  );
}

export default Settings; 