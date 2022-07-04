import React from "react";
import "./JobsSection.css";
import { job } from "./jobData";

const JobsSection = () => {
  return (
    <>
      <div className="jobSection">
        <div className="container">
          <div className="jobSectionWrapper">
            <div className="jobSectionTitle">New Jobs</div>
            <div className="jobSectionWrapper">
              <div className="row ">
                {job.map((item) => (
                  <div className="col-lg-3 col-md-3 col-sm-4 col-6 mt-3  jobSectionContainer">
                    <div className=" jobSectionData">
                      <span>{item.title}</span>
                      <p>{item.desc.slice(0, 60)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsSection;
