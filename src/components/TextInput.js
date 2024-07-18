import React from "react";
import PropTypes from "prop-types";
import "./TextInput.css";

const TextInput = ({
  value,
  onChange,
  placeholder,
  className,
  styleName = "body-1 radius-default",
}) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`text-input ${styleName} ${className}`}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

TextInput.defaultProps = {
  placeholder: "",
};

const TextAreaInput = ({
  value,
  onChange,
  placeholder,
  className,
  styleName = "body-1 radius-default",
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`text-area-input ${styleName} ${className}`}
      rows="4"
    />
  );
};

TextAreaInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

TextAreaInput.defaultProps = {
  placeholder: "",
};

export default TextInput;
export { TextAreaInput };
