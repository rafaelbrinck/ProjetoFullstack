import axios from 'axios';
import imgCliente from "../assets/cadastro.png";
import { sair } from "../functions/functions";

export default function CadastroClientes() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nomeCliente').value;
    const contato = document.getElementById('celularCliente').value;
    const endereco = document.getElementById('enderecoCliente').value;
    const numero = document.getElementById('numEndereco').value;
    const complemento = document.getElementById('complementoEndereco').value;
    const cidade = document.getElementById('cidadeCliente').value;
    const uf = document.getElementById('ufCliente').value;

    const enderecoCompleto = `${endereco} - ${numero} / ${complemento}`;

    try {
      const response = await axios.post('http://localhost:3000/api/clientes/', {
        nome,
        contato,
        endereco: enderecoCompleto,
        conta: 1, // Assuming this is a required field
        cep: 0, // Assuming this is a required field (update if needed)
        cidade,
        uf,
      });

      console.log('Cliente cadastrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error);
    }
  };

  return (
    <div className="containerClientes" id="containerCadastroClientes">
      <div className="cadastroClientes" id="cadastroClientesdiv">
        <div className="base">
          <button className="opSair" id="opSairProduto" onClick={sair}></button>
        </div>
        <div className="logoProdutos ajusteLogoCliente">
          <img src={imgCliente} alt="" />
          <p>Clientes</p>
        </div>
        <form onSubmit={handleSubmit} className="formClientes">
          <input type="text" name="nome" id="nomeCliente" placeholder="Nome" />
          <input type="tel" name="celular" id="celularCliente" placeholder="Telefone" />
          <label htmlFor="" className="endereco">
            <input type="text" name="endereco" id="enderecoCliente" placeholder="Endereço" />
            <input type="text" name="num" id="numEndereco" placeholder="Nº" />
            <input type="text" name="complemento" id="complementoEndereco" placeholder="Comp" />
          </label>
          <label htmlFor="cidade" className="cidade">
            <input type="text" name="cidade" id="cidadeCliente" placeholder="Cidade" />
            <input type="text" name="uf" id="ufCliente" placeholder="UF" />
          </label>
          <button className="cadastrar" id="cadastrarProduto">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}