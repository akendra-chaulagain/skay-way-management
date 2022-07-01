import React from "react";
import "./App.css";
import MainTopbar from "./components/header/mainTopbar/MainTopbar";
import Navbar from "./components/header/navbar/Navbar";
import WorkSector from "./components/homeComponent/workSector/WorkSector";
import About from "./components/homeComponent/aboutSection/About";
import Slider from "./components/homeComponent/slider/Slider";
import WhyUs from "./components/homeComponent/whyUs/WhyUs";
import Client from "./components/homeComponent/ourClient/Client";

const App = () => {
  return (
    <>
      <MainTopbar />
      <Navbar />
      <Slider />
      <About />
      <WhyUs />
      <Client />
      {/* <WorkSector /> */}
    </>
  );
};

export default App;
