import axios from 'axios';
import imgProdutos from "../assets/produtos.png"
import { sair } from "../functions/functions"

export default function CadastroProdutos() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const preco = parseFloat(document.getElementById('preco').value);
    const categoria = document.getElementById('categoria').value;

    try {
      const response = await axios.post('http://localhost:3000/api/produtos/', {"nome": nome,
        "preco": preco,
        "categoria": categoria,
        "conta": 1});

      console.log('Produto cadastrado com sucesso:', response.data);
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error);
    }
  };

  return (
    <div className="containerCadastro sairTelas" id="containerCadastroProdutos">
      <div className="cadastroProduto" id="cadastrosDosProduto">
        <div className="base">
          <button className="opSair" id="opSairProduto" onClick={sair}></button>
        </div>

        <div className="logoProdutos">
          <img src={imgProdutos} alt="" />
          <p>Produtos</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" id="nome" placeholder="Nome" />

          <label htmlFor="preco">
            R$
            <input type="number" name="preco" id="preco" placeholder="Preço" />
            <select name="categoria" id="categoria">
              <option value="#">Categoria</option>
              <option value="Rede">Rede</option>
              <option value="Toca">Toca</option>
            </select>
          </label>

          <button type="submit" id="cadastrarProduto">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
