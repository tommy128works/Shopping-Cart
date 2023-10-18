import PropTypes from "prop-types";
import React from "react";

import "../styles/Footer.scss";
import githubIcon from "../assets/icons/github_icon.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <a
        target="_blank"
        href="https://github.com/tommy128works/Shopping-Cart"
        rel="noreferrer"
      >
        Copyright © 2023 tommy128works <img src={githubIcon} />
      </a>
    </footer>
  );
};

export default Footer;
