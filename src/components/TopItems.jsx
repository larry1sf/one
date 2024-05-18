import { useEffect, useState } from "react";

export default function TopItems() {


    return (
        <li className="NB-top-container-tops">
            <Item cname='msg' >
                <Whatsapp />
                Facebook: https://www.messenger.com/e2ee/t/7475012539220990
                direccion: cr19#39-29

            </Item>
            <Item cname='bell' > Notice</Item>
        </li>
    );
}

function Whatsapp() {
    return (
        <>
            whatsapp: #3333333
        </>
    );

}
function Item({ cname, children }) {
    // const cname = props.cname;
    const [open, setOpen] = useState(false);


    return (

        <div className={`NB-top-container ${cname}`}>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className={`NB-top-item ${cname}`}
                onClick={() => setOpen(!open)}>
            </div >

            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className={`NB-top-open ${cname} ${open ? 'open' : 'closed'}`} >

                <button
                    type="button"
                    className={`btn-${cname}-close`}
                    onClick={() => setOpen(false)}
                >
                    ❌
                </button>
                {children}

            </div >
        </div>
    );
}



// function NewTopsItems(props) {
//     // const [open, setOpen] = useState(false);

//     // const CNopen = open ? 'open' : 'close';
//     return (<>
//         <label className={`NB-top-item ${props.cname}`} htmlFor="msg-top-item">

//             <div className={`NB-top-open-${props.cname} `}>

//                 <div className={`btn-${props.cname}-close`}>
//                     -x-
//                 </div>
//             </div>


//         </label>
//         <input type="radio" name="msgs-top-item" id="msg-top-item" />    </>);
// }