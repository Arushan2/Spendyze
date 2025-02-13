import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

function RegisterPage() {
  const [fullName, setFullName] = useState(""); // extra field for full name
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTnC, setAcceptedTnC] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [statusMsg, setStatusMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!acceptedTnC) return; // prevent submission if T&C not accepted

    setErrorMsg("");
    setStatusMsg("");

    try {
      const response = await fetch("https://spendyze.duckdns.org/create_account", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({ fullName, username, password })
      });
      const text = await response.text();
      if (response.ok && text.includes("successfully")) {
        setStatusMsg("Account created! You can now log in.");
        // Optionally, auto-redirect to login:
        // navigate("/login");
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
          Register for Spendyze
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
        <Stack spacing={2} component="form" onSubmit={handleRegister}>
          <TextField
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
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
              Register
            </Button>
            <Button component={Link} to="/login" variant="outlined">
              Back to Login
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}

export default RegisterPage;
