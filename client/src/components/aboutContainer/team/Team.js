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
              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0 teamContainer">
                <div className="card-body p-0 team_img">
                  <img src={item.img} alt="team_img" className="card-img-top" />
                  <div className="p-4 teamData">
                    <h5 className="mb-0">{item.name}</h5>
                    <p className="small ">{item.position}</p>
                    <ul className="social mb-0 list-inline mt-3">
                      <li className="list-inline-item m-0">
                        <a href="*" className="social-link">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0">
                        <a href="*" className="social-link">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0">
                        <a href="*" className="social-link">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li className="list-inline-item m-0">
                        <a href="*" className="social-link">
                          <i className="fa-brands fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
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
