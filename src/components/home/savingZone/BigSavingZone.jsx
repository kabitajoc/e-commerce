import React from "react";
import SavingZoneImg1 from "../homeImages/Bigsavingzone1.png";
import SavingZoneImg2 from "../homeImages/Bigsavingzone2.png";
import SavingZoneImg3 from "../homeImages/Bigsavingzone3.png";
import SavingZoneImg4 from "../homeImages/Bigsavingzone4.png";
import SavingZoneImg5 from "../homeImages/Bigsavingzone5.png";
import { BigSavingZoneData } from "./BigSavingZonedata";
import "./BigSavingZone.css";

const BigSavingZone = () => {
  return (
    <>
      <h3>Big Saving Zone</h3>
      <div className="saving-cards">
        <div className="saving-card">
          <img src={SavingZoneImg1} className="savingCard-image" />
          <div className="savingCard-text savingText1">
            <h4>
              Hawaiian
              <br /> Shirts
            </h4>
            <p>Dress up in summer vibe</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
              />
            </svg>
            <button className="white-text">Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src={SavingZoneImg2} className="savingCard-image" />
          <div className="savingCard-text savingText2">
            <h4>
              Printed
              <br /> T-Shirt
            </h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              className="download-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="26"
              viewBox="0 0 23 26"
              fill="none"
            >
              <path
                d="M11.5678 1.28613L11.5678 23.8893M22 15.1958L12.7972 24.3985C12.1182 25.0775 11.0173 25.0775 10.3383 24.3985L1.13557 15.1958"
                stroke="white"
              />
            </svg>
            <button className="white-text">Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src={SavingZoneImg3} className="savingCard-image" />
          <div className="savingCard-text savingText3">
            <h4>
              Cargo
              <br />
              Joggers
            </h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="27"
              viewBox="0 0 23 27"
              fill="none"
            >
              <path
                d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <button className="black-text">Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src={SavingZoneImg4} className="savingCard-image1" />
          <div className="savingCard-text savingText4">
            <h4>Low Price</h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="27"
              viewBox="0 0 23 27"
              fill="none"
            >
              <path
                d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <button className="black-text">Shop Now</button>
          </div>
        </div>
        <div className="saving-card">
          <img src={SavingZoneImg5} className="savingCard-image1" />
          <div className="savingCard-text savingText5">
            <h4>
              Oversized
              <br />
              T-Shirts
            </h4>
            <p>High Cozziness</p>
            <h4>UPTO 60% OFF</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="27"
              viewBox="0 0 23 27"
              fill="none"
            >
              <path
                d="M11.5678 1.61938L11.5678 24.2225M22 15.529L12.7972 24.7318C12.1182 25.4108 11.0173 25.4108 10.3383 24.7318L1.13557 15.529"
                stroke="#3C4242"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
            <button className="black-text">Shop Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BigSavingZone;
