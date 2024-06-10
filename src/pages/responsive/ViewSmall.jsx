import Logo from "../../components/Logo";
import ItemNav from "../../components/ItenNav";
import TopItems from "../../components/TopItems";
import { navegation } from "../../service/itemsNavegacon";
import CarroBtn from "../../components/Carro";

import { Route } from "wouter";
import { useState } from "react";

export default function ViewSmall() {

    const [active, setActive] = useState('home');
    return (
        <>
            <Nav>
                <Logo />

                <ItemNav
                    ob={navegation.Home}
                    aState={active}
                    aSetState={setActive} />

                <ItemNav
                    ob={navegation.Mujer}
                    aState={active}
                    aSetState={setActive}
                />

                <CarroBtn
                    ob={navegation.Carro} />

                <TopItems></TopItems>

            </Nav>
            <>

                <Route path="/">casa</Route>
                <Route path="/hombre">hombre</Route>
                <Route path="/mujer">mujeres</Route>
                <Route path="/promociones">promos</Route>

            </>
        </>
    );
}

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