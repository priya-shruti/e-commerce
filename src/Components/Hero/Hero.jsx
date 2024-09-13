import React from "react";
import "./Hero.css";
// import hand_icon from "../Asset/hand_icon.png";
// import arrow_icon from "../Asset/arrow_icon.png";
import photo13 from "../Asset/photo13.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          <u>NEW ARRIVALS ONLY</u>
        </h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
          </div>
          <p>Collections</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={photo13} alt="" />
      </div>
    </div>
  );
};
export default Hero;
