import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container navBarWrapper">
          {/* company logo */}
          <a class="navbar-brand" href="*">
            SKY-WAY
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
              {/* home page */}
              <li class="nav-item">
                <a class="nav-link link" href="/">
                  Home
                </a>
              </li>
              {/* why us */}
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

              <li class="nav-item">
                <a class="nav-link link" href="/sale">
                  Why Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link link" href="/aboutus">
                  About Us
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link link" href="/blog">
                  Services
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
