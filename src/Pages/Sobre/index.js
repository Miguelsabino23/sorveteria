import React from "react";
import { Link } from "react-router-dom";
import Header from '../../Components/Header/';
import Footer from '../../Components/Footer/'
import '../Sobre/style.css';

const Sobre = () => (
    <div>
        <Header />
        <main>
            <section className="banner-sobre">
                <div className="sobre-titulo">
                    <h1>A Gelateria</h1>
                </div>
            </section>

            <section className="secao-sobre limitar-secao">
                <h2>Sobre Nós</h2>
                <span>Nós simplesmente amamos sorvete!</span>
                <p className="especial">Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos esperando desde 2009 com as melhores matérias-primas para a produção final de sorvete. Vendemos tanto para varejo como para atacado.</p>
                <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
            </section>

            <section className="sobre-imagens">
                
                    <img src="../../assets/sobre-image.jpg" alt="sobre"></img>
                

            
                    <img src="../../assets/sorveteria.jpg" alt="sorveteria"></img>
                
            </section>
        </main>
        <Footer />
    </div>
);

export default Sobre;