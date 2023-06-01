import React from "react";
import { Link } from "react-router-dom";
import "./Button.scss";

export default function Button({ href, text, type, disable, align }) {
    return (
        <div className={`button ${type} ${align} ${disable ? "disabled" : ""}`}>
            <Link to={href} className={`txt`}>
                {text}
            </Link>
        </div>
    );
}
