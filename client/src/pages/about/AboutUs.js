import React from "react";
import AboutInfo from "../../components/aboutContainer/AboutInfo/AboutInfo";
import AboutSlider from "../../components/aboutContainer/aboutSlider/AboutSlider";
import Footer from "../../components/Footer/Footer"
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="container-fluid aboutUs">
        <div className="aboutUswrapper">
          {/* about us top bar */}
          <div className="aboutUsSlider">
            <AboutSlider />
          </div>
          {/* about us info */}
          <AboutInfo />
       
          {/* footer */}
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
