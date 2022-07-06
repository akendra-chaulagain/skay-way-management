import React from "react";
import "./Contact.css";
import ContactSlider from "../../components/contactComponent/contactSlider/ContactSlider";
import Form from "../../components/contactComponent/form/Form";

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
        </div>
      </div>
    </>
  );
};

export default Contact;
