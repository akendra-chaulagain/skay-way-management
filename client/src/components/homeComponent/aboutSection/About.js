import React from "react";
import "./About.css";
import about from "../../../assets/about/about.JPG";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
   
      <div className="aboutUsData">
        <div className="container ">
          <div className="aboutUsDataWrapper">
            <div className="row">
              {/* messagfe from chairman */}
              <div className="col-lg-6 col-md-6 aboutUsDataImg">
                <img src={about} alt="about_aboutUsData" />
              </div>
              <div className="col-lg-6 col-md-6 aboutUsDataContent">
                <div className="section__title">About Us</div>
                <p>
                  Sky Way Management, A last resort of Manpower requirement to
                  its clients, has started its service since 2013 then
                  continuously supplies the manpower pertaining Blue to White
                  Colors Workers in the Middle East and Malaysia. It has a team
                  of competent, Talents who have worked in the sectors for
                  decades. Team of Talents goes deep down through the
                  requirements received by its value clients and always focuses
                  for the best output meeting the target in one –go to save the
                  time and effort of both the parties for fair and successful
                  recruitment. We always value ethics and professionalism at the
                  top.
                </p>
                <Link className="link" to="/about">
                  <button>Read More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
