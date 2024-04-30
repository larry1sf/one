
import { Link } from 'wouter';



// const url = 0;
// const name = 1;


export default function ItemNav(props) {

    const nameProp = props.ob.name;
    const urlProp = props.ob.url;

    return (

        <li className="navbar-item">
            <Link
                to={urlProp}
                className={"a-item " + nameProp}
                alt={nameProp}>

                <span className='txt-item'>
                    {nameProp}
                </span>
            </Link>
        </li>
    );
}