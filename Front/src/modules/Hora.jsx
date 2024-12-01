import { useEffect, useState } from "react";
import { mostrarData } from "../functions/functions";
import "../css/Hora.css"


export default function Hora(){
    const [data, setDataAtual] = useState(new Date())

    useEffect(() => {
        const intervalo = setInterval(()=>{
            setDataAtual(new Date());
        }, 1000)

        mostrarData();

        return () => clearInterval(intervalo)
    }, [])

    return(
        <div className="hora" id="hora">
            {/* <span id="data">
                <p className="data">{data.toLocaleDateString()}</p>
            </span> */}
            <p className="horario">{data.toLocaleTimeString()}</p>
        </div>
    )
}