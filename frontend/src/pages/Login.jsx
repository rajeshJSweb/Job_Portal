import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const mockUser = {
  email: "test@example.com",
  password: "password123",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === mockUser.email && password === mockUser.password) {
      // Mock JWT token generation
      const mockToken = btoa(
        JSON.stringify({
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        })
      );
      localStorage.setItem("token", `header.${mockToken}.signature`);
      navigate("/jobs");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Paper elevation={10} style={{ padding: 16, borderRadius: 10 }}>
        <Avatar
          sx={{
            mx: "auto",
            textAlign: "center",
            mb: 1,
            bgcolor: "secondary.main",
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
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
            Dont have an account <Link to="/register">Register</Link>
          </Typography>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
