import React from "react";
import "./ProjectDetail.scss";
import fullImg from "../../assets/images/fullImg.png";
import { Link, useNavigate } from "react-router-dom";

const ProjectDetail = () => {
  let navigate = useNavigate();
  return (
    <div className=" project-detail">
      <div className="content-w ">
        <div className="wrap">
          <div className="bl detail">
            <img src={fullImg} />
          </div>
          <div className="side-bar">
            <div className="side-bar__head">
              <div className="back" onClick={() => navigate(-1)}>
                &#8592;
              </div>
            </div>
            <div className="side-bar__body">
              <div className="tech-stalk">
                <span>#Html</span>
                <span>#jQuery</span>
                <span>#Scss</span>
              </div>
              <div className="project-name">D.I.S.C</div>
              <div className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <Link className="visit-page" to={"./"} target="_blank">
                Visit Live
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
