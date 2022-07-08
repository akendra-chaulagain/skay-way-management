import React, { useEffect } from "react";
import { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Logo from "../../../assets/logo.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const showSidebarr = () => setSidebar(!sidebar);

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
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
                <li className="sidebar-item  " onClick={showSidebarr}>
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
                <li
                  className="sidebar-item aboutItem"
                  onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                  }}
                >
                  <Link className="link" to="/about" onClick={showSidebarr}>
                    ABOUT US
                  </Link>
                  {/* dropdown menu */}
                  <div className="addIcon">
                    <i
                      className="fa-solid fa-plus"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    ></i>
                  </div>
                </li>
                {/* drop down item */}
                <div className="collapse" id="collapseExample">
                  <ul>
                    {/* about Nepal */}
                    <li className="collapse_item " onClick={showSidebarr}>
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                        className=" sidebarDopbtn link"
                        to="/about/about_nepal"
                      >
                        About Nepal
                      </Link>
                    </li>
                    {/* why nepalese */}
                    <li className="collapse_item " onClick={showSidebarr}>
                      <Link
                        onClick={() => {
                          window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          });
                        }}
                        className=" sidebarDopbtn link"
                        to="/about/why_nepalese"
                      >
                        Why Nepalese
                      </Link>
                    </li>
                  </ul>
                </div>
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
