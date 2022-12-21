import React from "react";
import '../Header/style.css'

import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <div className="limitar-secao secao-topo">
            <div>
                <img src="../assets/logo.png" alt="logo"></img>
            </div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sabores">Sabores</Link>
                <Link to="/Sobre">Sobre</Link>
            </nav>
        </div>
    </header>
)

export default Header;