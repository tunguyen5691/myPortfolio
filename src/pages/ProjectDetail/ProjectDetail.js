import { color, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import fullImg from "../../assets/images/fullImg.png";
import projectState from "../../store/projectState";
import "./ProjectDetail.scss";

const ProjectDetail = (props) => {
    // const projectData = useRecoilValue(projectState);
    const navigate = useNavigate();

    const [dataDetail, setDatadetail] = useState();
    useEffect(() => {
        const local = localStorage.getItem("selected");
        setDatadetail(JSON.parse(local));
    }, []);
    return (
        <motion.div
            initial={{
                x: "100%",
                // float: true,
                transition: { duration: 0.7 },
            }}
            animate={{ x: "0", transition: { duration: 0.7 } }}
            exit={{ x: "100%", transition: { duration: 0.7 } }}
        >
            <div className=" project-detail">
                <div className="content-w ">
                    <div className="wrap">
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
                                <div className="project-name">{dataDetail?.name}</div>
                                <div className="time">{dataDetail?.time}</div>
                                <div className="description">{dataDetail?.description}</div>
                                <Link className="visit-page" to={"./"} target="_blank">
                                    Visit Live
                                </Link>
                            </div>
                        </div>
                        <div className="bl detail">
                            <img src={fullImg} />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectDetail;
