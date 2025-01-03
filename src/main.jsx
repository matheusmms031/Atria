import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./constants/typografy.scss";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} exact/>
    </Routes>
  </BrowserRouter>
);
