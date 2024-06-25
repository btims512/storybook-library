import React from "react";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ header, subtitle, icon, picture, button }) => {
  return (
    <div className="hero">
      <div className="hero-left">
        {icon && <div className="">{icon}</div>}
        <div className="hero-text">
          <div className="large-title hero-header">{header}</div>
          <div className="headline hero-subtitle">{subtitle}</div>
        </div>
        {button && <div className="hero-button">{button}</div>}
      </div>
      <div className="hero-right">
        {picture && <img src={picture} alt="Hero" className="hero-picture" />}
      </div>
    </div>
  );
};

Hero.propTypes = {
  header: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  icon: PropTypes.element,
  picture: PropTypes.string,
  button: PropTypes.element,
};

export default Hero;
