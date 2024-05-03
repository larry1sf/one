//librarys
import { Route } from "wouter";

// componentes
// import Logo from "../components/Logo";
// import ItemNav from "../components/ItenNav";
import Home from "./Home";

// css.
import "../css/nav.css";
import "../css/logo.css";

//pages
import Hombre from "./Hombre";
import Mujer from "./Mujer";
import Promociones from "./Promociones";
import { navegation } from "../service/itemsNavegacon";



function Inicio() {
  return (
    <>
      <Route path={navegation.Home.url} component={Home} />

      <Route path={navegation.Hombre.url} component={Hombre} />

      <Route path={navegation.Mujer.url} component={Mujer} />

      <Route path={navegation.Prom.url} component={Promociones} />
    </>
  );
}

export default Inicio;
