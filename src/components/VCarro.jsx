

export default function VCarro(prop) {
    const name = prop.nam;
    return (
        <div className={`a-item-carro ${name}`}>
            <h4>Carrito 🛒</h4>
            <p>Aqui se mostraran las comprar seleccionadas.</p>
            <br />
            <div>cards</div>
            <div>cards</div>
            <div>cards</div>
        </div>
    );
}