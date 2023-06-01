import React from "react";
import "./Menu.scss";
import { Link, NavLink } from "react-router-dom";
import Avata from "../Avata/Avata";
import Logo from "../Logo/Logo";
import logo from "../../assets/images/logo.png";
import close from "../../assets/images/close.png";
import Icon from "../Icon/Icon";

export default function Menu({ position, open, onClick }) {
    return (
        <div className={`menu ${position} ${open}`}>
            <div className="wrapper">
                <div className="head">
                    <div className="logo-brand">
                        <Logo logo={logo} />
                    </div>
                    <div className="close-menu" onClick={onClick}>
                        <Icon icon={close} />
                    </div>
                </div>
                <div className="info mb-20">
                    <Avata />
                    <div className="meta">
                        <div className="user-name main">Nguyễn Thiên tứ</div>
                        <Link to="/personal" className="sub isMobile" onClick={onClick}>
                            Trang cá nhân
                        </Link>
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink to={"./"} onClick={onClick}>
                            Trang chủ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"./tnc"} onClick={onClick}>
                            Thể lệ
                        </NavLink>
                    </li>
                    <li className="isDesktop">
                        <NavLink to={"./personal"} onClick={onClick}>
                            Trang cá nhân
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"./form-page"} onClick={onClick}>
                            Trang form
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"./welcome"} onClick={onClick}>
                            Trang Welcome
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
