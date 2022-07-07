import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {

   useEffect(() => {
     // 👇️ scroll to top on page load
     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
   }, []);

  return (
    <>
      <nav class="navbar navbar-expand-lg">
        <div class="container navBarWrapper">
          {/* company logo */}
          <Link
            to="/sky-way"
            class="navbar-brand link"
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <img src={logo} alt="" />
          </Link>

          <ul class="navbar-nav ms-auto">
            {/* home page */}
            <li class="nav-item">
              <Link
                className="nav-link  link"
                to="/sky-way"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Home
              </Link>
            </li>

            <li class="nav-item dropdown">
              <Link
                className=" nav-link  link dropbtn"
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                About Us
              </Link>
              <div className="dropdown-content">
                <Link
                  className="link"
                  to="about/about_nepal"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  About Nepal{" "}
                </Link>
                <Link
                  className="link"
                  to="/about/why_nepalese"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  Why Nepalese{" "}
                </Link>
              </div>
            </li>
            {/* jobs */}
            <li class="nav-item">
              <Link
                className="nav-link  link"
                to="/Job"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Job
              </Link>
            </li>

            <li class="nav-item ">
              <Link
                class="nav-link link  "
                to="/document"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Documentation
              </Link>
            </li>

            {/* post resume */}
            <li class="nav-item">
              <Link
                className="nav-link  link"
                to="/post_resume"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Post Resume
              </Link>
            </li>

            <li class="nav-item">
              <Link
                className="nav-link  link"
                to="/gallery"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Gallery
              </Link>
            </li>
            <li class="nav-item">
              <Link
                className="nav-link  link"
                to="/contact"
                onClick={() => {
                  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
