import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./constants/typografy.scss";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Planos from "./pages/Planos/Planos.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Contato from "./pages/Contato/Contato.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <>

        <BrowserRouter>
            <Nav/>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} exact/>
            <Route path="/planos" element={<Planos />} exact/>
            <Route path="/contato" element={<Contato />} exact/>
            </Routes>
        </BrowserRouter>
    </>
);
