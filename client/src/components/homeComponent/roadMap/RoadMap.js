import React from "react";
import "./RoadMap.css";
import { roadMap } from "./RoadMapItem";

const RoadMap = () => {
  return (
    <div className="container-fluid roadMap">
      <div className="roadMapWrapper">
        <div className="roadMapTitle">Operating Procedure</div>
        <div className="roadMapWrapper">
          <div className="row ">
            {roadMap.map((item) => (
              <div className="col-lg-2 col-md-3 col-sm-4 col-6 mt-3  roadMapContainer">
                <div className=" roadMapData">
                  <span>
                    <i className="fa-solid fa-check"></i>
                    <div className="top-left">step {item.num}</div>
                  </span>
                  <p>{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
