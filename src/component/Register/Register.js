import { Box, Button, Card, CardContent, FormControl, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from "@mui/icons-material/Google";
import { useSnackbar } from 'notistack';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import app from '../../firebase.init';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const auth = getAuth(app);
  const { enqueueSnackbar } = useSnackbar();

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }
  const handleRegister = (e) => {

    e.preventDefault()

    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user
          setConfirmPassword('');
          setEmail('');
          setName('');
          setPassword('');
          emailVerification();
          setUserName();
        })
        .catch((error) => {
          if(error.message === "Firebase: Error (auth/email-already-in-use)."){
            enqueueSnackbar('this email already used', { variant: 'error' })
          }
          
        })
    }
    else {
      enqueueSnackbar('Password are not match', { variant: 'warning' })
    }
  }

  const emailVerification = ()=>{
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      enqueueSnackbar('Email verification sent!', { variant: 'success' })
    })
  }
  const setUserName =()=>{
    updateProfile(auth.currentUser,{
      displayName: name
    })
    .then(()=>{
      console.log("profile updated");
    })
    .catch((error)=>{
       console.log(error)
    })
  }
  return (
    <Box>
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card sx={{
            width: { lg: "42vw", xl: "42vw", sm: "40vw", md: "41vw" },
            height: "65vh"
          }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 22, fontWeight: 'bold' }}
                color="text.secondary"
                gutterBottom
              >
                Please Register
              </Typography>
              <form onSubmit={handleRegister}>
                <TextField
                  onChange={handleName}
                  color="success"
                  sx={{ width: "25vw" }}
                  margin="normal"
                  size="small"
                  id="outlined-basic"
                  label="Name"
                  value={name}
                  type='text'
                  variant="outlined"
                  required
                />
                <br></br>
                <TextField
                  value={email}
                  onChange={handleEmail}
                  color="success"
                  sx={{ width: "25vw" }}
                  margin="normal"
                  size="small"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type='email'
                  required
                />
                <br></br>
                <TextField
                  value={password}
                  onChange={handlePassword}
                  color="success"
                  sx={{ width: "25vw" }}
                  margin="normal"
                  size="small"
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  required
                />
                <br></br>
                <TextField
                  value={confirmPassword}
                  onChange={handleConfirmPassword}
                  color="success"
                  sx={{ width: "25vw" }}
                  margin="normal"
                  size="small"
                  type="password"
                  id="outlined-basic"
                  label="Confirm-Password"
                  variant="outlined"
                  required
                />
                <br></br>
                <Button
                  sx={{ width: "25vw", mt: 1.5, p: 1 }}
                  size="small"
                  variant="contained"
                  type='submit'
                >
                  Register
                </Button>
              </form>

              <Button
                // onClick={handleGoogle}
                color="common"
                sx={{ width: "25vw", mt: 1.5, p: 1 }}
                size="small"
                variant="contained"
                startIcon={<GoogleIcon color="warning"></GoogleIcon>}
              >
                Google
              </Button>
            </CardContent>
          </Card>
          <Card

            sx={{
              bgcolor: "#2e7d32",
              width: { lg: "22vw", xl: "20vw", sm: "22vw", md: "22vw" },
              height: "65vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardContent sx={{}}>
              <Typography
                sx={{ fontSize: 22, color: "white", fontWeight: 'bold' }}
                color="text.secondary"
                gutterBottom
              >
                Please Login
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "white", mt: 1 }}
                color="text.secondary"
                gutterBottom
              >
                Already have account?
              </Typography>

              <Link to={'/login'}>
                <Button
                  color='success'
                  sx={{ width: { lg: "20vw", xl: "18vw", sm: "15vw" }, mt: 1.5, p: 1 }}
                  size="small"
                  variant="contained"

                >
                  Login
                </Button></Link>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;