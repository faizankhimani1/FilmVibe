// src/Components/PrivateRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if the token exists in localStorage

  return isAuthenticated ? children : <Navigate to="/LoginPage" />;
};

export default PrivateRoute;
