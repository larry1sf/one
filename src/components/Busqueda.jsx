import { useMediaQuery } from "@react-hook/media-query";

export default function Busqueda() {


    // const mediaHint = useMediaQuery('(max-width: 956px)');

    // const placeholder = mediaHint ? '¿Que Buscas?' : '¿Que Estas Buscando?';
    return (
        <li className="navbar-item busqueda">
            <form
                action="/search/"
                method="get">
                <input
                    id="i-txt"
                    className="i-txt"
                    type="search"
                    autoComplete="off"
                    name="busqueda"
                    title="¿Que estas buscando?"
                    placeholder="¿Que estas buscando?"
                    aria-label="Area de busqueda"
                />
                <label
                    htmlFor="i-txt"
                    className="lb-busqueda"
                    title="¿Que estas buscando?">
                    <button
                        className="btn-label-txt"
                        type="submit"
                        aria-label='Boton de busqueda' />

                </label>
            </form>
        </li >
    );
}