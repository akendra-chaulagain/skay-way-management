import React from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebarr = () => setSidebar(!sidebar);
  return (
    <>
      {/* side bar top container */}
      <div className="sidebar">
        <div className="sidebarTopContainer">
          <div className="menuIconContainer">
            {/* navbar  on */}
            <i className="fa-solid fa-bars" onClick={showSidebarr}></i>
          </div>
          {/* company logo */}
          <div className="companyLogoSidebar">
            <Link className="link" to="/sky-way">
              {/* <img className="img-fluid" src="ak" alt="company_logo" /> */}
              <img src={Logo} alt="logo_img" />
            </Link>
          </div>
        </div>
        <div className="sideBarWrappper">
          {/* nav close */}
          <div className={sidebar ? "side-menu  " : "side-menu active"}>
            <div className="closeNavIcon">
              <div className="topBarSliderLogo">
                <img src={Logo} alt="logo_img" />
                <i className=" fa-solid fa-xmark" onClick={showSidebarr}></i>
              </div>
              <ul className="sidebar-nav">
                {/* home page */}
                <li className="sidebar-item" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className="link "
                    to="/sky-way"
                  >
                    HOME
                  </Link>
                </li>
                {/* About */}
                <li className="sidebar-item" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className="link"
                    to="/about"
                  >
                    ABOUT US
                  </Link>
                </li>
                {/* job */}
                <li className="sidebar-item" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className="link"
                    to="/job"
                  >
                    JOB
                  </Link>
                </li>
                {/* document */}
                <li className="sidebar-item " onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className=" sidebarDopbtn link"
                    to="/document"
                  >
                    DOCUMENT
                  </Link>
                </li>
                {/* post_resume*/}
                <li className="sidebar-item" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className="link"
                    to="/post_resume"
                  >
                    POST RESUME
                  </Link>
                </li>
                {/* gallery*/}
                <li className="sidebar-item" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className="link"
                    to="/gallery"
                  >
                    GALLERY
                  </Link>
                </li>
                {/* contact*/}
                <li className="sidebar-item" onClick={showSidebarr}>
                  <Link
                    onClick={() => {
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                    }}
                    className="link"
                    to="/contact"
                  >
                    CONTACT
                  </Link>
                </li>
                <hr />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
