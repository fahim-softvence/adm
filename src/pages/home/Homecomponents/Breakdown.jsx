import React from "react";
import Applelogo from "../../../assets/apple.png";
import Googlelogo from "../../../assets/google-play.png";
import useHomeData from "../../../hooks/useHomeData";

const Breakdown = () => {
  const { data, section } = useHomeData("Home", "Download App");

  return (
    <>
      <section class="download-app-section">
        <div class="download-app-container">
          <h1 class="download-app-title">{section?.title}</h1>
          <p class="download-app-subtitle">{section?.description}</p>
          <div className="app-links">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Applelogo} alt="App Store" />
            </a>
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Googlelogo} alt="Google Play" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breakdown;
