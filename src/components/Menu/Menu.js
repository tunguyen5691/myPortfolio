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
    const [active, setActive] = useState(sectionIndex);

    const [menu, setMenu] = useState(MenuItem);
    const scrollToSection = (id, index) => {
        setActive(index);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
        });
    };
    useEffect(() => {
        const updateMenu = menu.map((item, index) => {
            if (index == sectionIndex) {
                return { ...item, active: true };
            } else {
                return { ...item, active: false };
            }
        });
        setMenu(updateMenu);
        console.log(menu);
    }, [sectionIndex]);
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
                        <li
                            className={`${item.id}  ${menu[index].active ? "active" : ""}`}
                            key={item.id}
                            onClick={() => scrollToSection(item.id, index)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}
