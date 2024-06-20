import { useState } from "react";

import CardsT from "./CardsT";
import { cCards } from "../service/itemsNavegacon";
// const titleItem = ["facebook", "whatsapp", "instagram"];
// const urlItem = ['https://www.facebook.com/profile.php?id=100085227097173', 'https://wa.link/rzld79', 'https://www.instagram.com/larrynigu6to/?hl=en'];
export default function TopItems() {
    return (
        <li className="NB-top-container-tops">
            <Item cname='mensajes' titleItem='Contactos'>
                <CardsT nmUse={cCards.titleItem[0]} clsName='card-top' url={cCards.urlItem[0]} />
                <CardsT nmUse={cCards.titleItem[1]} clsName='card-top' url={cCards.urlItem[1]} />
                <CardsT nmUse={cCards.titleItem[2]} clsName='card-top' url={cCards.urlItem[2]} />
            </Item>

            <Item cname='campana' titleItem='Notificaciones'></Item>
        </li>
    );
}



function Item({ children, cname, titleItem }) {
    const [open, setOpen] = useState(false);

    return (

        <section className={`NB-top-container ${cname}`}>
            <button
                className={`NB-top-item ${cname}`}
                aria-label={`item superior de ${cname}`}
                type="button"
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                onClick={() => setOpen(true)}
            >
            </ button>

            <div
                className={`NB-top-open ${cname} ${open ? 'open' : 'closed'}`}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}>

                <div className="conte-title-top">
                    <h5 className="title-top"> {titleItem}</h5>
                    <button
                        className={`btn-close`}
                        aria-label="boton de cerrar "
                        type="button"
                        onClick={() => setOpen(false)}>
                    </button>
                </div>
                <div className="conte-top">
                    {children}
                </div>

            </div >
        </section>
    );
}


