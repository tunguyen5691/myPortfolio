import { motion, stagger, useAnimate, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import glitch from "../../assets/images/1.jpg";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import Menu from "../../components/Menu/Menu";
import Project from "../../components/Project/Project";
import "./Home.scss";

import { TypeAnimation } from "react-type-animation";
import projectState from "../../store/projectState";

function Home() {
    const ref = useRef(null);
    const refBtnContact = useRef(null);
    gsap.registerPlugin(ScrollTrigger);
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // use scoped selectors
            gsap.from("#start", {
                scrollTrigger: {
                    trigger: "#start",
                    start: " 50% 50%",
                    end: "+=100%",
                    onLeave: () => {
                        document.querySelector(".start").classList.remove("active");
                    },
                    onEnterBack: () => {
                        document.querySelector(".start").classList.add("active");
                    },
                },
            });
            gsap.from("#about", {
                scrollTrigger: {
                    trigger: "#about",
                    start: " top 50%",
                    end: "+=100%",
                    onLeave: () => {
                        document.querySelector(".about").classList.remove("active");
                    },
                    onLeaveBack: () => {
                        document.querySelector(".about").classList.remove("active");
                    },
                    onEnter: () => {
                        document.querySelector(".about").classList.add("active");
                    },
                    onEnterBack: () => {
                        document.querySelector(".about").classList.add("active");
                    },
                },
            });
            gsap.from("#projects", {
                scrollTrigger: {
                    trigger: "#projects",
                    start: " top 50%",
                    end: "bottom bottom",
                    onLeave: () => {
                        document.querySelector(".projects").classList.remove("active");
                    },
                    onLeaveBack: () => {
                        document.querySelector(".projects").classList.remove("active");
                    },
                    onEnter: () => {
                        document.querySelector(".projects").classList.add("active");
                    },
                    onEnterBack: () => {
                        document.querySelector(".projects").classList.add("active");
                    },
                },
            });
            gsap.from("#contact", {
                scrollTrigger: {
                    trigger: "#contact",
                    start: " bottom 20%",
                    end: "bottom bottom",

                    onLeaveBack: () => {
                        document.querySelector(".contact").classList.remove("active");
                    },
                    onEnter: () => {
                        document.querySelector(".contact").classList.add("active");
                    },
                },
            });
        }, ref);
        return () => ctx.revert();
    }, []);
    const navigate = useNavigate();
    const [contact, setContact] = useState(false);
    const [projectData, setProjectData] = useRecoilState(projectState);

    const storeToLocalStorage = (key, value) => {
        localStorage.setItem("selected", JSON.stringify(value));
    };

    const toDetail = (item) => {
        // const newprojectData = { ...projectData };
        setTimeout(() => {
            navigate(`/detail`);
        }, 300);
        storeToLocalStorage("selected", item);
    };
    const toStore = (cate) => {
        setTimeout(() => {
            navigate(cate);
        }, 300);
    };
    const handleContacttoggle = () => {
        setContact(!contact);
    };
    const onScroll = () => {
        const glitch = document.querySelector(".glitch");
        glitch.classList.add("onScroll");
        setTimeout(() => {
            glitch.classList.remove("onScroll");
        }, 1000);
    };
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
    }, []);

    const getOffset = () => {
        const header = document.querySelector(".menu");
        if (window.scrollY > 50) {
            header.classList.add("active");
        } else {
            header.classList.remove("active");
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", getOffset);
    }, []);

    const handleClickOutside = (event) => {
        if (refBtnContact.current && !refBtnContact.current.contains(event.target)) {
            setContact(false);
        }
    };

    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.5]);
    const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 90]);
    const background = useTransform(scrollYProgress, [0.2, 0.5, 1], ["#1a1527", "#0e0c16", "#1a1527"]);
    const blockParent = {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
                delay: 0.6,
            },
        },
    };
    const fadeInUpItem = {
        from: {
            y: 40,
            opacity: 0,
            scale: 0.9,
        },
        whileInView: {
            scale: 1,
            y: 0,
            opacity: 1,
        },
    };

    const propjectTypeVariants = {
        from: {
            opacity: 0,
            y: "30%",
        },
        whileInView: {
            opacity: 1,
            y: "0%",
            transition: {
                delay: 0.5,

                type: "spring",
                stiffness: 150,
            },
        },
    };

    const timelineVariants = {
        from: {
            opacity: 0.5,
            backgroundColor: "#000",
        },
        to: {
            opacity: 1,
            width: [0, 600, 550, 600, 1],
            height: [0, 1000],
            backgroundColor: ["#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#fca311"],
            transition: {
                duration: 2,
                delay: 0.5,
            },
        },
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

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <>
            <Menu />
            <motion.div className="page home" variants={pageVariants} initial="from" animate="to" exit="exit">
                <section id="start">
                    <div className="content-w size-md">
                        <div className="wrap">
                            <div className="block">
                                <motion.div
                                    className="timeline"
                                    variants={timelineVariants}
                                    initial="from"
                                    animate="to"
                                ></motion.div>
                                <motion.div
                                    className="block-introduce"
                                    variants={blockParent}
                                    initial="from"
                                    animate="to"
                                >
                                    <div className="bl bl-left">
                                        <motion.div
                                            className="block-label fadeInUp"
                                            variants={fadeInUpItem}
                                            initial="from"
                                            whileInView="whileInView"
                                            transition={{
                                                delay: 1,
                                                type: "spring",
                                                stiffness: 120,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            <span>Start</span>
                                        </motion.div>
                                        <motion.div
                                            className="block-introduce__name fadeInUp"
                                            variants={fadeInUpItem}
                                            initial="from"
                                            whileInView="whileInView"
                                            transition={{
                                                delay: 1.2,
                                                type: "spring",
                                                stiffness: 120,
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            I am{" "}
                                            <span>
                                                <TypeAnimation
                                                    sequence={["Tu Nguyen", 1000, "Front End Developer", 1000]}
                                                    speed={30}
                                                    repeat={Infinity}
                                                />
                                            </span>
                                        </motion.div>
                                        <motion.div
                                            className="block-introduce__description fadeInUp"
                                            variants={fadeInUpItem}
                                            initial="from"
                                            whileInView="whileInView"
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 1.4,

                                                type: "spring",
                                                stiffness: 120,
                                            }}
                                        >
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            className="show-more fadeInUp"
                                            variants={fadeInUpItem}
                                            initial="from"
                                            whileInView="whileInView"
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: 1.6,
                                                type: "spring",
                                                stiffness: 120,
                                            }}
                                        >
                                            Let me show YOU something...
                                        </motion.div>
                                    </div>
                                    <motion.div
                                        className="bl bl-right"
                                        initial={{
                                            scale: 2,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1.8,
                                        }}
                                        transition={{
                                            duration: 1.5,
                                            delay: 0.7,
                                            ease: "backOut",
                                        }}
                                    >
                                        <motion.div className="glitch" style={{ scale, rotate }}>
                                            <img src={glitch} className="main" />
                                            <img src={glitch} className="sub sub1" />
                                            <img src={glitch} className="sub sub2" />
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div className="content-w size-md">
                        <div className="wrap pt-60 pb-60">
                            <div className="timeline"></div>
                            <motion.div
                                className="block-label "
                                variants={fadeInUpItem}
                                initial="from"
                                whileInView="whileInView"
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                }}
                                viewport={{ once: true }}
                            >
                                <span>About</span>
                            </motion.div>
                            <motion.div
                                className="code-wrap"
                                animate={{
                                    opacity: [0, 1],
                                }}
                                transition={{
                                    type: "spring",
                                }}
                            >
                                <div className="code-line flex" data-line="01">
                                    <div className="method">class</div>
                                    <div className="propname">&nbsp;Tu Nguyen&nbsp;</div> &#123;
                                </div>
                                <div className="code-line flex" data-line="02">
                                    <div className="dot">..</div>
                                    <div className="conmment">
                                        /&nbsp;/ I'm ambitious and I love new challenges :&#41;
                                    </div>
                                </div>
                                <div className="code-line flex" data-line="03">
                                    <div className="dot">...</div>
                                    <div className="conmment">
                                        /&nbsp;/ My vast variety of skills is continuously expanding.
                                    </div>
                                </div>
                                <div className="code-line flex" data-line="04">
                                    <div className="dot">...</div>
                                    <div className="method">constructor</div>
                                    &nbsp;&#40;&nbsp;&#41;&nbsp;&#123;
                                </div>
                                <div className="code-line flex" data-line="05">
                                    <div className="dot">.....</div>
                                    <div className="scope">this</div>.<div className="prop2">name</div>&nbsp;
                                    <div className="scope">=</div>&nbsp;
                                    <div className="string">' Tu Nguyen '</div>
                                </div>
                                <div className="code-line flex" data-line="06">
                                    <div className="dot">.....</div>
                                    <div className="scope">this</div>.<div className="prop2">birthday</div>&nbsp;
                                    <div className="scope">=</div>&nbsp;
                                    <div className="string">' 05/06/1991 '</div>
                                </div>
                                <div className="code-line flex" data-line="06">
                                    <div className="dot">.....</div>
                                    <div className="scope">this</div>.<div className="prop2">phonenumber</div>&nbsp;
                                    <div className="scope">=</div>&nbsp;
                                    <div className="string">' 0904582391 '</div>
                                </div>
                                <div className="code-line flex" data-line="07">
                                    <div className="dot">.....</div>
                                    <div className="scope">this</div>.<div className="prop2">email</div>&nbsp;
                                    <div className="scope">=</div>&nbsp;
                                    <div className="string">' tu.nguyen5691@gmail.com '</div>
                                </div>
                                <div className="code-line flex" data-line="08">
                                    <div className="dot">...</div>
                                    &#125;
                                </div>
                                <div className="code-line flex" data-line="09">
                                    <div className="dot">...</div>
                                    <div className="propname">WorkExperience&nbsp;</div>
                                    &#40;&nbsp;&#41;&nbsp;&#123;
                                </div>
                                <div className="code-line flex" data-line="10">
                                    <div className="dot">.....</div>
                                    <div className="method">return</div>&nbsp;&#91;
                                </div>
                                <div className="code-line flex" data-line="11">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'1/2016 - 2/2018'</div>:{" "}
                                    <div className="string">'Front End Developer at KYANON DIGITAL Company'</div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="12">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'3/2019 - Now'</div>:{" "}
                                    <div className="string">'Front End Developer at VNG Corporation'</div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="13">
                                    <div className="dot">.....</div>
                                    &#93;
                                </div>
                                <div className="code-line flex" data-line="14">
                                    <div className="dot">...</div>
                                    &#125;
                                </div>
                                <div className="code-line flex" data-line="15">
                                    <div className="dot">...</div>
                                    <div className="propname">education&nbsp;</div>
                                    &#40;&nbsp;&#41;&nbsp;&#123;
                                </div>
                                <div className="code-line flex" data-line="16">
                                    <div className="dot">.....</div>
                                    <div className="method">return</div>&nbsp;&#91;
                                </div>
                                <div className="code-line flex" data-line="17">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'03/2009 - 09/2013'</div>:{" "}
                                    <div className="string">'Troy UNIVERSITY - Business Administration'</div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="18">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'06/2015 - 12/2015,'</div>:{" "}
                                    <div className="string">'Nhat Nghe IT center - Basic PHP Programing'</div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="19">
                                    <div className="dot">.....</div>
                                    &#93;
                                </div>
                                <div className="code-line flex" data-line="20">
                                    <div className="dot">...</div>
                                    &#125;
                                </div>
                                <div className="code-line flex" data-line="21">
                                    <div className="dot">...</div>
                                    <div className="propname">duties&nbsp;</div>
                                    &#40;&nbsp;&#41;&nbsp;&#123;
                                </div>
                                <div className="code-line flex" data-line="22">
                                    <div className="dot">.....</div>
                                    <div className="method">return</div>&nbsp;&#91;
                                </div>
                                <div className="code-line flex" data-line="23">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'1'</div>:{" "}
                                    <div className="string">
                                        'Translate mock up / design to actual code with responsive on multi devices'
                                    </div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="24">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'2'</div>:{" "}
                                    <div className="string">'Implement animation</div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="25">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'3'</div>:{" "}
                                    <div className="string">'Optimize performance/speed of website or application</div>
                                    &nbsp;&#125;
                                </div>
                                <div className="code-line flex" data-line="26">
                                    <div className="dot">.......</div>&#123;&nbsp;
                                    <div className="string">'4'</div>:{" "}
                                    <div className="string">
                                        'Research and take part in with design team to improve User Experience
                                    </div>
                                    &nbsp;&#125;
                                </div>

                                <div className="code-line flex" data-line="27">
                                    <div className="dot">.....</div>
                                    &#93;
                                </div>
                                <div className="code-line flex" data-line="28">
                                    <div className="dot">...</div>
                                    &#125;
                                </div>
                                <div className="code-line flex" data-line="29">
                                    <div className="dot">...</div>
                                    <div className="propname">skills&nbsp;</div>
                                    &#40;&nbsp;&#41;&nbsp;&#123;
                                </div>
                                <div className="code-line flex" data-line="30">
                                    <div className="dot">.....</div>
                                    <div className="method">return</div>&nbsp;&#91;&nbsp;
                                    <div className="string">
                                        'Html/scss/js' , 'React Js' , 'Gsap', 'Locomotive Js', 'Tailwind', 'Bootstrap',
                                        "Flutter"
                                    </div>
                                    &nbsp; &#93;
                                </div>

                                <div className="code-line flex" data-line="31">
                                    <div className="dot">...</div>
                                    &#125;
                                </div>
                                <div className="code-line flex" data-line="32">
                                    &#125;
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                <motion.section
                    id="projects"
                    className=" pb-60 "
                    style={{
                        background,
                    }}
                >
                    <div className="row">
                        <div className="content-w size-md">
                            <div className="wrap pt-60">
                                <div className="timeline"></div>
                                <motion.div
                                    className="block-label "
                                    variants={fadeInUpItem}
                                    initial="from"
                                    whileInView="whileInView"
                                    transition={{
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <span>Projects</span>
                                </motion.div>
                                <motion.div
                                    className="block-description mb-60"
                                    variants={fadeInUpItem}
                                    initial="from"
                                    whileInView="whileInView"
                                    transition={{
                                        delay: 0.7,
                                        type: "spring",
                                        stiffness: 120,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <span>Landing Pages, Websites ...</span>
                                </motion.div>
                                <div className="list-project-type right ">
                                    <motion.div
                                        className="wrap"
                                        variants={propjectTypeVariants}
                                        initial="from"
                                        whileInView="whileInView"
                                        viewport={{ once: true }}
                                    >
                                        <span>WEBSITE</span>
                                        <span>WEBSITE</span>
                                    </motion.div>
                                </div>
                                <div className="list-project ">
                                    <div className="list-project-wrap list-project__webs">
                                        {projectData.list
                                            .filter((item) => item.type.includes("website"))
                                            .map((item, index) => (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 1,
                                                        ease: "backOut",
                                                        delay: index * 0.2,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="item"
                                                    key={item.id}
                                                >
                                                    <Project
                                                        thumbImg={item.thumb}
                                                        name={item.name}
                                                        description={item.description}
                                                        timetime={item.time}
                                                        onClick={() => toDetail(item)}
                                                    />
                                                </motion.div>
                                            ))}
                                    </div>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 200,
                                            delay: 0.5,
                                        }}
                                        className="all-projects-btn"
                                        viewport={{ once: true }}
                                    >
                                        <motion.span
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => toStore("/store#website")}
                                        >
                                            All Projects
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="list-project-type left ">
                            <motion.div
                                className="wrap"
                                variants={propjectTypeVariants}
                                initial="from"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                            >
                                <span>MOBILE</span>
                                <span>MOBILE</span>
                            </motion.div>
                        </div>
                        <div className="content-w size-md">
                            <div className="wrap">
                                <div className="list-project">
                                    <div className="list-project-wrap list-project__mobile">
                                        {projectData.list
                                            .filter((item) => item.type.includes("mobile"))
                                            .map((item, index) => (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 1,
                                                        ease: "backOut",
                                                        delay: index * 0.2,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="item"
                                                    key={item.id}
                                                >
                                                    <Project
                                                        isMobile
                                                        thumbImg={item.thumb}
                                                        name={item.name}
                                                        description={item.description}
                                                        timetime={item.time}
                                                        onClick={() => toDetail(item)}
                                                    />
                                                </motion.div>
                                            ))}
                                    </div>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 200,
                                            delay: 0.5,
                                        }}
                                        viewport={{ once: true }}
                                        className="all-projects-btn"
                                    >
                                        <motion.span whileTap={{ scale: 0.9 }} onClick={() => toStore("/store#mobile")}>
                                            All Projects
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="list-project-type right ">
                            <motion.div
                                className="wrap"
                                variants={propjectTypeVariants}
                                initial="from"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                            >
                                <span>LANDING</span>
                                <span>LANDING</span>
                            </motion.div>
                        </div>
                        <div className="content-w size-md">
                            <div className="wrap">
                                <div className="list-project ">
                                    <div className="list-project-wrap list-project__webs">
                                        {projectData.list
                                            .filter((item) => item.type.includes("landing"))
                                            .map((item, index) => (
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{
                                                        duration: 1,
                                                        ease: "backOut",
                                                        delay: index * 0.2,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="item"
                                                    key={item.id}
                                                >
                                                    <Project
                                                        thumbImg={item.thumb}
                                                        name={item.name}
                                                        description={item.description}
                                                        timetime={item.time}
                                                        onClick={() => toDetail(item)}
                                                    />
                                                </motion.div>
                                            ))}
                                    </div>
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            type: "spring",
                                            stiffness: 200,
                                            delay: 0.5,
                                        }}
                                        className="all-projects-btn"
                                    >
                                        <motion.span
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => toStore("/store#landing")}
                                        >
                                            {" "}
                                            All Projects
                                        </motion.span>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </motion.section>
                <section id="contact">
                    <div className="content-w size-md">
                        <div className="wrap pt-60">
                            <div className="timeline"></div>
                            <motion.div
                                className="block-label "
                                variants={fadeInUpItem}
                                initial="from"
                                whileInView="whileInView"
                                viewport={{ once: true }}
                                transition={{
                                    delay: 0.5,
                                    type: "spring",
                                    stiffness: 120,
                                }}
                            >
                                <span>Contact</span>
                            </motion.div>
                            <motion.div
                                className={`action ${contact ? "active" : ""}`}
                                initial={{ opacity: 0, scale: 0.5 }}
                                viewport={{ once: true }}
                                ref={refBtnContact}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        delay: 0.7,
                                        stiffness: 120,
                                    },
                                }}
                            >
                                <div className="button" onClick={handleContacttoggle}>
                                    Get In Touch
                                </div>
                                <a href="tel:0904582391" className="icon phone">
                                    <img src={phone} />
                                </a>
                                <a href="mailto:tu.nguyen5691@gmail.com" className="icon email">
                                    <img src={email} />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>
            </motion.div>
        </>
    );
}

export default Home;
