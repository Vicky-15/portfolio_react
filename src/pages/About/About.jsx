import React from "react";
import BioPic from "../../images/about.jpg";
import { FaAward } from "react-icons/fa";
import "./About.scss";
import one from "../../images/about-logos/logo-envato.png";
import two from "../../images/about-logos/logo-magento.png";
import three from "../../images/about-logos/logo-woocommerce.png";
import four from "../../images/about-logos/logo-wordpress.png";
import test_person_1 from "../../images/testimonials/person1.jpg";
import test_person_2 from "../../images/testimonials/person2.jpg";
import test_person_3 from "../../images/testimonials/person3.jpg";
import test_person_4 from "../../images/testimonials/person4.jpg";

export const About = () => {
  return (
    <>
      <section id="about-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">About me</h1>
          <div className="bottom-line"></div>
          <p className="lead">
            Let Me Tell You a little bit About Myself and What i do...
          </p>
          {/*  */}
          <div className="about-info">
            <img
              src={BioPic}
              alt="vignesh with smile, black and white effect"
              className="bio-image"
            />
            <div className="bio-content bg-light">
              <h4>Your Project in Safe Hands</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                maiores, esse labore ut totam rerum voluptas autem blanditiis
                dolorum facere necessitatibus! Ab ratione excepturi, et qui sunt
                doloremque incidunt eos.
              </p>
            </div>

            <div className="award-1">
              <i>
                <FaAward />
              </i>
              <h3>Award One</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                qui!
              </p>
            </div>
            <div className="award-2">
              <i>
                <FaAward />
              </i>
              <h3>Award Two</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                qui!
              </p>
            </div>
            <div className="award-3">
              <i>
                <FaAward />
              </i>
              <h3>Award Three</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam,
                qui!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about-b" className="bg-dark py-4">
        <div className="container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="bottom-line"></div>

          <h3>HTML</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "70%" }}></div>
          </div>
          <h3>CSS</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "70%" }}></div>
          </div>
          <h3>JAVASCRIPT</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "70%" }}></div>
          </div>
          <h3>REACT.JS</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "60%" }}></div>
          </div>
          <h3>NODE.JS</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "40%" }}></div>
          </div>
          <h3>GIT & GITHUB</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "70%" }}></div>
          </div>
          <h3>MYSQL & MOGO</h3>
          <div className="progress">
            <div className="bg-main text-center" style={{ width: "50%" }}></div>
          </div>
        </div>
      </section>

      <section id="about-c" className="bg-light py-4">
        <div className="container">
          <div className="about-logos">
            <img src={one} alt="one logo" />
            <img src={two} alt="two logo" />
            <img src={three} alt="three logo" />
            <img src={four} alt="four logo" />
          </div>
        </div>
      </section>

      <section id="about-d" className="py-4 text-center">
        <div className="container">
          <h2 className="section-title">Testimonials</h2>
          <div className="bottom-line"></div>
          <p className="lead">Take a Look at what my clients say...</p>
          <div className="testimonials">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sit fugiat est ratione cumque, aliquam quasi neque illum
                blanditiis quibusdam non quas suscipit? Repellat, quia quas.
                Aspernatur magni mollitia maxime!
              </p>
              <ul>
                <li>
                  <img src={test_person_1} alt="client-1" />
                </li>
                <li>Johhny Richard</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sit fugiat est ratione cumque, aliquam quasi neque illum
                blanditiis quibusdam non quas suscipit? Repellat, quia quas.
                Aspernatur magni mollitia maxime!
              </p>
              <ul>
                <li>
                  <img src={test_person_2} alt="client-1" />
                </li>
                <li>Meleesa Clair</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sit fugiat est ratione cumque, aliquam quasi neque illum
                blanditiis quibusdam non quas suscipit? Repellat, quia quas.
                Aspernatur magni mollitia maxime!
              </p>
              <ul>
                <li>
                  <img src={test_person_3} alt="client-1" />
                </li>
                <li>Jason Smith</li>
              </ul>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                sit fugiat est ratione cumque, aliquam quasi neque illum
                blanditiis quibusdam non quas suscipit? Repellat, quia quas.
                Aspernatur magni mollitia maxime!
              </p>
              <ul>
                <li>
                  <img src={test_person_4} alt="client-1" />
                </li>
                <li>Cindrella Queenie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
