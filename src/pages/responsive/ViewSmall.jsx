import Logo from "../../components/Logo";
import ItemNav from "../../components/ItenNav";
import TopItems from "../../components/TopItems";
import { navegation } from "../../service/itemsNavegacon";
import CarroBtn from "../../components/Carro";


export default function ViewSmall(props) {
    const ViewInferior = props.Vinferior;
    const espaciado = { name: '. . .', url: '/' };

    return (
        <>
            <Nav>
                <Logo />

                <ItemNav
                    ob={navegation.Home} />

                <ItemNav ob={espaciado} />

                <CarroBtn
                    ob={navegation.Carro} />

                <TopItems></TopItems>

            </Nav>

            {ViewInferior}

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