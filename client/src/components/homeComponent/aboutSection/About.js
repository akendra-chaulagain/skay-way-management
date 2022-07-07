import React from "react";
import "./About.css";
import about from "../../../assets/about/about.JPG";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section class="about__area ">
        <div class="container aboutWrapper">
          <div class="row">
            <div class=" col-md-6 col-xs-12">
              <div class="about__thumb">
                <img className="imageOne" src={about} alt="" />
              </div>
            </div>
            <div
              class=" col-md-5 col-xs-12 aboutDataText"
            >
              <div class="about__content">
                <div class="section__title">
                  ABOUT US
                </div>
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
      </section>
    </>
  );
};

export default About;
