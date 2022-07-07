import React from "react";
import "./Slider.css";
import triangle from "../../../assets/images/slider/triangle.png";
import triangle2 from "../../../assets/images/slider/dotted-square.png";
import triangle3 from "../../../assets/images/slider/solid-square.png";
import triangle4 from "../../../assets/images/slider/circle.png";

const Slider = () => {
  return (
    <>
      <div className=" slider__area">
        <div className="container">
          <div className="slider-active sliderWrapper">
            <div className="single-slider slider__height d-flex align-items-center">
              <div className="slider__shape">
                <img className="shape triangle" src={triangle} alt="triangle" />
                <img
                  className="shape dotted-square"
                  src={triangle2}
                  alt="dotted-square"
                />
                <img
                  className="shape solid-square"
                  src={triangle3}
                  alt="solid-square"
                />
                <img className="shape circle" src={triangle4} alt="circle" />
              </div>
              <div
                className="container-fluid sliderContent"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <div className="row">
                  <div className="col-xl-12 col-lg-12 col-md-10 col-sm-10 homeSlider__content">
                    <span>
                      Sky-Way Management always deliver high quality service.
                    </span>
                    <h1>Be Sure You Put Your Feet in Right Place.</h1>
                    <div
                      className="slider__btn"
                      data-animation="fadeInUp"
                      data-delay=".7s"
                    >
                      <button>Start Here</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
