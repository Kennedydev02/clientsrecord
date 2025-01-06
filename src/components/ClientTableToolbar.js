import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  IconButton,
  Tooltip,
  ButtonGroup,
  Menu,
  MenuItem,
  Stack,
  Typography
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import AddIcon from '@mui/icons-material/Add';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import DateRangePicker from '@mui/lab/DateRangePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

function ClientTableToolbar({ onSearch, onFilter, onAdd, onExport }) {
  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const filterOptions = [
    { label: 'All Clients', value: 'all' },
    { label: 'Active', value: 'active' },
    { label: 'Pending', value: 'pending' },
    { label: 'Completed', value: 'completed' }
  ];

  return (
    <Box sx={{ mb: 2 }}>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 2 }}
      >
        <Typography variant="h6">Client Overview</Typography>
        <Box>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={onAdd}
            sx={{ mr: 1 }}
          >
            Add Client
          </Button>
          <Button
            variant="outlined"
            startIcon={<FileDownloadIcon />}
            onClick={onExport}
          >
            Export
          </Button>
        </Box>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
      >
        <TextField
          placeholder="Search clients..."
          size="small"
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: <SearchIcon sx={{ mr: 1, color: 'text.secondary' }} />,
          }}
          sx={{ width: 300 }}
        />

        <ButtonGroup variant="outlined" size="small">
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => onFilter(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </ButtonGroup>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateRangePicker
            startText="Date from"
            endText="Date to"
            value={dateRange}
            onChange={(newValue) => setDateRange(newValue)}
            renderInput={(startProps, endProps) => (
              <>
                <TextField size="small" {...startProps} />
                <Box sx={{ mx: 1 }}> to </Box>
                <TextField size="small" {...endProps} />
              </>
            )}
          />
        </LocalizationProvider>
      </Stack>
    </Box>
  );
}

export default ClientTableToolbar; 