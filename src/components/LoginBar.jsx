export default function LoginBar() {
    return (

        <div className="login-container">
            <Items text='Iniciar sesión' />
            |
            <Items text='Crear cuenta' />

        </div>
    );


    function Items({ text }) {
        return (
            <a href={`/${text}`} className={`login-items ${text[0]}`}>
                {text}
            </a>
        );
    }

}