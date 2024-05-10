// library
import { Link } from 'wouter';
import { useState } from "react";


// hooks
export default function ItemNav(props) {
    const nameProp = props.ob.name;
    const urlProp = props.ob.url;
    const aClick = props.Aactive;
    const aName = props.Averificar;
    let nameMostrar = '';


    if (aName === 'Hombre' & nameProp === aName) nameMostrar = 'on';
    if (aName === 'Mujer' & nameProp === aName) nameMostrar = 'on';
    if (aName === 'Promociones' & nameProp === aName) nameMostrar = 'on';


    return (
        <>
            <li className="navbar-item">

                <Link
                    className={`a-item ${nameProp} ${nameMostrar}`}
                    to={urlProp}
                    alt={nameProp}
                    onClick={aClick}>
                    <span
                        className='txt-item'
                    >
                        {nameProp}
                    </span>
                </Link>

            </li >

        </>

    );
}