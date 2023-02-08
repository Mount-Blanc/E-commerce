import React from "react";
import './Footer.css'
const Footer = () => {
  return (
    <footer>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p>Contact Information: info@example.com</p>
        <div style={{ display: "flex" }}>
          <p>Legal:</p>
          <a href="#" style={{ color: "white", marginLeft: "10px" }}>Terms of Use</a>
          <a href="#" style={{ color: "white", marginLeft: "10px" }}>Privacy Policy</a>
        </div>
        <div style={{ display: "flex" }}>
          <p>Follow us on:</p>
          <a href="#" style={{ color: "white", marginLeft: "10px" }}>Facebook</a>
          <a href="#" style={{ color: "white", marginLeft: "10px" }}>Twitter</a>
          <a href="#" style={{ color: "white", marginLeft: "10px" }}>Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
