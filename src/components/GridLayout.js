import React from "react";
import PropTypes from "prop-types";
import "./Layout.css";

const GridLayout = ({ columns, gap, children }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}px`,
  };

  return (
    <div
      className="flexbox-container margin-layout grid-layout"
      style={gridStyle}
    >
      {children}
    </div>
  );
};

GridLayout.propTypes = {
  columns: PropTypes.number.isRequired,
  gap: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default GridLayout;
