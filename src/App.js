import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactForm from "./ContactForm";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  return (
    <div className="App">
      <h1>hello world</h1>
    </div>
  );
}

export default App;
