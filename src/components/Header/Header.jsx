import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import Typewriter from "typewriter-effect";

export const Header = () => {
  const path = useLocation().pathname.split("/")[1];

  return (
    <>
      <header id="header-home">
        <div className="container">
          <nav id="main-nav">
            <h1 id="logo">V_DEV</h1>
            <ul>
              <li>
                <Link
                  className={`link ${path === "" ? "current" : ""}`}
                  to={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${path === "about" ? "current" : ""}`}
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${path === "work" ? "current" : ""}`}
                  to={"/work"}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${path === "contact" ? "current" : ""}`}
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="header-content text-center">
            <h1>
              I Am Vignesh The
              <div className="txt-type">
                <Typewriter
                  options={{
                    strings: [
                      "Web Developer",
                      "Graphic Designer",
                      "UI/UX Designer",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                    deleteSpeed: 150,
                    pauseFor: 3000,
                    skipAddStyles: false,
                    cursor: "",
                  }}
                />
              </div>
            </h1>
            <p className="lead">
              I Am a Web Developer, Specialized in MERN Stack
            </p>
            <Link to={"/work"} className="btn-light">
              View My Work
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
