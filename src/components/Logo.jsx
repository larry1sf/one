// const logoSvg = '../../public/svg/dress.svg';
import { Link } from 'wouter';
export default function Logo({ aSetState }) {

    return (

        <li className="logo-container">

            <Link
                className="img-container"
                aria-label='logo de los modelos moncada'
                alt='logo de la tienda virtual de modelos moncada'
                to="/"
                onClick={i => aSetState(i = 'Home', i)}>

                <h1 className="logo-txt">
                    Modelos Moncada
                </h1>

            </Link>

        </li >

    );
}