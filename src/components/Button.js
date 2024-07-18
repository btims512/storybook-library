import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({
  label,
  onClick,
  variant,
  className,
  styleName = "radius-round",
  style,
  size,
  color,
  disabled,
  loading,
}) => {
  const classNames = `btn ${variant} ${className} ${styleName} ${size}`;
  const buttonStyle = { ...style, backgroundColor: color };

  return (
    <button
      className={`${classNames} label-1`}
      onClick={onClick}
      style={buttonStyle}
      disabled={disabled}
      aria-busy={loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  styleName: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  variant: "btn--filled",
  className: "btn-padding",
  styleName: "radius-default",
  style: {},
  size: "medium",
  color: "",
  disabled: false,
  loading: false,
};

export default Button;

export const OutlinedButton = ({
  label,
  onClick,
  variant,
  className,
  styleName = "radius-default",
  style = {},
  size,
  color,
  disabled,
  loading,
}) => {
  const classNames = `btn ${variant} ${className} ${styleName} ${size}`;
  const buttonStyle = { ...style, backgroundColor: color };

  return (
    <button
      className={`${classNames} label-1`}
      onClick={onClick}
      style={buttonStyle}
      disabled={disabled}
      aria-busy={loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );
};

OutlinedButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  styleName: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

OutlinedButton.defaultProps = {
  variant: "btn--primary",
  className: "btn-padding",
  styleName: "radius-default",
  style: {},
  size: "medium",
  color: "",
  disabled: false,
  loading: false,
};

export const GhostButton = ({
  label,
  onClick,
  className,
  styleName,
  style,
  size,
  color,
  disabled,
  loading,
}) => (
  <Button
    label={label}
    onClick={onClick}
    variant="btn--ghost"
    className={className}
    styleName={styleName}
    style={style}
    size={size}
    color={color}
    disabled={disabled}
    loading={loading}
  />
);

GhostButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

GhostButton.defaultProps = {
  className: "btn-padding",
  styleName: "radius-default",
  style: {},
  size: "medium",
  color: "",
  disabled: false,
  loading: false,
};
