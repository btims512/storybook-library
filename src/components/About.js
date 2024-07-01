import React from "react";
import PropTypes from "prop-types";
import "./About.css";

const About = ({ title, text, icon }) => {
  return (
    <div className="about">
      <div className="about-content"> {/* This div centers the content */}
        <div className="about-text">
          <h1 className="about-title">{title}</h1>
          {text.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-icon">{icon}</div>
      </div>
    </div>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.arrayOf(PropTypes.string).isRequired,
  icon: PropTypes.element.isRequired,
};

export default About;
