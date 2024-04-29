import BtnSalir from "../components/BtnSalir";

//component
export default function Promociones() {
    return (
        <div className="mujeresPage">

            <div style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                padding: "50px",
                color: "pink"
            }}>
                Productos para promociones en este lado

                <BtnSalir></BtnSalir>

            </div>

        </div>
    );
}