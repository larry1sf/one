import LoginBar from "../../components/LoginBar";
import Nav from "../../components/Nav";
import { Route } from "wouter";
export default function ViewNormal() {

    return (
        <>
            <LoginBar />
            <Nav></Nav>

            <Route path="/" >
                home
            </Route>
            <Route path="/hombre" >hombres</Route>
            <Route path="/mujer" >mujeres</Route>
            <Route path="/promociones" >promos</Route>

        </>
    );
}

