import React from "react";
import useHomeData from "../../../hooks/useHomeData";
import App from "../../../shared/App";

const Breakdown = () => {
  const { data, section } = useHomeData("Home", "Download App");

  return (
    <>
      <section className="download-app-section">
        <div className="download-app-container">
          <h1 className="download-app-title">{section?.title}</h1>
          <p className="download-app-subtitle">{section?.description}</p>
          <div className="app-links">
            <App/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breakdown;
