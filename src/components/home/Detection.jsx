import React from 'react';
import { Typography, Container, Button, Box, Paper } from '@mui/material';
import detectImage from './detect.jpg';

const Detection = () => {
  // Function to handle file upload
  const handleFileUpload = (event) => {
    const uploadedFiles = event.target.files;
    // Process uploaded files as needed
    console.log('Uploaded files:', uploadedFiles);
  };

  return (
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 5 }}>
      {/* Left part: Brief introduction */}
      <Box sx={{ maxWidth: 500 }}>
        <Typography variant="h4" gutterBottom>
          Anomaly Detection Made Easy
        </Typography>
        <Typography variant="body1" gutterBottom>
          With our product, customers can easily detect anomalies by simply uploading sample photographs.
          Our advanced algorithms analyze the images and provide insights to identify any irregularities.
        </Typography>
      </Box>

      {/* Right part: Image background with upload button */}
      <Box sx={{ position: 'relative', width: 'calc(50% - 20px)' }}>
        {/* Image background */}
        <Paper
          sx={{
            backgroundImage: `url(${detectImage})`, // Placeholder image URL
            backgroundSize: 'cover',
            height: 300,
            borderRadius: 5,
          }}
        >
          {/* Upload button */}
          <label htmlFor="upload-photo">
            <input
              style={{ display: 'none' }}
              id="upload-photo"
              name="upload-photo"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
            />
            <Button variant="contained" component="span" sx={{ position: 'absolute', bottom: 20, right: 20 }}>
              Upload Photos
            </Button>
          </label>
        </Paper>
      </Box>
    </Container>
  );
};

export default Detection;
