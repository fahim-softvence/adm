import React from "react";
import Location1 from "../../../assets/location-1.jpeg";
import Location2 from "../../../assets/location-2.jpeg";
import useContactData from "../../../hooks/useContactData";

const Location = () => {
  const { section } = useContactData("Contact Us", "Our Locations");
  return (
    <>
      <div class="section-padding-x m-bottom">
        <div class="location-section">
          <p class="tm-sub-heading text-center">{section?.section_name}</p>
          <h3 class="tm-common-heading text-center">{section?.title}</h3>
          <div class="location-card-wrapper">
              {section?.location?.map((location) => (
            <div class="tm-location-card">
              <div class="tm-location-card-img-area">
                <img src={Location1} alt="" srcset="" />
              </div>
                <div class="tm-location-card-content-area">
                  <h4>{location?.title}</h4>
                  <div class="tm-location-card-content-area-footer">
                    <div class="tm-location-card-content-area-footer-left">
                      <p>{location?.address}</p>
                      <p>Electric City, EL 56789</p>
                    </div>
                    <div class="tm-location-card-content-area-footer-right">
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
