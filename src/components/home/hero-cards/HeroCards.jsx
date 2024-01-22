import React from "react";
import "./HeroCards.css";
import rightimg from "../homeImages/rightcard.jpg";
import leftimg from "../homeImages/leftcard.jpg";

const HeroCards = () => {
  return (
    <div className="hero-cards">
      <div className="herocard leftcard">
        <img src={leftimg} alt="leftImg" />
        <div className="heroCard-text leftText">
          <h6>
            Low Price
            <span>High Cozziness</span>
            UPTO 60% OFF
          </h6>
          <a href="#">Explore Items</a>
        </div>
      </div>
      <div className="herocard rightcard">
        <img src={rightimg} alt="leftImg" />
        <div className="heroCard-text ">
          <h6>
            Low Price
            <span>
              Breezy Summer<br></br> Style
            </span>
            UPTO 50% OFF
          </h6>
          <a href="#">Explore Items</a>
        </div>
      </div>
    </div>
  );
};

export default HeroCards;
