const categoriaService = require("../Service/CategoriaService");

async function listar(req, res) {
  const categoriasListadas = await categoriaService.listar();
  res.json(categoriasListadas);
}

async function deletar(req, res) {
  const id = req.params.id;
  try {
    const categoriaDeletada = await categoriaService.deletar(id);
    res.json(categoriaDeletada);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function buscarId(req, res) {
  const id = req.params.id;
  try {
    const categoriaSelecionada = await categoriaService.buscarId(id);
    res.json(categoriaSelecionada);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function inserir(req, res) {
  const categoria = req.body;
  try {
    const categoriaInserida = await categoriaService.inserir(categoria);
    res.status(201).json(categoriaInserida);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

module.exports = {
  listar,
  deletar,
  buscarId,
  inserir,
};
