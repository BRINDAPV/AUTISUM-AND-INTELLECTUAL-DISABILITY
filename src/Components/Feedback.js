import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';

const FeedbackForm = () => {
  // State to hold form input values
  const [formData, setFormData] = useState({
    userExperience: '',
    engagementLevel: '',
    sensoryFeedback: '',
    usability: '',
    usefulness: '',
    educationalValue: '',
    repetitiveUseLikelihood: '',
    emotionalResponse: '',
    navigationEase: '',
    recommendations: '',
    comments: '',
  });

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Feedback submitted:', formData);
    alert('Thank you for your feedback! Your input is valuable for improving our application.');

    // Reset the form after submission
    setFormData({
      userExperience: '',
      engagementLevel: '',
      sensoryFeedback: '',
      usability: '',
      usefulness: '',
      educationalValue: '',
      repetitiveUseLikelihood: '',
      emotionalResponse: '',
      navigationEase: '',
      recommendations: '',
      comments: '',
    });
  };

  return (
    <Container
      maxWidth="md" // Increased width to make the container larger
      sx={{
        backgroundColor: '#f4f4f4',
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'left',
      }}
    >
      <Box
        sx={{
          mt: 4,
          mb: 4,
          p: 4,
          backgroundColor: '#1a1a1a',
          borderRadius: '12px',
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
          color: '#fff',
          textAlign: 'left',
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#90caf9', fontWeight: 'bold' }}>
          VR Application Feedback
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Question 1 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              1. Overall User Experience:
            </FormLabel>
            <RadioGroup
              aria-label="userExperience"
              name="userExperience"
              value={formData.userExperience}
              onChange={handleChange}
            >
              <FormControlLabel value="Excellent" control={<Radio sx={{ color: '#90caf9' }} />} label="Excellent" />
              <FormControlLabel value="Good" control={<Radio sx={{ color: '#90caf9' }} />} label="Good" />
              <FormControlLabel value="Average" control={<Radio sx={{ color: '#90caf9' }} />} label="Average" />
              <FormControlLabel value="Poor" control={<Radio sx={{ color: '#90caf9' }} />} label="Poor" />
            </RadioGroup>
          </FormControl>

          {/* Remaining Questions */}
          {/* Repeat similar structure with adjusted spacing between questions */}
          {/* Question 2 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              2. Engagement Level of the Child:
            </FormLabel>
            <RadioGroup
              aria-label="engagementLevel"
              name="engagementLevel"
              value={formData.engagementLevel}
              onChange={handleChange}
            >
              <FormControlLabel value="Highly Engaged" control={<Radio sx={{ color: '#90caf9' }} />} label="Highly Engaged" />
              <FormControlLabel value="Moderately Engaged" control={<Radio sx={{ color: '#90caf9' }} />} label="Moderately Engaged" />
              <FormControlLabel value="Slightly Engaged" control={<Radio sx={{ color: '#90caf9' }} />} label="Slightly Engaged" />
              <FormControlLabel value="Not Engaged" control={<Radio sx={{ color: '#90caf9' }} />} label="Not Engaged" />
            </RadioGroup>
          </FormControl>

          {/* Question 3 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              3. Sensory Feedback (Visual, Auditory, etc.):
            </FormLabel>
            <RadioGroup
              aria-label="sensoryFeedback"
              name="sensoryFeedback"
              value={formData.sensoryFeedback}
              onChange={handleChange}
            >
              <FormControlLabel value="Very Calming" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Calming" />
              <FormControlLabel value="Moderately Calming" control={<Radio sx={{ color: '#90caf9' }} />} label="Moderately Calming" />
              <FormControlLabel value="Neutral" control={<Radio sx={{ color: '#90caf9' }} />} label="Neutral" />
              <FormControlLabel value="Overwhelming" control={<Radio sx={{ color: '#90caf9' }} />} label="Overwhelming" />
            </RadioGroup>
          </FormControl>

          {/* Question 4 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              4. Usability and Ease of Use:
            </FormLabel>
            <RadioGroup
              aria-label="usability"
              name="usability"
              value={formData.usability}
              onChange={handleChange}
            >
              <FormControlLabel value="Very Easy" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Easy" />
              <FormControlLabel value="Easy" control={<Radio sx={{ color: '#90caf9' }} />} label="Easy" />
              <FormControlLabel value="Difficult" control={<Radio sx={{ color: '#90caf9' }} />} label="Difficult" />
              <FormControlLabel value="Very Difficult" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Difficult" />
            </RadioGroup>
          </FormControl>

          {/* Question 5 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              5. How useful was the application in achieving its goals (e.g., improving social skills, relaxation, etc.)?
            </FormLabel>
            <RadioGroup
              aria-label="usefulness"
              name="usefulness"
              value={formData.usefulness}
              onChange={handleChange}
            >
              <FormControlLabel value="Very Useful" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Useful" />
              <FormControlLabel value="Somewhat Useful" control={<Radio sx={{ color: '#90caf9' }} />} label="Somewhat Useful" />
              <FormControlLabel value="Not Very Useful" control={<Radio sx={{ color: '#90caf9' }} />} label="Not Very Useful" />
              <FormControlLabel value="Not Useful at All" control={<Radio sx={{ color: '#90caf9' }} />} label="Not Useful at All" />
            </RadioGroup>
          </FormControl>

          {/* Question 6 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              6. Does the VR application have educational value for children with ASD?
            </FormLabel>
            <RadioGroup
              aria-label="educationalValue"
              name="educationalValue"
              value={formData.educationalValue}
              onChange={handleChange}
            >
              <FormControlLabel value="Highly Educational" control={<Radio sx={{ color: '#90caf9' }} />} label="Highly Educational" />
              <FormControlLabel value="Moderately Educational" control={<Radio sx={{ color: '#90caf9' }} />} label="Moderately Educational" />
              <FormControlLabel value="Slightly Educational" control={<Radio sx={{ color: '#90caf9' }} />} label="Slightly Educational" />
              <FormControlLabel value="Not Educational" control={<Radio sx={{ color: '#90caf9' }} />} label="Not Educational" />
            </RadioGroup>
          </FormControl>

          {/* Question 7 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              7. Likelihood of Repetitive Use:
            </FormLabel>
            <RadioGroup
              aria-label="repetitiveUseLikelihood"
              name="repetitiveUseLikelihood"
              value={formData.repetitiveUseLikelihood}
              onChange={handleChange}
            >
              <FormControlLabel value="Very Likely" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Likely" />
              <FormControlLabel value="Somewhat Likely" control={<Radio sx={{ color: '#90caf9' }} />} label="Somewhat Likely" />
              <FormControlLabel value="Unlikely" control={<Radio sx={{ color: '#90caf9' }} />} label="Unlikely" />
              <FormControlLabel value="Very Unlikely" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Unlikely" />
            </RadioGroup>
          </FormControl>

          {/* Question 8 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              8. Child's Emotional Response (Joy, Calm, Frustration, etc.):
            </FormLabel>
            <RadioGroup
              aria-label="emotionalResponse"
              name="emotionalResponse"
              value={formData.emotionalResponse}
              onChange={handleChange}
            >
              <FormControlLabel value="Positive" control={<Radio sx={{ color: '#90caf9' }} />} label="Positive" />
              <FormControlLabel value="Neutral" control={<Radio sx={{ color: '#90caf9' }} />} label="Neutral" />
              <FormControlLabel value="Negative" control={<Radio sx={{ color: '#90caf9' }} />} label="Negative" />
            </RadioGroup>
          </FormControl>

          {/* Question 9 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              9. Navigation Ease (Menus, Controls, etc.):
            </FormLabel>
            <RadioGroup
              aria-label="navigationEase"
              name="navigationEase"
              value={formData.navigationEase}
              onChange={handleChange}
            >
              <FormControlLabel value="Very Easy" control={<Radio sx={{ color: '#90caf9' }} />} label="Very Easy" />
              <FormControlLabel value="Moderate" control={<Radio sx={{ color: '#90caf9' }} />} label="Moderate" />
              <FormControlLabel value="Difficult" control={<Radio sx={{ color: '#90caf9' }} />} label="Difficult" />
            </RadioGroup>
          </FormControl>

          {/* Question 10 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              10. Any recommendations for improvements?
            </FormLabel>
            <TextField
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              name="recommendations"
              value={formData.recommendations}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
          </FormControl>

          {/* Question 11 */}
          <FormControl component="fieldset" sx={{ mb: 2 }}>
            <FormLabel component="legend" sx={{ color: '#90caf9' }}>
              11. Additional comments or observations:
            </FormLabel>
            <TextField
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              name="comments"
              value={formData.comments}
              onChange={handleChange}
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, backgroundColor: '#90caf9', color: '#1a1a1a' }}
          >
            Submit Feedback
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default FeedbackForm;
