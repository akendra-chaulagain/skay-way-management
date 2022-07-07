import React from "react";
import "./Contact.css";
import ContactSlider from "../../components/contactComponent/contactSlider/ContactSlider";
import Form from "../../components/contactComponent/form/Form";
import Footer from "../../components/Footer/Footer"

const Contact = () => {
  return (
    <>
      <div className="container-fluid contact">
        <div className="contactwrapper">
          {/* about us top bar */}
          <div className="contactSlider">
            <ContactSlider />
          </div>
          {/* form */}
          <Form />
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Contact;
