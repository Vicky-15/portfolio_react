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
          <p className="lead">
            Professional overview of my experience as a React developer in my
            workplace
          </p>
          {/*  */}
          <div className="about-info">
            <img
              src={BioPic}
              alt="vignesh with smile, black and white effect"
              className="bio-image"
           
            />
            <div className="bio-content flex-center-column bg-light">
              <h4>Work Experience</h4>
              <p>
                Adaptable web developer with a proven track record in
                maintaining and enhancing functionality across 10+ e-commerce
                projects. Recognized for seamlessly transitioning into diverse
                web development scenarios and providing critical expertise.
                Expert in crafting pixel-perfect web UIs aligned with Figma
                designs.
              </p>
              <div className="points">
                <li>
                Enhanced functionality in 10+ e-commerce projects, ensuring they consistently met expectations.
                </li>
                <li>Engineered custom and intricate form fields for reusability, following design specifications with a keen eye for detail.</li>
                <li>Managed dynamic form fields generation with robust validations, contributing to a seamless user experience.</li>
                <li>
                Collaborated with mobile and backend developers to build a full-scale web frontend, ensuring synchronization across platforms.
                </li>
                <li>
                Resolved complex issues, saving significant time and contributing to overall project efficiency.
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about-b" className="bg-dark py-4 ">
        <div className="container">
          <div className="center">
            <h2 className="section-title">Tech Skills</h2>
            <div className="bottom-line"></div>
            <div
              style={{
                marginBottom: "50px",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-around",
              }}
            >
              <h3>JavaScript</h3>
              <h3>React.js</h3>
              <h3>Git</h3>
              <h3>HTML5, CSS-3</h3>             
              <h3>Redux.js</h3>
              <h3>TypeScript</h3>
            </div>
            {/* <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "70%" }}
              ></div>
            </div> */}
            <h2 className="section-title">Soft Skills</h2>
            <div className="bottom-line"></div>

            <div
              style={{
                marginBottom: "50px",
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "space-around",
              }}
            >
              <h3>Flexibility</h3>
              <h3>Adaptabilityn</h3>
              <h3>Attention to Detail</h3>
              <h3>Time Management</h3>
              <h3>Communication</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
