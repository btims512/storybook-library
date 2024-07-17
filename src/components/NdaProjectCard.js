import React from "react";
import PropTypes from "prop-types";
import "./ProjectCard.css";
import Text from "./Text";
import Button from "./Button";

const NdaProjectCard = ({ title, description, tech, icon }) => {
  console.log({ title, description, tech, icon });

  return (
    <div className="project-card">
      <div className="project-card-header">
        {icon && (
          <img src={icon} alt="Project Icon" className="project-card-icon" />
        )}
        <div>
          <Text className="project-card-title">{title}</Text>
          <Text className="project-card-tech">Tech: {tech}</Text>
        </div>
      </div>
      <Text className="project-card-description">{description}</Text>
      <div className="project-card-buttons">
        <Button
          label="Details unavailable due to NDA"
          onClick={() => alert("Details unavailable due to NDA")}
          variant="btn--outlined"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

NdaProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

NdaProjectCard.defaultProps = {
  title: "Default Title",
  description: "Default Description",
  tech: "Default Tech",
  icon: "",
};

export default NdaProjectCard;
