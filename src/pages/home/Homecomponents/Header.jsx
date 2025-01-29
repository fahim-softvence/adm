import React, { useState } from "react";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import useHomeData from "../../../hooks/useHomeData";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { section } = useHomeData("Home", "Hero Section");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header
      className="hero-section"
      style={{ backgroundImage: `url(${section?.image_url})` }}
    >
      <div className="section-padding-x">
        <nav className="breakdown-navbar">
          <div className="breakdown-navbar-wrapper">
              {section?.navlogo?.map((logo, index) => (
                <Link key={index} className="navbar-brand">
                  <img src={logo?.logo_url} alt="logo" />
                  <h2 className="logo-title">Car Breakdown</h2>
                </Link>
              ))}

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

            <button className="btn-custom book-now">
              <Link to="/#bookingform">Book Now</Link>
            </button>
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
        <div className="banner-content">
          <h1 className="hero-title">{section?.title}</h1>
          <p className="hero-text">{section?.description}</p>
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
            <div>
              <button type="submit" className="btn-custom">
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
