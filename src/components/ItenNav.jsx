// library
import { Link } from 'wouter';

// hooks
export default function ItemNav(props) {
    const nameProp = props.ob.name;
    const urlProp = props.ob.url;

    const ASactive = props.aSetState;
    const aState = props.aState;

    let showActive = 'a';


    if (aState === 'Hombre' & nameProp === aState) showActive = 'on';
    else if (aState === 'Home' & nameProp === aState) showActive = 'on';
    else if (aState === 'Mujer' & nameProp === aState) showActive = 'on';
    else if (aState === 'Promociones' & nameProp === aState) showActive = 'on';
    else showActive = '';

    return (
        <>
            <li className="navbar-item">

                <Link
                    className={`a-item ${nameProp} ${showActive}`}
                    to={urlProp}
                    alt={nameProp}
                    onClick={i => ASactive(i = nameProp, i)}>

                    <span

                        className='txt-item'>
                        {nameProp}
                    </span>
                </Link>

            </li >

        </>

    );
}