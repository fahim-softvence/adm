import React, { useEffect } from "react";
import About from "../../../assets/about-us-1.png";

const Trusted = () => {
  useEffect(() => {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach((progressBar) => {
      const percentage = progressBar.getAttribute("data-percentage");
      progressBar.style.width = percentage + "%";
    });
  }, []);

  return (
    <>
      <section class="section-padding-x text-img-container m-top m-bottom">
        <div class="text-container">
          <div class="section-sub-title">About Us</div>
          <div class="section-title mt-4">
            Your Trusted Vehicle Recovery Experts
          </div>
          <div class="section-text mt-3">
            At Car Breakdown, we understand how stressful vehicle breakdowns can
            be. That’s why our team is committed to providing fast,
            professional, and affordable services across the UK. With years of
            experience and a fleet of modern recovery vehicles, we’ve got you
            covered.
          </div>
          <div className="progress-bar-container">
            <div className="progress-item">
              <div className="progress-item-header">
                <span className="label">Experienced</span>
                <span className="percentage">98%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" data-percentage="98"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-item-header">
                <span className="label">Reliable</span>
                <span className="percentage">86%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" data-percentage="86"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-item-header">
                <span className="label">Skilled & Capable</span>
                <span className="percentage">90%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" data-percentage="90"></div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-item-header">
                <span className="label">Flexible</span>
                <span className="percentage">76%</span>
              </div>
              <div className="progress">
                <div className="progress-bar" data-percentage="76"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="img-container">
          <img src={About} alt="" />
        </div>
      </section>
    </>
  );
};

export default Trusted;
