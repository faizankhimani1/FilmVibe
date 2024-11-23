/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/About";
import LoginPage from "./Components/LoginPage";
import SignUpPage from "./Components/SignUpPage";
import ContactPage from "./Components/ContactPage";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import TermsOfService from "./Components/TermsOfService";
import HomePage from "./Components/HomePage";
import MovieDetailPage from "./Components/MovieDetailPage";
import SearchResults from "./Components/SearchResults";
import PrivateRoute from "./Components/PrivateRoute"; // Import PrivateRoute

const initialMovies = [
  {
    id: 1,
    title: "Kalki 2898 AD",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kalki-2898-ad-et00352941-1718275859.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 2,
    title: "Kill",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kill-et00374797-1718179453.jpg",
  },
  {
    id: 3,
    title: "Stree 2",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 4,
    title: "Bad Newz",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bad-newz-et00391805-1721214274.jpg",
  },
  {
    id: 5,
    title: "Khel Khel Mein",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/khel-khel-mein-et00399518-1722516491.jpg",
  },
  {
    id: 6,
    title: "Joker",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/joker-folie-a-deux-et00352820-1730374353.jpg",
  },
  {
    id: 7,
    title: "Thalapathy is the G.O.A.T.",
    imageUrl:
          "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thalapathy-is-the-goat-et00401441-1725014881.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 8,
    title: "Kahan Shuru Kahan Khatam",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/kahan-shuru-kahan-khatam-et00408945-1725623704.jpg",
  },
  {
    id: 9,
    title: "Auron Mein Kahan Dum Tha",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/auron-mein-kahan-dum-tha-et00378240-1722408422.jpg", // Replace with actual movie imageUrl URL
  },
  {
    id: 10,
    title: "Vedaa",
    imageUrl:
      "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vedaa-et00386426-1723550870.jpg",
  }, // Add more movie objects as needed

];


function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const [username, setUsername] = useState(null); // Track logged-in username

  // Check localStorage for token and username when the app initializes
  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUsername = localStorage.getItem("username");
    if (token) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
    setUsername(null);
  };

  const handleSearch = (query) => {
    const filteredMovies = initialMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filteredMovies);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar 
            isLoggedIn={isLoggedIn} 
            username={username} 
            onSearch={handleSearch} 
            onLogout={handleLogout} 
          />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute isLoggedIn={isLoggedIn}>
                  <HomePage movies={movies} />
                </PrivateRoute>
              }
            />
            <Route path="/movies/:id" element={<MovieDetailPage />} />
            <Route path="/About" element={<AboutUs />} />
            <Route path="/SignUpPage" element={<SignUpPage />} />
            <Route
              path="/LoginPage"
              element={<LoginPage onLogin={handleLogin} />}
            />
            <Route path="/ContactPage" element={<ContactPage />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/TermsOfService" element={<TermsOfService />} />
            <Route path="/search" element={<SearchResults movies={searchResults} />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
