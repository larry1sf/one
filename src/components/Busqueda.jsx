import { useMediaQuery } from "@react-hook/media-query";

export default function Busqueda() {


    // const mediaHint = useMediaQuery('(max-width: 956px)');

    // const placeholder = mediaHint ? '¿Que Buscas?' : '¿Que Estas Buscando?';
    return (
        <li className="navbar-item busqueda">
            <form
                action="/search/"
                method="get">
                <label
                    htmlFor="i-txt"
                    className="lb-busqueda"
                    title="¿Que estas buscando?"
                    aria-disabled="true"
                >
                    <input
                        className="i-txt"
                        type="search"
                        autoComplete="off"
                        name="busqueda"
                        placeholder="¿Que estas buscando?"
                        id="i-txt" />
                    <button
                        className="btn-label-txt"
                        type="submit"
                        aria-label='Buscar'
                        aria-disabled={true} />

                </label>
            </form>
        </li >
    );
}