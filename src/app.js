import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AnimateRoutes from "./components/animateRoutes/animateRoutes";

const App = () => {
    const [isMenuOpen, SetMenuOpen] = useState(false);
    const openMenu = () => {
        SetMenuOpen(true);
    };
    const closeMenu = () => {
        SetMenuOpen(false);
    };
    // const getOffset = () => {
    //     const header = document.querySelector(".menu");
    //     if (window.scrollY > 50) {
    //         header.classList.add("active");
    //     } else {
    //         header.classList.remove("active");
    //     }
    // };
    useEffect(() => {
        window.scrollTo(0, 0);
        // window.addEventListener("scroll", getOffset);
    }, []);
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div className="container ">
                    <div className="page-content App">
                        <AnimateRoutes />
                    </div>
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
