import React from "react";
import Logo from "../../../assets/logo2.png";
import { Link } from "react-router-dom";

const Serviceheader = () => {
  return (
    <>
      <div class="section-padding-x">
        <nav class="breakdown-navbar">
          <div class="breakdown-navbar-wrapper">
            <a class="navbar-brand" href="./index.html">
            <Link to="/"> 
              <img src={Logo} alt="logo" />
            </Link>
            </a>
            <ul class="navbar-list-service">
              <li class="nav-item cmn-color">
                <a class="nav-link" href="./index.html">
                  <Link to="/">Home</Link>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link cmn-color-service"
                  href="./service-details.html"
                >
                  <Link to="/">Services</Link>
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link cmn-color-service"
                  href="./index.html#pricing"
                >
                  <Link to="/">Pricing</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link cmn-color-service">
                  <Link to="/about"> About Us</Link>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link cmn-color-service" href="./contactUs.html">
                  <Link to="/contact">Contact</Link>
                </a>
              </li>
            </ul>

            <button class="btn-custom book-now cmn-bg-color">Book Now</button>
            <button class="hamburger cmn-color" onclick="toggleSidebar()">
              &#9776;
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Serviceheader;
