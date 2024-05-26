

export default function VCarro() {
    return (
        <div className={`a-item-carro subContenedor`}>


            <div className={`a-item-carro carrito`}>

                <div className="encabezado-car">

                    <h4 className="encabezado-car title">Carrito 🛒</h4>

                    <label htmlFor="ch" className="encabezado-car lb-close">
                        <pre
                            className="btn-close-carro">
                            ❌
                        </pre>
                    </label>

                </div>

                <div className="cuerpo-car">
                    <p>Aqui se mostraran las comprar seleccionadas.</p>
                    <div>cards</div>
                    <div>cards</div>
                    <div>cards</div>
                </div>
                <div className="footer-car">
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