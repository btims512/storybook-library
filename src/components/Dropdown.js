import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaChevronDown } from "react-icons/fa";
import "./Dropdown.css";

const Dropdown = ({ options, defaultLabel }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultLabel);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button
        className={`dropdown-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={selectedOption}
      >
        {selectedOption}
        <FaChevronDown className="chevron-icon" />
      </button>
      {isOpen && (
        <div className="options-container">
        <ul className="dropdown-menu" role="listbox">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-option"
              role="option"
              tabIndex="0"
              aria-selected={selectedOption === option}
              onClick={() => handleOptionClick(option)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleOptionClick(option);
                }
              }}
            >
              {option}
            </li>
          ))}
        </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  defaultLabel: PropTypes.string.isRequired,
};

export default Dropdown;
