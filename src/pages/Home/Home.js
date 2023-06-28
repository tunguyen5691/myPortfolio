import React, { useEffect, useState, useRef, useLayoutEffect, cloneElement } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import glitch from "../../assets/images/1.jpg";
import Menu from "../../components/Menu/Menu";
import Project from "../../components/Project/Project";
import "./Home.scss";
import { color, motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import projectState from "../../store/projectState";
import { TypeAnimation } from "react-type-animation";

function Home() {
    const ref = useRef(null);
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
    const [sortOrder, setSortOrder] = useState("true");

    const handleSort = () => {
        setSortOrder(!sortOrder);
        const newList = [...projectData.list];
        if (sortOrder == true) {
            newList.sort((a, b) => a.name.localeCompare(b.name));
        } else {
            newList.sort((a, b) => b.name.localeCompare(a.name));
        }
        let newprojectData = { ...projectData };
        newprojectData.list = newList;
        setProjectData(newprojectData);
    };

    const storeToLocalStorage = (key, value) => {
        localStorage.setItem("selected", JSON.stringify(value));
    };

    const handleClick = (item) => {
        const newprojectData = { ...projectData };
        navigate(`/detail`);
        console.log("item", item);
        storeToLocalStorage("selected", item);
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
    return (
        <motion.div
            inherit={{
                opacity: 0,
            }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.1 } }}
        >
            {/* <div className="sort" onClick={() => handleSort()}>
                sort
            </div> */}
            <Menu />
            <div className="page home" ref={ref}>
                <section id="start">
                    <div className="content-w size-md">
                        <div className="wrap">
                            <div className="block">
                                <div className="timeline"></div>
                                <div className="block-introduce">
                                    <div className="bl bl-left">
                                        <div className="block-label">
                                            <span>Start</span>
                                        </div>
                                        <div className="block-introduce__name">
                                            I am{" "}
                                            <span>
                                                <TypeAnimation
                                                    sequence={["Tu Nguyen", 1000, "Front End Developer", 1000]}
                                                    speed={50}
                                                    repeat={Infinity}
                                                />
                                            </span>
                                        </div>
                                        <div className="block-introduce__description">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit
                                                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                labore et dolore magna aliqua.
                                            </p>
                                        </div>
                                        <div className="show-more">Let me show YOU something...</div>
                                    </div>
                                    <div className="bl bl-right">
                                        <div className="glitch">
                                            <img src={glitch} className="main" />
                                            <img src={glitch} className="sub sub1" />
                                            <img src={glitch} className="sub sub2" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="about">
                    <div className="content-w size-md">
                        <div className="wrap pt-60 pb-60">
                            <div className="timeline"></div>
                            <div className="block-label ">
                                <span>About</span>
                            </div>
                            <div className="code-wrap">
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
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects" className=" pb-60 ">
                    <div className="row">
                        <div className="content-w size-md">
                            <div className="wrap pt-60">
                                <div className="timeline"></div>
                                <div className="block-label ">
                                    <span>Projects</span>
                                </div>
                                <div className="block-description mb-60">
                                    <span>Landing Pages, Websites ...</span>
                                </div>
                                <div className="list-project-type right ">
                                    <div className="wrap">
                                        <span>WEBSITE</span>
                                        <span>WEBSITE</span>
                                    </div>
                                </div>
                                <div className="list-project ">
                                    <div className="list-project-wrap list-project__webs">
                                        {projectData.list
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
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="list-project-type left ">
                            <div className="wrap">
                                <span>MOBILE</span>
                                <span>MOBILE</span>
                            </div>
                        </div>
                        <div className="content-w size-md">
                            <div className="wrap">
                                <div className="list-project">
                                    <div className="list-project-wrap list-project__mobile">
                                        {projectData.list
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
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="list-project-type right ">
                            <div className="wrap">
                                <span>LANDING</span>
                                <span>LANDING</span>
                            </div>
                        </div>
                        <div className="content-w size-md">
                            <div className="wrap">
                                <div className="list-project ">
                                    <div className="list-project-wrap list-project__webs">
                                        {projectData.list
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
                                            ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                </section>
                <section id="contact">
                    <div className="content-w size-md">
                        <div className="wrap pt-60">
                            <div className="timeline"></div>
                            <div className="block-label ">
                                <span>Contact</span>
                            </div>
                            <div className={`action ${contact ? "active" : ""}`}>
                                <div className="button" onClick={handleContacttoggle}>
                                    Get In Touch
                                </div>
                                <a href="tel:0904582391" className="icon phone">
                                    <img src={phone} />
                                </a>
                                <a href="mailto:tu.nguyen5691@gmail.com" className="icon email">
                                    <img src={email} />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}

export default Home;
