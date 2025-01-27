import React, { useState } from "react";
import useHomeData from "../../../hooks/useHomeData";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import axios from "axios";
import { CgSpinnerTwo } from "react-icons/cg";

const Booking = () => {
  const axiosCommon = useAxiosCommon();
  const { data, section } = useHomeData("Home", "Book a Service Time");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit,watch, formState: { errors } } = useForm();

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

  const onSubmit = async (data) => {
    setLoading(true)
    console.log(data)
    try {
      const response = await axios.post('https://adamorsler-django.onrender.com/api/booking/', data);
      console.log('Booking successful', response);
      reset();
      setLoading(false)
    } catch (error) {
      console.error('Error submitting booking', error);
      setLoading(false)
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
              <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="form-input-wrapper">
                  <label className="form-label">
                    user_fullname <span>*</span>
                  </label>
                  <input
                    placeholder="Username"
                    type="text"
                    className="form-control"
                    {...register('user_fullname', { required: true })}
                  />
                  {errors.user_fullname && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    user_email <span>*</span>
                  </label>
                  <input
                    placeholder="Email"
                    type="email"
                    className="form-control"
                    {...register('user_email', { required: true })}
                  />
                  {errors.user_email && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    Phone <span>*</span>
                  </label>
                  <input
                    placeholder="Phone"
                    type="number"
                    className="form-control"
                    {...register('user_phone', { required: true })}
                  />
                  {errors.user_phone && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    user_address <span>*</span>
                  </label>
                  <input
                    placeholder="Address"
                    type="text"
                    className="form-control"
                    {...register('user_address', { required: true })}
                  />
                  {errors.user_address && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    Recovery Type <span>*</span>
                  </label>
                  <select
                    className="form-select"
                    {...register('recovery_type', { required: true })}
                  >
                    <option>Jumpstart Service</option>
                    <option>A2B Transportation</option>
                    <option>Immediate Breakdown Recovery</option>
                    <option>Accident Assistance</option>
                    <option>Mobile Tyre Fitting</option>
                  </select>
                  {errors.recovery_type && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    Vehicle Model <span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('vehicle_model', { required: true })}
                  />
                  {errors.vehicle_model && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    Vehicle Make<span>*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('vehicle_make', { required: true })}
                  />
                  {errors.vehicle_make && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">
                    Registration Number<span>*</span>
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    {...register('registration_number', { required: true })}
                  />
                  {errors.registration_number && <span>This field is required</span>}
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
                        name="car_hybrid_or_electric"
                        value="yes"
                        {...register('car_hybrid_or_electric')}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Yes
                      </label>
                    </div>
                    <div className="form-check d-flex align-items-center gap-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="hybrid_electric"
                        value="no"
                        {...register('hybrid_electric')}
                      />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <div className="form-input-wrapper">
                  <h3>Service-Specific Information</h3>
                  <label className="form-label"> Location</label>
                  <input
                    type="text"
                    className="form-control"
                    {...register('current_location', { required: true })}
                  />
                  {errors.service_location && <span>This field is required</span>}
                </div>

                <div className="form-input-wrapper">
                  <label className="form-label">Postcode</label>
                  <input
                    type="number"
                    className="form-control"
                    {...register('post_code', { required: true })}
                  />
                  {errors.postcode && <span>This field is required</span>}
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
                  <input
                    type="file"
                    className="form-control"
                    {...register('images')}
                  />
                </div>

                <div className="form-input-wrapper">
                  <button type="submit" className="btn-custom w-100  form-btn">
                    {
                      loading? <CgSpinnerTwo size={24} /> : 'Submit Booking'
                    }
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
