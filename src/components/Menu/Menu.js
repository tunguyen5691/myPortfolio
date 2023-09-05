import { color, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import "./Menu.scss";

const MenuItem = [
    {
        id: "start",
        label: "Start",
        active: false,
    },
    {
        id: "about",
        label: "About",
        active: false,
    },
    {
        id: "projects",
        label: "Projects",
        active: false,
    },

    {
        id: "contact",
        label: "Contact",
        active: false,
    },
];

export default function Menu({ position, open, sectionIndex }) {
    const [active, setActive] = useState(0);
    const [menu, setMenu] = useState(MenuItem);

    const handleMenuActive = (sectionIndex) => {
        const updateMenu = menu.map((item, index) => {
            if (index == sectionIndex) {
                console.log("true");
            } else {
                console.log("false");
            }
        });
    };
    const scrollToSection = (id, index) => {
        console.log(sectionIndex);
        setActive(index);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
        });
    };
    useEffect(() => {}, []);

    return (
        <motion.div
            className={`menu ${position} ${open}`}
            initial={{
                y: "-100%",
            }}
            animate={{
                y: "0",
            }}
            transition={{
                delay: 2,
            }}
        >
            <div className="wrapper">
                <ul>
                    {MenuItem.map((item, index) => (
                        <li className={`${item.id} `} key={item.id} onClick={() => scrollToSection(item.id, index)}>
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
