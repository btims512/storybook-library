import React, { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import PropTypes from "prop-types";
import "./NavBar.css";
import logo from "../stories/assets/logo-bt-wordmark.svg";

const NavBar = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-bar">
      <div className="nav-content">
        <div className="left-content">
          <img src={logo} alt="Logo" className="nav-logo" />
          <nav className="nav-links">
            {links.map((link, index) => (
              <a key={index} href={link.href} className="nav-link label-1">
                {link.label}
              </a>
            ))}
          </nav>
          <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="side-nav-link headline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="right-content">
          <ThemeSwitcher />
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div></div>
          </div>
        </div>
        {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </div>
    </div>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;
