export default function CardsC({ nmProduct, clsName, url = '#', desc = 'corta descripcion sacada de bd' }) {
    return (
        <>
            <div className={`${clsName}`}>

                <div className="conte-img">
                    <img src={url} alt={`producto ${nmProduct}`} />
                </div>

                <div className={`info producto`}>
                    <strong> {nmProduct} </strong>
                    <p>{desc}</p>
                </div>

                <div className={'contador'}>
                    <div className="count">x</div>
                    <div className="btn-count">1</div>
                    <div className="btn-count">2</div>
                </div>
            </div >
        </>
    );

}