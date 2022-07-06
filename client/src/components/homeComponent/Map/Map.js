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
                  <Iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8848484966197!2d85.32761721546599!3d27.720841431504805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ead%3A0x392af32fe87dd0ea!2sRadiant%20Infotech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1657083856795!5m2!1sen!2snp"
                    width="100%"
                    height="450"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></Iframe>
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
