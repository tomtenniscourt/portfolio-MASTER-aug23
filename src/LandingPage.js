// LandingPage.js
import React, { useState } from "react";
import "./LandingPage.css"; // Import the CSS file for the landing page

function LandingPage({ onEnterClick }) {
  const [showContent, setShowContent] = useState(false);

  const handleEnterClick = () => {
    setShowContent(true);
    onEnterClick();
  };

  return (
    <div className={`landing-page ${showContent ? "hidden" : ""}`}>
      <h1 className="h1-lp">Hello</h1>
      <button onClick={handleEnterClick}>Enter</button>
    </div>
  );
}

export default LandingPage;
