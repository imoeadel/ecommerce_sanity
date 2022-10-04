import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 Moe Headphones All rights reserved</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillGithub
          onClick={() => {
            window.open("https://www.github.com/imoeadel", "_blank");
          }}
        />
      </p>
    </div>
  );
};

export default Footer;
