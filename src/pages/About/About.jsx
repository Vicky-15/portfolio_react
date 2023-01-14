import React from "react";
import BioPic from "../../images/about.png";
import "./About.scss";

export const About = () => {
  return (
    <>
      <section id="about-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">About me</h1>
          <div className="bottom-line"></div>
          <p className="lead">Let Me Tell You A little bit About Myself..</p>
          {/*  */}
          <div className="about-info">
            <img
              src={BioPic}
              alt="vignesh with smile, black and white effect"
              className="bio-image"
            />
            <div className="bio-content flex-center-column bg-light">
              <h4>Your Project in Safe Hands</h4>
              <p>
                I love to work on things that i understand well and have feeling
                that i have controll on it to customize it. I do projects
                responsive on various screens sizes. I use material UI, tailwind
                Css, styledComponents for building components...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-b" className="bg-dark py-4 ">
        <div className="container">
          <div className="center">
            <h2 className="section-title">Level of Technical Skills</h2>
            <div className="bottom-line"></div>
            <h3>HTML5</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "70%" }}
              ></div>
            </div>
            <h3>CSS3</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "70%" }}
              ></div>
            </div>
            <h3>JAVASCRIPT ES6</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "70%" }}
              ></div>
            </div>
            <h3>REACT JS</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "60%" }}
              ></div>
            </div>
            <h3>GIT & GITHUB</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "70%" }}
              ></div>
            </div>
            <h3>NODE JS</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "40%" }}
              ></div>
            </div>
            <h3>MYSQL & MOGO</h3>
            <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "10%" }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
