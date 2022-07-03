import React from 'react'
import "./Contact.css"
import ContactSlider from "../../components/contactComponent/contactSlider/ContactSlider";

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
        
        </div>
      </div>
    </>
  );
}

export default Contact