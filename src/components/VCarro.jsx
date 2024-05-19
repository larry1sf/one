

export default function VCarro() {
    return (
        <div className={`a-item-carro subContenedor`}>


            <div className={`a-item-carro carrito`}>

                <div className="encabezado-car">

                    <h4>Carrito 🛒</h4>

                    <label htmlFor="ch" className="lb-close">
                        <pre
                            className="btn-close-carro">
                            ❌
                        </pre>
                    </label>

                </div>

                <div className="cuerpo-car">
                    <p>Aqui se mostraran las comprar seleccionadas.</p>
                    <br />
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