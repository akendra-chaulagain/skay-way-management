import React from "react";
import triangle from "../../../assets/images/slider/triangle.png";
import triangle2 from "../../../assets/images/slider/dotted-square.png";
import triangle3 from "../../../assets/images/slider/solid-square.png";
import triangle4 from "../../../assets/images/slider/circle.png";
import "./AboutSlider.css";

const AboutSlider = () => {
  return (
    <>
      <section class="aboutTop__area">
        <div class="aboutTop-active">
          <div class="single-aboutTop aboutTop__height d-flex align-items-center">
            <div class="aboutTop__shape">
              <img class="shape triangle" src={triangle} alt="triangle" />
              <img
                class="shape dotted-square"
                src={triangle2}
                alt="dotted-square"
              />
              <img
                class="shape solid-square"
                src={triangle3}
                alt="solid-square"
              />
              <img class="shape circle" src={triangle4} alt="circle" />
            </div>
            <div
              class="container aboutTopContent"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {/* about us slider content */}
              <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                  <div class="aboutTop__content">
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      About Us
                    </h1>
                    <p>
                      <span className="span-1">Home</span> |{" "}
                      <span>About Us</span>
                    </p>
                    <div
                      class="aboutTop__btn"
                      data-animation="fadeInUp"
                      data-delay=".7s"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSlider;
