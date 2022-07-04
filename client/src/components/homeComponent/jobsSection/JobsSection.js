import React from "react";
import "./JobsSection.css";
import { Link } from "react-router-dom";
import { job } from "./jobData";

const JobsSection = () => {
  return (
    <>
      <div className="container-fluid jobsContent">
        <div className="row">
          <div className="jobsContentTopbar text-center">
            <h1>Availables Jobs</h1>
          </div>
          {/* jobs content */}

          {job.slice(0, 12).map((item) => (
            <div
              className="col-md-4 col-sm-4 jobsContentContainer"
              key={item._id}
            >
              <div className="jobdeschData">
                <Link className="link" to={`/job/${item._id}`}>
                  <h6>{item.title}</h6>
                </Link>
                {/* job desc */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: item.desc.slice(0, 60),
                  }}
                ></p>
              </div>
            </div>
          ))}
          {/* view all jobs link */}
          <div className="viewAllLinks text-end">
            <i className="fa-solid fa-eye"></i>
            <Link
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              className="link"
              to="/jobs"
            >
              <p>view all jobs</p>
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default JobsSection;
