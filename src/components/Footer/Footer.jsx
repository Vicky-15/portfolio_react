import React from "react";
import "./Footer.scss";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

export const Footer = () => {
  const year = new Date().getFullYear().toString();
  return (
    <>

      <footer id="footer-home">
        <div className="footer-content container flex-center-row">
          <p>Copyright &copy; {year}. All Rights Reserved</p>
          <div className="social ">
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/vicky-15"
            >
              <AiOutlineGithub />
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/vignesh-m-b8923122a"
            >
              <AiOutlineLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
