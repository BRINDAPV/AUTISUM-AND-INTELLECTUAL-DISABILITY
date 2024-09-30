import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DeleteScenario = () => {
  const [videos, setVideos] = useState([]); // State to hold the list of videos fetched from the server
  const [selectedVideo, setSelectedVideo] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate();

  // Fetch videos from the JSON server on component mount
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('http://localhost:3000/AddScenario');
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        setSnackbarMessage('Failed to load videos.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  // Function to handle video deletion
  const handleDelete = async () => {
    if (!selectedVideo) {
      setSnackbarMessage('No video selected.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    try {
      // Find the video by scenario name
      const videoToDelete = videos.find((video) => video.scenarioName === selectedVideo);

      if (!videoToDelete) {
        setSnackbarMessage('Video not found.');
        setSnackbarSeverity('error');
        setSnackbarOpen(true);
        return;
      }

      // Send DELETE request to remove the video from JSON server
      const response = await fetch(`http://localhost:3000/AddScenario/${videoToDelete.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSnackbarMessage(`Deleted ${selectedVideo} successfully!`);
        setSnackbarSeverity('success');
        setVideos(videos.filter((video) => video.id !== videoToDelete.id)); // Update state to reflect deleted video
        setSelectedVideo(''); // Reset the selection after deletion
      } else {
        setSnackbarMessage('Failed to delete the video.');
        setSnackbarSeverity('error');
      }
    } catch (error) {
      setSnackbarMessage('Failed to delete the video.');
      setSnackbarSeverity('error');
      console.error('Error deleting video:', error);
    } finally {
      setSnackbarOpen(true);
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
        minHeight: '100vh',
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Delete Scenario
        </Typography>
        <FormControl fullWidth sx={{ marginBottom: '20px' }}>
          <InputLabel id="video-select-label">Select Scenario</InputLabel>
          <Select
            labelId="video-select-label"
            value={selectedVideo}
            onChange={(e) => setSelectedVideo(e.target.value)}
            label="Select Scenario"
          >
            {videos.map((video) => (
              <MenuItem key={video.id} value={video.scenarioName}>
                {video.scenarioName}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button variant="contained" color="secondary" onClick={handleDelete}>
          Delete Video
        </Button>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default DeleteScenario;
