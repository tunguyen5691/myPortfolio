import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AnimateRoutes from "./components/animateRoutes/animateRoutes";
const App = () => {
    useEffect(() => {
        var load = document.querySelector("#load");
        setTimeout(() => {
            load.style.opacity = 0;
            setTimeout(() => {
                load.style.display = "none";
            }, 500);
        }, 1000);
    });
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div id="load">
                    <div className="wrap">
                        <div>G</div>
                        <div>N</div>
                        <div>I</div>
                        <div>D</div>
                        <div>A</div>
                        <div>O</div>
                        <div>L</div>
                    </div>
                </div>
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
