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
                <Link className="nav-link  link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className=" nav-link  link" to="/about">
                  About Us
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a class="nav-link link  dropbtn" href="/shop">
                  Documentation
                </a>

                <div className="dropdown-content">
                  <a href="/women_cloth">Demand Letter </a>
                  <a href="/man_cloth">Employment Contract </a>
                  <a href="/kids_cloth">Gurantee Letter </a>
                  <a href="/jewelry">Mobilization Agreement </a>
                  <a href="/luxury_bag">Power Of Attornity </a>
                </div>
              </li>

              {/* post resume */}
              <li class="nav-item">
                <Link className="nav-link  link" to="/post_resume">
                  Post Resume
                </Link>
              </li>

              <li class="nav-item">
                <Link className="nav-link  link" to="/services">
                  Services
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
