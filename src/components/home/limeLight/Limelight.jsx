import React from "react";
import "./Limelight.css";
import limelightImg1 from "../homeImages/Limelight1.png"
import limelightImg2 from "../homeImages/Limelight2.png"
import limelightImg3 from "../homeImages/Limelight3.png"
import limelightImg4 from "../homeImages/Limelight4.png"
function Limelight() {
  const LimelightImages = [
    {
      id: 22,
      image: limelightImg1,
      title: "Black Sweatshirt with ....",
      brand: "Jhanvi’s  Brand",
      price: "$123.00",
    },
    {
      id: 23,
      image: limelightImg2,
      title: "line Pattern Black H...",
      brand: "AS’s  Brand",
      price: "$37.00",
    },
    {
      id: 24,
      image: limelightImg3,
      title: "Black Shorts",
      brand: "MM’s  Brand",
      price: "$43.00",
    },
    {
      id: 25,
      image: limelightImg4,
      title: "Levender Hoodie with ....",
      brand: "Nike’s  Brand",
      price: "$113.00",
    },
  ];
  return (
    <>
      <h3 className="limelight-heading">In The Limelight</h3>
      <div className="Limelight-cards">
        {LimelightImages.map((LimelightImage) => {
          return (
            <div className="Limelight-images" key={LimelightImage.id}>
              <img src={LimelightImage.image} />
              <svg
                className="limelight-svg"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 34 34"
                fill="none"
              >
                <circle cx="17.1291" cy="16.9111" r="16.1796" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.7198 12.7121C15.345 11.1099 13.0523 10.6789 11.3298 12.146C9.60723 13.6131 9.36472 16.0661 10.7174 17.8013C11.8422 19.244 15.2459 22.2867 16.3615 23.2716C16.4863 23.3817 16.5487 23.4368 16.6215 23.4585C16.685 23.4774 16.7545 23.4774 16.8181 23.4585C16.8909 23.4368 16.9533 23.3817 17.0781 23.2716C18.1936 22.2867 21.5974 19.244 22.7221 17.8013C24.0748 16.0661 23.8619 13.5977 22.1098 12.146C20.3576 10.6943 18.0946 11.1099 16.7198 12.7121Z"
                  stroke="#3C4242"
                  stroke-width="1.26066"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <div className="Limelight-text">
                <div className="title-brand">
                  <h6>{LimelightImage.title}</h6>
                  <p>{LimelightImage.brand}</p>
                </div>
                <div className="price">
                  <span>{LimelightImage.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Limelight;
