import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import './HomePageBanner.css'

const HomePageBanner = () => {
  return (
    <div className='hero'>
    <Box>
      <Container maxWidth="md">
        <Typography variant="h1" component="h1" gutterBottom>
          Padim
        </Typography>
        <Typography variant="h3" component="h2" gutterBottom>
          Detect anomolies the easy way
        </Typography>
      </Container>
    </Box>
    </div>
  );
};

export default HomePageBanner;
