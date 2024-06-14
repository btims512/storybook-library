import React from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";
import Button from "../components/Button";

const SearchBar = ({
  placeholder,
  onChange,
  value,
  buttonLabel,
  onButtonClick,
  buttonVariant,
}) => {
  return (
    <div className="search-bar-with-button">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {buttonLabel && onButtonClick && (
        <Button
          label={buttonLabel}
          onClick={onButtonClick}
          variant={buttonVariant}
          className="btn-search"
        />
      )}
    </div>
  );
};

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  buttonLabel: PropTypes.string,
  onButtonClick: PropTypes.func,
  buttonVariant: PropTypes.string,
};

SearchBar.defaultProps = {
  placeholder: "Search...",
  buttonLabel: null,
  onButtonClick: null,
  buttonVariant: "btn--primary",
};

export default SearchBar;
