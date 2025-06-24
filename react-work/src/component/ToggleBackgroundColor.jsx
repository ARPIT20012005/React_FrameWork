import React, { useState } from "react";
import "../component/Toggle.css";

const ToggleBackgroundColor = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleClick = () => {
    setIsDarkMode((prev) => !prev);
  };

  const backgroundColor = isDarkMode ? "#1b1b1b" : "white";
  const textColor = isDarkMode ? "#ffa31a" : "#1b1b1b";
  const buttonBackground = isDarkMode ? "white" : "#1b1b1b";

  return (
    <div style={{ backgroundColor, color: textColor, minHeight: "100vh", padding: "20px" }}>
      <button
        onClick={handleClick}
        style={{
          color: textColor,
          backgroundColor: buttonBackground,
          border: `2px solid ${textColor}`,
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "8px",
        }}
      >
        {isDarkMode ? "Switch to Light Theme" : "Switch to Dark Theme"}
      </button>

      <section className="content">
        <h1>
          Welcome To a <br />
          Real World...
        </h1>
      </section>
    </div>
  );
};

export default ToggleBackgroundColor;
