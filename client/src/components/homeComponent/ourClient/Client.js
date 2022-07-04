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
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 4,
    },
    mobilel: {
      breakpoint: { max: 768, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <>
      <div className="client">
        <div className="container ">
          <div className="clientTopBar">Our Clients</div>
          <div className="clientWrapper">
            <div className="row">
              <Carousel
                responsive={responsive}
                arrows={false}
                showDots={false}
               
              >
                {client?.map((item) => (
                  <div class="col-md-11">
                    <div class="clientCard active p-3 text-center px-4">
                      <div class="userClient_content">
                        <img src={item.img} alt="" />
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

export default Client;
