import React from "react";
import "./Home.scss";
import {
  AiOutlineFileText,
  AiOutlineDesktop,
  AiOutlineAndroid,
  AiOutlineApple,
  AiFillFileText,
  AiFillAndroid,
  AiFillApple,
} from "react-icons/ai";

export const Home = () => {
  return (
    <>
      {/* section A */}
      <section id="home-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">I Specialized In</h1>
          <div className="bottom-line"></div>
          <p className="lead">
            React as well as Node.js , MySql, React as well as Node.js ,
            MySql,React as well as Node.js...
          </p>
          <div className="specials">
            <div>
              <i>
                <AiOutlineFileText />
              </i>
              <h3>Concepting</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, ad necessitatibus. Odio officiis distinctio aliquid
                voluptatem sit quisquam blanditiis ab.
              </p>
            </div>
            <div>
              <i>
                <AiOutlineDesktop />
              </i>
              <h3>Desktop</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, ad necessitatibus. Odio officiis distinctio aliquid
                voluptatem sit quisquam blanditiis ab.
              </p>
            </div>
            <div>
              <i>
                <AiOutlineAndroid />
              </i>
              <h3>Android</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, ad necessitatibus. Odio officiis distinctio aliquid
                voluptatem sit quisquam blanditiis ab.
              </p>
            </div>
            <div>
              <i>
                <AiOutlineApple />
              </i>
              <h3>Mac</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempora, ad necessitatibus. Odio officiis distinctio aliquid
                voluptatem sit quisquam blanditiis ab.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section B */}
      <section id="home-b" className="text-center py-4">
        <div className="stats">
          <div>
            <ul>
              <i>
                <AiFillApple />
              </i>
              <li className="stats-title">Hours Worked</li>
              <li className="stats-number">1000</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <AiFillFileText />
              </i>
              <li className="stats-title">Projects Done</li>
              <li className="stats-number">2</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <AiOutlineDesktop />
              </i>
              <li className="stats-title">Awards Received</li>
              <li className="stats-number">2</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <AiFillAndroid />
              </i>
              <li className="stats-title">Gorilla Killed</li>
              <li className="stats-number">24</li>
            </ul>
          </div>
        </div>
      </section>
      {/* section C */}
      <section id="home-c" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">Something Is</h1>
          <div className="bottom-line"></div>
          <p className="lead">
            I am a good Human being so i can give you a better output of works
          </p>

          <div className="process">
            <div>
              <i className="process-icon">
                <AiFillAndroid className="fz-8" />
                <div className="process-step flex-center-row fz-2">1</div>
              </i>
              <h3>Integration</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <i className="process-icon">
                <AiFillAndroid className="fz-8" />
                <div className="process-step flex-center-row fz-2">1</div>
              </i>
              <h3>Integration</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <i className="process-icon">
                <AiFillAndroid className="fz-8" />
                <div className="process-step flex-center-row fz-2">1</div>
              </i>
              <h3>Integration</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <div>
              <i className="process-icon">
                <AiFillAndroid className="fz-8" />
                <div className="process-step flex-center-row fz-2">1</div>
              </i>
              <h3>Integration</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
