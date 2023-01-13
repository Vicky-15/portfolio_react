import React from "react";
import "./Footer.scss";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <>
      <footer id="footer-home">
        <div className="footer-content container flex-center-row">
          <p>Copyright &copy; {year}. All Rights Reserved</p>
          <div className="social ">
            <Link className="link">
              <AiOutlineGithub />
            </Link>
            <Link className="link">
              <AiOutlineLinkedin />
            </Link>
            <Link className="link">
              <AiOutlineYoutube />
            </Link>
            <Link className="link">
              <RxDiscordLogo />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};
