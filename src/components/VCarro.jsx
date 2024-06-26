import { Link } from "wouter";
import BtnSalir from "./BtnSalir";

export default function VCarro({ titleCar, children }) {



    function BtnCompra({ urlC, text }) {
        return (
            <div className="botones">
                <Link className=" btn"
                    href={urlC} >
                    <div className="btn-span">
                        {text}
                    </div>
                </Link>
            </div>
        );
    }
    function DescCompra({ cname = 'desc-compras' }) {
        return (
            <div className="desc-compras">

                <p className="num-productos">N° de productos: $300033</p>
                <hr />
                <p className="total-estimado">Total estimado: $3333</p>


            </div>
        );
    }
    function Encabezado() {
        return (
            <div className="c-encabezado">
                <cite className="c-encabezado-title">{titleCar}</cite>

                <label htmlFor="carro" className="lb-close">
                    <BtnSalir />
                </label>
                <hr />
            </div>
        );
    }

    return (
        <div className={`c-padre`}>


            <div className={`c-hijo`}>


                <Encabezado />


                <p className="bienbenida">¡Productos a bordo!</p>

                <div className="c-cuerpo">

                    <div className="cards">
                        {children}
                    </div>

                </div>

            </div>

            <div className="c-footer">

                <DescCompra />
                <BtnCompra urlC={'comprar-page'} text='Comprar Ahora' />
                <BtnCompra urlC='home' text='Comprar Despues' />

            </div>

        </div >
    );



}


