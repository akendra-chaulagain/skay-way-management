import React from "react";
// import { member } from "../team/TeamMember";
import "./AboutInfo.css";


const AboutInfo = () => {
  return (
    <>
      <section class="aboutUs__area pb-200 pt-100">
        <div class="container aboutUsWrapper">
          <div class="row">
            <div class="col-xl-6 pr-0 col-lg-6">
              <div class="aboutUs__thumb ">
                <img
                  className="imageOne"
                  src="https://images.pexels.com/photos/1595392/pexels-photo-1595392.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div class="aboutUs__shape"></div>
              </div>
            </div>
            <div class="col-xl-5  col-lg-5 ">
              <div class="aboutUs__content wow fadeInRight" data-wow-delay=".4">
                <div class="section__title mb-25">
                  <h2>About US</h2>
                </div>
                <p>
                  Sky-Way Management Pvt. Ltd. has a main objective to deliver
                  high quality, efficient manpower to our valued clients and
                  mobilize Nepalese Job seekers to the world. The same time
                  resolving the unemployment crisis in the country. And we like
                  to ensure the healthy economy sound by earning the foreign
                  currency from abroad to Nepal. <br />
                  In your personalized business, a valuable employee is the
                  backbone of your establishment and without that element our
                  link becomes non-effective. This is impressed in our
                  objectives and gols in serving your human resources
                  objectives.
                  <br />
                  We personally want to extend our service with confidence to
                  better serve you in your employee needs and requirements. We
                  evaluate your employee standards.
                  Dedicatation-commitment-communication and punctuality- Lets
                  work together as a permanent team for a common goal.
                  <br />
                  We can assure you of complete satisfaction with our style of
                  operation confidently as well as with fruitful results.
                  Sky-Way Management Pvt. Ltd. has resolved to bring about a
                  change in the lives of our own fellowmen in Nepal, as well as
                  companies who need their assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
     
    </>
  );
};

export default AboutInfo;
