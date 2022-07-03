import React from "react";
import Form from "../../components/postResumeComponent/Form/Form";
import ResumeSlider from "../../components/postResumeComponent/resumeSlider/ResumeSlider";
import "./PostResume.css";


const PostResume = () => {
  return (
    <>
      <div className="container-fluid resume">
        <div className="resumewrapper">
          {/* about us top bar */}
          <div className="resumeSlider">
            <ResumeSlider />
          </div>
          {/* form */}
          <Form />
        </div>
      </div>
    </>
  );
};

export default PostResume;
