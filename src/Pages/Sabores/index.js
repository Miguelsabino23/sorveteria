import React from "react";
import { Link } from 'react-router-dom';
import Header from '../../Components/Header/'
import Footer from '../../Components/Footer/'
import "../Sabores/style.css"

const Sabores = () => (
    <div>
        <Header />
        <main>
            <section className="banner-sabores">
                <div className="banner-textos">
                    <h1>Nossos Sabores</h1>
                </div>
            </section>

            <section className="secao-sabores limitar-secao">
                <h2>Sabores de sorvete</h2>
                <div className="todos-sabores">
                    <div className="box-sabores">
                        <div className="box-img">
                            <img src="../../assets/sabor-oreo.jpg" alt="sorvete-sabor-oreo"></img>
                        </div>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>

                    <div className="box-sabores">
                        <div className="box-img">
                            <img src="../../assets/sabor-pistache.png" alt="sorvete-sabor-pistache"></img>
                        </div>
                        <h3>Sorvete de Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>

                    <div className="box-sabores">
                        <div className="box-img">
                            <img src="../../assets/sabor-cookies-avela.png" alt="sorvete-sabor-cookies-avela"></img>
                        </div>
                        <h3>Sorvete de Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>

                    <div className="box-sabores">
                        <div className="box-img">
                            <img src="../../assets/sorbet-kiwi.png" alt="sorvete-sabor-kiwi"></img>
                        </div>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Deliciso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>

                    <div className="box-sabores">
                        <div className="box-img">
                            <img src="../../assets/sorbet-morango.png" alt="sorvete-sabor-morango"></img>
                        </div>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>

                    <div className="box-sabores">
                        <div className="box-img">
                            <img src="../../assets/sorbet-limao.png" alt="sorvete-sabor-limao"></img>
                        </div>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
    </div>
)

export default Sabores;