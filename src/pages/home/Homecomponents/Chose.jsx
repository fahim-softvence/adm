import React from "react";
import useHomeData from "../../../hooks/useHomeData";

const Chose = () => {
  const { section } = useHomeData("Home", "Why choose us");
  

  return (
    <>
      <section className="why-choose-section section-padding-x m-top m-bottom">
        <div className="why-choose-head-area">
          <p className="why-choose-head-area-p">{section?.section_name}</p>
          <h4 className="tm-common-heading">{section?.title}</h4>
        </div>
        <div className="why-choose-row">
          <div className="why-choose-col why-choose-content-area-col">
            <div className="why-choose-content-area">
              <p className="tm-common-para">{section?.description}</p>
              <div className="why-choose-content-area--point-wrapper">
                {section?.why_choose_us.map((chosedata) => (
                  <div className="why-choose-content-area--point">
                    <p className="why-choose-content-area--point-num">{chosedata.title}</p>
                    <h4>{chosedata.description}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="why-choose-col why-choose-image-area-col">
            <div className="why-choose-image-area" style={{ backgroundImage: `url(${section?.image_url})` }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chose;
