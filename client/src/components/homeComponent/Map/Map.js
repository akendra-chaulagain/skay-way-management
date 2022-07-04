import React from "react";
import "./Map.css";
import Iframe from "react-iframe";

const Map = () => {
  return (
    <>
      <div className="contact__area">
        <div className="container-fluid p-0">
          <div className="row no-gutters">
            <div className="col-xl-12">
              <div className="contact__map">
                <div className="mapurl">
                  <Iframe src="https://maps.google.com/maps?hl=en&amp;q=Dhaka+()&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"></Iframe>
                </div>

                <div className="contact__wrapper d-md-flex justify-content-between">
                  <div className="contact__info mr-100">
                    <h3>Get in touch</h3>
                    <ul>
                      <li>
                        <h4>Address</h4>
                        <p>
                          24 Parking Plaza, Suite 506 <br />
                          Ardmore, SA 19004
                        </p>
                      </li>
                      <li>
                        <h4>call us</h4>
                        <p>
                          <p>(404) 888 123 456</p>
                        </p>
                        <p>
                          <p href="tel:(204)-888-234-674">(204) 888 234 674</p>
                        </p>
                      </li>
                      <li>
                        <h4>Email Address</h4>
                        <p>
                          <p href="mailto:Info@example.com">Info@example.com</p>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="contact__form">
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="wow fadeInUp"
                        data-wow-delay=".2s"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        className="wow fadeInUp"
                        data-wow-delay=".4s"
                      />
                      <textarea
                        placeholder="Your Message"
                        className="wow fadeInUp"
                        data-wow-delay=".6s"
                      ></textarea>
                      <button type="submit" data-wow-delay=".8s">
                        Send Message
                      </button>
                    </form>
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

export default Map;
