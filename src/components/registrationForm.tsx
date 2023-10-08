import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GithubIcon from '@mui/icons-material/GitHub';
import { Paper, TextField, Button, Typography, Container, IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signUp } from '../actions/authentication';
import { RootState } from '../store';

function RegistrationForm() {
  const navigate = useNavigate();
  const id = useSelector((state: RootState) => state.AuthSlice.auth?.user._id);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (id == null) return;
    navigate('/');
  }, [id, navigate]);

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
    // Add your Registrayion logic here
    dispatch(signUp(email, password));
  };

  return (
    <Container style={containerStyle}>
      <Paper elevation={3} style={paperStyle}>
        <Typography variant="h5">Registration</Typography>
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
          <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <IconButton>
              <GithubIcon style={{ fontSize: '25px' }} />
            </IconButton>
            <IconButton>
              <FacebookIcon style={{ color: '#0000FF', fontSize: '25px' }} />
            </IconButton>
            <IconButton>
              <LinkedInIcon style={{ color: '#0000FF', fontSize: '25px' }} />
            </IconButton>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={submitButtonStyle}
          >
            Register
          </Button>
        </form>
        <div style={{ margin: '10px auto 0' }}>
          <Link to="/login">Already have an account ?</Link>
        </div>
      </Paper>
    </Container>
  );
}

export default RegistrationForm;
