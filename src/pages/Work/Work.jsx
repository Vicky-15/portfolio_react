import React from "react";
import "./Work.scss";
import item_1 from "../../images/items/item1.png";
import item_2 from "../../images/items/item2.png";
import item_3 from "../../images/items/item3.png";
import item_4 from "../../images/items/item4.png";
import item_5 from "../../images/items/item5.png";
import item_6 from "../../images/items/item6.png";
import item_7 from "../../images/items/item7.png";
import item_8 from "../../images/items/item8.png";
import item_9 from "../../images/items/item9.png";

export const Work = () => {
  return (
    <>
      <section id="work-a" className="text-center py-4">
        <div className="container">
          <h1 className="section-title">My Works</h1>
          <div className="bottom-line"></div>
          <p className="lead" title="something">
            Take a Look at Some of my projects to know better about my skills...
          </p>

          <div className="items">
            <div className="item">
              <div className="item-image">
                <img src={item_1} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_2} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_3} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_4} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_5} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_6} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_7} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_8} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-image">
                <img src={item_9} alt="item_1" />
              </div>
              <div className="item-text">
                <div className="item-text-wrap">
                  <p className="item-text-category">Design</p>
                  <h2 className="item-text-title">Great Gradients</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
