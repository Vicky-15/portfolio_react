import { Link, useLocation, useNavigate } from "react-router-dom";
import { setTitle } from "../../utilities/common.js";
import "./Header.scss";
import Typewriter from "typewriter-effect";

export const Header = () => {
  const path = useLocation().pathname.split("/")[1];
  document.title = setTitle(path);

  const navigate = useNavigate()

  return (
    <>
      <header id={path !== "" ? "header-inner" : "header-home"}>
        <div className="container">
          {/* main-nav */}
          <nav id="main-nav">

            <h1 onClick={() => {
              navigate("/")
            }} id="logo">VIGNESH M</h1>
            <ul>

              <li>
                <a className="resume-btn" download href="https://drive.usercontent.google.com/uc?id=1TsedgT715tYWyR6yo66Zzrf1n-H94JV3&export=download"

                >
                  RESUME
                </a>
              </li>
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
              {/* <li>
                <Link
                  className={`link ${path === "contact" ? "current" : ""}`}
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li> */}
            </ul>
          </nav>

          {/* header-content */}
          <div
            className={
              path === "" ? "header-content text-center" : "display-none "
            }
          >
            <h1>
              <div className="txt-type">
                <Typewriter
                  options={{
                    strings: ["React Web Developer"],
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
              I'm Vignesh. Passionate React Web Developer
            </p>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
              <Link to={"/work"} className="btn-light">
                View My Works
              </Link>
              {/* <a download href="https://drive.google.com/u/0/uc?id=1gaJ4ZzGd_bo9yS0lVeLaXXaTGjAI1Fci&export=download"
                className="btn-light">
                RESUME
              </a> */}
            </div>

          </div>
        </div>
      </header>
    </>
  );
};
