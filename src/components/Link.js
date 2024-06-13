import React from "react";
import PropTypes from "prop-types";
import "./Link.css";

const Link = ({ href, newWindow, children, className }) => (
  <a
    href={href}
    target={newWindow ? "_blank" : "_self"}
    rel="noopener noreferrer"
    className={`link-component ${className}`}
  >
    {children}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  newWindow: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Link;
