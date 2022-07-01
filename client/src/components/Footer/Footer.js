import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png"

const Footer = () => {
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
                  <img src={logo} alt="" />
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
                    <a href="*">Why Us</a>
                  </li>
                  <li>
                    <a href="/cart">Contact</a>
                  </li>
                  <li>
                    <a href="/login">Login</a>
                  </li>
                  <li>
                    <a href="/register">Register</a>
                  </li>
                </ul>
              </div>
              <div class="col-lg-2 col-md-6 middleSideFooterData">
                <h5 class=" mb-3">Quick Links</h5>
                <ul class="footerList">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="*">Privacy Policy</a>
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
          <p>Copyright © 2020 All Rights Reserved passion by Tech Info</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
