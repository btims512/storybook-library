import React from "react";
import "./Footer.css";
import Text from "../components/Text";
import { ReactComponent as GitHubIcon } from "../stories/assets/icon-github.svg";
import { ReactComponent as LinkedInIcon } from "../stories/assets/icon-linkedin.svg";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <footer className="footer">
        <div className="footer-content">
          <nav className="footer-nav">
            <Text className="footer-text">Contact</Text>
            <a href="mailto:info@bentims.com" className="footer-link">
              info@bentims.com
            </a>
            <div className="icon-container">
              <a
                href="https://github.com/btims512"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <GitHubIcon className="icon github-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/benjamintims/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <LinkedInIcon className="icon linkedin-icon" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
