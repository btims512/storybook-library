import React from "react";
import PropTypes from "prop-types";
import "./IconTab.css";

const IconTab = ({ icon, onClick, isActive }) => {
  const tabClass = isActive ? "icon-tab icon-tab--active" : "icon-tab";

  return (
    <button className={tabClass} onClick={onClick}>
      {icon && <span className="icon">{icon}</span>}
    </button>
  );
};

IconTab.propTypes = {
  icon: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default IconTab;
