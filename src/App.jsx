import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router";
import "./constants/typografy.scss";
import "./index.css";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";
import Planos from "./pages/Planos/Planos.jsx";
import "./constants/typografy.scss"
import Contato from "./pages/Contato/Contato.jsx";
import { HelmetProvider } from "react-helmet-async";
import './App.css'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
            <Nav/>
                    <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sobre" element={<Sobre />} exact/>
                            <Route path="/planos" element={<Planos />} exact/>
                            <Route path="/contato" element={<Contato />} exact/>
                    </Routes>
        </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
