import { navegation } from "../service/itemsNavegacon";
import { Route } from "wouter";
import Hombre from "../pages/Hombre";
import Mujer from "../pages/Mujer";
import Promociones from "../pages/Promociones";
export default function Rutas() {
    return (
        <>
            <Route path={navegation.Hombre.url} component={Hombre} />
            <Route path={navegation.Mujer.url} component={Mujer} />
            <Route path={navegation.Prom.url} component={Promociones} />
        </>
    );
}