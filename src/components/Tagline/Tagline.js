import React from "react";
import "./Tagline.scss";
import tagline from "../../assets/images/tagline.png"


export default function Tagline({}) {
    return (
        <div className="tagline">
            <div className="img">
                <img src={tagline} />
            </div>
    </div>
    );
}
