import Logo from "../../components/Logo";
import ItemNav from "../../components/ItenNav";
import TopItems from "../../components/TopItems";
import { navegation } from "../../service/itemsNavegacon";


export default function ViewSmall(props) {

    return (
        <>
            <Nav>
                <Logo />

                <ItemNav
                    ob={navegation.Home} />

                <ItemNav ob={{ name: '. . .', url: '/' }} />

                <ItemNav
                    ob={navegation.Carro} />

                <TopItems></TopItems>

            </Nav>

            {props.Vinferior}

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