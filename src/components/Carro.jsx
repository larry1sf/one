import VCarro from "./VCarro";
export default function CarroBtn(prop) {
    const nameProp = prop.ob.name;



    // function clickCar() {
    //     setCopen(!Copen);
    // }


    return (
        <>
            <li className="navbar-item">
                <input type="checkbox" id="ch" />
                <div
                    className={`a-item ${nameProp}`}
                    alt={nameProp}
                >

                    <label htmlFor="ch" className="chh">

                        <span
                            className='txt-item'
                        // onClick={clickCar}
                        >
                            {nameProp}
                        </span>
                    </label>
                </div>

                <VCarro />
            </li ></>
    );
}