/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, Grid, Box, Button } from "@mui/material";

const movies = [
  {
    id: 1,
    title: "Kalki 2898 AD",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg", // Replace with actual movie poster URL
  },
  {
    id: 2,
    title: "Kill",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg",
  },
  {
    id: 3,
    title: "Stree 2",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg", // Replace with actual movie poster URL
  },
  {
    id: 4,
    title: "Bad Newz",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bad-newz-et00391805-1721214274.jpg",
  },
  {
    id: 5,
    title: "Khel Khel Mein",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg",
  },
  {
    id: 6,
    title: "Joker",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/joker-folie-a-deux-et00352820-1730374353.jpg",
  },
  {
    id: 7,
    title: "Thalapathy is the G.O.A.T.",
    poster:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thalapathy-is-the-goat-et00401441-1725014881.jpg", // Replace with actual movie poster URL
  },
  {
    id: 8,
    title: "Kahan Shuru Kahan Khatam",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kahan-shuru-kahan-khatam-et00408945-1725623704.jpg",
  },
  {
    id: 9,
    title: "Auron Mein Kahan Dum Tha",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/auron-mein-kahan-dum-tha-et00378240-1722408422.jpg", // Replace with actual movie poster URL
  },
  {
    id: 10,
    title: "Vedaa",
    poster:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vedaa-et00386426-1723550870.jpg",
  },
  // Add more movie objects here
];


const HomePage = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the username and token from localStorage
    const savedUsername = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    // If no username or token is found, redirect to login page
    if (!savedUsername || !token) {
      navigate("/LoginPage");
    } else {
      // Reload the browser after successful login
        
      setUsername(savedUsername);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the token and username on logout
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/LoginPage");
  };

  return (
    
    <Box sx={{ padding: "20px" }}>
     
      <Grid container spacing={5}>
        {movies.map((movie) => (
          <Grid item xs={6} sm={4} md={2.3} key={movie.id}>
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none" }}>
              <Card sx={{ maxWidth: 200, margin: "auto", padding: "auto" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={movie.poster}
                  alt={movie.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ fontSize: "20px" }}>
                    {movie.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
