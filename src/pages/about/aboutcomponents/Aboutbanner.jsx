import React from 'react'
import Banner from "../../../assets/common-banner-img.png"
import { Link } from 'react-router-dom'
import useAboutData from '../../../hooks/useAboutData'



const Aboutbanner = () => {
  const {data,section} = useAboutData("About Us", "Hero Section")  

  
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
            <Link to="/">Home</Link>
            <span className="ms-1">/</span>
            <span>About Us</span>
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

export default Aboutbanner
