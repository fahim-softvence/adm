import React from 'react'
import Applelogo from "../../../assets/apple.png"
import Googlelogo from "../../../assets/google-play.png"

const Breakdown = () => {
  return (
    <>
       <section class="download-app-section">
        <div class="download-app-container">
          <h1 class="download-app-title">
            Breakdowns? No worries—download our app and get instant service!
          </h1>
          <p class="download-app-subtitle">
            Download our app now and get fast service, wherever you are. Solving
            vehicle issues is just one click away!
          </p>
          <div class="download-app-buttons">
            <a href="#" class="download-app-store-btn">
              <img src={Applelogo} alt="Download on the App Store" />
            </a>
            <a href="#" class="download-google-play-btn">
              <img src={Googlelogo} alt="Get it on Google Play" />
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Breakdown