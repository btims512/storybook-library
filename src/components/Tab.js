import React from "react";
import PropTypes from "prop-types";
import "./Tab.css";

const Tab = ({ label, onClick, isActive }) => {
  const tabClass = isActive ? "tab tab--active" : "tab";

  return (
    <button className={tabClass} onClick={onClick}>
      {label}
    </button>
  );
};

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool,
};

export default Tab;
