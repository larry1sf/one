import { useState } from "react";
import VCarro from "./VCarro";
import CardsT from './CardsT';
import { cCards } from "../service/itemsNavegacon";
import CardsC from "./CardsC";

export default function Carro(prop) {
    const nameProp = prop.ob.name;



    const [carElement, setCarElement] = useState(0);

    return (
        <>
            <li className="navbar-item carro" >
                <input type="checkbox" id="carro" />
                <button className="btn-a-item" type="button" aria-label="boton de abrir carro de comprar">
                    <label
                        htmlFor="carro"
                        className={`a-item ${nameProp}`}
                    >

                        <strong className='txt-item'>{carElement}</strong>
                    </label>
                </button>

                <section className="carro-abrir">
                    <VCarro titleCar='Carro'>
                        <CardsC clsName='c-card' nmProduct={cCards.titleItem[0]} url={cCards.urlItem[0]} />
                        <CardsC clsName='c-card' nmProduct={cCards.titleItem[1]} url={cCards.urlItem[1]} />
                        <CardsC clsName='c-card' nmProduct={cCards.titleItem[2]} url={cCards.urlItem[2]} />
                    </VCarro>
                </section>


            </li ></>
    );
}