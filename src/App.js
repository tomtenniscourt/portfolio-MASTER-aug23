import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Projects from "./Projects";
import Skills from "./Skills";
import ContactForm from "./ContactForm";

import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const navBarHeight = 60;

  const navLinkStyle = {
    color: "#ffffff",
    fontSize: "1rem",
    fontWeight: "bold",
    marginLeft: "20px",
    cursor: "pointer",
  };

  const underlineStyle = {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "2px",
    backgroundColor: "#ffffff",
    transformOrigin: "bottom right",
  };

  const sectionStyle = {
    height: "1000px",
    marginBottom: "25px",
  };

  const contentStyle = {
    paddingTop: navBarHeight + "px",
  };

  const logoImage = "https://i.imgur.com/NF2gNgt.png";
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  const emailSubject = "Inquiry from Website";

  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <Navbar.Brand
          href="#home"
          style={{ color: "#ffffff", fontSize: "1.5rem", fontWeight: "bold" }}
        >
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: "40px", borderRadius: "40%", marginLeft: "10px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
            >
              <motion.div
                whileHover={{ y: -2, color: "#ffcc00" }}
                style={navLinkStyle}
              >
                Home
              </motion.div>
              <motion.div
                style={{ ...underlineStyle, scaleX }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ type: "tween", ease: "easeOut" }}
              />
            </Link>
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
            >
              <motion.div
                whileHover={{ y: -2, color: "#ffcc00" }}
                style={navLinkStyle}
              >
                Projects
              </motion.div>
              <motion.div
                style={{ ...underlineStyle, scaleX }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ type: "tween", ease: "easeOut" }}
              />
            </Link>
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
            >
              <motion.div
                whileHover={{ y: -2, color: "#ffcc00" }}
                style={navLinkStyle}
              >
                Skills and Experience
              </motion.div>
              <motion.div
                style={{ ...underlineStyle, scaleX }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ type: "tween", ease: "easeOut" }}
              />
            </Link>
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-navBarHeight}
              duration={500}
            >
              <motion.div
                whileHover={{ y: -2, color: "#ffcc00" }}
                style={navLinkStyle}
              >
                About
              </motion.div>
              <motion.div
                style={{ ...underlineStyle, scaleX }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ type: "tween", ease: "easeOut" }}
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div
        style={{
          backgroundImage: 'url("https://i.imgur.com/09mIBEt.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          paddingTop: navBarHeight + "px",
        }}
      >
        <div className="full-page">
          <div id="section1" className="section">
            <div className="home-content">
              <h1 className="home-h1">Tom Court xx: Software Engineer</h1>
              <p className="home-p"></p>
              <img
                className="picture"
                src="https://i.imgur.com/NF2gNgt.png"
              ></img>
              <div className="my-contact-items">
                <motion.a
                  href="https://www.instagram.com/tomtenniscourt/"
                  variants={item}
                >
                  <motion.img
                    className="sm-profile"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
                    alt="Link to Instagram"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.3,
                    }}
                  />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/tom-court/"
                  variants={item}
                >
                  <motion.img
                    className="sm-profile"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
                    alt="Link to LinkedIn"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.5,
                    }}
                  />
                </motion.a>
                <motion.a
                  href="https://github.com/tomtenniscourt"
                  variants={item}
                >
                  <motion.img
                    className="sm-profile"
                    src="https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
                    alt="Link to GitHub"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.7,
                    }}
                  />
                </motion.a>
                <motion.a
                  href={`mailto:tomcourt94@icloud.com?subject=${encodeURIComponent(
                    emailSubject
                  )}`}
                  variants={item}
                >
                  <motion.img
                    className="email-profile"
                    src="https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Mail-512.png"
                    alt="Email Tom"
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                      delay: 0.9,
                    }}
                  />
                </motion.a>
              </div>
            </div>
          </div>

          <div id="section3" className="section">
            {/* Section 3 content (Projects) */}
            <h1 class="test-h1">PROJECTS</h1>
            <Projects />
          </div>

          <div id="section4" className="section">
            {/* Section 4 content (Skills) */}
            <h1 class="test-h1-skills">SKILLS AND EXPERIENCE</h1>

            <Skills />
          </div>

          <div id="section5" className="section">
            {/* Section 5 content */}
            <h1 class="test-h1-contact">ABOUT ME</h1>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
