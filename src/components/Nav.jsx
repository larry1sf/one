import { navegation } from "../service/itemsNavegacon";
import { useState } from "react";

import Logo from "./Logo";
import ItemNav from "./ItenNav";
import TopItems from "./TopItems";
import CarroBtn from "./Carro";
import Busqueda from "./Busqueda";

export default function Nav() {

    const [active, setActive] = useState('Home');


    return (
        <section className="conte-nav">
            <nav className="navbar">
                <ul className="navbar-menu">

                    <Logo />
                    <Busqueda />
                    <ItemNav
                        ob={navegation.Home}
                        Averificar={active}
                        Aactive={i => setActive(i = navegation.Home.name, i)}
                    />
                    <ItemNav
                        ob={navegation.Hombre}
                        Averificar={active}
                        Aactive={i => setActive(i = navegation.Hombre.name, i)}
                    />
                    <ItemNav
                        ob={navegation.Mujer}
                        Averificar={active}
                        Aactive={i => setActive(i = navegation.Mujer.name, i)}
                    />
                    <ItemNav
                        ob={navegation.Prom}
                        Averificar={active}
                        Aactive={i => setActive(i = navegation.Prom.name, i)}
                    />
                    <CarroBtn
                        ob={navegation.Carro}
                    />
                    <TopItems></TopItems>

                </ul>

            </nav>

        </ section>
    );
}