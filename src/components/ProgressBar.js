import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css";

const ProgressBar = ({ progress, label, color }) => {
  const getProgressColor = () => {
    if (color) return color;
    return "var(--primary-brand)"; 
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar__background">
        <div
          className="progress-bar__fill"
          style={{
            width: `${progress}%`,
            backgroundColor: getProgressColor(),
          }}
        >
          <span className="progress-bar__label">{label || `${progress}%`}</span>
        </div>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  label: PropTypes.string,
  color: PropTypes.string,
};

ProgressBar.defaultProps = {
  label: "",
  color: "var(--primary-brand)",
};

export default ProgressBar;
