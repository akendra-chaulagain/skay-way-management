import React from "react";
import "./ApplyForm.css";
import Footer from "../../components/Footer/Footer"

const ApplyForm = () => {
  return (
    <>
      <div className="applyForm">
        <div className="container">
          <div className="formWrapper">
            <form className="applyFormContainer">
              {/* form input fild */}
              <h3>Application Form</h3>
              <p>Construction</p>
              <div className="applyFormInput">

                {/* full name */}
                <div className="applyInputItem">
                  <label htmlFor="">Full Name</label>
                  <br />
                  <input type="text" />
                </div>

                {/* applying for */}
                <div className="applyInputItem ">
                  <label htmlFor="">Applying For</label>
                  <br />
                  <input type="text" />
                </div>

                {/* email */}
                <div className="applyInputItem">
                  <label htmlFor="">Email</label>
                  <br />
                  <input type="text" />
                </div>

                {/* phone */}
                <div className="applyInputItem">
                  <label htmlFor="">Phone Number</label>
                  <br />
                  <input type="text" />
                </div>
              </div>
              {/* select photo */}
              <div className="applyInputItemCv ">
                <label htmlFor="">CV</label>
                <br />
                <input type="file" />
              </div>
              <div className="formSubmitButton">
                <button>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ApplyForm;
