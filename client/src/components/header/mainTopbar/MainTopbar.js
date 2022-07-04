import React from "react";
import "./MainTopbar.css";

const MainTopbar = () => {
  return (
    <>
      <div className="mainTopbar">
        <div className="container ">
          <div className="row">
            {/* left side contain */}
            <div className="col-6 leftSideMainTopBar">
              <div className="iconsItem">
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className="iconsItem">
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className="iconsItem">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>

            {/* right side contain */}
            <div className="col-6 rightSidemainTopBar">
              {/* contact info */}
              <div className="rightSideContact">
                <i class="fa-solid fa-phone"></i>
                <span>+5465467547</span>
              </div>
              {/* email ingo */}
              <div className="rightSideEmail">
                <i class="fa-regular fa-envelope"></i>
                <span>info@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainTopbar;
