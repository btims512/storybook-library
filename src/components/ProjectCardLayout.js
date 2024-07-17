import React from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";
import NdaProjectCard from "./NdaProjectCard";
import "./ProjectCardLayout.css";

const ProjectCardLayout = ({ projects }) => {
  return (
    <div className="project-card-outer-container">
      <div className="section-title">Projects</div>
      <div className="card-container">
        {projects.map((project, index) => {
          if (index === 0) {
            return (
              <NdaProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tech={project.tech}
                icon={project.icon}
              />
            );
          }
          return (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              codeLink={project.codeLink}
              visitLink={project.visitLink}
              icon={project.icon}
            />
          );
        })}
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
