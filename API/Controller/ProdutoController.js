const ProdutoService = require("../Service/ProdutoService");

async function listar(req, res) {
  const produtos = await ProdutoService.listar();
  res.json(produtos);
}

async function inserir(req, res) {
  const produto = req.body;
  try {
    const produtoInserido = await ProdutoService.inserir(produto);
    res.status(201).json(produtoInserido);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function deletar(req, res) {
  const id = req.params.id;
  try {
    const produtoDeletado = await ProdutoService.deletar(id);
    res.status(201).json(produtoDeletado);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function buscarId(req, res) {
  const id = req.params.id;
  try {
    const produto = await ProdutoService.buscarIdProdutos(id);
    res.status(201).json(produto);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

module.exports = {
  listar,
  inserir,
  deletar,
  buscarId,
};
