import React from "react";
import "./Offers.css";
import photo4 from "../Asset/photo4.png";
const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={photo4} alt="" />
      </div>
    </div>
  );
};
export default Offers;
