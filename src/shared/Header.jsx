import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import getHomeData from "../hooks/getHomeData";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const {homepageData} = getHomeData();
  console.log(homepageData);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  

  return (
    <header className="hero-section">
      <div className="section-padding-x">
        <nav className="breakdown-navbar">
          <div className="breakdown-navbar-wrapper">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
            </Link>
            <ul className="navbar-list">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>

            <button className="btn-custom book-now">Book Now</button>
            <button className="hamburger" onClick={toggleSidebar}>
              &#9776;
            </button>
          </div>
        </nav>

        {/* Sidebar */}
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <img src={Logo} alt="Logo" />
            </div>
            <ul className="sidebar-list">
              <li className="sidebar-item">
                <Link to="/">Home</Link>
              </li>
              <li className="sidebar-item">
                <Link to="/service">Services</Link>
              </li>
              <li className="sidebar-item">
                <Link to="/#pricing" onClick={() =>setIsSidebarOpen(false)}>Pricing</Link>
              </li>
              <li className="sidebar-item">
                <Link to="/about">About Us</Link>
              </li>
              <li className="sidebar-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
            <button className="btn-custom">Book Now</button>
          </div>
        </div>
        {/* Banner Content */}
        <div  class="banner-content">
          <h1 class="hero-title">
            {homepageData.title}
             <span class="trust"></span> 
            <br />
           <span class="fair-price"></span>
          </h1>
          <p class="hero-text">
            {homepageData.description}
          </p>

          <form class="banner-select-form">
            <div class="banner-select">
              <p class="banner-select-title">Recovery Type*</p>
              <select class="form-select" required>
                <option>A2B Transportation</option>
                <option>Towing</option>
                <option>Roadside Assistance</option>
              </select>
            </div>
            <div class="banner-select">
              <p class="banner-select-title">Vehicle Make*</p>
              <select class="form-select" required>
                <option>Toyota</option>
                <option>Ford</option>
                <option>Honda</option>
              </select>
            </div>
            <div class="banner-select">
              <p class="banner-select-title">Vehicle Model*</p>
              <select class="form-select" required>
                <option>Corolla</option>
                <option>Civic</option>
                <option>Focus</option>
              </select>
            </div>
            <div class="banner-select">
              <p class="banner-select-title">Registration Number*</p>
              <input
                type="text"
                class="form-control"
                placeholder="Registration Number"
                required
              />
            </div>
            <div class="">
              <button type="submit" class="btn-custom">
                Get Quote
              </button>
            </div>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
