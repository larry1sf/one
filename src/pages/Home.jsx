

// componentes
import Logo from "../components/Logo";
import ItemNav from "../components/ItenNav";



function Home(props) {
    return (
        <>
            <Nav>
                <Logo />
                <ItemNav ob={props.Home}></ItemNav>
                <ItemNav ob={props.Hombre}></ItemNav>
                <ItemNav ob={props.Mujer}></ItemNav>
                <ItemNav ob={props.Promo}></ItemNav>
            </Nav>
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