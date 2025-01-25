import React from "react";
import getHomeData from "../../../hooks/getHomeData";



const Chose = () => {
  const {homepageData,why_choose_us,} = getHomeData();
  return (
    <>
      <section class="why-choose-section section-padding-x m-top m-bottom">
        <div class="why-choose-head-area">
          <p class="why-choose-head-area-p">Why choose</p>
          <h4 class="tm-common-heading">
            Your Trusted Partner for Reliable Vehicle Assistance
          </h4>
        </div>
        <div class="why-choose-row">
          <div class="why-choose-col why-choose-content-area-col">
            <div class="why-choose-content-area">
              <p class="tm-common-para">
                At Car Breakdown, we are dedicated to providing top-notch
                roadside assistance and recovery services to drivers in need.
                With years of experience and a team of skilled professionals, we
                take pride in offering prompt, reliable, and customer-focused
                solutions, ensuring your safety and convenience come first.
              </p>
              <div class="why-choose-content-area--point-wrapper">
                <div class="why-choose-content-area--point">
                  <p class="why-choose-content-area--point-num">01</p>
                  <h4>24/7 availability for immediate assistance.</h4>
                </div>
                <div class="why-choose-content-area--point">
                  <p class="why-choose-content-area--point-num">02</p>
                  <h4>Experienced and professional recovery team.</h4>
                </div>
                <div class="why-choose-content-area--point">
                  <p class="why-choose-content-area--point-num">03</p>
                  <h4>Affordable rates with no hidden fees.</h4>
                </div>
                <div class="why-choose-content-area--point">
                  <p class="why-choose-content-area--point-num">04</p>
                  <h4>Nationwide coverage for all types of vehicles.</h4>
                </div>
              </div>
            </div>
          </div>
          <div class="why-choose-col why-choose-image-area-col">
            <div class="why-choose-image-area"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chose;
