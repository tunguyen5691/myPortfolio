import React, { useEffect, useState } from "react";
import "./ProjectStore.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useRecoilState } from "recoil";
import projectState from "../../store/projectState";
import Project from "../../components/Project/Project";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { motion, useScroll } from "framer-motion";
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
    const location = useLocation().hash;

    const [tabActive, setTabActive] = useState(0);
    const [projectData, setProjectData] = useRecoilState(projectState);
    const [search, SetSearch] = useState("");

    const handleTab = (index, e) => {
        setTabActive(index);
        window.location.hash = tabData[index].type;
    };
    const navigate = useNavigate();

    const storeToLocalStorage = (key, value) => {
        localStorage.setItem("selected", JSON.stringify(value));
    };
    const toDetail = (item) => {
        navigate(`/detail`);
        storeToLocalStorage("selected", item);
    };
    useEffect(() => {
        if (location == "#website") {
            setTabActive(0);
        }
        if (location == "#mobile") {
            setTabActive(2);
        }
        if (location == "#landing") {
            setTabActive(1);
        }
    });

    const handleSearch = (newValue) => {
        SetSearch(newValue);
    };
    const pageVariants = {
        from: {
            opacity: 0,
            y: 40,
        },
        to: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
        exit: {
            opacity: 0,
            y: 40,
            transition: {
                duration: 0.5,
            },
        },
    };
    return (
        <>
            <div className="search">
                <SearchBar onValueChange={handleSearch} />
            </div>

            <motion.div className="page project-store" variants={pageVariants} initial="from" animate="to" exit="exit">
                <div className="back" onClick={() => navigate("/")}>
                    &#8592;
                </div>
                <div className="title">
                    <div className="text">Projects List</div>
                </div>
                <div className="content-w size-md">
                    <div className="wrap">
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
                                          .filter((item) => {
                                              return search === ""
                                                  ? item.type.includes("website")
                                                  : item.name.toLowerCase().includes(search);
                                          })
                                          .map((item, index) => (
                                              <div className="item" key={item.id}>
                                                  <Project
                                                      thumbImg={item.thumb}
                                                      name={item.name}
                                                      description={item.description}
                                                      timetime={item.time}
                                                      onClick={() => toDetail(item)}
                                                  />
                                              </div>
                                          ))
                                    : ""}
                                {tabActive == 1
                                    ? projectData.list
                                          .filter((item) => {
                                              return search === ""
                                                  ? item.type.includes("landing")
                                                  : item.name.toLowerCase().includes(search);
                                          })
                                          .map((item, index) => (
                                              <div className="item" key={item.id}>
                                                  <Project
                                                      thumbImg={item.thumb}
                                                      name={item.name}
                                                      description={item.description}
                                                      timetime={item.time}
                                                      onClick={() => toDetail(item)}
                                                  />
                                              </div>
                                          ))
                                    : ""}
                                {tabActive == 2
                                    ? projectData.list
                                          .filter((item) => {
                                              return search === ""
                                                  ? item.type.includes("mobile")
                                                  : item.name.toLowerCase().includes(search);
                                          })
                                          .map((item, index) => (
                                              <div className="item" key={item.id}>
                                                  <Project
                                                      isMobile
                                                      thumbImg={item.thumb}
                                                      name={item.name}
                                                      description={item.description}
                                                      timetime={item.time}
                                                      onClick={() => toDetail(item)}
                                                  />
                                              </div>
                                          ))
                                    : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectStore;
