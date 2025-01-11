import { alpha } from '@mui/material/styles';

export const serviceStyles = {
  pageContainer: {
    minHeight: '100vh',
    pt: { xs: 2, md: 4 },
    pb: { xs: 4, md: 6 }
  },
  contentCard: {
    borderRadius: 2,
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 6
    }
  },
  tabPanel: {
    p: 3
  }
}; 