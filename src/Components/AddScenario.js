import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AddScenario = () => {
  const [file, setFile] = useState(null); // State for video file
  const [imageFile, setImageFile] = useState(null); // State for image file
  const [scenarioName, setScenarioName] = useState(''); // State to hold the scenario name
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State to control snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(''); // State to hold snackbar message
  const [snackbarSeverity, setSnackbarSeverity] = useState('success'); // State to hold snackbar severity
  const navigate = useNavigate(); // Initialize the navigate function

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Update state with selected video file
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]); // Update state with selected image file
  };

  const handleUpload = async () => {
    if (!scenarioName.trim()) {
      // Check if the scenario name is empty or contains only whitespace
      setSnackbarMessage('Scenario name is required.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    if (file && imageFile) {
      // Prepare the data to be sent in the POST request
      const data = {
        scenarioName: scenarioName,
        fileName: file.name, // Video file name
        imageName: imageFile.name, // Image file name
      };

      try {
        // Send POST request to the JSON server using fetch
        const response = await fetch('http://localhost:3000/AddScenario', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          setSnackbarMessage('Scenario uploaded successfully!');
          setSnackbarSeverity('success');
        } else {
          setSnackbarMessage('Failed to upload scenario.');
          setSnackbarSeverity('error');
        }
      } catch (error) {
        setSnackbarMessage('Failed to upload scenario.');
        setSnackbarSeverity('error');
        console.error('Error uploading scenario:', error);
      } finally {
        setSnackbarOpen(true);
      }
    } else {
      setSnackbarMessage('Both video and image files are required.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    navigate('/ADashboard'); // Navigate back to ADashboard after closing the Snackbar
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
        <Typography
          variant="h4"
          gutterBottom
          sx={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Add Scenario
        </Typography>
        
        {/* Scenario Name Input */}
        <TextField
          label="Scenario Name"
          variant="outlined"
          fullWidth
          required
          value={scenarioName}
          onChange={(e) => setScenarioName(e.target.value)}
          sx={{ marginBottom: '20px' }}
        />
        
        {/* Image File Input */}
        <Typography variant="h6" sx={{ alignSelf: 'flex-start', mb: 1 }}>
          Image Selection
        </Typography>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          style={{ marginBottom: '10px' }}
        />
        {imageFile && (
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Selected Image: {imageFile.name}
          </Typography>
        )}
        
        {/* Video File Input */}
        <Typography variant="h6" sx={{ alignSelf: 'flex-start', mb: 1 }}>
          Video Selection
        </Typography>
        <input
          type="file"
          accept="video/*"
          onChange={handleFileChange}
          style={{ marginBottom: '10px' }}
        />
        {file && (
          <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
            Selected Video: {file.name}
          </Typography>
        )}
        
        {/* Upload Button */}
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          sx={{ marginTop: '10px' }}
        >
          Upload Scenario
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

export default AddScenario;
