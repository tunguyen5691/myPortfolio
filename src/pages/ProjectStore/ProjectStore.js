import React, { useEffect, useState } from "react";
import "./ProjectStore.scss";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useRecoilState } from "recoil";
import projectState from "../../store/projectState";
import Project from "../../components/Project/Project";
import { useLoaderData, useLocation, useNavigate } from "react-router";
import { backOut, motion, useScroll } from "framer-motion";
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
        storeToLocalStorage("selected", item);
        setTimeout(() => {
            navigate(`/detail`);
        }, 200);
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
                    <motion.div
                        className="text"
                        initial={{
                            y: "150%",
                        }}
                        animate={{
                            y: -1,
                        }}
                        transition={{
                            duration: 0.7,
                            ease: backOut,
                            delay: 0.5,
                        }}
                    >
                        Projects List
                    </motion.div>
                </div>
                <div className="content-w size-md">
                    <div className="wrap">
                        <motion.div
                            className="tab-panel"
                            animate={{
                                opacity: [0, 1],
                            }}
                            transition={{
                                delay: 1,
                            }}
                        >
                            {tabData.map((item, index) => (
                                <motion.div
                                    whileTap={{ scale: 0.5 }}
                                    key={item.id}
                                    className={`panel ${tabActive == index ? "active" : ""}`}
                                    onClick={() => handleTab(index)}
                                >
                                    {item.panel}
                                </motion.div>
                            ))}
                        </motion.div>
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
                                              <motion.div
                                                  className="item"
                                                  key={item.id}
                                                  initial={{ opacity: 0, scale: 0.8 }}
                                                  whileInView={{ opacity: 1, scale: 1 }}
                                                  transition={{
                                                      duration: 1,
                                                      ease: "backOut",
                                                      delay: index * 0.2,
                                                  }}
                                                  viewport={{ once: true }}
                                              >
                                                  <Project
                                                      thumbImg={item.thumb}
                                                      name={item.name}
                                                      description={item.description}
                                                      timetime={item.time}
                                                      onClick={() => toDetail(item)}
                                                  />
                                              </motion.div>
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
