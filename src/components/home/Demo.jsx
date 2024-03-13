import React from 'react';
import { Typography, Container, Box, Paper } from '@mui/material';
import YouTube from 'react-youtube';

const Demo = () => {
  // Options for the YouTube player
  const opts = {
    height: '315',
    width: '560',
    playerVars: {
      // Enable YouTube autoplay and show related videos
      autoplay: 1,
      rel: 0,
    },
  };

  // YouTube video ID
  const videoId = 'zC63EuU3VOY'; // Replace with your actual video ID

  return (
    <Box
      sx={{
        bgcolor: 'grey.100', // Different shade of grey
        py: 5,
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left part: YouTube video thumbnail */}
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            Watch Our Demo
          </Typography>
          <Typography variant="body1" gutterBottom>
            Check out our product in action by watching our demo video.
          </Typography>
          {/* Embed YouTube video */}
          <YouTube videoId={videoId} opts={opts} />
        </Box>

        {/* Right part: Text about checking out the demo */}
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            Not sure how it works?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Want to see how our process works in real-time? Watch our demo to understand the steps involved
            and the benefits of using our product.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Demo;
