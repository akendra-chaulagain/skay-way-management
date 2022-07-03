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
      <section className="resumeSlider__area">
        <div className="resumeSlider-active">
          <div className="single-resumeSlider resumeSlider__height d-flex align-items-center">
            <div className="resumeSlider__shape">
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
              className="container resumeSliderContent"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {/* about us slider content */}
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                  <div className="resumeSlider__content">
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Post Resume
                    </h1>
                    <p>
                      <Link className="link" to="/">
                        <span className="span-1">Home</span>
                      </Link>
                      |<span>Post resume</span>
                    </p>
                    <div
                      className="resumeSlider__btn"
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
