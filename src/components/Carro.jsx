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

                <button
                    className="btn-a-item"
                    type="button"
                    aria-label="boton de abrir carro de comprar">

                    <label
                        className={`a-item ${nameProp}`}
                        htmlFor="carro">

                        <p className='txt-item'>{carElement}</p>

                    </label>

                </button>

                <section className="carro-abrir">
                    <VCarro titleCar='Carro'>
                        <CardsC clsName='c-card' nmProduct={cCards.titleItem[0]} />
                        <CardsC clsName='c-card' nmProduct={cCards.titleItem[1]} />
                        <CardsC clsName='c-card' nmProduct={cCards.titleItem[0]} />
                    </VCarro>
                </section>


            </li ></>
    );
}