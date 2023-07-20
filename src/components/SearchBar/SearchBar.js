import React, { useEffect, useRef, useState } from "react";
import "./SearchBar.scss";
import searchIc from "../../assets/images/search.png";
import searchIc2 from "../../assets/images/search2.png";
export default function SearchBar({}) {
    const [searchActive, setSearchActive] = useState(false);
    const ref = useRef(null);
    const handleSearch = () => {
        setSearchActive(!searchActive);
    };
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setSearchActive(false);
        }
    };

    // Add event listener when component is mounted
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="Search-bar" ref={ref}>
            <form className={`${searchActive ? "active" : ""}`}>
                <input type="search" placeholder="Search..." />
                {/* <div className="s-line"></div> */}
                <div className="search-ic" onClick={() => handleSearch()}>
                    <div className="img">{!searchActive ? <img src={searchIc} /> : <img src={searchIc2} />}</div>
                </div>
            </form>
        </div>
    );
}
