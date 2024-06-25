
export default function BtnSalir({ cambio, pV, sV, ECambiar }) {
    // let card = '';
    return (

        <>
            <button
                className="btn-close"
                type="button"
                title="boton de cierre"
                aria-label='boton de cerrar'
                onClick={() => cambio({ pV: false, sV: ECambiar.sV })}
            ></button >
        </>
    );
}