import React, { useState } from "react";
import Logo from "../../../assets/logo2.png";
import Logo1 from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Aboutheader = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
      const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
      };
    
  return (
    <div class="section-padding-x">
      <nav className="breakdown-navbar">
        <div className="breakdown-navbar-wrapper">
          <Link className="navbar-brand" to="/">
            <img src={Logo} alt="logo" />
          </Link>
          <ul className="navbar-list">
            <li className="nav-item-1">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item-1">
              <Link className="nav-link" to="/service">
                Service
              </Link>
            </li>
            <li className="nav-item-1">
              <Link className="nav-link" to="/#pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item-1">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item-1">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <button className="btn-custom book-now">Book Now</button>
          <button className="hamburger text-black" onClick={toggleSidebar}>
            &#9776;
          </button>
        </div>
      </nav>
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div className="sidebar-logo">
            <img src={Logo1} alt="Logo" />
          </div>
          <ul className="sidebar-list">
            <li className="sidebar-item">
              <Link to="/">Home</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/service">Services</Link>
            </li>
            <li className="sidebar-item">
              <Link to="/#pricing">Pricing</Link>
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
    </div>
  );
};

export default Aboutheader;
