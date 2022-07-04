import React from "react";
import "./WorkSector.css";
import { sector } from "./sector";

const WorkSector = () => {
  return (
    <>
      <div className="container-fluid sector">
        <div className="sectorWrapper">
          <div className="sectorTitle">Sector we Work For</div>
          <div className="row">
            {sector.map((item) => (
              <div class="col-lg-2 col-md-3 col-sm-4 col-6 sectorItemContainer">
                <div class="sector__item  text-center " data-wow-delay=".4s">
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
 