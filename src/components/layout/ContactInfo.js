import { Box, styled } from '@mui/material';

const ContactInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  '& address': {
    fontStyle: 'normal'
  }
}));

export default ContactInfo; 