// library
import { Link } from 'wouter';


// hooks
import { useState } from "react";

export default function ItemNav(props) {
    const nameProp = props.ob.name;
    const urlProp = props.ob.url;


    const [active, SetActive] = useState(false);

    const verifyActive = active ? 'active' : '';
    return (

        <li className="navbar-item"
            onClick={() => SetActive(true)}
        >
            <Link
                to={urlProp}
                className={`a-item ${nameProp} ${verifyActive}`}
                alt={nameProp}>

                <span className='txt-item'>
                    {nameProp}
                </span>
            </Link>
        </li>
    );
}