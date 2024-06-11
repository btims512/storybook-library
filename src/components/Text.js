import React from "react";
import PropTypes from "prop-types";

const Text = ({ children, className, as: Component = "p" }) => {
  return (
    <Component className={`text-default ${className}`}>{children}</Component>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  as: PropTypes.elementType,
};

Text.defaultProps = {
  className: "",
  as: "p",
};

export default Text;
