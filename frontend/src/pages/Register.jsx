import { LockOpenOutlined } from "@mui/icons-material";
import { Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleRegister = () => {
    // Mock user registration
    const newUser = { fullname, email, password };
    try {
      localStorage.setItem("user", JSON.stringify(newUser));
      navigate("/login");
    } catch (error) {
      console.error("Error registering user:", error);
      setError("Error registering user. Please try again.");
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={10} style={{ padding: 16, borderRadius: 10 }}>
        <Avatar
          sx={{
            mx: "auto",
            textAlign: "center",
            mb: 1,
            bgcolor: "secondary.main",
          }}
        >
          <LockOpenOutlined />
        </Avatar>
        <Typography variant="h5" align="center">
          Register
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            color="primary"
            onClick={handleRegister}
            sx={{
              display: "block",
              mx: "auto",
              mt: 2,
            }}
          >
            Login
          </Button>
        </Box>
        <Grid container justifyContent="center">
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Register;
