import React from 'react';
import DarkModeToggle from './DarkModeToggle'; // Import the DarkModeToggle component
import './Navbar.css'; // Import the CSS for the navbar

function Navbar({ isDarkMode, onToggleDarkMode }) {
  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : ''}`}>
      <h1>My App</h1>
      <DarkModeToggle isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    </nav>
  );
}

export default Navbar;
