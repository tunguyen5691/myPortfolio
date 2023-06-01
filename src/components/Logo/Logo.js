import React from "react";
import "./Logo.scss";


export default function Logo({logo}) {
    return (
        <div className="logo">
            <div className="img">
                <img src={logo} />
            </div>
    </div>
    );
}
