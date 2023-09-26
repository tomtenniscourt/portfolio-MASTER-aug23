import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./ContactForm.css";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
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

        setIsSectionVisible(visiblePercentage >= 0.25);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          >
            <h2 className="contact-item-title">Hello!</h2>
            <p className="contact-item-text">
              Outside of my professional life, I am an avid sports fan and music
              enthusiast.
              <br />
              <br />
              Most of my weekends are planned around whatever sports games will
              be happening. I follow teams in Football, Rugby, Cricket, NFL,
              MLB, and the NBA, and will consider watching other sports if the right
              stars align. As well as this, I am an active skier and on
              occasions are known to bowl a couple of overs during a cricket
              game - but please don't expect me to then hit the ball very far.
              <br />
              <br />
              Music wise, I have been playing guitar for almost twenty years and
              have previously played in numerous bands across the South-East. I
              absolutely love live music, and will go along to see pretty much
              anything - from ABBA to Anthrax, I love them all! Got any good
              recommendations? Please do send them along and I will be sure to
              return the favour.
              <br />
              <br />
              Outside of Sports, Music, and Coding, I live in London with my
              partner and love to spend free time either inside with friends and
              a cold pint or outdoors looking for the next adventure.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default ContactForm;
