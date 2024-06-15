import { useState } from "react";
import VCarro from "./VCarro";
export default function CarroBtn(prop) {
    const nameProp = prop.ob.name;



    const [carElement, setCarElement] = useState(0);

    return (
        <>
            <li className="navbar-item carro">
                <input type="checkbox" id="carro" />


                <label
                    htmlFor="carro"
                    className={`a-item ${nameProp}`}
                    alt={nameProp}
                >
                    <span className='txt-item'>
                        {carElement}
                    </span>
                </label>


                <div className="carro-abrir">
                    <VCarro />
                </div>


            </li ></>
    );
}