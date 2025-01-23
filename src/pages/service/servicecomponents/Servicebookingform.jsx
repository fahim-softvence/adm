import React from "react";
import Serphoto from "../../../assets/service-photo-2.png.png"

const Servicebookingform = () => {
  return (
    <>
      <section class="section-padding-x text-img-container m-top m-bottom">
        <div class="text-container">
          <form class="booking-form" action="">
            <div class="form-top">
              <div class="form-top-title mt-4 mt-md-0">Booking Form</div>
              <div class="form-top-text mt-2">Vehicle Details</div>
            </div>
            <div class="form-item">
              <label for="">
                Recovery Type <span>*</span>{" "}
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="form-item">
              <label for="">
                Vehicle Model <span>*</span>{" "}
              </label>
              <input placeholder="Vehicle Model" type="text" />
            </div>
            <div class="form-item">
              <label for="">
                Vehicle Make <span>*</span>{" "}
              </label>
              <input placeholder="Vehicle Make" type="text" />
            </div>
            <div class="form-item">
              <label for="">
                {" "}
                Registration Number <span>*</span>{" "}
              </label>
              <input placeholder=" Registration Number" type="text" />
            </div>

            <div class="form-top">
              <div class="form-top-title">Additional Information</div>
              <div class="form-top-text mt-2">
                Is the car hybrid or electric?
              </div>
            </div>
            <div class="yes-no-container">
              <div class="yes-no-option">
                <input
                  type="radio"
                  id="yes"
                  name="yes-no"
                  value="yes"
                  checked
                />
                <label for="yes">
                  <span>Yes</span>
                </label>
              </div>
              <div class="yes-no-option">
                <input type="radio" id="no" name="yes-no" value="no" />
                <label for="no">
                  <span>No</span>
                </label>
              </div>
            </div>

            <div class="form-top mt-5">
              <div class="form-top-title">Service-Specific Information</div>
              <div class="form-top-text mt-2">Location</div>
            </div>

            <div class="form-item">
              <label for="">
                {" "}
                Postcode <span>*</span>{" "}
              </label>
              <input placeholder="Enter Postcode" type="text" />
            </div>

            <button class="form-action-btn mt-4" type="button">
              Use Current location
            </button>

            <div class="form-top mt-5">
              <div class="form-top-title">Supporting Image (Optional)</div>
              <div class="file-upload mt-4">
                <label class="file-upload-label" for="fileInput">
                  Choose File
                </label>
                <input type="file" id="fileInput" class="file-input" />
                <span class="file-chosen-text">No File Chosen</span>
              </div>
            </div>

            <button class="form-action-btn mt-4" type="submit">
              Submit Booking
            </button>
          </form>
        </div>

        <div class="img-container d-none d-md-block">
          <img src={Serphoto} alt="Serphoto" />
        </div>
      </section>
    </>
  );
};

export default Servicebookingform;
