import React from "react";
import Plancard from "../../../shared/Plancard";
import useHomeData from "../../../hooks/useHomeData";

const Plan = () => {
  const { section } = useHomeData("Home", "Best Services");
  return (
    <>
      <section className="tm-services-section section-padding-x m-bottom">
        <div className="tm-services-section-heading-wrapper">
          <h2 className="tm-common-heading">{section?.title}</h2>
          <p className="tm-common-para">{section?.description}</p>
        </div>
        <div className="tm-services-card-wrapper">
          {section?.services?.map((carditem, index) => (
            <Plancard
              key={index}
              icon={carditem?.icon_url}
              title={carditem?.title}
              description={carditem?.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Plan;
