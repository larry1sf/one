// const logoSvg = '../../public/svg/dress.svg';
import { Link } from 'wouter';
export default function Logo({ aSetState }) {

    return (

        <li className="logo-container">

            <Link
                to="/"
                className="img-container"
                onClick={i => aSetState(i = 'Home', i)}>

                <h1 className="logo-txt">
                    Modelos Moncada
                </h1>

            </Link>

        </li >

    );
}