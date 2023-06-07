import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Register from "../Register/Register";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";
import { Link } from "react-router-dom";
import Links from '@mui/material/Link';
import { useSnackbar } from "notistack";

const Login = () => {
  // const [user, setUser] = useState();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { enqueueSnackbar } = useSnackbar();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
















  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user)

      })
      .catch((error) => {
        console.log("error", error)
      })
  };
  const handleLogin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        console.log(error.message)
        enqueueSnackbar(`${error.message}`, { variant: 'error' })
      })

  }

const handleResetPassword =()=>{
  sendPasswordResetEmail(auth,email)
  .then(()=>{
    enqueueSnackbar("Password reset email sent!", { variant: 'success' })
   
  })
  .catch((error)=>{
    console.log(error.message)
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
            height: "50vh"
          }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 22, fontWeight: 'bold' }}
                color="text.secondary"
                gutterBottom
              >
                Please Login
              </Typography>

              <form action="" onSubmit={handleLogin}>
                <TextField
                  onChange={(e) => setEmail(e.target.value)}
                  color="success"
                  sx={{ width: "25vw" }}
                  margin="normal"
                  size="small"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  value={email}
                  required
                />
                <br></br>
                <TextField
                  onChange={(e) => setPassword(e.target.value)}
                  color="success"
                  sx={{ width: "25vw" }}
                  margin="normal"
                  size="small"
                  type="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  value={password}
                  required
                />
                <br></br>
                <Links onClick={handleResetPassword} sx={{display:'block', textAlign:'center',fontSize:12,cursor:'pointer'}}>Forget Password?</Links>
                <Button
                  sx={{ width: "25vw", mt: 1.5, p: 1 ,}}
                  size="small"
                  variant="contained"
                  type="submit"
                >
                  Login
                </Button>
              </form>


              <Button
                onClick={handleGoogle}
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
              height: "50vh",
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
                Please Register
              </Typography>
              <Typography
                sx={{ fontSize: 14, color: "white", mt: 1 }}
                color="text.secondary"
                gutterBottom
              >
                have n't account?
              </Typography>
              <Link to={'/register'}><Button
                color='success'
                sx={{ width: { lg: "20vw", xl: "18vw", sm: "15vw" }, mt: 1.5, p: 1 }}
                size="small"
                variant="contained"
              >
                Register
              </Button></Link>


            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
