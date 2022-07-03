import React from 'react'
import "./ServiceInfo.css";

const ServiceInfo = () => {
  return (
    <>
      <section class="serviceInfo__area pb-200 pt-100">
        <div class="container serviceInfoWrapper">
          <div class="row">
            <div class="col-xl-6 pr-0 col-lg-6">
              <div class="serviceInfo__thumb ">
                <img
                  className="imageOne"
                  src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <div class="serviceInfo__shape"></div>
              </div>
            </div>
            <div class="col-xl-5  col-lg-5 ">
              <div
                class="serviceInfo__content wow fadeInRight"
                data-wow-delay=".4"
              >
                <div class="section__titlea mb-25">
                  <h2>Our Services</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, neque totam. Perferendis, facere. Eveniet voluptatum architecto dolores doloremque. Sint commodi aliquam tempore illum eveniet nemo esse non odit repellendus? Dolore ratione neque eaque minima sunt sed, quod vitae qui labore soluta magnam doloremque eligendi, non expedita? In esse maxime nostrum recusandae. Dolorem vel nisi, labore, magni dolore nihil accusantium ipsam alias veniam at velit minus tempora rem laudantium. Sit labore asperiores accusantium voluptatum ad ducimus consectetur fuga similique quisquam eligendi facere necessitatibus et aspernatur iure sed architecto, libero recusandae magnam aliquam! Dolores unde, sit eaque nostrum iure quod placeat eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae suscipit qui molestiae animi architecto assumenda! Et quisquam hic provident saepe id odit at aut illo harum minus tempore similique vel iure in, nam cumque voluptas soluta tenetur dignissimos esse incidunt. Eveniet sit quis itaque, eum quaerat esse praesentium quibusdam fuga quod. Veniam officia, cumque animi alias et aliquid omnis laboriosam voluptate recusandae dignissimos sint saepe tempora impedit iusto est.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceInfo