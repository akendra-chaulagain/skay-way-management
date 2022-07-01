import React from "react";
import "./Slider.css";
import triangle from "../../../assets/images/slider/triangle.png";
import triangle2 from "../../../assets/images/slider/dotted-square.png";
import triangle3 from "../../../assets/images/slider/solid-square.png";
import triangle4 from "../../../assets/images/slider/circle.png";

const Slider = () => {
  return (
    <>
      <section class="slider__area">
        <div class="slider-active">
          <div
            class="single-slider slider__height d-flex align-items-center"
          >
            <div class="slider__shape">
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
              class="container sliderContent"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              <div class="row">
                <div class="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                  <div class="slider__content">
                    <span data-animation="fadeInUp" data-delay=".3s">
                      Sky-Way Management always deliver high quality service.
                    </span>
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Be Sure You Put Your Feet in <br /> Right Place
                    </h1>
                    <div
                      class="slider__btn"
                      data-animation="fadeInUp"
                      data-delay=".7s"
                    >
                      <a href="contact.html" class="z-btn z-btn-transparent">
                        Get a quote
                      </a>
                    </div>
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

export default Slider;
