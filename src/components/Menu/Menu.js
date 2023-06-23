import React, { useState } from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import Avata from "../Avata/Avata";
import Logo from "../Logo/Logo";
import logo from "../../assets/images/logo.png";
import close from "../../assets/images/close.png";
import Icon from "../Icon/Icon";

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
        <div className={`menu ${position} ${open}`}>
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
        </div>
    );
}
