// src/components/Message/Message.jsx
import React from "react";
import PropTypes from "prop-types";
import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaInfoCircle,
  FaTimesCircle,
} from "react-icons/fa";
import "./Message.css";

const iconMap = {
  success: FaCheckCircle,
  danger: FaTimesCircle,
  warning: FaExclamationTriangle,
  info: FaInfoCircle,
};

const Message = ({ type, content }) => {
  const Icon = iconMap[type];
  return (
    <div className={`message message--${type}`}>
      <Icon className="message-icon" />
      <span>{content}</span>
    </div>
  );
};

Message.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "warning", "info"]).isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
