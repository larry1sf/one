import { useState } from "react";

export default function CardsC({ nmProduct, clsName, url = '../../public/svg/gancho-fondo.png', desc = 'corta descripcion sacada de bd' }) {
    const [card, setCard] = useState({ visible: true, count: 0 });


    function restar() {
        card.count ? setCard({ count: card.count - 1, visible: card.visible }) : card.count;
    }
    function sumar() {
        return setCard({ count: card.count + 1, visible: card.visible });
    }



    if (card.visible) {
        return (
            <>
                <div className={`${clsName} ${card.visible}`}>
                    <button type="button"
                        className="btn-close"
                        title="boton de cierre"
                        aria-label="boton para cerrar"
                        onClick={() => setCard({ visible: false, count: card.count })}></button>

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
                        <p className="count">{card.count}</p>
                        <button
                            type='button'
                            className="btn-count"
                            title="boton de aumento del contador"
                            aria-label="boton de aumento del contador"
                            onClick={() => sumar()}></button>
                        <button
                            type='button'
                            className="btn-count"
                            title="boton de restar del contador"
                            aria-label="boton de restar del contador"
                            onClick={() => restar()}></button>
                    </div>
                </div >
            </>
        );
    } else { return ''; }

}