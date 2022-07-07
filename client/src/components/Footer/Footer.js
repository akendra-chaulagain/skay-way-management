import React, { useEffect } from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div class="d-flex flex-column footer">
        <footer class="w-100 py-4 flex-shrink-0 footerWrapper">
          <div class="container py-4">
            <div class="row gy-4 gx-5">
              {/* left side data */}
              <div class="col-lg-4 col-md-6 leftSideFooterData">
                {/* /logo */}
                <div className="companyLogo">
                  <img src={logo} alt="logo_img" />
                </div>
                <p class="small">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              {/* middle side data */}
              <div class="col-lg-2 col-md-6 middleSideFooterData">
                <h5 class=" mb-3">Links</h5>
                <ul class="footerList">
                  <li>
                    <Link
                      className="link"
                      to="/sky-way"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      to="/about"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      to="/gallery"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      to="/document"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Document
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 middleSideFooterData">
                <h5 class=" mb-3">Quick Links</h5>

                <ul class="footerList">
                  <li>
                    <Link
                      to="/job"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Job
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      to="/contact"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      to="/about/about_nepal"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      About Nepal
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="link"
                      to="/about/why_nepalese"
                      onClick={() => {
                        window.scrollTo({
                          top: 0,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Why Nepalese ?
                    </Link>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 rightSideFooterData">
                <h5 class=" mb-3">Follow Us</h5>
                <div class="followUsIcon">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                  <i class="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <hr />
        <div className="copyright">
          <p>Copyright © 2022 All Rights Reserved by Tech Info</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
