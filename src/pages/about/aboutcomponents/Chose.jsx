import React from "react";
import useAboutData from "../../../hooks/useAboutData";

const Chose = () => {
  const { section } = useAboutData("About Us", "Why choose us");

  return (
    <>
      <section className="section-padding-x text-img-container m-top m-bottom">
        <div className="img-container">
          <img src={section?.image_url} alt="" />
        </div>
        <div className="text-container">
          <div className="section-sub-title">{section?.section_name}</div>
          <div className="section-title mt-4">{section?.section_name}</div>
          <div className="section-text mt-3">{section?.description}</div>

          <div className="about-benefits">
            {section?.why_choose?.map((benifit, index) => (
              <div key={benifit?.id || index} className="item">
                <img src={benifit?.logo_url} alt={benifit?.title} />
                <span>{benifit?.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Chose;
