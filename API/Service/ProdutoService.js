const ProdutoRepository = require("../Repository/ProdutoRepository");

async function listar() {
  return await ProdutoRepository.listar();
}

async function inserir(produto) {
  if (!produto || !produto.nome || !produto.preco || !produto.conta) {
    throw { id: 400, msg: "Dados do produto incompletos!" };
  }
  if (produto.preco < 0) {
    throw { id: 400, msg: "Preço menor que zero!" };
  }
  try {
    if (produto) {
      return await ProdutoRepository.inserir(produto);
    }
  } catch (err) {
    throw { id: 400, msg: "Produto com dados incorreto" };
  }
}

async function deletar(id) {
  if (!id) {
    throw { id: 400, msg: "ID não selecionado" };
  }
  try {
    return await ProdutoRepository.deletar(id);
  } catch (err) {
    throw { id: 404, msg: "Nenhum produto cadastrado" };
  }
}

async function buscarIdProdutos(id) {
  if (!id) {
    throw { id: 400, msg: "ID não selecionado" };
  }
  try {
    return await ProdutoRepository.buscarIdProdutos(id);
  } catch (err) {
    throw { id: 400, msg: "id errado" };
  }
}

module.exports = {
  listar,
  inserir,
  deletar,
  buscarIdProdutos,
};
