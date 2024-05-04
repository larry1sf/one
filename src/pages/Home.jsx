// librarys
import { Route } from "wouter";
import { useState } from "react";
// componentes
import Logo from "../components/Logo";
import ItemNav from "../components/ItenNav";
import TopItems from "../components/TopItems";
import BloqueImg from "../components/BloqueImg";
import { navegation } from "../service/itemsNavegacon";
import Rutas from "../components/Rutas";

// inicial.
function Home() {
    const [selected, setSelected] = useState(false);

    const Vinferior = selected ? <Rutas /> : <BloqueImg></BloqueImg>;

    return (
        <>
            <Nav>
                <Logo />

                <ItemNav
                    ob={navegation.Home} />
                <ItemNav
                    ob={navegation.Hombre}
                    selec={() => setSelected(true)} />
                <ItemNav
                    ob={navegation.Mujer}
                    selec={() => setSelected(true)} />
                <ItemNav
                    ob={navegation.Prom}
                    selec={() => setSelected(true)} />

                <ItemNav
                    ob={navegation.Carro} />

                <TopItems></TopItems>

            </Nav>

            {Vinferior}

        </>
    );
}

// navegacion
function Nav(props) {
    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-menu">

                    {props.children}


                </ul>

            </nav>

        </header >
    );
}





export default Home;