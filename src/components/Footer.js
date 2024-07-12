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
              example@example.com
            </a>
            <div className="icon-container">
              <GitHubIcon className="icon github-icon" />
              <LinkedInIcon className="icon linkedin-icon" />
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
