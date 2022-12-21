import React from "react";
import '../Footer/style.css';

const Footer = () => (
    <footer>
        <div className="limitar-secao rodape-informacoes">
            <img src="../assets/logo.png"></img>
            <div className="rodape-box">
                <h3>Endereço</h3>
                <p>Av. Bernardino de campos, 98</p>
                <p>São Paulo, SP 12345-678</p>
            </div>

            <div className="rodape-box">
                <h3>Contato</h3>
                <p>info@meusite.com</p>
                <p>Tel: (11) 3456-7890</p>
            </div>

            <div className="rodape-box">
                <h3>Horários</h3>
                <p>ABERTO TODOS OS DIAS</p>
                <p>10:00 - 22:00</p>
            </div>
        </div>
        
        <div className="rodape-desenvolvedor">
            <p>Gelateria. Orgulhosamente desenvolvido por Miguel Sabino</p>
        </div>
    </footer>
)

export default Footer;