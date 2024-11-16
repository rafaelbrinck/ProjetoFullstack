import imgProdutos from "../assets/produtos.png"
import imgCadastro from "../assets/cadastro.png"

export function sair(){
    const containerCadastro = document.getElementById('containerCadastro')
    const containerProdutos = document.getElementById('containerCadastroProdutos')

    document.getElementsByClassName('opSair').addEventListener('click', () => {
        containerCadastro.style.display = "none";
        containerProdutos.style.display = "none"
    })
}


export default function Cadastro(){
    const entrarProdutos = () => {
        const containerProdutos = document.getElementById('containerCadastroProdutos')
        const containerCadastro = document.getElementById('containerCadastro')
        document.getElementById('cadastroProduto').addEventListener('click', () =>{
            containerProdutos.style.display = "flex"
            containerCadastro.style.display = "none"
        })
    }
    return(
        <div className="containerCadastro" id="containerCadastro">
            <div className="cadastro">
                <div className="base">
                    <button className="opSair" id="opSair" onClick={sair}></button>
                </div>
                <div className="opcoes">
                    <span className="cadastro-opcao"
                    id="cadastroProduto" onClick={entrarProdutos}>
                        <img src={imgProdutos} alt="" />
                        <p>Produtos</p>
                    </span>
                    <span className="cadastro-opcao">
                        <img src={imgCadastro} alt="" />
                        <p>Clientes</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
