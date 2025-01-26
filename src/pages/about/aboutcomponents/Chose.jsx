import React from "react";
import useAboutData from "../../../hooks/useAboutData";

const Chose = () => {
  const { section } = useAboutData("About Us", "Why choose us");
  console.log(section);

  return (
    <>
      <section class="section-padding-x text-img-container m-top m-bottom">
        <div class="img-container">
          <img src={section?.image_url} alt="" />
        </div>
        <div class="text-container">
          <div class="section-sub-title">{section?.section_name}</div>
          <div class="section-title mt-4">{section?.section_name}</div>
          <div class="section-text mt-3">{section?.description}</div>

          <div class="about-benefits">
            {section?.why_choose?.map((benifit) => (
              <div class="item">
                <img src={benifit?.logo_url} alt="" />
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
