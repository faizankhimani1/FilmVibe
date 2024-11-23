import React, { useState } from "react";
import { Container, Box, TextField, Button, Typography, Alert, Paper } from "@mui/material";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSuccess(false);
    setError("");

    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setMessage("");
        setSuccess(true);
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10, mb: 10 }}>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
          boxShadow: "5px 5px 10px #d3d3d3, -5px -5px 10px #ffffff",
        }}
      >
        <Typography variant="h4" component="h1" textAlign="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Get in Touch
        </Typography>
        <Typography variant="body1" textAlign="center" color="text.secondary" sx={{ mb: 3 }}>
          We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as possible.
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Your message has been sent successfully!
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            fullWidth
            multiline
            rows={4}
            variant="outlined"
            sx={{ mb: 3 }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#115293",
              },
            }}
          >
            Send Message
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ContactPage;
