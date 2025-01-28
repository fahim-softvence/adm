import React from "react";
import { Link } from "react-router-dom";
import useContactData from "../../../hooks/useContactData";

const Contactbanner = () => {
  const { section } = useContactData("Contact Us", "Hero Section");

  return (
    <>
      <section className="section-padding-x common-banner">
        <div className="common-banner-left">
          <h3 className="title">{section?.title}</h3>
          <p className="text">{section?.description}</p>
        </div>
        <div className="common-banner-right">
          <div className="banner-navigation">
            <a href="./index.html">
              <Link to="/">Home</Link>
            </a>
            <span className="ms-1">/</span>
            <span>Contact</span>
          </div>
          <img
            className="common-banner-right-img"
            src={section?.image_url}
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Contactbanner;
