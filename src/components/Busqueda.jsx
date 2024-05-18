export default function Busqueda() {
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
                        name="b"
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