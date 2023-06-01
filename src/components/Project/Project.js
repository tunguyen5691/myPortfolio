import React from "react";
import { Link } from "react-router-dom";

import arrowRight from "../../assets/images/right-arrow.png";
import "./Project.scss";

export default function Project(props) {
  const { thumbImg, isMobile, timetime, description, name } = props;
  return (
    <div className={`project ${isMobile ? "mobile" : ""}`}>
      <div className="wrap">
        <div className="layer front">
          <div
            className={`project-thumb aspectRatio  ${
              isMobile ? "aspectRatio--9-16" : "aspectRatio--16-9"
            }`}
            style={{ backgroundImage: `url(${thumbImg})` }}
          ></div>
          <div className="project-meta">
            <div className="project-meta__name">{name}</div>
            <div className="project-meta__date">{timetime}</div>
          </div>
        </div>
        <div className="layer back">
          <div className="project-name">{name}</div>
          <div className="project-detail">{description}</div>
          <div className="detail">
            <Link to={"./detail"}>
              Explore
              <img src={arrowRight} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
