

export default function VCarro({ titleCar, children }) {
    return (
        <div className={`c-padre`}>


            <div className={`c-hijo`}>

                <div className="c-encabezado">
                    <cite className="c-encabezado-title">{titleCar}</cite>

                    <label htmlFor="carro" className="lb-close">
                        <button type="button" aria-label='boton de cerrar' className="btn-close" ></button>
                    </label>
                    <hr />
                </div>

                <p className="bienbenida">¡Productos a bordo!</p>
                <div className="c-cuerpo">

                    <div className="cards">

                        {children}
                    </div>

                </div>

                <div className="c-footer">
                    {/* <button
                        type="button"
                        className="f-btn">
                        Comprar ahora
                    </button>
                    <button
                        type="button"
                        className="f-btn">
                        Comprar despues.
                    </button> */}
                    <button className="custom-btn btn">Comprar Ahora</button>
                    <button className="custom-btn btn">Comprar Despues</button>
                </div>

            </div>

        </div >
    );
}