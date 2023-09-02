import React, { useState } from 'react';
import './DarkModeToggle.css';

function DarkModeToggle({ onToggleDarkMode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevIsDarkMode) => !prevIsDarkMode);
    onToggleDarkMode(!isDarkMode); // Pass the updated dark mode state to the parent component
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <label>
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        Dark Mode
      </label>
    </div>
  );
}

export default DarkModeToggle;
