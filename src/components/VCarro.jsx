

export default function VCarro() {
    return (
        <div className={`c-padre`}>


            <div className={`c-hijo`}>

                <div className="c-encabezado">

                    <h4 className="encabezado-car title">Carrito 🛒</h4>

                    <label htmlFor="carro" className="encabezado-car lb-close">
                        <div
                            className="btn-close">

                        </div>
                    </label>

                </div>

                <div className="c-cuerpo">
                    <p>Aqui se mostraran las comprar seleccionadas.</p>
                    <div>cards</div>
                    <div>cards</div>
                    <div>cards</div>
                </div>
                <div className="c-footer">
                    <button
                        type="button">
                        Comprar ahora
                    </button>
                    <button
                        type="button">
                        Comprar despues.
                    </button>
                </div>

            </div>

        </div >
    );
}