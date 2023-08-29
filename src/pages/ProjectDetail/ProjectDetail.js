import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import fullImg from "../../assets/images/fullImg.png";
import fullImg2 from "../../assets/images/thumb.jpg";
import "./ProjectDetail.scss";
import Modal from "react-modal";
import close from "../../assets/images/close.png";
import "swiper/css";

const imageList = [
    {
        id: 1,
        img: fullImg,
        active: false,
    },
    {
        id: 2,
        img: fullImg2,
        active: false,
    },
    {
        id: 3,
        img: fullImg,
        active: false,
    },
    {
        id: 4,
        img: fullImg,
        active: false,
    },
    {
        id: 5,
        img: fullImg,
        active: false,
    },
    {
        id: 6,
        img: fullImg,
        active: false,
    },
    {
        id: 7,
        img: fullImg,
        active: false,
    },
    {
        id: 8,
        img: fullImg,
        active: false,
    },
];

const ProjectDetail = (props) => {
    // const projectData = useRecoilValue(projectState);
    const navigate = useNavigate();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [getFullImg, setGetFullImg] = useState(imageList);

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
    const selectImage = (itemId) => {
        setIsOpen(true);
        const updatedItems = getFullImg.map((ele) => {
            if (ele.id === itemId) {
                return { ...ele, active: true };
            } else {
                return { ...ele, active: false };
            }
        });
        setGetFullImg(updatedItems);
        console.log(getFullImg);
    };

    const activeItemId = getFullImg.find((item) => {
        if (item.active) {
            return item?.img;
        }
    });

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
                    <button>close</button>
                    <div className="close-md" onClick={closeModal}>
                        <div className="img">
                            <img src={close} />
                        </div>
                    </div>
                    <div className="img">
                        <img src={activeItemId?.img} />
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
                                <div className="list">
                                    {imageList.map((item, index) => (
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
