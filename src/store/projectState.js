import { atom } from "recoil";
import seedThumb from "../assets/images/projects/seedvn/thumb.jpg";
import seed1 from "../assets/images/projects/seedvn/1.jpeg";
import seed2 from "../assets/images/projects/seedvn/2.jpeg";
import seed3 from "../assets/images/projects/seedvn/3.jpeg";
import seed4 from "../assets/images/projects/seedvn/4.jpeg";
import seed5 from "../assets/images/projects/seedvn/5.jpeg";
import seed6 from "../assets/images/projects/seedvn/6.jpeg";

import adtimaThumb from "../assets/images/projects/adtimabox/thumb.png";
import adtima1 from "../assets/images/projects/adtimabox/1.jpeg";

import vsThumb from "../assets/images/projects/vsdesign/thumb.jpeg";
import vs1 from "../assets/images/projects/vsdesign/1.jpeg";
import vs2 from "../assets/images/projects/vsdesign/2.jpeg";
import vs3 from "../assets/images/projects/vsdesign/3.jpeg";
import vs4 from "../assets/images/projects/vsdesign/4.jpeg";
import vs5 from "../assets/images/projects/vsdesign/5.jpeg";

import gunnyThumb from "../assets/images/projects/gunny/thumb.jpg";
import gunny1 from "../assets/images/projects/gunny/1.jpeg";

import sunThumb from "../assets/images/projects/sungroup/thumb.jpg";
import sun1 from "../assets/images/projects/sungroup/1.jpeg";

import phuquocThumb from "../assets/images/projects/phuquoc/thumb.jpg";
import phuquoc1 from "../assets/images/projects/phuquoc/1.jpeg";
import phuquoc2 from "../assets/images/projects/phuquoc/2.jpeg";
import phuquoc3 from "../assets/images/projects/phuquoc/3.jpeg";
import phuquoc4 from "../assets/images/projects/phuquoc/4.jpeg";

import babyhubThumb from "../assets/images/projects/babyhub/thumb.jpg";
import babyhub1 from "../assets/images/projects/babyhub/1.jpg";
import babyhub2 from "../assets/images/projects/babyhub/2.jpg";
import babyhub3 from "../assets/images/projects/babyhub/3.jpg";
import babyhub4 from "../assets/images/projects/babyhub/4.jpg";
import babyhub5 from "../assets/images/projects/babyhub/5.jpg";
import babyhub6 from "../assets/images/projects/babyhub/6.jpg";
import babyhub7 from "../assets/images/projects/babyhub/7.jpg";

import sunlightThumb from "../assets/images/projects/sunlight/thumb.jpg";
import sunlight1 from "../assets/images/projects/sunlight/1.jpg";
import sunlight2 from "../assets/images/projects/sunlight/2.jpg";
import sunlight3 from "../assets/images/projects/sunlight/3.jpg";
import sunlight4 from "../assets/images/projects/sunlight/4.jpg";
import sunlight5 from "../assets/images/projects/sunlight/5.jpg";
import sunlight6 from "../assets/images/projects/sunlight/6.jpg";

import vysmaThumb from "../assets/images/projects/vysma/thumb.jpg";
import vysma1 from "../assets/images/projects/vysma/1.jpg";
import vysma2 from "../assets/images/projects/vysma/2.jpg";
import vysma3 from "../assets/images/projects/vysma/3.jpg";
import vysma4 from "../assets/images/projects/vysma/4.jpg";
import vysma5 from "../assets/images/projects/vysma/5.jpg";
import vysma6 from "../assets/images/projects/vysma/6.jpg";

import sushiThumb from "../assets/images/projects/sushi/thumb.jpg";
import sushi1 from "../assets/images/projects/sushi/1.jpg";
import sushi2 from "../assets/images/projects/sushi/2.jpg";
import sushi3 from "../assets/images/projects/sushi/3.jpg";
import sushi4 from "../assets/images/projects/sushi/4.jpg";
import sushi5 from "../assets/images/projects/sushi/5.jpg";

