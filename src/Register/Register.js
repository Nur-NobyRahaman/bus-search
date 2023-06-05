import { Box, Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';

const Register = () => {
    return (
        <Card
         
        sx={{
          bgcolor: "#2e7d32",
          width: "25vw",
          height: "35vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent sx={{}}>
          <Typography
            sx={{ fontSize: 22, color: "white" ,fontWeight:'bold'}}
            color="text.secondary"
            gutterBottom
          >
            Please Register
          </Typography>
          <Button
          color='success'
            sx={{ width: "20vw", mt: 1.5, p: 1 }}
            size="small"
            variant="contained"
          >
            Register
          </Button>
          <Typography
            sx={{ fontSize: 14, color: "white",mt:1 }}
            color="text.secondary"
            gutterBottom
          >
           Already have account? <a href="">Login</a>
          </Typography>
        </CardContent>
      </Card>
    );
};

export default Register;