const clienteService = require("../Service/ClienteService");

async function listar(req, res) {
  try {
    const lista = await clienteService.listar();
    res.status(201).json(lista);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function deletar(req, res) {
  const id = req.params.id;
  try {
    const clienteDeletado = await clienteService.deletar(id);
    res.status(201).json(clienteDeletado);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function buscarId(req, res) {
  const id = req.params.id;
  try {
    const clienteBuscadoID = await clienteService.buscarId(id);
    res.status(201).json(clienteBuscadoID);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function inserir(req, res) {
  const cliente = req.body;
  try {
    const clienteInserido = await clienteService.inserir(cliente);
    res.status(201).json(clienteInserido);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

module.exports = { listar, deletar, buscarId, inserir };
