import React from "react";
import "./Work.scss";

import mybuyers from "../../images/items/mybuyers.png";
import bhumidoris from "../../images/items/bhumidoris.png";
import wishskincare from "../../images/items/wishskincare.png";
import babylooms from "../../images/items/babylooms.png";
import tejam from "../../images/items/tejam.png";
import heboo from "../../images/items/heboo.png";
import yourmajestystore from "../../images/items/yourmajesty.png";
import melodyfied from "../../images/items/melodyfied.png";
import mizzlypizza from "../../images/items/MizzlyPizza.png";


export const Work = () => {
  return (
    <>
      <section id="work-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">My Works</h1>
          <div className="bottom-line"></div>
          <p className="lead" title="something">

            I've participated in multiple projects, dedicating my efforts to improving performance, tackling bugs, rectifying code errors, and introducing new features. </p>

          <div className="items">

            {/* My Buyers */}
            <div className="item">
              <div className="item-image">
                <img src={mybuyers} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Freelance E-Buy and Sell React  - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://mybuyers.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      My Buyers
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Bhumi Doris */}
            <div className="item">
              <div className="item-image">
                <img src={bhumidoris} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">E-Commerce React - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://bhumidoris.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Bhumi Doris
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* wishskincare */}
            <div className="item">
              <div className="item-image">
                <img src={wishskincare} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">E-Commerce React - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://wishskincare.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      wishskincare
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Baby Looms */}
            <div className="item">
              <div className="item-image">
                <img src={babylooms} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">E-Commerce React - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://babylooms.co.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Baby Looms
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Tejam */}
            <div className="item">
              <div className="item-image">
                <img src={tejam} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">E-Commerce React - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://tejam.co.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tejam
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Heboo */}
            <div className="item">
              <div className="item-image">
                <img src={heboo} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">E-Commerce React - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://heboo.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Heboo
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* yourmajestystore */}
            <div className="item">
              <div className="item-image">
                <img src={yourmajestystore} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">E-Commerce React - Client project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://yourmajestystore.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Your Majesty Store
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Melodyfied */}
            <div className="item">
              <div className="item-image">
                <img src={melodyfied} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Static Personal Project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://melodyfied.netlify.app/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Melodyfied
                    </a>
                  </h2>
                </div>
              </div>
            </div>

            {/* Mizzly Pizza */}
            <div className="item">
              <div className="item-image">
                <img src={mizzlypizza} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Static Client Project</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://mizzlypizza.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Mizzly Pizza
                    </a>
                  </h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
