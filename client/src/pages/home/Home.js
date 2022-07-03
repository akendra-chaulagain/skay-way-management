import React from "react";
import Footer from "../../components/Footer/Footer";
import About from "../../components/homeComponent/aboutSection/About";
import Map from "../../components/homeComponent/Map/Map";
import Client from "../../components/homeComponent/ourClient/Client";
import Slider from "../../components/homeComponent/slider/Slider";
import WorkSector from "../../components/homeComponent/workSector/WorkSector";
import Team from "../../components/homeComponent/team/Team";
import Messange from "../../components/homeComponent/message/Message";
import Testimonials from "../../components/homeComponent/testimonials/Testimonials";
import RoadMap from "../../components/homeComponent/roadMap/RoadMap";
import Stats from "../../components/homeComponent/stats/Stats";

const Home = () => {
  return (
    <>
      <Slider />
      <About />
      {/* <Messange /> */}
      <Team />
      <RoadMap />
      <Testimonials />
      <Client />
      <Stats/>
      <WorkSector />
      <Map />
      <Footer />
    </>
  );
};

export default Home;
