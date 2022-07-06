import React from "react";
import GalleryImg from "../../components/GalleryComponent/GalleryImg/GalleryImg";
import GallerySlider from "../../components/GalleryComponent/GallerySlider/GallerySlider";
import Footer from "../../components/Footer/Footer";

const Gallery = () => {
  return (
    <>
      <GallerySlider />
      <GalleryImg />
      <Footer />
    </>
  );
};

export default Gallery;
