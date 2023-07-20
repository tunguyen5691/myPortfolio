import { atom } from "recoil";

import fullImg from "../assets/images/fullImg.png";
import thumb1 from "../assets/images/thumb1.jpg";
import thumb2 from "../assets/images/thumb2.jpg";
import thumbMb from "../assets/images/thumbmb.jpg";
import thumbMb2 from "../assets/images/thumbmb2.jpg";

const projectData = atom({
    key: "projectData",
    default: {
        selected: null,
        list: [
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
            {
                id: 12,
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
                id: 13,
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
                id: 14,
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
            {
                id: 15,
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
                id: 16,
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
                id: 17,
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
        ],
    },
});
export default projectData;
