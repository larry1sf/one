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
                    <TopItems />
                    <Logo ASactive={setActive} />
                    <MiniNav a={active} sA={setActive} />
                    <Carro
                        ob={navegation.Carro}// cambiar de input a estado para hacer mas accesible papagina.
                    />

                </ul>

            </nav>

        </ article>
    );
}
function MiniNav({ a, sA }) {
    return (
        <>

            <ItemNav
                ob={navegation.Home}
                aState={a}
                ASactive={sA}
            />
            <ItemNav
                ob={navegation.Hombre}
                aState={a}
                ASactive={sA}
            />
            <ItemNav
                ob={navegation.Mujer}
                aState={a}
                ASactive={sA}
            />
            <ItemNav
                ob={navegation.Prom}
                aState={a}
                ASactive={sA}
            />
        </>
    );
}