import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <section class="about__area ">
        <div class="container aboutWrapper">
          <div class="row">
            <div class=" col-md-6 col-xs-12">
              <div class="about__thumb">
                <img
                  className="imageOne"
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </div>
            <div
              class=" col-md-5 col-xs-12 aboutDataText"
              // data-aos="flip-left"
              // data-aos-duration="1500"
            >
              <div class="about__content">
                <div class="abouitsection__title">
                  <h2>ABOUT US</h2>
                </div>
                <p>
                  Why I say old chap that is spiffing do one, cup of char bite
                  your arm off lavatory bugger all mate bog-standard bits and
                  bobs I'm telling barmy blow. Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Eius tempora culpa eligendi
                  temporibus aliquam quidem doloremque ullam suscipit velit quo?
                  Aut odit perferendis reiciendis rerum ipsum, nulla eveniet
                  inventore doloremque corrupti, quam esse numquam, a architecto
                  voluptate. Non, quo officia! <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatum, voluptatibus.
                </p>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
