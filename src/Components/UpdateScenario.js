import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const UpdateScenario = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [videoTitle, setVideoTitle] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();
  
  // Dummy video list, replace this with your data fetching logic
  const videos = ['Video1.mp4', 'Video2.mp4', 'Video3.mp4'];

  const handleUpdate = () => {
    if (!selectedVideo || !videoTitle || !videoDescription) {
      // Show error if any required field is missing
      setSnackbarMessage('All fields are required.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    } else {
      console.log('Updating video:', selectedVideo);
      console.log('New title:', videoTitle);
      console.log('New description:', videoDescription);
      // Simulate successful update
      setSnackbarMessage('Video updated successfully!');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);

      // Implement your update logic here, e.g., making an API request to update the video details
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    navigate('/ADashboard');
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensures the container takes the full viewport height
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: '20px',
          boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
          borderRadius: '8px',
          width: '100%',
          maxWidth: '500px',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px' }}>
          Update Scenario
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: '20px' }} required>
          <InputLabel id="video-select-label">Select Video</InputLabel>
          <Select
            labelId="video-select-label"
            value={selectedVideo}
            onChange={(e) => setSelectedVideo(e.target.value)}
            label="Select Video"
          >
            {videos.map((video, index) => (
              <MenuItem key={index} value={video}>
                {video}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Video Title"
          variant="outlined"
          fullWidth
          required
          value={videoTitle}
          onChange={(e) => setVideoTitle(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          label="Video Description"
          variant="outlined"
          fullWidth
          required
          value={videoDescription}
          onChange={(e) => setVideoDescription(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Video
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default UpdateScenario;
