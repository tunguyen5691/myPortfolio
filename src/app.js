import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { RecoilRoot } from "recoil";
import Home from "./pages/Home/Home";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";

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
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path={"detail"} element={<ProjectDetail />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
