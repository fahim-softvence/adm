import React from 'react'
import Banner from "../../../assets/common-banner-img.png"
import { Link } from 'react-router-dom'
import useServiceData from '../../../hooks/useServiceData'

const Servicebanner = () => {
  const { section } = useServiceData("Services", "Hero Section");
  return (
    <>
      <section className="section-padding-x common-banner">
        <div className="common-banner-left">
          <h3 className="title">{section?.title}</h3>
          <p className="text">
            {section?.description}
          </p>
        </div>
        <div className="common-banner-right">
          <div className="banner-navigation">
            <a href="./index.html"><Link to="/">Home</Link></a>
            <span className="ms-1">/</span>
            <span>Services</span>
          </div>
          <img
            className="common-banner-right-img"
            src={section?.image_url}
            alt=""
          />
        </div>
      </section>
    </>
  )
}

export default Servicebanner
