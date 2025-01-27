import React from 'react'
import Banner from "../../../assets/common-banner-img.png"
import { Link } from 'react-router-dom'
import useServiceData from '../../../hooks/useServiceData'

const Servicebanner = () => {
  const { section } = useServiceData("Services", "Hero Section");
  return (
    <>
      <section class="section-padding-x common-banner">
        <div class="common-banner-left">
          <h3 class="title">{section?.title}</h3>
          <p class="text">
            {section?.description}
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
            src={section?.image_url}
            alt=""
          />
        </div>
      </section>
    </>
  )
}

export default Servicebanner
