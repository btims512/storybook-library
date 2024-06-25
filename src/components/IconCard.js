import React from "react";
import PropTypes from "prop-types";
import "./IconCard.css";

const IconCard = ({ icon, title, description }) => {
  return (
    <div className="icon-card">
      <div className="icon-card-icon">{icon}</div>
      <div className="icon-card-title">{title}</div>
      <div className="icon-card-description">{description}</div>
    </div>
  );
};

IconCard.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default IconCard;
