// src/components/Tooltip/Tooltip.jsx
import React from "react";
import PropTypes from "prop-types";
import { FaQuestionCircle } from "react-icons/fa";
import "./Tooltip.css";

const Tooltip = ({ position, content, children }) => {
  return (
    <div className="tooltip-container">
      <FaQuestionCircle className="tooltip-icon" />
      <div className={`tooltip-box tooltip-${position}`}>{content}</div>
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  content: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  position: "top",
};

export default Tooltip;
