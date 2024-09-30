import React, { useState } from 'react';
import {
  Container,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Checkbox,
  Button,
  Grid,
  Box,
} from '@mui/material';

const ManageUserPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { username: 'Admin', displayName: 'EAC Admin User', lastLogin: 'active now' },
    { username: 'Kyle', displayName: 'KyleC123', lastLogin: '35 minutes ago' },
    { username: 'John', displayName: 'JohnC123', lastLogin: '4hrs ago' },
    { username: 'Jamie', displayName: 'Doe', lastLogin: 'active now' },
    { username: 'Clarke', displayName: 'ClarkeC123', lastLogin: '35 minutes ago' },
    { username: 'Jack', displayName: 'JackB123', lastLogin: '4hrs ago' },
  ];

  const [editUser, setEditUser] = useState(users[2]); // Example for editing user, selecting John initially

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      <Grid container spacing={2}>
        {/* Left Column - User Search and Recent Logins */}
        <Grid item xs={12} md={6}>
          {/* User Search Container */}
          <Box
            sx={{
              mb: 3,
              backgroundColor: '#fff',
              boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: '#0099FF', textAlign: 'center', padding: '10px', borderBottom: '1px solid #ccc' }}
            >
              Users
            </Typography>
            <TextField
              variant="outlined"
              placeholder="Search for users"
              fullWidth
              value={searchTerm}
              onChange={handleSearch}
              sx={{ mt: 2, margin: '10px' }}
            />
          </Box>

          {/* Recent Logins Container */}
          <Box
            sx={{
              backgroundColor: '#fff',
              boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
              padding: '10px',
              borderRadius: '4px',
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ color: '#0099FF', padding: '10px', borderBottom: '1px solid #ccc', textAlign: 'center' }}
            >
              Recent Logins
            </Typography>
            <TableContainer component={Paper}>
              <Table className="user-card-table" sx={{ fontSize: '0.85em', width: '100%' }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ borderBottom: '1px solid #ccc', color: '#0099FF' }}>Username</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #ccc', color: '#0099FF' }}>Display Name</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #ccc', color: '#0099FF' }}>Last Login</TableCell>
                    <TableCell sx={{ borderBottom: '1px solid #ccc', color: '#0099FF' }}>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredUsers.map((user, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ borderBottom: '1px solid #ccc', textAlign: 'center', padding: '5px' }}>
                        {user.username}
                      </TableCell>
                      <TableCell sx={{ borderBottom: '1px solid #ccc', textAlign: 'center', padding: '5px' }}>
                        {user.displayName}
                      </TableCell>
                      <TableCell sx={{ borderBottom: '1px solid #ccc', textAlign: 'center', padding: '5px' }}>
                        {user.lastLogin}
                      </TableCell>
                      <TableCell sx={{ borderBottom: '1px solid #ccc', textAlign: 'center', padding: '5px' }}>
                        <IconButton onClick={() => setEditUser(user)}>
                         
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Grid>

        {/* Right Column - User Information and Statistics */}
        <Grid item xs={12} md={6}>
          {/* User Information Container */}
          <Box
            sx={{
              backgroundColor: '#fff',
              boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ padding: '10px', borderBottom: '1px solid #ccc', color: '#0099FF' }}>
              User Information
            </Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Username</TableCell>
                    <TableCell>Display Name</TableCell>
                    <TableCell>Last Login</TableCell>
                    <TableCell>Edit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{editUser.username}</TableCell>
                    <TableCell>{editUser.displayName}</TableCell>
                    <TableCell>{editUser.lastLogin}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
              Role Editor
            </Typography>
            <Box>
              <Checkbox /> Administrator
              <Checkbox /> Regular User
              <Checkbox /> EAC Developer
            </Box>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Save Changes
            </Button>
          </Box>

          {/* Statistics Section */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
                  padding: '20px',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}
              >
                <Typography variant="h6">Number of requests made today</Typography>
                <Typography variant="body1">
                  Total: <span style={{ color: '#0099FF' }}>40</span>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  backgroundColor: '#fff',
                  boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
                  padding: '20px',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6">Number of visitors today</Typography>
                <Typography variant="body1">
                  Total: <span style={{ color: '#0099FF' }}>120</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ManageUserPage;
