import { useState } from "react";

export default function TopItems() {
    return (
        <li className="NB-top-container">
            <Item cname='msg' />
            <Item cname='bell' />
        </li>
    );
}

function Item(props) {

    const [open, setOpen] = useState(false);

    const CNopen = open ? 'open' : 'close';
    return (
        <div
            className={`NB-top-item ${props.cname}`}
            onClick={() => setOpen(!open)}>
            <div className={`NB-top-open ${CNopen}`}>
            </div>

        </div >
    );
}