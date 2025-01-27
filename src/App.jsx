import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  // Get saved theme from localStorage or default to light mode
  const savedTheme = localStorage.getItem("theme");
  const initialDarkMode = savedTheme ? savedTheme === "dark" : false;

  const [darkMode, setDarkMode] = useState(initialDarkMode); // State to toggle dark mode

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <div className={`min-h-screen ${darkMode ? "dark" : ""} transition-colors duration-300`}>
        {/* Navbar */}
        <Navbar />

        {/* Content */}
        <div className="bg-white dark:bg-gray-900 dark:text-white transition-colors duration-300">
          <Home />
          <About />
          <Experiance />
          <Project />
          <Contact />
          <Footer />
        </div>

        {/* Dark Mode Toggle Button */}
        <div className="fixed bottom-4 right-4 z-50">
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition duration-300"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Toaster for notifications */}
      <Toaster />
    </>
  );
}

export default App;
