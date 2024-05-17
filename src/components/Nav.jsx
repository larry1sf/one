
import Logo from "../components/Logo";
import ItemNav from "../components/ItenNav";
import TopItems from "../components/TopItems";
import { useState } from "react";
import { navegation } from "../service/itemsNavegacon";
import CarroBtn from "./Carro";

export default function Nav() {

    const [active, setActive] = useState('Home');

    return (
        <div>
            <nav className="navbar">
                <ul className="navbar-menu">

                    <Logo />

                    <ItemNav
                        ob={navegation.Home}
                        Averificar={active}
                        Aactive={() => setActive(navegation.Home.name)}
                    />
                    <ItemNav
                        ob={navegation.Hombre}
                        Averificar={active}
                        Aactive={() => setActive(navegation.Hombre.name)}
                    />
                    <ItemNav
                        ob={navegation.Mujer}
                        Averificar={active}
                        Aactive={() => setActive(navegation.Mujer.name)}
                    />
                    <ItemNav
                        ob={navegation.Prom}
                        Averificar={active}
                        Aactive={() => setActive(navegation.Prom.name)}
                    />

                    <CarroBtn
                        ob={navegation.Carro}
                    />

                    <TopItems></TopItems>

                </ul>

            </nav>

        </div >
    );
}