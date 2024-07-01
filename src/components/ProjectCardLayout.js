import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import "./ProjectCardLayout.css";

const ProjectCardLayout = ({ projects }) => {
  return (
    <div className="project-card-outer-container">
      <div className="section-title">Projects</div>
      <div className="card-container">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

ProjectCardLayout.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      tech: PropTypes.string.isRequired,
      codeLink: PropTypes.string.isRequired,
      visitLink: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ).isRequired,
};

export default ProjectCardLayout;
