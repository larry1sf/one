import { useState } from "react";
import VCarro from "./VCarro";
export default function CarroBtn(prop) {
    const nameProp = prop.ob.name;

    const [Copen, setCopen] = useState(false);





    return (
        <>
            <li className="navbar-item">

                <div
                    className={`a-item ${nameProp}`}
                    alt={nameProp}
                    onClick={() => setCopen(!Copen)}>
                    <span
                        className='txt-item'
                    >
                        {nameProp}
                    </span>
                </div>

                <VCarro nam={Copen ? 'car focus' : 'car '} />
            </li ></>
    );
}