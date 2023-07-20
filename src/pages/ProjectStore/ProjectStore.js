import React, { useState } from "react";
import "./ProjectStore.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useRecoilState } from "recoil";
import projectState from "../../store/projectState";
import Project from "../../components/Project/Project";
import { useNavigate } from "react-router";
const tabData = [
    {
        id: 1,
        panel: "WEBSITE",
        type: "website",
    },
    {
        id: 2,
        panel: "LANDING PAGE",
        type: "landing",
    },
    {
        id: 3,
        panel: "MOBILE",
        type: "mobile",
    },
];

const ProjectStore = () => {
    const [tabActive, setTabActive] = useState(0);
    const [projectData, setProjectData] = useRecoilState(projectState);
    const handleTab = (index) => {
        setTabActive(index);
    };
    const navigate = useNavigate();
    const handleClick = (item) => {
        const newprojectData = { ...projectData };
        navigate(`/detail`);
        storeToLocalStorage("selected", item);
    };
    return (
        <div className="page project-store">
            <div className="content-w size-md">
                <div className="wrap">
                    <div className="search">
                        <SearchBar />
                    </div>
                    <div className="title">Project List</div>
                    <div className="tab-panel">
                        {tabData.map((item, index) => (
                            <div
                                key={item.id}
                                className={`panel ${tabActive == index ? "active" : ""}`}
                                onClick={() => handleTab(index)}
                            >
                                {item.panel}
                            </div>
                        ))}
                    </div>
                    <div className="tabs">
                        <div className={`tab-content ${tabActive == 0 || tabActive == 1 ? "web" : "mobile"}`}>
                            {tabActive == 0
                                ? projectData.list
                                      .filter((item) => item.type.includes("website"))
                                      .map((item, index) => (
                                          <div className="item" key={item.id}>
                                              <Project
                                                  thumbImg={item.thumb}
                                                  name={item.name}
                                                  description={item.description}
                                                  timetime={item.time}
                                                  onClick={() => handleClick(item)}
                                              />
                                          </div>
                                      ))
                                : ""}
                            {tabActive == 1
                                ? projectData.list
                                      .filter((item) => item.type.includes("landing"))
                                      .map((item, index) => (
                                          <div className="item" key={item.id}>
                                              <Project
                                                  thumbImg={item.thumb}
                                                  name={item.name}
                                                  description={item.description}
                                                  timetime={item.time}
                                                  onClick={() => handleClick(item)}
                                              />
                                          </div>
                                      ))
                                : ""}
                            {tabActive == 2
                                ? projectData.list
                                      .filter((item) => item.type.includes("mobile"))
                                      .map((item, index) => (
                                          <div className="item" key={item.id}>
                                              <Project
                                                  isMobile
                                                  thumbImg={item.thumb}
                                                  name={item.name}
                                                  description={item.description}
                                                  timetime={item.time}
                                                  onClick={() => handleClick(item)}
                                              />
                                          </div>
                                      ))
                                : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectStore;
