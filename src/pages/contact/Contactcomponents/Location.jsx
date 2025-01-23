import React from 'react'
import Location1 from "../../../assets/location-1.jpeg"
import Location2 from "../../../assets/location-2.jpeg"

const Location = () => {
  return (
    <>
      <div class="section-padding-x m-bottom">
        <div class="location-section">
          <p class="tm-sub-heading text-center">Our Location</p>
          <h3 class="tm-common-heading text-center">
            Where Does Electema Operate?
          </h3>
          <div class="location-card-wrapper">
            <div class="tm-location-card">
              <div class="tm-location-card-img-area">
                <img src={Location1} alt="" srcset="" />
              </div>
              <div class="tm-location-card-content-area">
                <h4>Car Breakdown Headquarters</h4>
                <div class="tm-location-card-content-area-footer">
                  <div class="tm-location-card-content-area-footer-left">
                    <p>1234 Power Lane</p>
                    <p>Electric City, EL 56789</p>
                  </div>
                  <div class="tm-location-card-content-area-footer-right">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 2L11 13"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="tm-location-card">
              <div class="tm-location-card-img-area">
                <img src={Location2} alt="" srcset="" />
              </div>
              <div class="tm-location-card-content-area">
                <h4>Car Breakdown Headquarters</h4>
                <div class="tm-location-card-content-area-footer">
                  <div class="tm-location-card-content-area-footer-left">
                    <p>1234 Power Lane</p>
                    <p>Electric City, EL 56789</p>
                  </div>
                  <a
                    href="#"
                    class="tm-location-card-content-area-footer-right"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M22 2L11 13"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 2L15 22L11 13L2 9L22 2Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Location
