const usuarioRepository = require("../Repository/UsuarioRepository");

async function listar() {
  return await usuarioRepository.listar();
}

async function inserir(user) {
  try {
    if (!user || !user.usuario || !user.senha) {
      throw { id: 400, msg: "Usuario com dados incompletos" };
    }
    if (user && user.usuario && user.senha) {
      return await usuarioRepository.inserir(user);
    }
  } catch (err) {
    throw { id: 400, msg: "Adicione os dados obrigatórios" };
  }
}

async function deletar(user) {
  try {
    if (user && user.id) {
      return await usuarioRepository.deletar(user);
    }
  } catch (err) {
    throw { id: 400, msg: "Adicione os dados obrigatórios" };
  }
}

async function buscarIdUsuarios(id) {
  try {
    const usuarioBuscado = await usuarioRepository.buscarIdUsuarios(id);
    if (usuarioBuscado == false) {
      throw { id: 404, msg: "ID de usuario não cadastrado!" };
    }
    return usuarioBuscado;
  } catch (err) {
    throw { id: 400, msg: "Adicione os dados obrigatórios" };
  }
}

module.exports = {
  listar,
  inserir,
  deletar,
  buscarIdUsuarios,
};