const projectData = atom({
    key: "projectData",
    default: {
        selected: null,
        list: [
            {
                id: 1,
                name: "VS Design",
                description: "design service provider.",
                textstalk: ["jQuery", "HTML", "scss"],
                time: "08-2023",
                workingDay: "4",
                type: "website",
                thumb: vsThumb,
                link: "https://visualsolutions.design",
                gallery: [
                    {
                        id: 1,
                        img: vs1,
                    },
                    {
                        id: 2,
                        img: vs2,
                    },
                    {
                        id: 3,
                        img: vs3,
                    },
                    {
                        id: 4,
                        img: vs4,
                    },
                    {
                        id: 5,
                        img: vs5,
                    },
                ],
            },
            {
                id: 2,
                name: "AdtimaBox",
                description:
                    "Adtima Box Loyalty. The loyalty implementation solution on Zalo platform brings a convenient experience to your customers. Solution consulting. Specific solutions help businesses ...",
                textstalk: ["jQuery", "HTML", "GSAP", "scss", "Scroll Trigger", "Swiper", "Locomotive Js"],
                time: "03-2023",
                workingDay: "2",
                type: "website",
                thumb: adtimaThumb,
                link: "https://adtimabox.vn",
                gallery: [
                    {
                        id: 1,
                        img: adtima1,
                    },
                ],
            },
            {
                id: 3,
                name: "SEEDVN",
                description: "Website provides training services in different majors for individuals and business",
                textstalk: ["React JS", "HTML", "scss", "Scroll trigger"],
                time: "12-2022",
                workingDay: "5",
                type: "website",
                thumb: seedThumb,
                link: "https://seedvn.com",
                gallery: [
                    {
                        id: 1,
                        img: seed1,
                        active: false,
                    },
                    {
                        id: 2,
                        img: seed2,
                        active: false,
                    },
                    {
                        id: 3,
                        img: seed3,
                        active: false,
                    },
                    {
                        id: 4,
                        img: seed4,
                        active: false,
                    },
                    {
                        id: 5,
                        img: seed5,
                        active: false,
                    },
                    {
                        id: 6,
                        img: seed6,
                        active: false,
                    },
                ],
            },

            {
                id: 4,
                name: "GUNNY",
                description: "Landing page introduce Game GUNNY Orgigin VTC ",
                textstalk: ["jQuery", "HTML", "scss", "Locomotive Js", "GSAP", "Scroll Trigger"],
                time: "05-2022",
                workingDay: "4",
                type: "website",
                thumb: gunnyThumb,
                link: "http://173.249.13.17:2024/gunny/index.html",
                gallery: [
                    {
                        id: 1,
                        img: gunny1,
                    },
                ],
            },
            {
                id: 5,
                name: "SUN GROUPS",
                description: "Landing page introduce new Resort of Sun Group ",
                textstalk: ["jQuery", "HTML", "scss", "Locomotive Js", "GSAP", "Scroll Trigger"],
                time: "10-2022",
                workingDay: "4",
                type: "website",
                thumb: sunThumb,
                link: "http://173.249.13.17:2024/sun/index.html",
                gallery: [
                    {
                        id: 1,
                        img: sun1,
                    },
                ],
            },
            {
                id: 6,
                name: "PHU QUOC",
                description: "Landing page introduce new Resort in Phu Quoc Island",
                textstalk: ["jQuery", "HTML", "scss", "Locomotive Js", "GSAP", "Scroll Trigger"],
                time: "12-2022",
                workingDay: "4",
                type: "website",
                thumb: phuquocThumb,
                link: "http://173.249.13.17:2024/phuquoc/index.html",
                gallery: [
                    {
                        id: 1,
                        img: phuquoc1,
                    },
                    {
                        id: 2,
                        img: phuquoc2,
                    },
                    {
                        id: 3,
                        img: phuquoc3,
                    },
                    {
                        id: 4,
                        img: phuquoc4,
                    },
                ],
            },
            {
                id: 7,
                name: "BABY HUB",
                description: "Mini App in Zalo in order to control Pragnacy",
                textstalk: ["ReactJS", "HTML", "scss", "framer-motion"],
                time: "08-2023",
                workingDay: "6",
                type: "mobile",
                thumb: babyhubThumb,
                link: "",
                gallery: [
                    {
                        id: 1,
                        img: babyhub1,
                    },
                    {
                        id: 2,
                        img: babyhub2,
                    },
                    {
                        id: 3,
                        img: babyhub3,
                    },
                    {
                        id: 4,
                        img: babyhub4,
                    },
                    {
                        id: 5,
                        img: babyhub5,
                    },
                    {
                        id: 6,
                        img: babyhub6,
                    },
                    {
                        id: 7,
                        img: babyhub7,
                    },
                ],
            },
            {
                id: 8,
                name: "Sunlight",
                description: "Mini game in Zalo in order to introduce new product from SunLigth",
                textstalk: ["ReactJS", "HTML", "scss", "framer-motion"],
                time: "08-2023",
                workingDay: "6",
                type: "mobile",
                thumb: sunlightThumb,
                link: "",
                gallery: [
                    {
                        id: 1,
                        img: sunlight1,
                    },
                    {
                        id: 2,
                        img: sunlight2,
                    },
                    {
                        id: 3,
                        img: sunlight3,
                    },
                    {
                        id: 4,
                        img: sunlight4,
                    },
                    {
                        id: 5,
                        img: sunlight5,
                    },
                    {
                        id: 6,
                        img: sunlight6,
                    },
                ],
            },
            {
                id: 9,
                name: "Vysma",
                description:
                    "A personal project Framework, create a place for Developer build template, websites, app for multiple flatform.",
                textstalk: ["Flutter"],
                time: "04-2023",
                workingDay: "20",
                type: "mobile",
                thumb: vysmaThumb,
                link: "",
                gallery: [
                    {
                        id: 1,
                        img: vysma1,
                    },
                    {
                        id: 2,
                        img: vysma2,
                    },
                    {
                        id: 3,
                        img: vysma3,
                    },
                    {
                        id: 4,
                        img: vysma4,
                    },
                    {
                        id: 5,
                        img: vysma5,
                    },
                    {
                        id: 6,
                        img: vysma6,
                    },
                ],
            },
            {
                id: 10,
                name: "SuShi",
                description: "Mini App in Zalo, Sushi restaurant help user to order sushi, booking table.",
                textstalk: ["ReactJS", "HTML", "scss", "framer-motion"],
                time: "02-2023",
                workingDay: "20",
                type: "mobile",
                thumb: sushiThumb,
                link: "",
                gallery: [
                    {
                        id: 1,
                        img: sushi1,
                    },
                    {
                        id: 2,
                        img: sushi2,
                    },
                    {
                        id: 3,
                        img: sushi3,
                    },
                    {
                        id: 4,
                        img: sushi4,
                    },
                    {
                        id: 5,
                        img: sushi5,
                    },
                ],
            },
        ],
    },
});
export default projectData;
