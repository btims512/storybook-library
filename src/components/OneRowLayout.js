import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";

const Layout = ({ children }) => {
  return <div className="flexbox-layout">{children}</div>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
