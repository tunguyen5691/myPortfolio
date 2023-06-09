import React, { useEffect } from "react";
import "./animateRoutes.scss";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ProjectDetail from "../../pages/ProjectDetail/ProjectDetail";
import { AnimatePresence } from "framer-motion";

export default function AnimateRoutes({}) {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path={"detail"} element={<ProjectDetail />} />
            </Routes>
        </AnimatePresence>
    );
}
