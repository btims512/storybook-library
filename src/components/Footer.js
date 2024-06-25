import React from "react";
import "./Footer.css";
import Text from "../components/Text";
import { ReactComponent as GitHubIcon } from "../stories/Assets/icon-github.svg";
import { ReactComponent as LinkedInIcon } from "../stories/Assets/icon-linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <Text className="footer-text">Contact</Text>
          <a href="mailto:info@bentims.com" className="footer-link">
            info@bentims.com
          </a>
          <div className="icon-container">
            <GitHubIcon className="icon github-icon" />
            <LinkedInIcon className="icon linkedin-icon" />
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
