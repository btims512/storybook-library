// src/components/ProjectCard.js
import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import Text from './Text';
import Button from './Button';

const ProjectCard = ({ title, description, tech, codeLink, visitLink, icon }) => {
  return (
    <div className="project-card">
      <div className="project-card-header">
        {icon && <img src={icon} alt="Project Icon" className="project-card-icon" />}
        <div>
          <Text className="project-card-title">{title}</Text>
          <Text className="project-card-tech">Tech: {tech}</Text>
        </div>
      </div>
      <Text className="project-card-description">{description}</Text>
      <div className="project-card-buttons">
        <Button label="Code" onClick={() => window.open(codeLink, "_blank")} className="btn--reversed" />
        <Button label="Visit" onClick={() => window.open(visitLink, "_blank")} className="btn--reversed" />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  visitLink: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default ProjectCard;
