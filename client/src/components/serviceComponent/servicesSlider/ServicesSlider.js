import React from "react";
import { Link } from "react-router-dom";
import triangle from "../../../assets/images/slider/triangle.png";
import triangle2 from "../../../assets/images/slider/dotted-square.png";
import triangle3 from "../../../assets/images/slider/solid-square.png";
import triangle4 from "../../../assets/images/slider/circle.png";
import "./ServicesSlider.css";


const ServicesSlider = () => {
  return (
    <>
      <section className="serviceSlider__area">
        <div className="serviceSlider-active">
          <div className="single-serviceSlider serviceSlider__height d-flex align-items-center">
            <div className="serviceSlider__shape">
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
              className="container serviceSliderContent"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {/* about us slider content */}
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                  <div className="serviceSlider__content">
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Services
                    </h1>
                    <p>
                      <Link className="link" to="/">
                        <span className="span-1">Home</span>
                      </Link>
                      |<span>Services</span>
                    </p>
                    <div
                      className="serviceSlider__btn"
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

export default ServicesSlider;
