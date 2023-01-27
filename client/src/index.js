import React from "react";
import {createRoot} from "react-dom/client";
import App from "./App.js";
import "./reset.css";
import './style.css';

document.addEventListener("DOMContentLoaded", () => {
    createRoot(document.getElementById("root")).render(<App/>);
});