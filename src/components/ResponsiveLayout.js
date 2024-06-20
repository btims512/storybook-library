import React from "react";
import PropTypes from "prop-types";
import "./ResponsiveLayout.css";

const ResponsiveLayout = ({ header, children }) => {
  return (
    <div className="layout-container">
      <div className="header">{header}</div>
      <div className="content">{children}</div>
    </div>
  );
};

ResponsiveLayout.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default ResponsiveLayout;
