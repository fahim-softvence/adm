import React, { useEffect } from "react";
import About from "../../../assets/about-us-1.png";
import useAboutData from "../../../hooks/useAboutData";

const Trusted = () => {
  const { section } = useAboutData("About Us", "Recovery Experts");

  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    
    progressBars.forEach((progressBar) => {
      const percentage = progressBar.getAttribute("data-percentage");
      progressBar.style.width = "0%";
      progressBar.style.transition = "width 2s ease-in-out, background-color 1s ease-in-out";

      setTimeout(() => {
        progressBar.style.width = percentage + "%";

        if (percentage >= 80) {
          progressBar.style.backgroundColor = "#76c043";
        } 
      }, 100); 
    });
  }, [section]);

  return (
    <>
      <section className="section-padding-x text-img-container m-top m-bottom">
        <div className="text-container">
          <div className="section-sub-title">{section?.page_name}</div>
          <div className="section-title mt-4">{section?.title}</div>
          <div className="section-text mt-3">{section?.description}</div>
          <div className="progress-bar-container">
            {section?.recovery_experts?.map((percent) => (
              <div className="progress-item" key={percent?.id}>
                <div className="progress-item-header">
                  <span className="label">{percent?.statistic_name}</span>
                  <span className="percentage">{percent?.statistic_percentage}%</span>
                </div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-percentage={percent?.statistic_percentage}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="img-container">
          <img src={section?.image_url} alt="About Us" />
        </div>
      </section>
    </>
  );
};

export default Trusted;
