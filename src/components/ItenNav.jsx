// library
import { Link } from 'wouter';




// hooks
export default function ItemNav({ ob, ASactive, aState, ariaLb = 'nuestro estante' }) {
    const nameProp = ob.name;
    const urlProp = ob.url;
    let showActive = '';


    if (aState === 'Hombre' & nameProp === aState) showActive = 'on';
    else if (aState === 'Home' & nameProp === aState) showActive = 'on';
    else if (aState === 'Mujer' & nameProp === aState) showActive = 'on';
    else if (aState === 'Promociones' & nameProp === aState) showActive = 'on';
    else showActive = '';

    const oPAria = nameProp === 'Home' | nameProp === 'Promociones' ? 'en' : 'para';
    const oP2Aria = nameProp === 'Home' ? ariaLb : nameProp;

    return (
        <>
            <li className="navbar-item">

                <Link
                    className={`a-item ${nameProp} ${showActive}`}
                    aria-label={`Productos ${oPAria} ${oP2Aria}`}
                    to={urlProp}
                    alt={nameProp}
                    onClick={i => ASactive(i = nameProp, i)}>

                    <strong
                        className='txt-item'>
                        {nameProp}
                    </strong>
                </Link>

            </li >

        </>

    );
}