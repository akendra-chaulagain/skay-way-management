import React from "react";
import SKYWAY_LICENCE_UPTO from "../../../assets/document/SKYWAY_LICENCE_UPTO.jpeg";
import Company_Register from "../../../assets/document/Company_Register.jpg";
import Pan_No from "../../../assets/document/Pan_No.jpg";
import "./Document.css";

const Document = () => {
  return (
    <div className="document">
      <div className="container">
        <div className="companyDocument">
          <div className="row">
            {/* firts imagdocument */}
            <div className="row">
              <div className="col-12">
                <img
                  className="img-fluid"
                  src={Company_Register}
                  alt="Company_Register"
                />
              </div>
              {/* second document  */}
              <div className="col-12">
                <img className="img-fluid" src={Pan_No} alt="Pan_No" />
              </div>
            </div>

            {/* third document */}
            <div className="col-12">
              <img
                className="img-fluid "
                src={SKYWAY_LICENCE_UPTO}
                alt="SKYWAY_LICENCE_UPTO"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Document;
