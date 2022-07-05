import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainTopbar from "./components/header/mainTopbar/MainTopbar";
import Navbar from "./components/header/navbar/Navbar";
import AboutUs from "./pages/about/AboutUs";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import PostResume from "./pages/postResume/PostResume";
import Service from "./pages/service/Service";

const App = () => {
  return (
    <>
      <MainTopbar />
      <Navbar />
      <Routes>
        {/* home page */}
        <Route path="/sky-way" element={<Home />} />
        {/* about us page */}
        <Route path="/about" element={<AboutUs />} />
        {/* post resume */}
        <Route path="/post_resume" element={<PostResume />} />
        {/* serives */}
        <Route path="/services" element={<Service />} />
        {/* contact us */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
