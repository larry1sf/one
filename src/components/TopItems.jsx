import { useEffect, useState } from "react";

export default function TopItems() {


    return (
        <li className="NB-top-container-tops">
            <Item cname='msg' />
            <Item cname='bell' />
        </li>
    );
}


function Item(props) {
    const cname = props.cname;
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