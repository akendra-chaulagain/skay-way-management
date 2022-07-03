import React from "react";
import "./Team.css";
import { member } from "./TeamMember";

const Team = () => {
  return (
    <>
      <div className="container-fluid team">
        <div className="teamTitle">Our Team</div>
        <div className="teamWrapper">
          <div className="row ">
            {member.map((item) => (
              <div className="col-lg-4 col-md-4 col-sm-4 col-12 mt-3  teamContainer">
                <div className="card_body team_img">
                  <img src={item.img} alt="team_img" />
                  <div className=" teamData">
                    <h5>{item.name}</h5>
                    <p>{item.position}</p>
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

export default Team;
