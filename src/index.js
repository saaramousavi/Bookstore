import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import App from "./App";
// components
import About from "./components/About";
import Books from "./components/Books";
import Story from "./components/Story";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="About" element={<About />} />
        <Route path="Books" element={<Books />} />
        <Route path="Story" element={<Story />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
