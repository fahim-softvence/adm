import React, { useState } from "react";
import useHomeData from "../../../hooks/useHomeData";

const Booking = () => {
  const { data, section } = useHomeData("Home", "Book a Service Time");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);



  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
          setError(null);
          const googleMapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          window.open(googleMapsUrl, "_blank");
        },
        (error) => {
          console.error("Error getting location:", error);
          setLocation(null);
          if (error.code === error.PERMISSION_DENIED) {
            setError(
              "Location access denied. Please allow access to your location."
            );
          } else if (error.code === error.POSITION_UNAVAILABLE) {
            setError("Unable to retrieve location. Please try again.");
          } else {
            setError("An unknown error occurred while retrieving location.");
          }
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  return (
    <>
      <section className="booking-section">
        <div className="section-padding-x">
          <h2 className="section-title">{section?.title}</h2>
          <p className="section-subtitle">{section?.description}</p>

          <div className="booking-form-wrapper">
            <div className="booking-form-continer">
              <h3 className="booking-form-title">Booking Form</h3>
              <p className="booking-form-subtitle">Vehicle Details</p>

              <form className="booking-form">
                <div className="form-input-wrapper">
                  <label className="form-label">
                    Recovery Type <span>*</span>
                  </label>
                  <select className="form-select" required>
                    <option>Jumpstart Service</option>
                    <option>A2B Transportation</option>
                    <option>Immediate Breakdown Recovery</option>
                    <option>Accident Assistance</option>
                    <option>Mobile Tyre Fitting</option>
                  </select>
                </div>
                <div className="form-input-wrapper">
                  <label className="form-label">
                    Vehicle Model <span>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-input-wrapper">
                  <label className="form-label">
                    Vehicle Make<span>*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-input-wrapper">
                  <label className="form-label">
                    Registration Number<span>*</span>
                  </label>
                  <input type="number" className="form-control" />
                </div>
                <div className="form-input-wrapper">
                  <h3>Additional Information</h3>

                  <label className="form-label">
                    Is the car hybrid or electric?<span></span>
                  </label>
                  <div className="d-flex gap-5">
                    <div className="form-check d-flex align-items-center gap-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Yes
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center gap-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-input-wrapper">
                  <h3>Service-Specific Information</h3>
                  <label className="form-label"> Location</label>
                  <input type="text" className="form-control" />
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">Postcode</label>
                  <input type="number" className="form-control" />
                  <button
                    type="button"
                    className="btn-custom w-100 form-btn"
                    onClick={handleGetLocation}
                  >
                    Use Current location
                  </button>
                </div>
                <div className="form-input-wrapper">
                  <h3>Supporting Images (Optional)</h3>
                  <input type="file" className="form-control" />
                  <button type="submit" className="btn-custom w-100 form-btn">
                    Submit Booking
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
