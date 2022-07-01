import React from "react";
import "./Client.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { client } from "./ClientItem";

const Client = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    mobilel: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <>
      <div className="container-fluid client">
        <div className="clientWrapper">
          <div className="clientTopBar"> OUR CLIENTS</div>
          <div className="row">
            <div>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlaySpeed={2000}
                autoPlay={true}
                keyBoardControl={true}
                ssr={true}
                arrows={false}
              >
                {client.map((item) => (
                  <div
                    className="col-md-11 clientItem "
                    // data-aos="fade-up"
                    // data-aos-duration="1200"
                    key={item._id}
                  >
                    <img src={item.img} alt="" />
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

export default Client;
