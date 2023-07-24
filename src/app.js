import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import AnimateRoutes from "./components/animateRoutes/animateRoutes";
import { Scrollbar } from "smooth-scrollbar-react";
const App = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <div className="container ">
                    <Scrollbar
                        plugins={{
                            overscroll: {
                                effect: "bounce",
                            },
                        }}
                    >
                        <div className="page-content App">
                            <AnimateRoutes />
                        </div>
                    </Scrollbar>
                </div>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
