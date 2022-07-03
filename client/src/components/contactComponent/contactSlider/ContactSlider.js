import React from 'react'
import { Link } from 'react-router-dom';
import triangle from "../../../assets/images/slider/triangle.png";
import triangle2 from "../../../assets/images/slider/dotted-square.png";
import triangle3 from "../../../assets/images/slider/solid-square.png";
import triangle4 from "../../../assets/images/slider/circle.png";
import "./ContactSlider.css";

const ContactSlider = () => {
  return (
    <>
      <section className="contactSlider__area">
        <div className="contactSlider-active">
          <div className="single-contactSlider contactSlider__height d-flex align-items-center">
            <div className="contactSlider__shape">
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
              className="container contactSliderContent"
              data-aos="fade-up"
              data-aos-duration="1800"
            >
              {/* about us slider content */}
              <div className="row">
                <div className="col-xl-9 col-lg-9 col-md-10 col-sm-10">
                  <div className="contactSlider__content">
                    <h1 data-animation="fadeInUp" data-delay=".5s">
                      Contact Us
                    </h1>
                    <p>
                      <Link className="link" to="/">
                        <span className="span-1">Home</span>
                      </Link>
                      |<span>Contact us</span>
                    </p>
                    <div
                      className="contactSlider__btn"
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
}

export default ContactSlider