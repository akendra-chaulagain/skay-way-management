import React from "react";
import "./WorkSector.css";
import { sector } from "./sector";

const WorkSector = () => {
  return (
    <>
      <div className="container-fluid sector">
        <div className="sectorWrapper">
          <div className="sectorTitle">SECTOR WE WORK FOR</div>
          <div className="row">
            {sector.map((item) => (
              <div class="col-xl-3 col-lg-4 col-md-6">
                <div
                  class="sector__item p-relative text-center fix mb-30 wow fadeInUp"
                  data-wow-delay=".4s"
                >
                  <div class="sector__thumb mb-25">
                    {/* 240*200 */}
                    <img src={item.img} alt="sector" />
                    <h3>{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkSector;
