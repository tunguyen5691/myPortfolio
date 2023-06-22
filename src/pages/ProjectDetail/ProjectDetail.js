import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import fullImg from "../../assets/images/fullImg.png";
import projectState from "../../store/projectState";
import "./ProjectDetail.scss";
import { motion } from "framer-motion";

const ProjectDetail = (props) => {
    const projectData = useRecoilValue(projectState);

    const navigate = useNavigate();
    return (
        <motion.div
            inherit={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
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
                                <div className="project-name">{projectData?.selected?.name}</div>
                                <div className="description">{projectData?.selected?.description}</div>
                                <Link className="visit-page" to={"./"} target="_blank">
                                    Visit Live
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
