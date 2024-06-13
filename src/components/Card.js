// src/components/Card/Card.jsx
import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ title, content }) => {
  return (
    <div className="card">
      <h3 className="headline">{title}</h3>
      <p className="body-1">{content}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Card;
