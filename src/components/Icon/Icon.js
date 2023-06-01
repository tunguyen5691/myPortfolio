import React from "react";
import "./Icon.scss";


export default function Icon({icon}) {
    return (
        <div className="icon">
            <div className="img">
                <img src={icon} />
            </div>
    </div>
    );
}
