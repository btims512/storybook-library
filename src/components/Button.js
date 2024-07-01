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
}) => {
  const classNames = `btn ${variant} ${className} ${styleName}`;
  return (
    <button className={`${classNames} label-1`} onClick={onClick} style={style}>
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
  style: PropTypes.object,
};

Button.defaultProps = {
  variant: "btn--filled",
  className: "btn-padding",
  styleName: "radius-default",
  style: {},
};

export default Button;

export const OutlinedButton = ({
  label,
  onClick,
  variant,
  className,
  styleName = "radius-default",
  style = {},
}) => {
  const classNames = `btn ${variant} ${className} ${styleName}`;
  const { outlineColor, ...restStyle } = style;
  const buttonStyle = {
    border: outlineColor ? `1px solid ${outlineColor}` : undefined,
    ...restStyle,
  };

  return (
    <button
      className={`${classNames} label-1`}
      onClick={onClick}
      style={buttonStyle}
    >
      {label}
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
};

OutlinedButton.defaultProps = {
  variant: "btn--primary",
  className: "btn-padding",
  styleName: "radius-default",
  style: {},
};

export const GhostButton = ({
  label,
  onClick,
  className,
  styleName,
  style,
}) => (
  <Button
    label={label}
    onClick={onClick}
    variant="btn--ghost"
    className={className}
    styleName={styleName}
    style={style}
    disabled
  />
);

GhostButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  styleName: PropTypes.string,
  style: PropTypes.object,
};

GhostButton.defaultProps = {
  className: "btn-padding",
  styleName: "radius-default",
  style: {},
};
