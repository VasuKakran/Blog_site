import React from "react";
import Logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        Made By{" "}
        <b>
          <a href="https://www.linkedin.com/in/vasu-kakran-29a344245/">
            {" "}
            VasuKakran
          </a>
          .
        </b>
        .
      </span>
    </footer>
  );
};

export default Footer;
