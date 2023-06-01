import React, { useEffect, useState } from "react";
import glitch from "../../assets/images/1.jpg";
import thumb from "../../assets/images/thumb.jpg";
import thumb1 from "../../assets/images/thumb1.jpg";
import thumb2 from "../../assets/images/thumb2.jpg";
import thumbMb from "../../assets/images/thumbmb.jpg";
import thumbMb2 from "../../assets/images/thumbmb2.jpg";
import fullImg from "../../assets/images/fullImg.png";
import email from "../../assets/images/email.png";
import phone from "../../assets/images/phone.png";
import Project from "../../components/Project/Project";
import { TypeAnimation } from "react-type-animation";
import "./Home.scss";
import { Link } from "react-router-dom";
const projectList = [
  {
    id: 1,
    name: "D.I.S.C",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "mobile",

    thumb: thumbMb,
    fullImg: fullImg,
  },
  {
    id: 2,
    name: "D-Run",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "mobile",
    thumb: thumbMb2,
    fullImg: fullImg,
  },
  {
    id: 3,
    name: "SEEDVN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "website",

    thumb: thumb1,
    fullImg: fullImg,
  },
  {
    id: 4,
    name: "NUTRIBOOST",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "mobile",
    thumb: thumbMb2,
    fullImg: fullImg,
  },
  {
    id: 5,
    name: "SUN WORLD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "landing",
    thumb: thumb2,
    fullImg: fullImg,
  },
  {
    id: 6,
    name: "XIAOMI",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "mobile",
    thumb: thumbMb,
    fullImg: fullImg,
  },
  {
    id: 7,
    name: "GUNNY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "website",
    thumb: thumb1,
    fullImg: fullImg,
  },
  {
    id: 8,
    name: "SUN GROUP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "website",
    thumb: thumb1,
    fullImg: fullImg,
  },
  {
    id: 9,
    name: "SUN GROUP",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "landing",
    thumb: thumb1,
    fullImg: fullImg,
  },
  {
    id: 10,
    name: "ONSEN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "website",
    thumb: thumb1,
    fullImg: fullImg,
  },
  {
    id: 11,
    name: "MOBIFONE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    textstalk: ["jQuery", "HTML", "scss"],
    time: "12-12-2022 - 12-02-203",
    workingDay: "4",
    type: "landing",
    thumb: thumb1,
    fullImg: fullImg,
  },
];

function Home() {
  const [contact, setContact] = useState(false);

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
  return (
    <div className="page home">
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
                        sequence={[
                          "Tu Nguyen",
                          1000,
                          "Front End Developer",
                          1000,
                        ]}
                        speed={50}
                        repeat={Infinity}
                      />
                    </span>
                  </div>
                  <div className="block-introduce__description">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
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
      <section id="projects" className=" pb-60 ">
        <div className="row">
          <div className="list-project-type right ">
            <div className="wrap">
              <span>WEBSITE</span>
              <span>WEBSITE</span>
            </div>
          </div>
          <div className="content-w size-md">
            <div className="wrap pt-60">
              <div className="timeline"></div>
              <div className="block-label ">
                <span>Projects</span>
              </div>
              <div className="block-description mb-60">
                <span>Landing Pages, Websites ...</span>
              </div>
              <div className="list-project ">
                <div className="list-project-wrap list-project__webs">
                  {projectList
                    .filter((item) => item.type.includes("website"))
                    .map((item, index) => (
                      <div className="item" key={item.id}>
                        <Project
                          thumbImg={item.thumb}
                          name={item.name}
                          description={item.description}
                          timetime={item.time}
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
                  {projectList
                    .filter((item) => item.type.includes("mobile"))
                    .map((item, index) => (
                      <div className="item" key={item.id}>
                        <Project
                          thumbImg={item.thumb}
                          name={item.name}
                          description={item.description}
                          timetime={item.time}
                          isMobile
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
                  {projectList
                    .filter((item) => item.type.includes("landing"))
                    .map((item, index) => (
                      <div className="item" key={item.id}>
                        <Project
                          thumbImg={item.thumb}
                          name={item.name}
                          description={item.description}
                          timetime={item.time}
                        />
                      </div>
                    ))}
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
                <div className="scope">this</div>.
                <div className="prop2">name</div>&nbsp;
                <div className="scope">=</div>&nbsp;
                <div className="string">' Tu Nguyen '</div>
              </div>
              <div className="code-line flex" data-line="06">
                <div className="dot">.....</div>
                <div className="scope">this</div>.
                <div className="prop2">birthday</div>&nbsp;
                <div className="scope">=</div>&nbsp;
                <div className="string">' 05/06/1991 '</div>
              </div>
              <div className="code-line flex" data-line="06">
                <div className="dot">.....</div>
                <div className="scope">this</div>.
                <div className="prop2">phonenumber</div>&nbsp;
                <div className="scope">=</div>&nbsp;
                <div className="string">' 0904582391 '</div>
              </div>
              <div className="code-line flex" data-line="07">
                <div className="dot">.....</div>
                <div className="scope">this</div>.
                <div className="prop2">email</div>&nbsp;
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
                <div className="string">
                  'Front End Developer at KYANON DIGITAL Company'
                </div>
                &nbsp;&#125;
              </div>
              <div className="code-line flex" data-line="12">
                <div className="dot">.......</div>&#123;&nbsp;
                <div className="string">'3/2019 - Now'</div>:{" "}
                <div className="string">
                  'Front End Developer at VNG Corporation'
                </div>
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
                <div className="string">
                  'Troy UNIVERSITY - Business Administration'
                </div>
                &nbsp;&#125;
              </div>
              <div className="code-line flex" data-line="18">
                <div className="dot">.......</div>&#123;&nbsp;
                <div className="string">'06/2015 - 12/2015,'</div>:{" "}
                <div className="string">
                  'Nhat Nghe IT center - Basic PHP Programing'
                </div>
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
                  'Translate mock up / design to actual code with responsive on
                  multi devices'
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
                <div className="string">
                  'Optimize performance/speed of website or application
                </div>
                &nbsp;&#125;
              </div>
              <div className="code-line flex" data-line="26">
                <div className="dot">.......</div>&#123;&nbsp;
                <div className="string">'4'</div>:{" "}
                <div className="string">
                  'Research and take part in with design team to improve User
                  Experience
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
                  'Html/scss/js' , 'React Js' , 'Gsap', 'Locomotive Js',
                  'Tailwind', 'Bootstrap'
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
  );
}

export default Home;
