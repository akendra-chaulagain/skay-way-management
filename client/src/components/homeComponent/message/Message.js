import React from "react";
import "./Message.css";
import chairman from "../../../assets/message/chairman.JPG"
import director from "../../../assets/message/director.JPG";

const Messange = () => {
  return (
    <>
      <div className="message">
        <div className="container ">
          <div className="messageWrapper">
            <div className="row">
              {/* messagfe from chairman */}
              <div className="col-lg-5 col-md-6 messageImg">
                <img src={chairman} alt="Img_message" />
              </div>
              <div className="col-lg-7 col-md-6 messageContent">
                <div className="messagename">MESSAGE FROM CHAIRMAN</div>
                <p>
                  Dear Valued Clients and Associates <br /> Greeting From SKY
                  WAY MANAGEMENT <br /> Since its’ operation SKY WAY Management
                  is always propelled with the Ethic and professionalism at the
                  Top. We are always dedicated to our valued clients for meeting
                  their need at one-go to save the time and effort while
                  recruiting the competent aspirants in the jobs. <br /> We have
                  a systematic procedure to hire the candidates in job based on
                  their skills and experience which values for the operations of
                  our valued client for the best out-put throughout the human
                  capital. <br /> We have a vast knowing of context of the work
                  and its nature as per the requirement we receive from our
                  clients and accordingly address for the best
                </p>
              </div>
              <div className=" col-md-7 messageContent secondData">
                <div className="messagename">
                  MESSAGE FROM MANAGING DIRECTOR
                </div>

                <p>
                  Dear Valued Clients and Associates <br /> Greeting From SKY
                  WAY MANAGEMENT <br /> Since its’ operation SKY WAY Management
                  is always propelled with the Ethic and professionalism at the
                  Top. We are always dedicated to our valued clients for meeting
                  their need at one-go to save the time and effort while
                  recruiting the competent aspirants in the jobs. <br /> We have
                  a systematic procedure to hire the candidates in job based on
                  their skills and experience which values for the operations of
                  our valued client for the best out-put throughout the human
                  capital. <br /> We have a vast knowing of context of the work
                  and its nature as per the requirement we receive from our
                  clients and accordingly address for the best
                </p>
              </div>
              <div className="col-md-5 messageImg secondData secondImg">
                <img src={director} alt="message_img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Messange;
