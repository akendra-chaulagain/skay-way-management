import React from "react";
import "./JobsSection.css";
import { job } from "./jobData";
import { Link } from "react-router-dom";

const JobsSection = () => {
  return (
    <>
      <div className="jobSection">
        <div className="container">
          <div className="section__title">New Jobs</div>

          <div className="row ">
            {job.map((item) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt-2  jobSectionContainer">
                <div className=" jobSectionData">
                  <div className="jobImg">
                    <img src={item.img} alt="job_img" />
                  </div>
                  <div className="jobDesc">
                    <h4>{item.title}</h4>
                    <p>Lorem ipsum dolor sit, amet</p>
                    <Link to="/job/apply/:id">
                      <span>Apply Now</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            <div className="viewAllJob">
              <Link className="link" to="/job">
                <p>View All</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobsSection;
