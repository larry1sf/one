import { navegation } from "../service/itemsNavegacon";
import { useState } from "react";

import Logo from "./Logo";
import ItemNav from "./ItenNav";
import TopItems from "./TopItems";
import Carro from "./Carro";
import Busqueda from "./Busqueda";

export default function Nav() {

    const [active, setActive] = useState('Home');


    return (
        <article className="conte-nav">
            <nav className="navbar">
                <ul className="navbar-menu">

                    <Busqueda />
                    <TopItems></TopItems>
                    <Logo
                        ASactive={setActive}
                    />
                    <ItemNav
                        ob={navegation.Home}
                        aState={active}
                        ASactive={setActive}
                    />
                    <ItemNav
                        ob={navegation.Hombre}
                        aState={active}
                        ASactive={setActive}
                    />
                    <ItemNav
                        ob={navegation.Mujer}
                        aState={active}
                        ASactive={setActive}
                    />
                    <ItemNav
                        ob={navegation.Prom}
                        aState={active}
                        ASactive={setActive}
                    />

                    {/* cambiar de input a estado para hacer mas accesible papagina. */}

                    <Carro
                        ob={navegation.Carro}
                    />

                </ul>

            </nav>

        </ article>
    );
}