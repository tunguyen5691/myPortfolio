import React from "react";
import "./Avata.scss";
import avataImg from "../../assets/images/avatar.jpeg";
export default function Avata({}) {
    return (
        <div className="avata">
            <span className="aspectRatio aspectRatio--100" style={{backgroundImage : `url(${avataImg})` , backgroundSize : "cover"}}></span>
        </div>
    );
}
