import React, { useState, useEffect } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import PropTypes from "prop-types";
import "./NavBar.css";
import logoLight from "../stories/assets/logo-bt-wordmark.svg";
import logoDark from "../stories/assets/logo-bt-wordmark-white.svg";

const NavBar = ({ links }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [logo, setLogo] = useState(logoLight);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const updateLogo = () => {
      const isDarkMode = document.body.classList.contains("dark");
      setLogo(isDarkMode ? logoDark : logoLight);
    };
    updateLogo();

    const observer = new MutationObserver(updateLogo);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="nav-bar">
      <div className="nav-content">
        <div className="left-content">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <div className="divider"></div>
          </div>
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
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="right-content">
          <div
            className={`theme-switcher-container ${menuOpen ? "switch-hidden" : ""}`}
          >
            <ThemeSwitcher />
          </div>
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
