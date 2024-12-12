const clienteRepository = require("../Repository/ClienteRepository");

async function listar() {
  try {
    return await clienteRepository.listar();
  } catch {
    throw { id: 404, msg: "Problema no service" };
  }
}

async function buscarId(id) {
  if (!id) {
    throw { id: 400, msg: "ID não inserido" };
  }
  try {
    return await clienteRepository.buscarId(id);
  } catch (err) {
    throw { id: 404, msg: "ID não cadastrado" };
  }
}

async function deletar(id) {
  if (!id) {
    throw { id: 400, msg: "ID não inserido" };
  }
  try {
    return await clienteRepository.deletar(id);
  } catch (err) {
    throw { id: 404, msg: "ID de cliente não cadastrado" };
  }
}

async function inserir(cliente) {
  if (!cliente) {
    throw { id: 400, msg: "Cliente com dados vazios" };
  }
  if (!cliente.nome || !cliente.conta) {
    throw { id: 400, msg: "Dados obrigatórios não inseridos" };
  }
  try {
    return await clienteRepository.inserir(cliente);
  } catch (err) {
    throw { id: 404, msg: "Inclusão recusada!" };
  }
}

module.exports = {
  listar,
  buscarId,
  deletar,
  inserir,
};
