import React from "react";
import "./Home.scss";
import { BiBrain } from "react-icons/bi";
import { ImListNumbered } from "react-icons/im";
import { TbComponents } from "react-icons/tb";
import { GiJoin } from "react-icons/gi";
import { BsHourglassBottom } from "react-icons/bs";
import { IoCodeWorkingSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { FaPeopleCarry } from "react-icons/fa";

export const Home = () => {
  return (
    <>
      {/* section A */}
      <section id="home-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">Process i Follow</h1>
          <div className="bottom-line"></div>
          <p className="lead">
            I prefer to streamline tasks by comprehending, strategizing, and breaking them down into manageable segments.
          </p>
          <div className="specials">
            <div>
              <i>
                <BiBrain />
              </i>
              <h3>Understand</h3>
              <p>
                Comprehend the website's process flow from clients and then conclude the layout of website pages by examining relevant online websites for reference.
              </p>
            </div>
            <div>
              <i>
                <ImListNumbered />
              </i>
              <h3>Ordering</h3>
              <p>
                Organize the modules in priority order to monitor task completion and identify reusable components.
              </p>
            </div>
            <div>
              <i>
                <TbComponents />
              </i>
              <h3>Components</h3>
              <p>
                Giving top priority to frequently used reusable components to streamline module development. I utilize Styled Components for achieving reusability.
              </p>
            </div>
            <div>
              <i>
                <GiJoin />
              </i>
              <h3>Integration</h3>
              <p>
                Upon the successful completion of modules, I establish Redux to oversee the state of all components, along with their associated actions. This includes managing API responses and incorporating updates into the Redux store.
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
                <BsHourglassBottom />
              </i>
              <li className="stats-title">Rough Estimate of Hours Spent on React.</li>
              <li className="stats-number">1500 hours+</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <IoCodeWorkingSharp />
              </i>
              <li className="stats-title">Projects independently developed.</li>
              <li className="stats-number">2</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <SlCalender />
              </i>
              <li className="stats-title">Proficiency in React.</li>
              <li className="stats-number">15 Months</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <FaPeopleCarry />
              </i>
              <li className="stats-title">Projects I've Contributed to or Maintained at my Workplace.</li>
              <li className="stats-number">15+ React Web Apps</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
