import React from "react";
import ServiceInfo from "../../components/serviceComponent/serviceInfo/ServiceInfo";
import ServicesSlider from "../../components/serviceComponent/servicesSlider/ServicesSlider";
import WorkSector from "../../components/serviceComponent/workSector/WorkSector"
import Footer from "../../components/Footer/Footer";
import "./Service.css";

const Service = () => {
  return (
    <div className="container-fluid services">
      <div className="serviceswrapper">
        {/* about us top bar */}
        <div className="servicesSlider">
          <ServicesSlider />
        </div>
        {/* service info */}
        <ServiceInfo />
        <WorkSector/>
        <Footer />
      </div>
    </div>
  );
};

export default Service;
