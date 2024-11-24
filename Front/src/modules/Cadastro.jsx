import imgProdutos from "../assets/produtos.png"
import imgCadastro from "../assets/cadastro.png"
import { sair } from "../functions/functions"








export default function Cadastro(){
    const entrarProdutos = () => {
        const containerProdutos = document.getElementById('containerCadastroProdutos')
        const containerCadastro = document.getElementById('containerCadastro')
        const containerClientes = document.getElementById('containerCadastroClientes')
        const cadastroClientes = document.getElementById('cadastroClientesdiv')
        document.getElementById('cadastroProduto').addEventListener('click', () =>{
            containerCadastro.style.display = "none"
            containerClientes.style.display = "none"
            cadastroClientes.style.display = "none"
            containerProdutos.style.display = "flex"
            document.getElementById('cadastrosDosProduto').style.display = 'flex'
            document.getElementById('paginaEstoque').style.display = "none"
            document.getElementById('containerEstoque').style.display = "none"
        })
        document.getElementById('cadastroClientes').addEventListener('click', () => {
            containerProdutos.style.display = "none"
            containerCadastro.style.display = "none"
            containerClientes.style.display = "flex"
            cadastroClientes.style.display = "flex"
            document.getElementById('paginaEstoque').style.display = "none"
            document.getElementById('containerEstoque').style.display = "none"
        })
    }
    return(
        <div className="containerCadastro sairTelas" id="containerCadastro">
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
                    <span className="cadastro-opcao" id="cadastroClientes" onClick={entrarProdutos}>
                        <img src={imgCadastro} alt="" />
                        <p>Clientes</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
