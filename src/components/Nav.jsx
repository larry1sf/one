
import Logo from "../components/Logo";
import ItemNav from "../components/ItenNav";
import TopItems from "../components/TopItems";
import { useState } from "react";
import { navegation } from "../service/itemsNavegacon";

export default function Nav() {

    // const verifyActive = active ? 'active' : 'desactive';

    // const Vinferior = selected ? <Rutas /> : <BloqueImg></BloqueImg>;

    // const veri = `${selected}`;




    const [active, setActive] = useState('');


    console.log(active);

    return (
        <header>
            <nav className="navbar">
                <ul className="navbar-menu">

                    <Logo />

                    <ItemNav
                        ob={navegation.Home}
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

                    <ItemNav
                        ob={navegation.Carro}
                    />

                    <TopItems></TopItems>

                </ul>

            </nav>

        </header >
    );
}