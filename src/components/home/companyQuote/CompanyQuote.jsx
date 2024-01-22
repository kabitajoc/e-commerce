import React from "react";
import "./CompanyQuote.css";
import leftQuote from "../homeImages/Rectangle12.png";
import rightQuote from "../homeImages/Rectangle 13.png";

const CompanyQuote = () => {
  return (
    <div className="better-cards">
      <div className="better-card">
        <img src={leftQuote} />
        <div className="better-text">
          <h2>WE MADE YOUR EVERYDAY FASHION BETTER!</h2>
          <p>
            In our journey to improve everyday fashion, euphoria presents
            EVERYDAY wear range - Comfortable & Affordable fashion 24/7
          </p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
      <div className="better-card">
        <img src={rightQuote} />
      </div>
    </div>
  );
};

export default CompanyQuote;
