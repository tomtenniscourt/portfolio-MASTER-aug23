import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 2.5,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const ContactForm = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section5 = document.getElementById("section5");
      if (section5) {
        const { top, height } = section5.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const visiblePercentage = (viewportHeight - top) / height;

        setIsSectionVisible(visiblePercentage >= 0.55);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const emailSubject = "Inquiry from Website";

  return (
    <>
      <div className="contact-form-section">
        <motion.div
          className="contact-container"
          variants={container}
          initial="hidden"
          animate={isSectionVisible ? "visible" : "hidden"}
        >
          <motion.div
            className="contact-item"
            variants={item}
            whileHover={{ scale: 1.2 }}
          >
            <h2 className="contact-item-title">Hello!</h2>
            <p className="contact-item-text">
              Outside of my professional life, I am an avid sports fan and music
              enthusiast.
              <br />
              <br />
              Most of my weekends are planned around whatever sports games will
              be happening. I actively follow teams in Football, Rugby, Cricket,
              NFL, MLB, and the NBA.
              <br />
              <br /> 
              Music wise, I have been playing guitar for almost twenty years and have previously played in numerous bands across the South-East. 
              I love live music, and will go along to see pretty much anything - from ABBA to Anthrax, I love them all!
              <br />
              <br />
              Outside of Sports, Music, and Coding, I live in London with my partner and love to spend free time either inside with friends and a cold pint or outdoors looking for the next adventure. 
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;