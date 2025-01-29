import React from "react";
import Facebooklogo from "../assets/facebook.png";
import Instalogo from "../assets/insta.png";
import Twiterlogo from "../assets/twitter.png";
import useHomeData from "../hooks/useHomeData"
import App from "../shared/App"

const Footer = () => {
  const { section } = useHomeData("Home", "Footer");

  
  if (!section || !section.footer) {
    return <div>Loading...</div>; 
  }

  return (
    <footer className="custom-footer">
      {section.footer?.map((footer) => (
        <div className="section-padding-x" key={footer?.id}>
          <div className="footer-container">
            <div className="footer-left">
              <div className="footer-logo">
                <a href="#">
                  <img src={footer?.logo_url} alt="logo" className="navlogo"/>
                </a>
                <h2 className="logo-title-3">Car Breakdown</h2>
              </div>
              <p className="footer-about">{footer?.description}</p>
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
            <App/>

          </div>

              <p>
                Google Play and the Google Play logo are trademarks of Google,
                Inc. Apple, the Apple logo, and iPhone are trademarks of Apple,
                Inc., registered in the U.S.
              </p>
              <div className="social-icons">
                {footer?.social_media?.map((social) => (
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.id}
                  >
                    <img
                      src={
                        social.title === "Facebook"
                          ? Facebooklogo
                          : social.title === "Instagram"
                          ? Instalogo
                          : social.title === "X"
                          ? Twiterlogo
                          : ""
                      }
                      alt={social.title}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-between gap-5 flex-wrap footer-bottom">
            <p className="footer-copyright">{footer?.copyright}</p>
            <p className="footer-policies">
              <a href="#">Terms & Conditions</a> ·<a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
