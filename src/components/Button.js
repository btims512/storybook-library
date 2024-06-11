import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  label,
  onClick,
  variant,
  className,
  styleName = "radius-default",
}) => {
  const classNames = `btn ${variant} ${className} ${styleName}`;
  return (
    <button className={classNames} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  styleName: PropTypes.string,
};

Button.defaultProps = {
  variant: "btn--primary",
  className: "btn-padding",
  styleName: "radius-default",
};

export default Button;
