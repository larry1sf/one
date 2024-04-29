import BtnSalir from "../components/BtnSalir";


export default function Hombre() {

    return (
        <div className="hombresPage">

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                padding: "50px",
                color: "#fff"
            }}>
                Productos para hombres en este lado

                <BtnSalir></BtnSalir>
            </div>

        </div>
    );
}