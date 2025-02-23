import React, { createContext, useState, useContext } from 'react';

// Create a context for theme
const ThemeContext = createContext();

// Custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");
  console.log(mode);

  // Toggle between light and dark mode
  const toggleMode = () => {
    setMode(prevMode => prevMode === "light" ? "dark" : "light");
  };

  // Change theme background color
  const themeChange = (color) => {
    if (color === 'green') {
      document.body.style.backgroundColor = 'green';
    } else if (color === 'red') {
      document.body.style.backgroundColor = 'red';
    } else {
      // Set the background color based on the mode
      document.body.style.backgroundColor = mode === "light" ? 'white' : '#121212'; // Use a dark color for dark mode
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleMode, themeChange }}>
      {children}
    </ThemeContext.Provider>
  );
};