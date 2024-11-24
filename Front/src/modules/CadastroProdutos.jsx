import imgProdutos from "../assets/produtos.png"
import { sair } from "../functions/functions"





export default function CadastroProdutos(){
    // const cadastrado = () => {
    //     document.getElementById('cadastrarProduto').addEventListener('click', () => {
    //         document.getElementById('cadastrosDosProduto').style.display = "none"
    //         document.getElementById('containerCadastroProdutos').style.display = "none"
    //     })
    // }

    return(
        <div className="containerCadastro sairTelas" id="containerCadastroProdutos">
            <div className="cadastroProduto" id="cadastrosDosProduto">
                <div className="base">
                    <button className="opSair" id="opSairProduto" onClick={sair}></button>
                </div>

                <div className="logoProdutos">
                    <img src={imgProdutos} alt="" />
                    <p>Produtos</p>
                </div>
                <form action="" method="post">
                    <input type="text" name="nome" id="nome" placeholder="Nome"/>
                    
                    <label htmlFor="preco">
                        R$
                        <input type="number" name="preco" id="preco" placeholder="Preço"/>
                        <select name="categoria" id="categoria">
                            <option value="#">Categoria</option>
                            <option value="Rede">Rede</option>
                            <option value="Toca">Toca</option>
                                
                        </select>
                    </label>
                    
                </form>
                <button id="cadastrarProduto">Cadastrar</button>
            </div>
            {/* <div className="sucessoCadastro" id="sucessoCadastro">
                <p>Cadastrado com Sucesso</p>
            </div> */}
        </div>
       
    )

}