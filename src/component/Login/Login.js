import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Register from "../../Register/Register";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase.init";

const Login = () => {
    const [user,setUser] = useState();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
  const handleGoogle = () => {
    signInWithPopup(auth,provider)
    .then((result)=>{
        const user = result.user;
        setUser(user)
        
    })
    .catch((error)=>{
        console.log("error",error)
    })
  };
//   console.log("user",user?.email)
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
          <Card sx={{ width: "45vw", height: "35vh" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 22 ,fontWeight:'bold'}}
                color="text.secondary"
                gutterBottom
              >
                Please Login
              </Typography>
              <TextField
                sx={{ width: "25vw" }}
                margin="normal"
                size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
              <br></br>
              <TextField
                sx={{ width: "25vw" }}
                margin="normal"
                size="small"
                type="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
              />
              <br></br>
              <Button
                sx={{ width: "25vw", mt: 1.5, p: 1 }}
                size="small"
                variant="contained"
              >
                Login
              </Button>
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
          <Register></Register>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
