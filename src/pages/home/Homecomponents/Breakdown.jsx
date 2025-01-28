import React from "react";
import Applelogo from "../../../assets/apple.png";
import Googlelogo from "../../../assets/google-play.png";
import useHomeData from "../../../hooks/useHomeData";
import { Link } from "react-router-dom";

const Breakdown = () => {
  const { data, section } = useHomeData("Home", "Download App");

  return (
    <>
      <section className="download-app-section">
        <div className="download-app-container">
          <h1 className="download-app-title">{section?.title}</h1>
          <p className="download-app-subtitle">{section?.description}</p>
          <div className="app-links">
            <Link
              to={section?.downloadsApp[0]?.download_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Applelogo} alt="App Store" />
            </Link>
            <Link
              to={section?.downloadsApp[1]?.download_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Googlelogo} alt="Google Play" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breakdown;
