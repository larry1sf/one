import { Link } from "wouter";
import BtnSalir from "./BtnSalir";

export default function VCarro({ titleCar, children }) {



    function BtnCompra({ urlC, text }) {
        return (
            <>
                <Link className=" btn"
                    href={urlC} >
                    <div className="btn-span">
                        {text}
                    </div>
                </Link>
            </>
        );
    }
    function DescCompra({ cname = 'desc-compras' }) {
        return (
            <>

                <p className="num-productos">N° de productos: $300033</p>
                <hr />
                <p className="total-estimado">Total estimado: $3333</p>


            </>
        );
    }
    function Encabezado() {
        return (
            <>
                <cite className="c-encabezado-title">{titleCar}</cite>

                <label htmlFor="carro" className="lb-close">
                    <BtnSalir />
                </label>
                <hr />
            </>
        );
    }

    return (
        <div className={`c-padre`}>


            <div className={`c-hijo`}>

                <div className="c-encabezado">
                    <Encabezado />
                </div>

                <p className="bienbenida">¡Productos a bordo!</p>

                <div className="c-cuerpo">

                    <div className="cards">
                        {children}
                    </div>

                </div>

            </div>

            <div className="c-footer">
                <div className="desc-compras">
                    <DescCompra />
                </div>

                <div className="botones">
                    <BtnCompra urlC={'comprar-page'} text='Comprar Ahora' />
                    <BtnCompra urlC='home' text='Comprar Despues' />
                </div>
            </div>

        </div >
    );



}


