import React from 'react'
import Footer from '../../components/Footer/Footer';
import MainTopbar from '../../components/header/mainTopbar/MainTopbar';
import Navbar from '../../components/header/navbar/Navbar';
import About from '../../components/homeComponent/aboutSection/About';
import Map from '../../components/homeComponent/Map/Map';
import Client from '../../components/homeComponent/ourClient/Client';
import Slider from '../../components/homeComponent/slider/Slider';
import WhyUs from '../../components/homeComponent/whyUs/WhyUs';
import WorkSector from '../../components/homeComponent/workSector/WorkSector';

const Home = () => {
  return (
    <>
     
      <Slider />
      <About />
      <WhyUs />
      <Client />
      <WorkSector />
      <Map />
      <Footer />
    </>
  );
}

export default Home