

// componentes
import Logo from "../components/Logo";
import ItemNav from "../components/ItenNav";
import TopItems from "../components/TopItems";
import BloqueImg from "../components/BloqueImg";
import { navegation } from "../service/itemsNavegacon";

// inicial.
function Home() {


    return (
        <>
            <Nav>
                <Logo />
                <ItemNav
                    ob={navegation.Home} />
                <ItemNav
                    ob={navegation.Hombre} />
                <ItemNav
                    ob={navegation.Mujer} />
                <ItemNav
                    ob={navegation.Prom} />
                <ItemNav ob={navegation.Carro} />
                <TopItems></TopItems>
            </Nav>
            <BloqueImg />
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