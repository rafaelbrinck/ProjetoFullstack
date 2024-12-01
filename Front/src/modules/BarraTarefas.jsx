import imagemSair from "../assets/saida.png"
import Hora from "./Hora"

function sair(){
    const buttonSaida = document.getElementById('buttonSair')
    const login = document.querySelector('.containerLogin')
    const admin = document.querySelector('.admin')
    buttonSaida.addEventListener('click', () => {
        login.style.display = "flex";
        admin.style.display = "none"
    })
}

export default function BarraTarefas(){
    return(
        <div className="barra">
            <span className="sair" id="buttonSair" onClick={sair}>
                <img src={imagemSair} alt="" />
            </span>
            <Hora/>
        </div>
    )
}