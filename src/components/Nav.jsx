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

                    <Busqueda />
                    <Logo
                        aSetState={setActive}
                    />
                    <ItemNav
                        ob={navegation.Home}
                        aState={active}
                        aSetState={setActive}
                    />
                    <ItemNav
                        ob={navegation.Hombre}
                        aState={active}
                        aSetState={setActive}
                    />
                    <ItemNav
                        ob={navegation.Mujer}
                        aState={active}
                        aSetState={setActive}
                    />
                    <ItemNav
                        ob={navegation.Prom}
                        aState={active}
                        aSetState={setActive}
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