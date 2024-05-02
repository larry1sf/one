//library wouter
import { Route } from "wouter";


// componentes
// import Home from "./Home";

import Logo from "../components/Logo";
import ItemNav from "../components/ItenNav";


// css.
import "../css/nav.css";
import "../css/logo.css";

//pages
import Hombre from "./Hombre";
import Mujer from "./Mujer";
import Promociones from "./Promociones";
import TopItems from "../components/TopItems";



const navegation = {
  Home: { url: "/", name: "Home" },
  Hombre: { url: "/hombre", name: "Hombre" },
  Mujer: { url: "/mujer", name: "Mujer" },
  Prom: { url: "/promociones", name: "Promociones" },
  Carro: { url: "", name: "Carro" }
};


function Inicio() {

  return (
    <>
      {/* <Home></Home> */}
      <Route path={navegation.Home.url} component={Home} />

      <Route path={navegation.Hombre.url} component={Hombre} />

      <Route path={navegation.Mujer.url} component={Mujer} />

      <Route path={navegation.Prom.url} component={Promociones} />
    </>
  );
}





// page inicial.
function Home() {
  return (
    <>
      <Nav>
        <Logo />
        <ItemNav ob={navegation.Home}></ItemNav>
        <ItemNav ob={navegation.Hombre}></ItemNav>
        <ItemNav ob={navegation.Mujer}></ItemNav>
        <ItemNav ob={navegation.Prom}></ItemNav>
        <TopItems></TopItems>
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



export default Inicio;
