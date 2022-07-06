import React from "react";
import AllJobs from "../../components/jobComponent/allJobs/AllJobs";
import JobSlider from "../../components/jobComponent/JobSlider/JobSlider";
import Footer from "../../components/Footer/Footer";

const Job = () => {
  return (
    <>
      <JobSlider />
      <AllJobs />
      <Footer />
    </>
  );
};

export default Job;
