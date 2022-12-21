import React from "react";
import { Link } from 'react-router-dom'
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import '../Home/style.css';

const Home = () => (
    <div>
        <Header />
        <main>
            <section className="secao-banner fundo-amarelo">
                <div className="limitar-secao banner-titulo">
                    <h1>Sorvete Artesanal</h1>
                </div>
            </section>
            
            <section className="secoes-iguais">
                <img src="../assets/banner-sabores.jpg"></img>
                <div className="secoes-textos">
                    <h2>Nossos Sabores</h2>
                    <span>Novos e deliciosos!</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açucar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>
            
            <section className="secoes-iguais">
                <div className="secoes-textos item-2">
                    <h2>Nossos Eventos</h2>
                    <span>Delicias com sorvete!</span>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempo aqui com a gente</p>
                </div>
                <img className="item-1" src="../assets/eventos-image.jpg"></img>
            </section>
            
            <section className="secoes-iguais">
                <img src="../assets/sobre-image.jpg"></img>
                <div className="secoes-textos">
                    <h2>Sobre nós</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para os nossos clientes e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>
        </main>
        <Footer />
        <link className="pagina-home" to="/"></link>
        <link className="pagina-sabores" to="/Sabores"></link>
        <link className="pagina-sobre" to="/Sobre"></link>
    </div>
)

export default Home;