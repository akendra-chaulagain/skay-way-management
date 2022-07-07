import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "./GalleryImg.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
  {
    original:
      "https://images.pexels.com/photos/12430047/pexels-photo-12430047.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    thumbnail:
      "https://images.pexels.com/photos/12430047/pexels-photo-12430047.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    original:
      "https://images.pexels.com/photos/12319814/pexels-photo-12319814.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    thumbnail:
      "https://images.pexels.com/photos/12319814/pexels-photo-12319814.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    original:
      "https://images.pexels.com/photos/12238398/pexels-photo-12238398.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    thumbnail:
      "https://images.pexels.com/photos/12238398/pexels-photo-12238398.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    original:
      "https://images.pexels.com/photos/12004258/pexels-photo-12004258.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    thumbnail:
      "https://images.pexels.com/photos/12004258/pexels-photo-12004258.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    original:
      "https://images.pexels.com/photos/11789773/pexels-photo-11789773.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    thumbnail:
      "https://images.pexels.com/photos/11789773/pexels-photo-11789773.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const GalleryImg = () => {
  return (
    <>
      <div class="galleryImg">
        <div className="container">
          <div className="akendra">
            <ImageGallery
              items={images}
              originalClass="image"
              // showNav={false}
              thumbnailPosition={"left"}
              showFullscreenButton={false}
              showPlayButton={false}
              disableThumbnailSwipe={true}
              thumbnailHeight="ak"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default GalleryImg;
