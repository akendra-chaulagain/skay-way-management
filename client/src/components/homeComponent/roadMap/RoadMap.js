import React from "react";
import "./RoadMap.css";
import { roadMap } from "./RoadMapItem";

const RoadMap = () => {
  return (
    <div className="container-fluid roadMap">
      <div className="roadMapWrapper">
        <div className="roadMapTitle">Standard Operating Procedure</div>
        <div className="row">
          {roadMap.map((item) => (
            <div className="col-md-2 roadMapContent" key={item._id}>
              <div className="roadMapNumber">{item.num}</div>
              <p>{item.title} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
