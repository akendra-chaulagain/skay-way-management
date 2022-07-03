import React from "react";
import CountUp from "react-countup";
import "./Stats.css";
import { data } from "./statsData";

const Stats = () => {
  return (
    <>
      <div className="container-fluid stats">
        <div className="statsWrapper">
          <div className="row">
            {data.map((item) => (
              <div className="col-md-3 countainerContainer" key={item._id}>
                <CountUp start={0} end={item.ENum} delay={1} duration={3}>
                  {({ countUpRef }) => (
                    <>
                      <span ref={countUpRef} />
                      <h3>{item.title}</h3>
                    </>
                  )}
                </CountUp>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
