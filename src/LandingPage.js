import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import "./LandingPage.css";

function LandingPage({ onEnterClick }) {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [hideLandingPage, setHideLandingPage] = useState(false);

  useEffect(() => {
    const delay = setTimeout(() => {
      setShowContent(true);
    }, 1100);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (showContent) {
      const buttonDelay = setTimeout(() => {
        setShowButton(true);
      }, 1000);

      return () => clearTimeout(buttonDelay);
    }
  }, [showContent]);

  const handleEnterClick = () => {
    setShowContent(true);
    setHideLandingPage(true);

    setTimeout(() => {
      onEnterClick();
    }, 1100);
  };

  return (
    <div className={`landing-page ${hideLandingPage ? "fade-out" : ""}`}>
      <h1
        className={`h1-lp ${showContent ? "fade-in" : ""}`}
        style={{
          transition: "opacity 1.1s",
          opacity: showContent ? 1 : 0,
        }}
      >
        Hello
      </h1>
      <Button
        className={`enter-button ${showButton ? "fade-in" : ""}`}
        onClick={handleEnterClick}
        style={{
          transition: "opacity 1.1s",
          opacity: showButton ? 1 : 0,
        }}
      >
        Enter
      </Button>
    </div>
  );
}

export default LandingPage;
