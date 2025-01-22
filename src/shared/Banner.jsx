import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner-content">
        <h1 className="hero-title">
          The Shop You Can <span className="trust">Trust</span> For Quality
          <br />
          Repair at a <span className="fair-price">Fair Price</span>
        </h1>
        <p className="hero-text">
          We pride ourselves on delivering top-notch repairs with honesty and
          integrity. Whether it's a quick fix or a major overhaul, our
          experienced technicians use the highest quality parts and the latest
          tools to get the job done right the first time.
        </p>

        <form className="banner-select-form">
          <div className="banner-select">
            <p className="banner-select-title">Recovery Type*</p>
            <select className="form-select" required>
              <option>A2B Transportation</option>
              <option>Towing</option>
              <option>Roadside Assistance</option>
            </select>
          </div>
          <div className="banner-select">
            <p className="banner-select-title">Vehicle Make*</p>
            <select className="form-select" required>
              <option>Toyota</option>
              <option>Ford</option>
              <option>Honda</option>
            </select>
          </div>
          <div className="banner-select">
            <p className="banner-select-title">Vehicle Model*</p>
            <select className="form-select" required>
              <option>Corolla</option>
              <option>Civic</option>
              <option>Focus</option>
            </select>
          </div>
          <div className="banner-select">
            <p className="banner-select-title">Registration Number*</p>
            <input
              type="text"
              className="form-control"
              placeholder="Registration Number"
              required
            />
          </div>
          <div className="">
            <button type="submit" className="btn-custom">
              Get Quote
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Banner;
