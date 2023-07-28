import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AnimateRoutes from "./components/animateRoutes/animateRoutes";
const App = () => {
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
