import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./assets/images/logo.png";
import open from "./assets/images/open.png";
import Icon from "./components/Icon/Icon";
import Logo from "./components/Logo/Logo";
import Menu from "./components/Menu/Menu";
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
  const getOffset = () => {
    const header = document.querySelector(".page-head");
    if (window.scrollY > 50) {
      header.classList.add("active");
    } else {
      header.classList.remove("active");
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", getOffset);
  }, []);
  return (
    <BrowserRouter>
      <div className="container ">
        <div className="page-content App">
          {/* <div className="navigation">
            <div className="page-head ">
              <div className="logo-brand">
                My<span>Portfolio</span>
              </div>
              <div className="nav">
                <ul>
                  <li>
                    <a href="#!">Start</a>
                  </li>
                  <li>
                    <a href="#!">Projects</a>
                  </li>
                  <li>
                    <a href="#!">About</a>
                  </li>
                  <li>
                    <a href="#!">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}

          <Routes>
            <Route index element={<Home />} />
            <Route path={"detail"} element={<ProjectDetail />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
