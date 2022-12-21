import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home";
import Sabores from "../Pages/Sabores";
import Sobre from "../Pages/Sobre";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/Sabores" element={<Sabores />}></Route>
            <Route path="/Sobre" element={<Sobre />}></Route>
        </Routes>
    </BrowserRouter>
)

export default Rotas;