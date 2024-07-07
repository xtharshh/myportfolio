import React, { useState, useEffect } from "react";
import "../styles/toggles.css"; // Make sure to import your CSS file

const Darkmode = () => {
  const [isLightTheme, setIsLightTheme] = useState(false); // State to track if light theme is active

  useEffect(() => {
    // Apply the theme on initial render and when isLightTheme changes
    document.documentElement.setAttribute(
      "data-theme",
      isLightTheme ? "light" : "dark"
    );
  }, [isLightTheme]);

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme); // Toggle the state
  };

  return (
    <div className="App">
      <label class="switch">
        <input type="checkbox" onChange={toggleTheme} checked={isLightTheme} />
        <span class="slider round"></span>
      </label>
      {/* Rest of your app */}
    </div>
  );
};

export default Darkmode;
