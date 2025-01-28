import React from "react";
import Location1 from "../../../assets/location-1.jpeg";
import Location2 from "../../../assets/location-2.jpeg";
import useContactData from "../../../hooks/useContactData";

const Location = () => {
  const { section } = useContactData("Contact Us", "Our Locations");
  return (
    <>
      <div className="section-padding-x m-bottom">
        <div className="location-section">
          <p className="tm-sub-heading text-center">{section?.section_name}</p>
          <h3 className="tm-common-heading text-center">{section?.title}</h3>
          <div className="location-card-wrapper">
              {section?.location?.map((location) => (
            <div className="tm-location-card">
              <div className="tm-location-card-img-area">
                <img src={Location1} alt="" srcset="" />
              </div>
                <div className="tm-location-card-content-area">
                  <h4>{location?.title}</h4>
                  <div className="tm-location-card-content-area-footer">
                    <div className="tm-location-card-content-area-footer-left">
                      <p>{location?.address}</p>
                      <p>Electric City, EL 56789</p>
                    </div>
                    <div className="tm-location-card-content-area-footer-right">
                     <img src={location?.icon_url} alt="" />
                    </div>
                  </div>
                </div>
            </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
