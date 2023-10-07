import React, { useState } from 'react';
import { Paper, TextField, Button, Typography, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

  const paperStyle = {
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px',
  };

  const formStyle = {
    width: '100%',
    marginTop: '8px',
  };

  const submitButtonStyle = {
    marginTop: '16px',
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <Container style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5">Login</Typography>
        <form style={formStyle} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submitButtonStyle}
            onClick={() => navigate('/')}
          >
            Sign In
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginForm;
