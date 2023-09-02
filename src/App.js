import React, { useState } from 'react';
import './App.css';
import ExcelImporter from './ExcelImporter';
import Navbar from './Navbar'; // Import the Navbar component

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (newDarkMode) => {
    setIsDarkMode(newDarkMode);
    // You can also store the current dark mode state in localStorage or a cookie for persistence
  };


  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} onToggleDarkMode={toggleDarkMode} />
      <h1>Excel Importer</h1>
      <ExcelImporter isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
