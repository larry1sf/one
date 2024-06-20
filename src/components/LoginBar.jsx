export default function LoginBar() {
    return (

        <div className="login-container">
            <Items text='Iniciar sesión' textAlt='la pestaña de iniciar sesión' />
            |
            <Items text='Crear cuenta' textAlt='la pestaña para crear una cuenta' />

        </div>
    );


    function Items({ text, textAlt }) {
        return (
            <a
                title={text}
                href={`/${text}`}
                aria-label={`acceso a ${textAlt}`}
                alt={`enlace para acceder a ${textAlt}`}
                className={`login-items ${text[0]}`}>
                {text}
            </a>
        );
    }

}