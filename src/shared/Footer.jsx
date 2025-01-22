import React from "react";
import Footerlogo from "../assets/footer-logo.png"
import Applelogo from "../assets/apple.png"
import Googlelogo from "../assets/google-play.png"
import Facebooklogo from "../assets/facebook.png"
import Instalogo from "../assets/insta.png"
import Twiterlogo from "../assets/twitter.png"

const Footer = () => {
  return (
    <>
      <footer className="custom-footer">
        <div className="section-padding-x">
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-logo">
                <a href="#">
                  <img src={Footerlogo} alt="logo" />
                </a>
              </div>
              <p className="footer-about">
                At Car Breakdown, we are dedicated to providing top-notch
                roadside assistance and recovery services to drivers in need.
                With years of experience and a team of skilled professionals, we
                take pride in offering prompt, reliable, and customer-focused
                solutions, ensuring your safety and convenience come first.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <h4 className="footer-heading">Company</h4>
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Reviews</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="footer-heading">Resources</h4>
                <ul>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-right">
              <h4 className="footer-heading">Get the App</h4>
              <div className="app-links">
                <img src={Applelogo} alt="App Store" />
                <img src={Googlelogo} alt="Google Play" />
              </div>

              <p>
                Google Play and the Google Play logo are trademarks of Google,
                Inc. Apple, the Apple logo, and iPhone are trademarks of Apple,
                Inc., registered in the U.S.
              </p>
              <div className="social-icons">
                <a href="#">
                  <img src={Facebooklogo} alt="Facebook" />
                </a>
                <a href="#">
                  <img src={Instalogo} alt="Instagram" />
                </a>
                <a href="#">
                  <img src={Twiterlogo} alt="Twitter" />
                </a>
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between gap-5 flex-wrap footer-bottom">
            <p className="footer-copyright">
              © 2024 Car Breakdown. We love our users!
            </p>
            <p className="footer-policies">
              <a href="#">Terms & Conditions</a> ·<a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
