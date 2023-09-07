import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fullImg from "../../assets/images/fullImg.png";
import fullImg2 from "../../assets/images/thumb.jpg";
import "./ProjectDetail.scss";
import Modal from "react-modal";
import close from "../../assets/images/close.png";
import "swiper/css";

import projectState from "../../store/projectState";
import { useRecoilState } from "recoil";

const ProjectDetail = (props) => {
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal(index) {
        setIsOpen(true);
    }
    function closeModal(index) {
        setIsOpen(false);
    }
    const [dataDetail, setDatadetail] = useState();
    useEffect(() => {
        const local = localStorage.getItem("selected");
        setDatadetail(JSON.parse(local));
    }, []);
    const [fullImg, setFullImg] = useState();

    const selectImage = (itemId) => {
        setIsOpen(true);
        const updatedItem = dataDetail?.gallery.find((ele) => {
            if (ele.id == itemId) {
                return true;
            }
        });
        setFullImg(updatedItem);
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
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
                <div className="modal">
                    <div className="close-md" onClick={closeModal}>
                        <div className="img">
                            <img src={close} />
                        </div>
                    </div>
                    <div className="img">
                        <img src={fullImg?.img} />
                    </div>
                </div>
            </Modal>
            <motion.div variants={pageVariants} initial="from" animate="to" exit="exit">
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
                                        {dataDetail?.textstalk.map((item) => (
                                            <span>
                                                [<em>{item}</em>]
                                            </span>
                                        ))}
                                    </div>
                                    <div className="project-name">{dataDetail?.name}</div>
                                    <div className="time">{dataDetail?.time}</div>
                                    <div className="description">{dataDetail?.description}</div>
                                    <a
                                        className={`visit-page ${dataDetail?.link == "" ? "none" : ""}`}
                                        href={dataDetail?.link != "" ? dataDetail?.link : ""}
                                        target="_blank"
                                    >
                                        Visit Live
                                    </a>
                                </div>
                            </div>
                            <div className="bl detail">
                                <div className="list">
                                    {dataDetail?.gallery.map((item) => (
                                        <div
                                            className="item"
                                            onClick={() => selectImage(item.id)}
                                            key={item.id}
                                            style={{
                                                backgroundImage: `url(${item.img})`,
                                            }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectDetail;
