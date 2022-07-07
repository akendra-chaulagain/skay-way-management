import React from "react";
import Iframe from "react-iframe";
import "./Form.css";

const Form = () => {
  return (
    <>
      {/* Form */}
      <div className="form">
        <div className="container">
          <div className="formTitle">Get in touch.</div>
          <div className="row">
            {/* left side container */}
            <div className="col-md-8 mb-5">
              {/* contact us form */}
              <form className="contact-form row">
                <div className="form-field col-lg-6">
                  {/* full name */}
                  <label htmlFor="">Full Name</label>
                  <input name="name" type="text" />
                </div>
                {/* email */}
                <div className="form-field email-field col-lg-6 ">
                  <label htmlFor="">Email</label>
                  <input name="email" type="email" />
                </div>
                {/* subject */}
                <div className="form-field col-lg-12 mt-4 ">
                  <label htmlFor="">Subject</label>
                  <input name="subject" type="text" />
                </div>
                {/* messsage */}
                <div className="form-field col-lg-12 mt-4">
                  <label htmlFor="">Message</label>
                  <textarea name="message" type="text" />
                </div>
                {/* submmit button */}
                <div className="submmitButton">
                  <button type="submmit">Submit Now</button>
                </div>
              </form>
            </div>
            {/* contact us data (icon) */}
            <div className="col-md-4 rightSideFormData">
              {/* location icon */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i className="fa-solid fa-location-pin"></i>
                </p>
                <h5 className="text-center">Office Location</h5>
                <h6 className="text-center">Katmandu ,Nepal ,street 32</h6>
              </div>
              {/* contact us icon */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i className="fa-solid fa-phone"></i>
                </p>
                <h5 className="text-center">Contact Us </h5>
                <h6 className="text-center">+654675476 ,+768768768</h6>
              </div>
              {/* email */}
              <div className="contactUsIconItem">
                <p className="text-center">
                  <i className="fa-solid fa-envelope"></i>
                </p>
                <h5 className="text-center">Our email </h5>
                <h6 className="text-center">companyName@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* map container */}
      <div className=" container-fluid mapContainer">
        <div className="row">
          <div className="col-md-12">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.8848484966197!2d85.32761721546599!3d27.720841431504805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1907b0522ead%3A0x392af32fe87dd0ea!2sRadiant%20Infotech%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1657083856795!5m2!1sen!2snp"
              width="100%"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></Iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
