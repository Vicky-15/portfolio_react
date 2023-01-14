import { Link, useLocation } from "react-router-dom";
import { setTitle } from "../../utilities/common.js";
import "./Header.scss";
import Typewriter from "typewriter-effect";

export const Header = () => {
  const path = useLocation().pathname.split("/")[1];
  document.title = setTitle(path);

  return (
    <>
      <header id={path !== "" ? "header-inner" : "header-home"}>
        <div className="container">
          {/* main-nav */}
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

          {/* header-content */}
          <div
            className={
              path === "" ? "header-content text-center" : "display-none "
            }
          >
            <h1>
              I Am Vignesh &nbsp; |
              <div className="txt-type">
                <Typewriter
                  options={{
                    strings: ["React Developer"],
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
              I Am a Self Taught Intermediate React Developer, Who can be able
              to build responsive webpages and reusable react components...{" "}
            </p>
            <Link to={"/work"} className="btn-light">
              View My Works
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};
