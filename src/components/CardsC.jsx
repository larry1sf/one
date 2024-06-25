import { useState } from "react";
import BtnSalir from "./BtnSalir";

export default function CardsC({ nmProduct, clsName, url = '../../public/svg/gancho-fondo.png', desc = 'corta descripcion sacada de bd' }) {
    const [card, setCard] = useState({ visible: true, count: 0 });


    function restar() {
        card.count ? setCard({ count: card.count - 1, visible: card.visible }) : card.count;
    }
    function sumar() {
        return setCard({ count: card.count + 1, visible: card.visible });
    }
    // componente
    function Contador() {
        function Btn({ accion = 'nadar', fun }) {
            return (
                <>
                    <button
                        type='button'
                        className="btn-count"
                        title={`boton de ${accion} del contador`}
                        aria-label={`boton de ${accion} del contador`}
                        onClick={() => fun()}></button>
                </>
            );
        }

        return (
            <>
                <p className="count">{card.count}</p>

                <Btn accion="aumentar" fun={sumar} />
                <Btn accion="disminuir" fun={restar} />

            </>
        );
    }

    if (card.visible) {
        return (
            <>
                <div className={`${clsName} ${card.visible}`}>
                    <BtnSalir
                        cambio={setCard}
                        pV={card.visible}
                        sV={card.count}
                        ECambiar={card} />

                    <div className="conte-img">
                        <img src={url}
                            alt={`producto ${nmProduct}`}
                            title={nmProduct}
                            aria-label={`imagen de muestra de del producto ${nmProduct}`} />
                    </div>

                    <div className={`info-producto`}>
                        <b> {nmProduct} </b>
                        <div className="desc-info-p">
                            <p>{desc}</p>
                            <p>precio de la unidad: $bd</p>
                        </div>
                    </div>

                    <div className={'contador'}>
                        <Contador />
                    </div>
                </div >
            </>
        );
    } else { return ''; }

}