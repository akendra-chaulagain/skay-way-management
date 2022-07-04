import React from "react";
import "./Testimonials.css";
import { testomonials } from "./productData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobilel: {
      breakpoint: { max: 768, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    }
  
  };

  return (
    <>
      <div className="testimonials">
        <div className="container ">
          <div className="testimonialsTopBar">Our Clients Say</div>
          <div className="testomonialsWrapper">
            <div className="row">
              <Carousel
                responsive={responsive}
                arrows={false}
                showDots={true}
                dotListClass="custom-dot-list-style"
                containerClass="carousel-container"
              >
                {testomonials.map((item) => (
                  <div class="col-md-11">
                    <div class="testimonialsCard active p-3 text-center px-4">
                      <div class="user-content">
                        <h5 class="mb-0">{item.name}</h5>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
