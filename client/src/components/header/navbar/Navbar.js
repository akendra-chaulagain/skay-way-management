import React from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container navBarWrapper">
          {/* company logo */}
          <Link className="link" to="/" class="navbar-brand">
            <img src={logo} alt="" />
          </Link>

          <ul class="navbar-nav ms-auto">
            {/* home page */}
            <li class="nav-item">
              <Link className="nav-link  link" to="/sky-way">
                Home
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link className=" nav-link  link dropbtn" to="/about">
                About Us
              </Link>
              <div className="dropdown-content">
                <Link className="link" to="about/about_nepal">
                  About Nepal{" "}
                </Link>
                <Link className="link" to="/about/why_nepalese">
                  Why Nepalese{" "}
                </Link>
              </div>
            </li>
            {/* jobs */}
            <li class="nav-item">
              <Link className="nav-link  link" to="/Job">
                Job
              </Link>
            </li>

            <li class="nav-item ">
              <Link class="nav-link link  " to="/document">
                Documentation
              </Link>
            </li>

            {/* post resume */}
            <li class="nav-item">
              <Link className="nav-link  link" to="/post_resume">
                Post Resume
              </Link>
            </li>

            <li class="nav-item">
              <Link className="nav-link  link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <a className="nav-link  link" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
