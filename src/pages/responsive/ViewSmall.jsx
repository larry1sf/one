import Logo from "../../components/Logo";
import ItemNav from "../../components/ItenNav";
import TopItems from "../../components/TopItems";
import { navegation } from "../../service/itemsNavegacon";
import CarroBtn from "../../components/Carro";

import { Route } from "wouter";

export default function ViewSmall() {

    return (
        <>
            <Nav>
                <Logo />

                <ItemNav
                    ob={navegation.Home} />

                <ItemNav ob={navegation.Mujer} />

                <CarroBtn
                    ob={navegation.Carro} />

                <TopItems></TopItems>

            </Nav>

            <Route path="/">casa</Route>
            <Route path="/hombre">hombre</Route>
            <Route path="/mujer">mujeres</Route>
            <Route path="/promociones">promos</Route>

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