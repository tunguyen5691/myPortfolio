import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./assets/scss/view.scss";
import reportWebVitals from "./reportWebVitals";
import App from "./app";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
reportWebVitals();
