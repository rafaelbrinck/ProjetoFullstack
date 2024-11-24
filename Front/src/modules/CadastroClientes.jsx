import { sair } from "../functions/functions";
import imgCliente from "../assets/cadastro.png"

export default function CadastroClientes(){
    return(
        <div className="containerClientes" id="containerCadastroClientes">
            <div className="cadastroClientes" id="cadastroClientesdiv">
                <div className="base">
                    <button className="opSair" id="opSairProduto" onClick={sair}></button>
                </div>
                <div className="logoProdutos ajusteLogoCliente">
                    <img src={imgCliente} alt="" />
                    <p>Clientes</p>
                </div>
                <form action="" className="formClientes">
                    <input type="text" name="nome" id="nomeCliente" placeholder="Nome"/>
                    <input type="tel" name="celular" id="celularCliente" placeholder="Telefone"/>
                    <label htmlFor="" className="endereco">
                        <input type="text" name="endereco" 
                        className="endereco" id="enderecoCliente" placeholder="Endereco"/>
                        <input type="text" name="num" id="numEndereco" placeholder="Nº"/>
                        <input type="text" name="complemento" id="complementoEndereco" placeholder="Comp"/>
                    </label>
                    <label htmlFor="cidade" className="cidade">
                        <input type="text" name="cidade" id="cidadeCliente" placeholder="Cidade"/>
                        <input type="text" name="uf" id="ufCliente" placeholder="UF"/>
                    </label>
                </form>
                <button className="cadastrar" id="cadastrarProduto">Cadastrar</button>
            </div>
        </div>

    )
}