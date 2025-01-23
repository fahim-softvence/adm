import React from 'react'
import Banner from "../../../assets/common-banner-img.png"
import { Link } from 'react-router-dom'

const Servicebanner = () => {
  return (
    <>
      <section class="section-padding-x common-banner">
        <div class="common-banner-left">
          <h3 class="title">Jumpstart Service</h3>
          <p class="text">
            At Car Breakdown, we are dedicated to providing top-notch roadside
            assistance and recovery services to drivers in need.
          </p>
        </div>
        <div class="common-banner-right">
          <div class="banner-navigation">
            <a href="./index.html"><Link to="/">Home</Link></a>
            <span class="ms-1">/</span>
            <span>Services</span>
          </div>
          <img
            class="common-banner-right-img"
            src={Banner}
            alt=""
          />
        </div>
      </section>
    </>
  )
}

export default Servicebanner
