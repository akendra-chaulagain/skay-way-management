import React from "react";
import "./App.css";
import MainTopbar from "./components/header/mainTopbar/MainTopbar";
import Navbar from "./components/header/navbar/Navbar";
import AboutUs from "./pages/about/AboutUs";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <>
      <MainTopbar />
      <Navbar />
      {/* <Home/> */}
      <AboutUs />
    </>
  );
};

export default App;
