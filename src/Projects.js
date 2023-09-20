import React, { useEffect, useState } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 1, scale: 0 },
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
  expanded: {
    zIndex: 2,
    scale: 1,
  },
};

const Projects = () => {
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const section3 = document.getElementById("section3");
      if (section3) {
        const { top, height } = section3.getBoundingClientRect();
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

  const handleItemClick = (index) => {
    setExpandedItem((prevItem) => (prevItem === index ? null : index));
  };

  const projectsData = [
    {
      title: "Tic Tac Toe",
      description:
        "A game of tic tac toe using simple JavaScript logic, that can be played by two users.",
      link: "https://tomtenniscourt.github.io/tic_tac_toe_200623/",
    },
    {
      title: "Dad Jokes",
      description:
        "Using a 3rd party API, a random 'Dad Joke' is generated on the screen for the user.",
      link: "https://dad-joke-generator-phi.vercel.app/",
    },
    {
      title: "Weather App",
      description:
        "An application that uses an API to fetch weather information for any given U.S. zip code.",
      link: "https://my-project-2-47ihbr2ba-tomtenniscourt.vercel.app/",
    },
    {
      title: "Football Friends",
      description:
        "A fullstack football-themed social media site that enables fans to connect with other users.",
      link: "https://football-friends.vercel.app/",
    },
  ];

  return (
    <div className="project-content">
      <div id="projects-section">
        {isSectionVisible && (
          <motion.ul
            className="container"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {projectsData.map((project, index) => (
              <motion.li
                key={index}
                className={`item ${expandedItem === index ? "expanded" : ""}`}
                variants={item}
                onClick={() => handleItemClick(index)}
                whileHover={{ scale: 1 }}
              >
                <div className="content-item">
                  <h2 className="item-h2">{project.title}</h2>
                  <p className="item-p">{project.description}</p>
                  <a
                    className="button-go"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to App
                  </a>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </div>
    </div>
  );
};

export default Projects;
