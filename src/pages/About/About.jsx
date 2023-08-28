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
          <p className="lead">Allow me to provide a professional overview of my experience as a React developer.</p>
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
                I'm quite adept at crafting and
                maintaining top-notch React applications. When it
                comes to tackling problems and debugging, I've got
                the skills, and I'm also known for my excellent
                communication and collaboration abilities.
              </p>
              <div className="points">
                <li>
                  Developed and maintained 15+ React web apps,
                  including dashboards
                </li>
                <li>Worked with backend developers to integrate
                  REST APIs.</li>
                <li>Resolved bugs and errors in 10+ React web app
                  codes</li>
                <li>Collaborated with team of 5 developers to ensure
                  timely delivery of projects.</li>
                <li>Helped other interns and co-workers with their
                  React development tasks.</li>
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
            <div style={{ marginBottom: "50px", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-around" }}>
              <h3>React.js</h3>
              <h3>Redux.js</h3>
              <h3>JavaScript</h3>
              <h3>TypeScript</h3>
              <h3>Git & GitHub</h3>
              <h3>HTML5</h3>
              <h3>CSS 3</h3>
              <h3>SCSS</h3>
              <h3>Bootstrap</h3>
              <h3>Reactstrap</h3>
              <h3>MUI</h3>
              <h3>Responsive Web Design</h3>
              <h3>REST APIs</h3>
              <h3>Debugging</h3>
            </div>
            {/* <div className="progress">
              <div
                className="bg-main text-center"
                style={{ width: "70%" }}
              ></div>
            </div> */}
            <h2 className="section-title">Soft Skills</h2>
            <div className="bottom-line"></div>

            <div style={{ marginBottom: "50px", display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "space-around" }}>
              <h3>Problem-solving</h3>
              <h3>Communication</h3>
              <h3>Collaboration</h3>
              <h3>Teamwork</h3>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
