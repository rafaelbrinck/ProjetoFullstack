const vendasRepository = require("../Repository/VendasRepository");

async function listar() {
  return await vendasRepository.listar();
}

async function buscarId(id) {
  if (!id) {
    throw { id: 400, msg: "ID não colocado" };
  }
  try {
    return await vendasRepository.buscarId(id);
  } catch (err) {
    throw { id: 404, msg: "Não existe nenhum dado com esse ID" };
  }
}

async function deletar(id) {
  if (!id) {
    throw { id: 400, msg: "ID não selecionado" };
  }
  try {
    return await vendasRepository.deletar(id);
  } catch (err) {
    throw { id: 404, msg: "Nenhum produto cadastrado" };
  }
}

async function inserir(venda) {
  if (
    !venda ||
    !venda.usuario ||
    !venda.cliente ||
    !venda.produtos ||
    !venda.valor
  ) {
    throw { id: 400, msg: "Dados da venda incompletos!" };
  }
  if (venda.valor < 0) {
    throw { id: 400, msg: "Não é permitido valor menor que zero!" };
  }
  try {
    if (venda) {
      return await vendasRepository.inserir(venda);
    }
  } catch (err) {
    throw { id: 400, msg: "Venda com dados incorretos" };
  }
}

module.exports = { listar, buscarId, deletar, inserir };
