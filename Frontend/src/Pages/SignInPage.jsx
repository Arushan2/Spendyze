import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "./useAuth";
import {
  Paper,
  Typography,
  TextField,
  Button,
  Stack,
  Alert,
  Box,
  Checkbox,
  FormControlLabel
} from "@mui/material";

function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTnC, setAcceptedTnC] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const userId = sessionStorage.getItem("userId");
    if (userId) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!acceptedTnC) return; // prevent submission if T&C not accepted

    setErrorMsg("");
    setStatusMsg("");

    try {
      const response = await fetch("https://spendyze.duckdns.org/login", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ username, password })
      });
      const text = await response.text();
      if (response.ok && text.includes("successful")) {
        setStatusMsg("Login successful!");
        sessionStorage.setItem("userId", username);
        login();
        navigate("/home");
      } else {
        setErrorMsg(text);
      }
    } catch (err) {
      setErrorMsg("Network or server error.");
    }
  };

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >
      <Paper elevation={4} sx={{ width: "100%", maxWidth: 400, p: 4 }}>
        <Typography variant="h5" mb={2}>
          Sign In to Spendyze
        </Typography>
        {errorMsg && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {errorMsg}
          </Alert>
        )}
        {statusMsg && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {statusMsg}
          </Alert>
        )}
        <Stack spacing={2} component="form" onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={acceptedTnC}
                onChange={(e) => setAcceptedTnC(e.target.checked)}
                color="primary"
              />
            }
            label={
              <span>
                I accept the{" "}
                <Link to="/terms" style={{ textDecoration: "underline" }}>
                  Terms and Conditions
                </Link>
              </span>
            }
          />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button type="submit" variant="contained" disabled={!acceptedTnC}>
              Login
            </Button>
            <Button component={Link} to="/register" variant="outlined">
              Register
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

export default SignInPage;
