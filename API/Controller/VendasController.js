const vendasService = require("../Service/VendasService");

async function listar(req, res) {
  const vendas = await vendasService.listar();
  res.json(vendas);
}

async function buscarId(req, res) {
  const id = req.params.id;
  try {
    const venda = await vendasService.buscarId(id);
    res.status(201).json(venda);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function deletar(req, res) {
  const id = req.params.id;
  try {
    const vendaDeletada = await vendasService.deletar(id);
    res.status(201).json(vendaDeletada);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function inserir(req, res) {
  const venda = req.body;
  try {
    const vendaInserida = await vendasService.inserir(venda);
    res.status(201).json(vendaInserida);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

module.exports = { listar, buscarId, deletar, inserir };
