import React from "react";
import "./Work.scss";
import item_1 from "../../images/items/AshrayaBuilders.png";
import item_2 from "../../images/items/MizzlyPizza.png";


export const Work = () => {
  return (
    <>
      <section id="work-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">My Works</h1>
          <div className="bottom-line"></div>
          <p className="lead" title="something">
            Take a Look at Some of Projects which involved My works...
          </p>

          <div className="items">
            <div className="item">
              <div className="item-image">
                <img src={item_1} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Static Website</p>
                  <h2 className="item-text-title">
                    <a
                      href="https://www.ashrayabuilders.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ashraya Builders
                    </a>
                  </h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_2} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Static Website</p>
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
