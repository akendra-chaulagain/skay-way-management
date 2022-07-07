import React from "react";
import triangle from "../../../assets/images/slider/triangle.png";
import triangle2 from "../../../assets/images/slider/dotted-square.png";
import triangle3 from "../../../assets/images/slider/solid-square.png";
import triangle4 from "../../../assets/images/slider/circle.png";
import "./ResumeSlider.css";
import {Link} from "react-router-dom"

const ResumeSlider = () => {
  return (
    <>
      <section className="topSlider__area">
        <div className="topSlider-active">
          <div className="single-topSlider topSlider__height d-flex align-items-center">
            <div className="topSlider__shape">
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
              className="container topSliderContent"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {/* about us slider content */}
              <div className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="topSlider__content">
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Post Resume
                    </h1>
                    <p>
                      <Link className="link" to="/sky-way">
                        <span className="span-1">Home</span>
                      </Link>
                      |<span>Post Resume</span>
                    </p>
                    <div
                      className="topSlider__btn"
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

export default ResumeSlider;
