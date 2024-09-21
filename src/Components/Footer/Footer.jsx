import React from "react";
import "./Footer.css";
import logo_icon from "../Asset/logo.png";
import instagram_icon from "../Asset/instagram_icon.png";
import pinterest_icon from "../Asset/pintester_icon.png";
import whatsapp_icon from "../Asset/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={logo_icon} alt="not found" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" className="image" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" className="image" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" className="image" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};
export default Footer;
