import React from "react";
import "./About.css";
// import about1 from "../../../assets/about/about-1.jpg";
import redShape from "../../../assets/about/red-shape.png";

const About = () => {
  return (
    <>
      <section class="about__area pb-200 pt-100">
        <div class="container aboutWrapper">
          <div class="row">
            <div class="col-xl-6 pr-0 col-lg-6">
              <div
                class="about__thumb m-img wow fadeInLeft"
                data-wow-delay=".2s"
              >
                <img
                  className="imageOne"
                  src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                  // data-aos="flip-left"
                  // data-aos-duration="2000"
                />
                <div class="about__shape">
                  <img src={redShape} alt="" />
                </div>
              </div>
            </div>
            <div
              class="col-xl-5 offset-xl-1 col-lg-5 offset-lg-1"
              // data-aos="flip-left"
              // data-aos-duration="1500"
            >
              <div class="about__content wow fadeInRight" data-wow-delay=".4">
                <div class="section__title mb-25">
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
