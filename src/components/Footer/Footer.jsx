// Footer.jsx
import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-logo-block">
          <img src={assets.logo} alt="logo" className="footer-logo" />
          <p>© 2025 Potato Limited</p>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Potato Corporate</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Potato One</li>
            <li>Potato Mart</li>
            <li>Potato Dineout</li>
            <li>Minis</li>
            <li>Pyng</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Ride With Us</li>
          </ul>
          <h3>Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Available in:</h3>
          <ul>
            <li>Bangalore</li>
            <li>Gurgaon</li>
            <li>Hyderabad</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Life at Potato</h3>
          <ul>
            <li>Explore With Potato</li>
            <li>Potato News</li>
            <li>Snackables</li>
          </ul>
          
        </div>
      </div>

      <div className="footer-app-download">
        <p>For better experience, download the Potato app now</p>
        <div className="footer-app-buttons">
          <img src={assets.app_store} alt="App Store" />
          <img src={assets.play_store} alt="Google Play" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
