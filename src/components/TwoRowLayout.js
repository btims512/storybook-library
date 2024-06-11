import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";

const TwoRow = ({ children }) => {
  return <div className="flexbox-layout multi-row">{children}</div>;
};

TwoRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TwoRow;
