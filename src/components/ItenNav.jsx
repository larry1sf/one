// library
import { Link } from 'wouter';


// hooks
import { useState } from "react";

export default function ItemNav(props) {
    const nameProp = props.ob.name;
    const urlProp = props.ob.url;


    const [active, SetActive] = useState(false);

    const verifyActive = active ? 'active' : 'desactive';

    return (

        <li className="navbar-item">
            <Link
                to={urlProp}
                className={`a-item ${nameProp} ${verifyActive}`}
                alt={nameProp}
                onClick={() => SetActive(!active)}>

                <span
                    className='txt-item'
                    onClick={props.selec}>
                    {nameProp}
                </span>
            </Link>
        </li >
    );
}