const usuarioService = require("../Service//UsuarioService");

async function listar(req, res) {
  const usuarios = await usuarioService.listar();
  res.json(usuarios);
}

async function inserir(req, res) {
  const user = req.body;
  try {
    const userInserido = await usuarioService.inserir(user);
    res.status(201).json(userInserido);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function deletar(req, res) {
  const user = req.body;
  try {
    const userDeletado = await usuarioService.deletar(user);
    res.status(201).json(userDeletado);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

async function buscarIdUsuarios(req, res) {
  const id = req.params.id;
  try {
    const userColetadoId = await usuarioService.buscarIdUsuarios(id);
    res.status(201).json(userColetadoId);
  } catch (err) {
    res.status(err.id).json(err);
  }
}

module.exports = {
  listar,
  inserir,
  deletar,
  buscarIdUsuarios,
};
