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
            I Like to Simplify the Work by Understanding , Planning and
            Splitting it.
          </p>
          <div className="specials">
            <div>
              <i>
                <BiBrain />
              </i>
              <h3>Understand</h3>
              <p>
                Understand the Process flow of website from clients and make
                finalize the layout of website pages by analyzing the various
                relevant websites in online for references.
              </p>
            </div>
            <div>
              <i>
                <ImListNumbered />
              </i>
              <h3>Ordering</h3>
              <p>
                Order the modules which one to complete first to track the work
                completion and to know what are the reusable components.
              </p>
            </div>
            <div>
              <i>
                <TbComponents />
              </i>
              <h3>Components</h3>
              <p>
                Providing first preferences to most common Reusabel components
                to simplify the process of modules builing. I use Styled
                Components for the Reusability.
              </p>
            </div>
            <div>
              <i>
                <GiJoin />
              </i>
              <h3>Integration</h3>
              <p>
                After Successfully Completed the modules, I setup the redux to
                manage the state of all components with their respective actions
                and handle the API responses and update the same to redux store.
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
              <li className="stats-title">Hours Worked</li>
              <li className="stats-number">600+</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <IoCodeWorkingSharp />
              </i>
              <li className="stats-title">Projects Done</li>
              <li className="stats-number">4</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <SlCalender />
              </i>
              <li className="stats-title">Year Experience</li>
              <li className="stats-number">1</li>
            </ul>
          </div>
          <div>
            <ul>
              <i>
                <FaPeopleCarry />
              </i>
              <li className="stats-title">Projects Contributed</li>
              <li className="stats-number">2</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
