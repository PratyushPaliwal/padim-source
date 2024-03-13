import React from 'react';
import { Typography, Container, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.200',
        color: 'text.secondary',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center" gutterBottom>
          © {new Date().getFullYear()} Padim. All rights reserved.
        </Typography>
        <Typography variant="body2" align="center" gutterBottom>
          Contact us at <Link href="mailto:info@example.com">info@example.com</Link> | Location: Kaiserslauten, Germany
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
