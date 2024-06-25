import React from "react";
import PropTypes from "prop-types";
import "./PageLayout.css";

const PageLayout = ({
  navbar,
  footer,
  hero,
  projects,
  technologies,
  about,
}) => {
  return (
    <div className="page-layout">
      {navbar && <div className="navbar">{navbar}</div>}
      <div className="content">
        {hero && <section className="hero">{hero}</section>}
        {projects && <section className="projects">{projects}</section>}
        {technologies && (
          <section className="technologies">{technologies}</section>
        )}
        {about && <section className="about">{about}</section>}
      </div>
      {footer && <div className="footer">{footer}</div>}
    </div>
  );
};

PageLayout.propTypes = {
  navbar: PropTypes.element,
  footer: PropTypes.element,
  hero: PropTypes.element,
  projects: PropTypes.element,
  technologies: PropTypes.element,
  about: PropTypes.element,
};

export default PageLayout;
