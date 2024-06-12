import { useState } from "react";
const titleItem = ["facebook", "whatsapp", "instagram"];
const urlItem = ['https://www.facebook.com/profile.php?id=100085227097173', 'https://wa.link/rzld79', 'https://www.instagram.com/larrynigu6to/?hl=en'];
export default function TopItems() {
    return (
        <li className="NB-top-container-tops">
            <Item cname='msg' titleCard='Contactos'>
                <CardItems nameUse={titleItem[0]} url={urlItem[0]} />
                <CardItems nameUse={titleItem[1]} url={urlItem[1]} />
                <CardItems nameUse={titleItem[2]} url={urlItem[2]} />
            </Item>

            <Item cname='bell' titleCard='Notificaciones'></Item>
        </li>
    );
}



function Item({ children, cname, titleCard }) {
    const [open, setOpen] = useState(false);

    return (

        <div className={`NB-top-container ${cname}`}>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className={`NB-top-item ${cname}`}

            >
            </div >

            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className={`NB-top-open ${cname} ${open ? 'open' : 'closed'}`} >

                <div
                    className={`btn-close`}
                    onClick={() => setOpen(false)}
                >

                </div>

                <div className="conte-top">
                    <h5 className="title-top"> {titleCard}</h5>
                    {children}
                </div>

            </div >
        </div>
    );
}

function CardItems({ nameUse, url = urlItem }) {
    return (
        <>
            <a className={`card-top ${nameUse}`}
                target="_blank"
                href={url}
            >

                <section className={`bg-interno ${nameUse}`}>
                    <p> {nameUse} </p>
                </section>
            </a >
        </>
    );

}

