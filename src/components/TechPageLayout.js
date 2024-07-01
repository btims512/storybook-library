import React from "react";
import PropTypes from "prop-types";
import "./TechPageLayout.css";
import IconCard from "./IconCard";

const TechPageLayout = ({ title, iconCards }) => {
  return (
    <div className="tech-page-layout">
      <div className="section-title">{title}</div>
      <div className="tech-page-cards">
        {iconCards.map((iconCard, index) => (
          <IconCard key={index} {...iconCard} />
        ))}
      </div>
    </div>
  );
};

TechPageLayout.propTypes = {
  title: PropTypes.string.isRequired,
  iconCards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TechPageLayout;
