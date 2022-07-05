import React from "react";
// import AboutInfo from "../../components/aboutContainer/aboutInfo/AboutInfo";
import AboutSlider from "../../components/aboutContainer/aboutSlider/AboutSlider";
import AboutUsInfo from "../../components/aboutContainer/aboutUsInfo/AboutUsInfo";
import WhyUs from "../../components/aboutContainer/whyUs/WhyUs";
import Footer from "../../components/Footer/Footer";
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
          <AboutUsInfo />
          {/* why us */}
          <WhyUs />
          {/* footer */}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
