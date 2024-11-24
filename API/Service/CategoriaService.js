const categoriaRepository = require("../Repository/CategoriaRepository");

async function listar() {
  return await categoriaRepository.listar();
}

async function deletar(id) {
  if (!id) {
    throw { id: 400, msg: "ID não selecionado" };
  }
  try {
    return categoriaRepository.deletar(id);
  } catch (err) {
    throw { id: 400, msg: "Categoria não encontrada" };
  }
}

async function buscarId(id) {
  if (!id) {
    throw { id: 400, msg: "ID não selecionado" };
  }
  try {
    return categoriaRepository.buscarId(id);
  } catch (err) {
    throw { id: 404, msg: "Categoria não encontrada" };
  }
}

async function inserir(categoria) {
  if (!categoria || !categoria.nome) {
    throw { id: 400, msg: "Dados da categoria não cadastrados." };
  }
  try {
    return await categoriaRepository.inserir(categoria);
  } catch (err) {
    throw { id: 404, msg: "Erro ao inserir" };
  }
}

module.exports = {
  listar,
  deletar,
  buscarId,
  inserir,
};
