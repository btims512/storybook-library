import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({
  value,
  onChange,
  className,
  styleName = "body-1, radius-default",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className={`text-input ${styleName} ${className}`}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

export default TextInput;
