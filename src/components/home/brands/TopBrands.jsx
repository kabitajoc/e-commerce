import React from "react";
import "./TopBrands.css";
import nikeLogo from "../homeImages/logo1.png";
import hmLogo from "../homeImages/logo2.png";
import levisLogo from "../homeImages/logo3.png";
import usLogo from "../homeImages/logo4.png";
import pumaLogo from "../homeImages/logo5.png";
function TopBrands() {
  return (
    <div className="brand-container">
      <h2>Top Brands Deal</h2>
      <p>
        Up To <span>60%</span> off on brands
      </p>
      <div className="top-brands">
      
          
          <img src={nikeLogo} />
        
        
         
          <img src={hmLogo} />
       
       
       
          <img src={levisLogo} />
       

        
          <img src={usLogo} />
       
       
          <img src={pumaLogo} />
       
      </div>
    </div>
  );
}

export default TopBrands;
