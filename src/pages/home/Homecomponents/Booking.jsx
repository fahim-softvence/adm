import React, { useState } from "react";
import useHomeData from "../../../hooks/useHomeData";
import { useForm } from "react-hook-form";
import useAxiosCommon from "../../../hooks/useAxiosCommon";
import { CgSpinnerTwo } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const axiosCommon = useAxiosCommon();
  const { section } = useHomeData("Home", "Book a Service Time");
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [recoveryType, setRecoveryType] = useState("");
  const [isMobileTyreFormVisible, setMobileTyreFormVisible] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitted },
  } = useForm();

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
    setLoading(true);

    try {
      const response = await axiosCommon.post("/booking/", data);
      console.log("Booking successful", response);
      toast.success("Booking Successful!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      reset();
      setLoading(false);
      if (recoveryType === "Mobile Tyre Fitting") {
        setMobileTyreFormVisible(false);
      }
    } catch (error) {
      console.error("Error submitting booking", error);
      setLoading(false);
      toast.error(error.message);
    }
  };

  const handleRecoveryTypeChange = (e) => {
    setRecoveryType(e.target.value);
    if (e.target.value === "Mobile Tyre Fitting") {
      setMobileTyreFormVisible(true);
    } else {
      setMobileTyreFormVisible(false); 
    }
  };

  return (
    <>
      <section className="booking-section" id="bookingform">
        <div className="section-padding-x">
          <h2 className="section-title">{section?.title}</h2>
          <p className="section-subtitle">{section?.description}</p>

          {/* Main form visibility */}
          {!isMobileTyreFormVisible && (
            <div className="booking-form-wrapper">
              <div className="booking-form-continer">
                <h3 className="booking-form-title">Booking Form</h3>
                <p className="booking-form-subtitle">Vehicle Details</p>
                <form
                  className="booking-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Fullname <span>*</span>
                    </label>
                    <input
                      placeholder="Username"
                      type="text"
                      className="form-control"
                      {...register("user_fullname", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_fullname && (
                      <span style={{ color: "red" }}>
                        {errors.user_fullname.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Email <span>*</span>
                    </label>
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control"
                      {...register("user_email", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_email && (
                      <span style={{ color: "red" }}>
                        {errors.user_email.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Phone <span>*</span>
                    </label>
                    <input
                      placeholder="Phone"
                      type="number"
                      className="form-control"
                      {...register("user_phone", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_phone && (
                      <span style={{ color: "red" }}>
                        {errors.user_phone.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Address <span>*</span>
                    </label>
                    <input
                      placeholder="Address"
                      type="text"
                      className="form-control"
                      {...register("user_address", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_address && (
                      <span style={{ color: "red" }}>
                        {errors.user_address.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Recovery Type <span>*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("recovery_type", {
                        required: "This field is required",
                      })}
                      onChange={handleRecoveryTypeChange}
                    >
                      <option>Jumpstart Service</option>
                      <option>A2B Transportation</option>
                      <option>Immediate Breakdown Recovery</option>
                      <option>Accident Assistance</option>
                      <option>Mobile Tyre Fitting</option>
                    </select>
                    {isSubmitted && errors.recovery_type && (
                      <span style={{ color: "red" }}>
                        {errors.recovery_type.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Vehicle Model <span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("vehicle_model", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.vehicle_model && (
                      <span style={{ color: "red" }}>
                        {errors.vehicle_model.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Vehicle Make<span>*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("vehicle_make", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.vehicle_make && (
                      <span style={{ color: "red" }}>
                        {errors.vehicle_make.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Registration Number<span>*</span>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("registration_number", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.registration_number && (
                      <span style={{ color: "red" }}>
                        {errors.registration_number.message}
                      </span>
                    )}
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
                          {...register("car_hybrid_or_electric", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="hybrid_electric"
                          value="no"
                          {...register("hybrid_electric", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    {isSubmitted && errors.car_hybrid_or_electric && (
                      <span style={{ color: "red" }}>
                        {errors.car_hybrid_or_electric.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <h3>Service-Specific Information</h3>
                    <label className="form-label"> Location</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("current_location", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.current_location && (
                      <span style={{ color: "red" }}>
                        {errors.current_location.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">Postcode</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("post_code", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.post_code && (
                      <span style={{ color: "red" }}>
                        {errors.post_code.message}
                      </span>
                    )}
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
                      {...register("images")}
                    />
                    {isSubmitted && errors.images && (
                      <span style={{ color: "red" }}>
                        {errors.images.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <button type="submit" className="btn-custom w-100 form-btn">
                      {loading ? (
                        <CgSpinnerTwo size={24} className="spinner-icon" />
                      ) : (
                        "Submit Booking"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Mobile Tyre Fitting Form */}
          {isMobileTyreFormVisible && (
            <div className="booking-form-wrapper">
              <div className="booking-form-continer">
                <h3 className="booking-form-title">Booking Form</h3>
                <p className="booking-form-subtitle">Vehicle Details</p>
                <form
                  className="booking-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                   <div className="form-input-wrapper">
                    <label className="form-label">
                      Fullname <span>*</span>
                    </label>
                    <input
                      placeholder="Username"
                      type="text"
                      className="form-control"
                      {...register("user_fullname", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_fullname && (
                      <span style={{ color: "red" }}>
                        {errors.user_fullname.message}
                      </span>
                    )}
                  </div>
                   <div className="form-input-wrapper">
                    <label className="form-label">
                      Email <span>*</span>
                    </label>
                    <input
                      placeholder="Email"
                      type="email"
                      className="form-control"
                      {...register("user_email", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_email && (
                      <span style={{ color: "red" }}>
                        {errors.user_email.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Phone <span>*</span>
                    </label>
                    <input
                      placeholder="Phone"
                      type="number"
                      className="form-control"
                      {...register("user_phone", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_phone && (
                      <span style={{ color: "red" }}>
                        {errors.user_phone.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Address <span>*</span>
                    </label>
                    <input
                      placeholder="Address"
                      type="text"
                      className="form-control"
                      {...register("user_address", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.user_address && (
                      <span style={{ color: "red" }}>
                        {errors.user_address.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Recovery Type <span>*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("recovery_type", {
                        required: "This field is required",
                      })}
                      onChange={handleRecoveryTypeChange}
                    >
                      <option>Jumpstart Service</option>
                      <option>A2B Transportation</option>
                      <option>Immediate Breakdown Recovery</option>
                      <option>Accident Assistance</option>
                      <option>Mobile Tyre Fitting</option>
                    </select>
                    {isSubmitted && errors.recovery_type && (
                      <span style={{ color: "red" }}>
                        {errors.recovery_type.message}
                      </span>
                    )}
                  </div>
                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Enter Width<span>*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("enter_wide", {
                        required: "This field is required",
                      })}
                    >
                      <option>30</option>
                      <option>31</option>
                      <option>33</option>
                      <option>35</option>
                      <option>115</option>
                      <option>125</option>

                      <option>135</option>
                      <option>145</option>

                      <option>155</option>
                      <option>165</option>
                      <option>175</option>
                      <option>185</option>
                      <option>195</option>
                      <option>205</option>
                      <option>215</option>
                      <option>225</option>
                      <option>235</option>
                      <option>245</option>
                      <option>255</option>
                      <option>265</option>
                      <option>275</option>
                      <option>285</option>
                      <option>295</option>
                      <option>305</option>
                      <option>315</option>
                      <option>325</option>
                      <option>335</option>
                      <option>345</option>
                      <option>355</option>
                      <option>650</option>
                      <option>750</option>
                    </select>
                    {isSubmitted && errors.recovery_type && (
                      <span style={{ color: "red" }}>
                        {errors.recovery_type.message}
                      </span>
                    )}
                  </div>
                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Profile <span>*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("profile", {
                        required: "This field is required",
                      })}
                    >
                      <option>1050</option>
                      <option>1050</option>
                      <option>1050</option>
                      <option>1050</option>
                      <option>1050</option>

                    </select>
                    {isSubmitted && errors.recovery_type && (
                      <span style={{ color: "red" }}>
                        {errors.recovery_type.message}
                      </span>
                    )}
                  </div>
                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Rim<span>*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("rim", {
                        required: "This field is required",
                      })}
                    >
                      <option>15</option>
                      <option>15</option>
                      <option>15</option>
                      <option>15</option>
                    </select>
                    {isSubmitted && errors.recovery_type && (
                      <span style={{ color: "red" }}>
                        {errors.recovery_type.message}
                      </span>
                    )}
                  </div>
                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Speed <span>*</span>
                    </label>
                    <select
                      className="form-select"
                      {...register("speed", {
                        required: "This field is required",
                      })}
                    >
                      <option>150</option>
                      <option>200</option>
                      <option>300</option>
                      <option>1000</option>
                    </select>
                    {isSubmitted && errors.recovery_type && (
                      <span style={{ color: "red" }}>
                        {errors.recovery_type.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Do You Have the locking wheel nut?<span></span>
                    </label>
                    <div className="d-flex gap-5">
                      <div className="form-check d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="car_hybrid_or_electric"
                          value="yes"
                          {...register("car_hybrid_or_electric", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="hybrid_electric"
                          value="no"
                          {...register("hybrid_electric", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    {isSubmitted && errors.car_hybrid_or_electric && (
                      <span style={{ color: "red" }}>
                        {errors.car_hybrid_or_electric.message}
                      </span>
                    )}
                  </div>
                  <div className="form-input-wrapper">
                    <label className="form-label">
                      Do you require tyre puncture repair?<span></span>
                    </label>
                    <div className="d-flex gap-5">
                      <div className="form-check d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="car_hybrid_or_electric"
                          value="yes"
                          {...register("car_hybrid_or_electric", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault1"
                        >
                          Yes
                        </label>
                      </div>
                      <div className="form-check d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="hybrid_electric"
                          value="no"
                          {...register("hybrid_electric", {
                            required: "Please select an option",
                          })}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="flexRadioDefault2"
                        >
                          No
                        </label>
                      </div>
                    </div>
                    {isSubmitted && errors.car_hybrid_or_electric && (
                      <span style={{ color: "red" }}>
                        {errors.car_hybrid_or_electric.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <h3>Service-Specific Information</h3>
                    <label className="form-label"> Location</label>
                    <input
                      type="text"
                      className="form-control"
                      {...register("current_location", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.current_location && (
                      <span style={{ color: "red" }}>
                        {errors.current_location.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <label className="form-label">Postcode</label>
                    <input
                      type="number"
                      className="form-control"
                      {...register("post_code", {
                        required: "This field is required",
                      })}
                    />
                    {isSubmitted && errors.post_code && (
                      <span style={{ color: "red" }}>
                        {errors.post_code.message}
                      </span>
                    )}
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
                      {...register("images")}
                    />
                    {isSubmitted && errors.images && (
                      <span style={{ color: "red" }}>
                        {errors.images.message}
                      </span>
                    )}
                  </div>

                  <div className="form-input-wrapper">
                    <button type="submit" className="btn-custom w-100 form-btn">
                      {loading ? (
                        <CgSpinnerTwo size={24} className="spinner-icon" />
                      ) : (
                        "Submit Booking"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Booking;
