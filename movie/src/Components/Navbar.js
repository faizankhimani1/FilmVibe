import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [username, setUsername] = useState(null); // To track the username
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token and username from localStorage
    const savedUsername = localStorage.getItem("username");
    const token = localStorage.getItem("token");

    if (savedUsername && token) {
      setUsername(savedUsername); // Set the username if the user is logged in
    }
  }, []);

  const handleLogin = () => {
    navigate("/LoginPage");
  };

  const handleSignUp = () => {
    navigate("/SignUpPage");
  };

  const handleLogout = () => {
    // Clear the token and username from localStorage and update the state
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(null);
    navigate("/LoginPage");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            FilmVibe
          </span>
        </a>

        <div className="flex items-center space-x-3 md:order-2 md:space-x-3 rtl:space-x-reverse">
          <form onSubmit={handleSearch} className="flex items-center">
            <input
              type="text"
              className="p-2 text-sm bg-gray-200 rounded-lg focus:outline-none"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="ml-2 p-2 text-sm text-white bg-purple-700 rounded-lg hover:bg-purple-800"
            >
              Search
            </button>
          </form>

          {username ? (
            <>
              <span className="text-white">Welcome, {username}!</span>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="focus:outline-none text-white bg-white-700 hover:bg-white-800 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-white-700 dark:focus:ring-white-900"
                onClick={handleLogin}
              >
                Login
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="/"
                className="block px-3 py-2 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/About"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/ContactPage"
                className="block px-3 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
