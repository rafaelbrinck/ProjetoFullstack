import imagemFluxo from '../assets/fluxo-de-caixa.png'
import imagemFinanca from "../assets/financa.png"
import imagemEstoque from "../assets/armazem.png"


export default function Icones(){
    const abrirCadastro = () => {
        const containerCadastro = document.getElementById('containerCadastro')

        document.getElementById('cadastro').addEventListener('click', () => {
            containerCadastro.style.display = "flex"
        })
    }
    const abrirListas = () => {
        document.getElementById('estoque').addEventListener('click', () => {
            document.getElementById('paginaEstoque').style.display = "block"
            document.getElementById('containerEstoque').style.display = "flex"
        })
    }

    return(
        <div className="gridIcones">
            <span className="icone">
                <img src={imagemFluxo} alt="" />
            </span>
            <span className="icone" id='cadastro' onClick={abrirCadastro}>
                <img src={imagemFinanca} alt="" />
            </span>
            <div className="icone" id="estoque"  onClick={abrirListas}>
                <img src={imagemEstoque} alt="" />
            </div>
        </div>
    )
}