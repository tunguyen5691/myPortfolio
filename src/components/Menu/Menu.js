import { color, motion } from "framer-motion";
import React, { useState } from "react";
import "./Menu.scss";

const MenuItem = [
    {
        id: "start",
        label: "Start",
    },
    {
        id: "about",
        label: "About",
    },
    {
        id: "projects",
        label: "Projects",
    },
    {
        id: "contact",
        label: "Contact",
    },
];

export default function Menu({ position, open, onClick }) {
    const [active, setActive] = useState(0);
    const scrollToSection = (id, index) => {
        setActive(index);
        document.getElementById(id).scrollIntoView({
            behavior: "smooth",
        });
    };
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
                            className={`${item.id} ${active == index ? "active" : ""} `}
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
