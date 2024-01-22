import React from "react";

import Swiper from "swiper/bundle";

import "swiper/css/bundle";

const swiper = new Swiper();
import heroImg from "../homeImages/hero.jpg";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={heroImg} className="hero-image" />
          </div>
          <div className="swiper-slide">Slide 2</div>
          <div className="swiper-slide">Slide 3</div>
        </div>

        <div className="swiper-pagination"></div>

        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>

        <div className="swiper-scrollbar"></div>
      </div>
      <div className="hero-text">
        <p>T-shirt/Tops</p>
        <h1>
          Summer <br></br>value pack
        </h1>
        <p>cool/colorful/comfy</p>
        <button>Shop Now</button>
      </div>
    </div>
  );
};
export default Hero;
