import React from "react";
import "./Message.css";

const Messange = () => {
  return (
    <>
      <div className="container-fluid message">
        <div className="messageWrapper">
          <div className="row">
            {/* messagfe from chairman */}
            <div className=" col-md-6 messageImg">
              <img
                src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>Bhupendra Kumar Kadariya</p>
            </div>
            <div className="col-md-6 messageContent">
              <div className="messagename">Message From Chairman</div>
              <p>
                Dear Valued Clients and Associates <br /> Greeting From SKY WAY
                MANAGEMENT <br /> Since its’ operation SKY WAY Management is
                always propelled with the Ethic and professionalism at the Top.
                We are always dedicated to our valued clients for meeting their
                need at one-go to save the time and effort while recruiting the
                competent aspirants in the jobs. <br /> We have a systematic
                procedure to hire the candidates in job based on their skills
                and experience which values for the operations of our valued
                client for the best out-put throughout the human capital. <br />{" "}
                We have a vast knowing of context of the work and its nature as
                per the requirement we receive from our clients and accordingly
                address for the best
              </p>
            </div>
            <div className=" col-md-6 messageContent">
              <div className="messagename">Message From Managing Director</div>

              <p>
                Dear Valued Clients and Associates <br /> Greeting From SKY WAY
                MANAGEMENT <br /> Since its’ operation SKY WAY Management is
                always propelled with the Ethic and professionalism at the Top.
                We are always dedicated to our valued clients for meeting their
                need at one-go to save the time and effort while recruiting the
                competent aspirants in the jobs. <br /> We have a systematic
                procedure to hire the candidates in job based on their skills
                and experience which values for the operations of our valued
                client for the best out-put throughout the human capital. <br />{" "}
                We have a vast knowing of context of the work and its nature as
                per the requirement we receive from our clients and accordingly
                address for the best
              </p>
            </div>
            <div className="col-md-6 messageImg">
              <img
                src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
              <p>Bhupendra Kumar Kadariya</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messange;