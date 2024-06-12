import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";

const FlexibleLayout = ({ rows, children }) => {
  const renderRows = () => {
    const rowsArray = [];
    for (let i = 0; i < rows; i++) {
      rowsArray.push(
        <div key={i} className="flexbox-layout multi-row">
          {children}
        </div>
      );
    }
    return rowsArray;
  };

  return <div className="flexbox-container">{renderRows()}</div>;
};

FlexibleLayout.propTypes = {
  rows: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default FlexibleLayout;
